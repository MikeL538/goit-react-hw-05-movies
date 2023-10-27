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
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/movies">Movies</StyledLink>
        </li>
        {/* <li>
          <StyledLink to="/film">Film</StyledLink>
        </li> */}
      </ul>
    </nav>
  );
};
