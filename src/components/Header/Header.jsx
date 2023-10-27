import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import css from './Header.module.scss';

const StyledLink = styled(NavLink)`
  color: #2c93cf;

  &.active {
    color: #d1dddb;
  }
`;
export const Header = () => {
  return (
    <nav>
      <ul className={css.list}>
        <li>
          <StyledLink to="/trending">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/favourites">Favourites</StyledLink>
        </li>
      </ul>
    </nav>
  );
};
