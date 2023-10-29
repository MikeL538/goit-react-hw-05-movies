// eslint-disable-next-line
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Header } from './Header/Header';
import css from './App.module.scss';

const Home = lazy(() =>
  import('./Home/Home').then(module => ({ default: module.Home }))
);
const Favourites = lazy(() =>
  import('./Future/Favourites/Favourites').then(module => ({
    default: module.Favourites,
  }))
);
const Movie = lazy(() =>
  import('./Movie/Movie').then(module => ({ default: module.Movie }))
);
const Categories = lazy(() =>
  import('./Future/Categories/Categories').then(module => ({
    default: module.Categories,
  }))
);
const Search = lazy(() =>
  import('./Search/Search').then(module => ({ default: module.Search }))
);
const NotFound = lazy(() =>
  import('./NotFound/NotFound').then(module => ({ default: module.NotFound }))
);

export const App = () => {
  return (
    <>
      <div className={css.appContainer}>
        <Header />
        <div className={css.container}>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favourites" element={<Favourites />} />
              <Route path="/movie/:movieId/*" element={<Movie />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/search" element={<Search />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </>
  );
};
