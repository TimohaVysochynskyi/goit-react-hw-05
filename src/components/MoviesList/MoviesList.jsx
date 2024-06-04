import { Link } from "react-router-dom";

import css from "./MoviesList.module.css";

export default function MoviesList({ movies }) {
  return (
    <ul className={css.list}>
      {movies.map(({ id, original_title, poster_path }) => (
        <li key={id} className={css.item}>
          <Link to={`/movies/${id}`} className={css.link}>
            <img
              className={css.image}
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt="Image"
            />
            <p className={css.title}>{original_title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
