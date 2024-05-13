import { useState, useContext } from 'react';

import { GlobalContext } from '../../contexts/Global';
import Spell from './Spell';
import SpellList from './spells';
import { Grimoire, SpellsContainer } from './styled';
import GrimoireIcon from '../../assets/icons/favorite.png';
import SkullIcon from '../../assets/icons/skull.png';
import OpenGrimoireIcon from '../../assets/icons/openGrimoire.png';
import SpellFilters from './SpellFilters';

export default function Spells() {
  const [filteredSpells, setFilteredSpells] = useState([]);
  const [justSavedSpells, setJustSavedSpells] = useState(false);
  const { savedSpells, isFilteringSpells } = useContext(GlobalContext);
  return (
    <SpellsContainer>
      <SpellFilters setFilteredSpells={setFilteredSpells} spellList={SpellList} 
        justSavedSpells={justSavedSpells} savedSpells={savedSpells} />

      {justSavedSpells ? (
        savedSpells.length > 0 ? filteredSpells.length > 0 
          ? filteredSpells.map(spell => <Spell key={spell.name} spell={spell} />)
          : savedSpells.map(spell => <Spell key={spell.name} spell={spell} />)
         : (
          <span className="noSpells">
            <img src={SkullIcon} alt="_blank" />
            Sem Magias salvas
            <img src={SkullIcon} alt="_blank" />
          </span>
        )
      ) : filteredSpells.length > 0 
          ? filteredSpells.map(spell => <Spell key={spell.name} spell={spell} />)
          : isFilteringSpells ? 
            (
              <span className="noSpells">
                <img src={SkullIcon} alt="_blank" />
                Magia Não Encontrada
                <img src={SkullIcon} alt="_blank" />
              </span>
            )
          : SpellList.map(spell => <Spell key={spell.name} spell={spell} />)
      }

      <Grimoire
        className="animationUp"
        src={justSavedSpells ? OpenGrimoireIcon : GrimoireIcon}
        onClick={() => setJustSavedSpells(!justSavedSpells)}
      />
    </SpellsContainer>
  );
}
