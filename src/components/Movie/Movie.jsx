import { Cast } from 'components/Cast/Cast';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { Reviews } from 'components/Reviews/Reviews';
import { useEffect, useState } from 'react';
import axios from 'axios';
import css from './Movie.module.scss';

export function Movie() {
  const { movieId } = useParams();

  const [selectedMovie, setSelectedMovie] = useState(null);
  const apiKey = 'd8ea0ad05a6720116583e1a3262a0452';

  const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;

  useEffect(() => {
    axios
      .get(movieUrl)
      .then(response => {
        setSelectedMovie(response.data);
      })
      .catch(error => {
        console.error('Błąd: ' + error);
      });
  }, [movieUrl]);

  return selectedMovie ? (
    <>
      <div className={css.container}>
        <img
          src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
          width={250}
          height={400}
          alt={selectedMovie.title}
        />
        <div>
          <h2>{selectedMovie.title}</h2>
          <p>User score: {Math.round(selectedMovie.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{selectedMovie.overview}</p>
          <h4>Genres</h4>
          <p>{selectedMovie.genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>

      <div className={css.containerAdditional}>
        <ul>
          <li>
            <Link to={`/movie/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movie/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/cast" element={<Cast />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </>
  ) : (
    <div>Loading...</div>
  );
}
