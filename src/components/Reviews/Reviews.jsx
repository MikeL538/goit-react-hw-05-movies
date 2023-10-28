import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import css from './Reviews.module.scss';

export const Reviews = () => {
  const { movieId } = useParams();
  const apiKey = 'd8ea0ad05a6720116583e1a3262a0452';
  const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`;
  const [selectedMovie, setSelectedMovie] = useState({ results: [] });

  useEffect(() => {
    axios
      .get(movieUrl)
      .then(response => {
        console.log(response.data);
        setSelectedMovie(response.data);
      })
      .catch(error => {
        console.error('Błąd: ' + error);
      });
  }, [movieUrl]);

  return (
    <div className={css.container}>
      <ul>
        {selectedMovie.results.length === 0 ? (
          <li>
            <p>No reviews found.</p>
          </li>
        ) : (
          selectedMovie.results.map(review => (
            <li key={review.id}>
              <h4>{review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
