import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import css from './Home.module.scss';
import { GithubIcon } from './Icons/GithubIcon';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const apiKey = 'd8ea0ad05a6720116583e1a3262a0452';
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

  const fetchPopular = async () => {
    try {
      const response = await axios.get(url);
      setMovies(response.data.results);
    } catch (error) {
      console.error('Błąd: ' + error);
    }
  };

  useEffect(() => {
    fetchPopular();
  });

  return (
    <>
      <div className={css.container}>
        <h1>Top 20 Trending Movies</h1>
        <ol>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/film/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ol>
      </div>
      <footer>
        {/* eslint-disable-next-line */}
        <a href="https://github.com/MikeL538" target="_blank">
          <GithubIcon />
        </a>
      </footer>
    </>
  );
};
