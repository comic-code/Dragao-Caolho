import { useContext, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import { GlobalContext } from '../../contexts/Global';
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
  const activeCharacter = characters.find(character => character.id === activeCharacterId) || characters[0] || null;
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
