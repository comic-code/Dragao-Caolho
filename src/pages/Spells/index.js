import { useContext, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import { GlobalContext } from '../../contexts/Global';
import Spell from './Spell';
import SpellList from './spells';
import { Grimoire, SpellContextBar, SpellControls, SpellsContainer } from './styled';
import GrimoireIcon from '../../assets/icons/favorite.png';
import OpenGrimoireIcon from '../../assets/icons/openGrimoire.png';
import SkullIcon from '../../assets/icons/skull.png';
import SpellFilters from './SpellFilters';
import SpellsQuestions from './Spell/SpellsQuestions';
import { EMPTY_SPELL_FILTERS, filterSpells, hasActiveSpellFilters } from '../../utils/spellUtils';

export default function Spells() {
  const [filters, setFilters] = useState({ ...EMPTY_SPELL_FILTERS });
  const [justSavedSpells, setJustSavedSpells] = useState(false);
  const { savedSpells, characters, activeCharacterId, setActiveCharacterId } = useContext(GlobalContext);
  const activeCharacter = characters.find(character => character.id === activeCharacterId) || characters[0] || null;
  const spellSource = justSavedSpells ? savedSpells : SpellList;
  const visibleSpells = useMemo(() => filterSpells(spellSource, filters), [spellSource, filters]);
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
          <span className="resultCount" role="status">{visibleSpells.length} {visibleSpells.length === 1 ? 'magia' : 'magias'}{justSavedSpells ? ' salvas' : ' encontradas'}</span>
        </SpellContextBar>
      </SpellControls>

      {justSavedSpells && savedSpells.length === 0
        ? renderEmpty('Sem magias salvas')
        : visibleSpells.length > 0
          ? visibleSpells.map(spell => <Spell key={spell.name} spell={spell} />)
          : renderEmpty(hasFilters
            ? (justSavedSpells ? 'Nenhuma magia salva combina com os filtros' : 'Magia não encontrada')
            : 'Sem magias para mostrar')
      }

      <Grimoire
        type="button"
        className="animationUp"
        onClick={() => setJustSavedSpells(current => !current)}
        aria-label={justSavedSpells ? 'Mostrar todas as magias' : 'Mostrar magias salvas'}
        aria-pressed={justSavedSpells}
      >
        <img src={justSavedSpells ? OpenGrimoireIcon : GrimoireIcon} alt="" />
      </Grimoire>
    </SpellsContainer>
  );
}
