// eslint-disable-next-line
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';
import { Home } from './Home/Home';
import { Film } from './Film/Film';
import { Favourites } from './Favourites/Favourites';
import { NotFound } from './NotFound/NotFound';
import css from './App.module.scss';

export const App = () => {
  return (
    <>
      <Header />
      <div className={css.container}>
        <Routes>
          <Route path="/trending" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/film/:movieId/*" element={<Film />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};
