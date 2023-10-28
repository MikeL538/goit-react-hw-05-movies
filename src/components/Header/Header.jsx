import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import css from './Header.module.scss';

const StyledLink = styled(NavLink)`
  color: #2c93cf;

  &.active {
    color: #d1dddb;
  }
`;
const input = document.getElementById('searchInput');

export const Header = () => {
  const hadnleSearch = e => {
    e.preventDefault();
    input.value = '';
  };

  return (
    <nav>
      <ul className={css.list}>
        <li>
          <StyledLink to="/trending">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/favourites">Favourites</StyledLink>
        </li>
        <li>
          <StyledLink to="/categories">Categories</StyledLink>
        </li>
      </ul>
      <form onSubmit={hadnleSearch}>
        <input
          id="searchInput"
          type="text"
          placeholder="Search, not implemented"
        />
        <button>Search</button>
      </form>
    </nav>
  );
};
