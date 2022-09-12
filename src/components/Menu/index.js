import { Link } from 'react-router-dom';
import { MenuWrapper } from './styles';

import Logo from '../../assets/logo.png';

export default function Menu() {
  return (
    <MenuWrapper>
      <Link to="/">
        <img src={Logo} alt="Dragão Caolho" />
      </Link>
      <nav>
        <Link to="/spells">Magias</Link>
      </nav>
    </MenuWrapper>
  );
}
