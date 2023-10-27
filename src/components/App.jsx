// eslint-disable-next-line
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';
import { Home } from './Home/Home';
import { Film } from './Film/Film';
import { Movies } from './Movies/Movies';
import { NotFound } from './NotFound/NotFound';
import css from './App.module.scss';

export const App = () => {
  return (
    <>
      <Header />
      <div className={css.container}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/film" element={<Film />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};
