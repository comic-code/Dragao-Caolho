import styled from 'styled-components';

import BardIcon from '../../assets/classes/bard.svg';
import WarlockIcon from '../../assets/classes/warlock.svg';
import ClericIcon from '../../assets/classes/cleric.svg';
import DruidIcon from '../../assets/classes/druid.svg';
import SorcererIcon from '../../assets/classes/sorcerer.svg';
import WizardIcon from '../../assets/classes/wizard.svg';
import PaladinIcon from '../../assets/classes/paladin.svg';
import RangerIcon from '../../assets/classes/ranger.svg';
import ArtificerIcon from '../../assets/classes/artificer.svg';
import BarbarianIcon from '../../assets/classes/barbarian.svg';
import FighterIcon from '../../assets/classes/fighter.svg';
import MonkIcon from '../../assets/classes/monk.svg';
import RogueIcon from '../../assets/classes/rogue.svg';

const CLASS_ICONS = {
  artifice: ArtificerIcon,
  barbaro: BarbarianIcon,
  bardo: BardIcon,
  bruxo: WarlockIcon,
  clerigo: ClericIcon,
  druida: DruidIcon,
  feiticeiro: SorcererIcon,
  guerreiro: FighterIcon,
  ladino: RogueIcon,
  mago: WizardIcon,
  monge: MonkIcon,
  paladino: PaladinIcon,
  patrulheiro: RangerIcon,
};

function normalizeClassName(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toLowerCase();
}

const IconFrame = styled.span`
  width: ${props => props.$size};
  height: ${props => props.$size};
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  border: 1px solid rgba(46, 56, 78, 0.28);
  border-radius: 50%;
  background: #eee4d2;

  img {
    display: block;
    width: 72%;
    height: 72%;
    object-fit: contain;
  }
`;

export default function CharacterClassIcon({ characterClass, size = '3rem' }) {
  const normalizedClass = normalizeClassName(characterClass);
  const icon = CLASS_ICONS[normalizedClass];

  if (!icon) return null;

  return (
    <IconFrame
      $size={size}
      data-character-class={normalizedClass}
      aria-hidden="true"
    >
      <img src={icon} alt="" />
    </IconFrame>
  );
}
