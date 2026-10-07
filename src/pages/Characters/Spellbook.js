import { useState } from 'react';
import { Link } from 'react-router-dom';
import SpellList from '../Spells/spells';
import { normalizeText, slugify } from '../../utils/spellUtils';
import OpenGrimoireIcon from '../../assets/icons/openGrimoire.png';
import { Panel } from './styles';

export default function Spellbook({ character, onUpdate }) {
  const [search, setSearch] = useState('');
  const query = normalizeText(search);
  const entries = Array.isArray(character.spells) ? character.spells : [];
  const knownNames = new Set(entries.map(entry => entry.spellName));
  const classNames = [character.className, character.subclass].map(normalizeText).filter(Boolean);

  const suggestions = query
    ? SpellList.filter(spell => {
      const matchesCharacter = spell.classes.some(value => classNames.includes(normalizeText(value)));
      const matchesSearch = normalizeText(`${spell.name} ${spell.originalName}`).includes(query);
      return matchesCharacter && matchesSearch && !knownNames.has(spell.name);
    }).slice(0, 8)
    : [];

  function addSpell(spell) {
    onUpdate(character.id, current => ({
      ...current,
      spells: [...current.spells, { spellName: spell.name, status: 'known' }],
    }));
    setSearch('');
  }

  function setSpellStatus(spellName, status) {
    onUpdate(character.id, current => ({
      ...current,
      spells: current.spells.map(entry => entry.spellName === spellName ? { ...entry, status } : entry),
    }));
  }

  function removeSpell(spellName) {
    onUpdate(character.id, current => ({
      ...current,
      spells: current.spells.filter(entry => entry.spellName !== spellName),
    }));
  }

  const preparedCount = entries.filter(entry => entry.status === 'prepared').length;

  return (
    <Panel>
      <div className="panelHeading">
        <div>
          <span className="eyebrow">GRIMÓRIO PESSOAL</span>
          <h2>Magias</h2>
        </div>
        <div className="spellbookHeadingActions">
          <span className="countBadge">{entries.length} conhecidas · {preparedCount} preparadas</span>
          <Link
            className="openGrimoireButton"
            to={`/spells?view=grimoire&characterId=${encodeURIComponent(character.id)}`}
            aria-label={`Abrir grimório de ${character.name || 'personagem sem nome'}`}
            title={`Abrir grimório de ${character.name || 'personagem sem nome'}`}
          >
            <img src={OpenGrimoireIcon} alt="" />
          </Link>
        </div>
      </div>

      <label className="searchLabel">
        Adicionar magia por nome
        <input type="search" value={search} onChange={event => setSearch(event.target.value)} placeholder="Digite em português ou inglês" />
      </label>
      {query && suggestions.length === 0 && (
        <p className="muted">Nenhuma magia desta classe corresponde. Tente outro nome ou classe.</p>
      )}
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map(spell => (
            <li key={spell.name}>
              <span>{spell.name} <small>{spell.type}</small></span>
              <button type="button" onClick={() => addSpell(spell)} aria-label={`Adicionar ${spell.name} ao grimório`}>Adicionar</button>
            </li>
          ))}
        </ul>
      )}

      <div className="spellEntries">
        {entries.length === 0
          ? <p className="emptyMessage">Seu grimório pessoal ainda está vazio.</p>
          : entries.map(entry => {
            const spell = SpellList.find(candidate => candidate.name === entry.spellName);
            return (
              <div className="spellEntry" key={entry.spellName}>
                <div className="spellEntryName">
                  {spell
                    ? <Link to={`/spells/${slugify(spell.name)}`}>{spell.name}</Link>
                    : <span>{entry.spellName}</span>
                  }
                  {spell && <small>{spell.type}</small>}
                </div>
                <select
                  value={entry.status === 'prepared' ? 'prepared' : 'known'}
                  onChange={event => setSpellStatus(entry.spellName, event.target.value)}
                  aria-label={`Estado de ${entry.spellName}`}
                >
                  <option value="known">Conhecida</option>
                  <option value="prepared">Preparada</option>
                </select>
                <button type="button" className="removeButton" onClick={() => removeSpell(entry.spellName)} aria-label={`Remover ${entry.spellName} do grimório`}>×</button>
              </div>
            );
          })
        }
      </div>
    </Panel>
  );
}
