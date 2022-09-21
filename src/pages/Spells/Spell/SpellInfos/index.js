import Cast from '../../../../assets/icons/cast.png';
import Duration from '../../../../assets/icons/duration.png';
import Range from '../../../../assets/icons/range.png';
import { SpellInfosWrapper } from './styles';

export default function SpellInfos({ spell }) {
  return (
    <SpellInfosWrapper>
      <span className="card">
        <img src={Cast} alt="Alcance" />
        {spell.casting.time}
        &nbsp;{spell.casting.unit}
      </span>
      <span className="card">
        <img src={Range} alt="Alcance" />
        {spell.range.value}
        &nbsp;{spell.range.unit}
      </span>
      <span className="card">
        <img src={Duration} alt="Duração" />
        {spell.duration.value != 0 && spell.duration.value}
        &nbsp;{spell.duration.unit}
      </span>
    </SpellInfosWrapper>
  );
}
