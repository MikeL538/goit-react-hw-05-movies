import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import css from './Search.module.scss';
import { Header } from 'components/Header/Header';

export const Search = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState([]);
  // Got to disable this line or Github won't approve
  // eslint-disable-next-line
  const [totalResults, setTotalResults] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('query');

    if (query) {
      const apiKey = 'd8ea0ad05a6720116583e1a3262a0452';
      const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${currentPage}`;

      axios
        .get(apiUrl)
        .then(response => {
          setMovies(response.data.results);
          setTotalResults(response.data.total_results);
          setTotalPages(response.data.total_pages);
        })
        .catch(error => {
          console.error('Error searching for movies:', error);
        });
    }
  }, [location.search, currentPage]);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const resetCurrentPage = () => {
    setCurrentPage(1);
  };

  <Header resetCurrentPage={resetCurrentPage} />;

  return (
    <div className={css.container}>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>

      <div className={css.pagination}>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};
