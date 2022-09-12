import { SpellWrapper } from './styles';
import SpellHeader from './SpellHeader';
import SpellInfos from './SpellInfos';
import SpellBody from './SpellBody';

export default function Spell({ spell }) {
  return (
    <SpellWrapper>
      <SpellHeader spell={spell} />

      <SpellInfos spell={spell} />

      <SpellBody spellBody={spell.body} />
    </SpellWrapper>
  );
}
