// eslint-disable-next-line
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';
import { Home } from './Home/Home';
import { Film } from './Film/Film';
import { Favourites } from './Future/Favourites/Favourites';
import { NotFound } from './NotFound/NotFound';
import css from './App.module.scss';
import { Categories } from './Future/Categories/Categories';

export const App = () => {
  return (
    <>
      <div className={css.appContainer}>
        <Header />
        <div className={css.container}>
          <Routes>
            <Route path="/trending" element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/film/:movieId/*" element={<Film />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
