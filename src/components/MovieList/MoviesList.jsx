import MovieCard from "../MovieCard/MovieCard";
import css from "./MoviesList.module.css";

export default function MoviesList({ movies }) {
  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={css.item}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
}
