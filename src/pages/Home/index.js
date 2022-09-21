import { HomeWrapper } from './styles';

import Separator from '../../assets/separator.png';

export default function Home() {
  return (
    <HomeWrapper>
      <img src={Separator} alt="_____" />
      <h3>Olá Viajante!</h3>
      <img src={Separator} alt="_____" />
    </HomeWrapper>
  );
}
