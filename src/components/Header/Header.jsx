import css from './Header.module.scss';

export const Header = () => {
  return (
    <ul className={css.list}>
      <li>
        <button>Home</button>
      </li>
      <li>
        <button>Movies</button>
      </li>
    </ul>
  );
};
