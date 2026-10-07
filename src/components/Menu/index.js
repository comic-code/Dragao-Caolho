import { Link, NavLink } from 'react-router-dom';
import { MenuWrapper } from './styles';

import Logo from '../../assets/logo.png';

export default function Menu() {
  return (
    <MenuWrapper>
      <Link className="brand" to="/" aria-label="Dragão Caolho — início">
        <img src={Logo} alt="Dragão Caolho" />
      </Link>
      <nav aria-label="Navegação principal">
        <NavLink to="/spells">Magias</NavLink>
        <NavLink to="/characters">Personagens</NavLink>
        <NavLink to="/items">Itens</NavLink>
      </nav>
    </MenuWrapper>
  );
}
