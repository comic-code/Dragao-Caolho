import Spell from '../../components/Spell';
import SpellList from './spells.json';
import { SpellsContainer } from './styled';

export default function Spells() {
  return (
    <SpellsContainer>
      {SpellList.map(spell => (
        <Spell key={spell.name} spell={spell} />
      ))}
    </SpellsContainer>
  );
}
