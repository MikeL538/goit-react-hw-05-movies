import { NavLink } from 'react-router-dom';
import { useRef } from 'react';
import styled from 'styled-components';
import css from './Header.module.scss';

const StyledLink = styled(NavLink)`
  color: red;

  &.active {
    color: #feb75d;
  }
`;

export const Header = () => {
  const inputRef = useRef(null);

  const hadnleSearch = e => {
    e.preventDefault();
    inputRef.current.value = '';
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
          ref={inputRef}
          id="searchInput"
          type="text"
          placeholder="Search, not implemented"
        />
        <button>Search</button>
      </form>
    </nav>
  );
};
