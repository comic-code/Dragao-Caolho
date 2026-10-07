import { useContext, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { GlobalContext } from '../../contexts/Global';
import CharacterClassIcon from '../../components/CharacterClassIcon';
import Spell from './Spell';
import SpellList from './spells';
import { SpellContextBar, SpellControls, SpellsContainer } from './styled';
import SkullIcon from '../../assets/icons/skull.png';
import SpellFilters from './SpellFilters';
import SpellsQuestions from './Spell/SpellsQuestions';
import { EMPTY_SPELL_FILTERS, filterSpells, hasActiveSpellFilters } from '../../utils/spellUtils';

export default function Spells() {
  const [filters, setFilters] = useState({ ...EMPTY_SPELL_FILTERS });
  const { characters, activeCharacterId, setActiveCharacterId } = useContext(GlobalContext);
  const [searchParams] = useSearchParams();
  const isGrimoireView = searchParams.get('view') === 'grimoire';
  const grimoireCharacterId = searchParams.get('characterId');
  const grimoireCharacter = isGrimoireView
    ? characters.find(character => character.id === grimoireCharacterId) || null
    : null;
  const activeCharacter = characters.find(character => character.id === activeCharacterId) || characters[0] || null;
  const grimoireEntries = useMemo(() => {
    if (!grimoireCharacter) return [];
    const entries = Array.isArray(grimoireCharacter.spells) ? grimoireCharacter.spells : [];
    return entries.map(entry => ({
      entry,
      spell: SpellList.find(candidate => candidate.name === entry.spellName) || null,
    }));
  }, [grimoireCharacter]);
  const knownEntries = grimoireEntries.filter(({ spell }) => spell);
  const unavailableEntries = grimoireEntries.filter(({ spell }) => !spell);
  const preparedCount = knownEntries.filter(({ entry }) => entry.status === 'prepared').length;
  const visibleSpells = useMemo(() => filterSpells(SpellList, filters), [filters]);
  const hasFilters = hasActiveSpellFilters(filters);

  function updateFilter(field, value) {
    setFilters(current => ({ ...current, [field]: value }));
  }

  function renderEmpty(message) {
    return (
      <span className="noSpells" role="status">
        <img src={SkullIcon} alt="" />
        {message}
        <img src={SkullIcon} alt="" />
      </span>
    );
  }

  function renderGrimoire() {
    if (!grimoireCharacter) {
      return (
        <SpellsContainer>
          <SpellControls>
            <SpellContextBar className="grimoireView">
              <div className="grimoireIdentity">
                <div>
                  <span className="eyebrow">GRIMÓRIO PESSOAL</span>
                  <h1>Personagem não encontrado</h1>
                  <p>Este personagem não está salvo neste navegador.</p>
                </div>
              </div>
              <Link className="catalogBackLink" to="/characters">Voltar para personagens</Link>
            </SpellContextBar>
          </SpellControls>
        </SpellsContainer>
      );
    }

    const characterName = grimoireCharacter.name || 'Personagem sem nome';
    const savedSpellCount = Array.isArray(grimoireCharacter.spells) ? grimoireCharacter.spells.length : 0;
    const knownCountLabel = `${knownEntries.length} ${knownEntries.length === 1 ? 'magia' : 'magias'}`;
    const preparedCountLabel = `${preparedCount} ${preparedCount === 1 ? 'preparada' : 'preparadas'}`;

    return (
      <SpellsContainer>
        <SpellControls>
          <SpellContextBar className="grimoireView" aria-label={`Grimório pessoal de ${characterName}`}>
            <div className="grimoireIdentity">
              <CharacterClassIcon characterClass={grimoireCharacter.className} size="3.5rem" />
              <div>
                <span className="eyebrow">GRIMÓRIO PESSOAL</span>
                <h1>Grimório de {characterName}</h1>
                <p>{knownCountLabel} · {preparedCountLabel}</p>
              </div>
            </div>
            <Link className="catalogBackLink" to="/spells">Voltar ao catálogo de magias</Link>
          </SpellContextBar>
        </SpellControls>

        {knownEntries.length > 0
          ? knownEntries.map(({ spell }) => <Spell key={spell.name} spell={spell} characterId={grimoireCharacter.id} />)
          : renderEmpty(savedSpellCount === 0
            ? `O grimório de ${characterName} está vazio.`
            : 'Nenhuma magia desse grimório está no catálogo atual.')
        }
        {savedSpellCount === 0 && (
          <Link className="emptyGrimoireLink" to="/spells">Adicionar magias do catálogo</Link>
        )}
        {unavailableEntries.length > 0 && (
          <p className="unavailableSpellNote" role="status">
            Magias fora do catálogo atual: {unavailableEntries.map(({ entry }) => entry.spellName).join(', ')}. Continuam salvas na ficha.
          </p>
        )}
      </SpellsContainer>
    );
  }

  if (isGrimoireView) return renderGrimoire();

  return (
    <SpellsContainer>
      <SpellControls>
        <SpellsQuestions />
        <SpellFilters filters={filters} onChange={updateFilter} onClear={() => setFilters({ ...EMPTY_SPELL_FILTERS })} />
        <SpellContextBar>
          {characters.length > 0
            ? (
              <label>
                Grimório ativo
                <select value={activeCharacter?.id || ''} onChange={event => setActiveCharacterId(event.target.value)}>
                  {characters.map(character => <option key={character.id} value={character.id}>{character.name || 'Sem nome'}</option>)}
                </select>
              </label>
            )
            : <p>Crie um personagem para salvar magias no grimório. <Link to="/characters">Criar personagem</Link></p>
          }
          <span className="resultCount" role="status">{visibleSpells.length} {visibleSpells.length === 1 ? 'magia encontrada' : 'magias encontradas'}</span>
        </SpellContextBar>
      </SpellControls>

      {visibleSpells.length > 0
        ? visibleSpells.map(spell => <Spell key={spell.name} spell={spell} />)
        : renderEmpty(hasFilters ? 'Magia não encontrada' : 'Sem magias para mostrar')
      }
    </SpellsContainer>
  );
}
