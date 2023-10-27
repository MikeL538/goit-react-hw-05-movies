import { Link, Route, Routes, useParams } from 'react-router-dom';
import css from './Film.module.scss';
import { Reviews } from 'components/Reviews/Reviews';
import { Cast } from 'components/Cast/Cast';

export const Film = () => {
  const { filmId } = useParams();

  return (
    <>
      <div className={css.container}>
        <img src="" width={250} height={400} alt="" />
        <div>
          <h2>Title</h2>
          <p>User score: 100%</p>
          <h3>Overview</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            ipsa corporis ullam nobis culpa aspernatur magni impedit veritatis,
            veniam unde vel aut delectus officiis exercitationem ex ea corrupti
            cupiditate aliquid soluta? Consequatur eveniet vitae maiores
            voluptatibus quaerat officia quibusdam soluta laborum, expedita
            numquam tenetur tempora at minima, itaque eaque esse?
          </p>
          <h4>Genres</h4>
          <p>Drama, Action, Comedy</p>
        </div>
      </div>

      <div className={css.conatinerAdditional}>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to={`film/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`film/reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </>
  );
};
