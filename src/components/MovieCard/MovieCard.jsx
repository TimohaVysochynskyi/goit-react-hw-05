import { Link, useLocation } from "react-router-dom";

import css from "./MovieCard.module.css";

export default function MovieCard({
  movie: { id, original_title, poster_path },
}) {
  const location = useLocation();

  return (
    <>
      <Link to={`/movies/${id}`} state={location} className={css.link}>
        <img
          className={css.image}
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt="Image"
        />
        <p className={css.title}>{original_title}</p>
      </Link>
    </>
  );
}
