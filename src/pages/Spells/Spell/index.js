import { SpellWrapper } from './styles';
import SpellHeader from './SpellHeader';
import SpellInfos from './SpellInfos';
import SpellBody from './SpellBody';

export default function Spell({ spell }) {
  return (
    <SpellWrapper className="animationShow">
      <SpellHeader spell={spell} />

      <SpellInfos spell={spell} />

      <SpellBody spellBody={spell.body} />

      <span className="page">Pg {spell.font.page}</span>
    </SpellWrapper>
  );
}
