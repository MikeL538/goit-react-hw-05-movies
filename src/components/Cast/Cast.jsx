import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import css from './Cast.module.scss';

export const Cast = () => {
  const { movieId } = useParams();
  const apiKey = 'd8ea0ad05a6720116583e1a3262a0452';
  const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`;
  const [selectedMovie, setSelectedMovie] = useState({ cast: [] });

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

  return (
    <div className={css.container}>
      <ul>
        {selectedMovie.cast.map(credit => (
          <li key={credit.id}>
            {' '}
            {credit.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w185/${credit.profile_path}`}
                alt={`${credit.name} Profile`}
              />
            ) : (
              <img src="./no-photo.jpg" alt="No source found" />
            )}
            <p>
              {credit.name} as {credit.character}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
