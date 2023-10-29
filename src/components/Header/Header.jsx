import { NavLink, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import styled from 'styled-components';
import css from './Header.module.scss';

const StyledLink = styled(NavLink)`
  color: red;

  &.active {
    color: #feb75d;
  }
`;

export const Header = ({ resetCurrentPage }) => {
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleSearch = e => {
    e.preventDefault();
    const query = inputRef.current.value;

    if (query) {
      navigate(`/Search?query=${query}`);
      resetCurrentPage();
    }

    inputRef.current.value = '';
  };

  return (
    <nav>
      <ul className={css.list}>
        <li>
          <StyledLink to="/home">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/favourites">Favourites</StyledLink>
        </li>
        <li>
          <StyledLink to="/categories">Categories</StyledLink>
        </li>
      </ul>
      <form onSubmit={handleSearch}>
        <input
          ref={inputRef}
          id="searchInput"
          type="text"
          placeholder="Search"
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};
