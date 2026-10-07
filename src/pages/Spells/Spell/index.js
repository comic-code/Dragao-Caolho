import { SpellWrapper } from './styles';
import SpellHeader from './SpellHeader';
import SpellInfos from './SpellInfos';
import SpellBody from './SpellBody';

export default function Spell({ spell, characterId, detail = false }) {
  return (
    <SpellWrapper className={`animationShow${detail ? ' spellDetail' : ''}`}>
      <span className="mark" />
      <SpellHeader spell={spell} characterId={characterId} />
      <SpellInfos spell={spell} />
      <SpellBody spellBody={spell.body} />
    </SpellWrapper>
  );
}
