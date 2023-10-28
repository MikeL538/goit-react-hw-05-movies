import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import css from './Home.module.scss';
import { GithubIcon } from './Icons/GithubIcon';
import { Linkedin } from './Icons/Linkedin';
import { Mail } from './Icons/Mail';

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
    // Got to disable this line or Github won't approve
    // eslint-disable-next-line
  }, []);

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

        <footer>
          <ul>
            <li>
              <a
                href="https://github.com/MikeL538"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon />
              </a>
            </li>
            <li>
              <a
                className={css.portfolio}
                href="https://mikel538.github.io/Mikel-Portfolio/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="https://github.com/MikeL538"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </a>
            </li>
            <li>
              <a
                href="mailto:mikel538.work@gmail.com"
                rel="noopener noreferrer"
              >
                <Mail />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};
