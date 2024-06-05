import css from "./MovieDetails.module.css";

export default function MovieDetails({
  movie,
  movie: {
    poster_path,
    original_title,
    vote_average,
    overview,
    genres,
    status,
    release_date,
  },
}) {
  return (
    <div className={css.container}>
      <div className={css.col}>
        <div className={css.releaseInfo}>
          <p className={css.date}>{release_date}</p>
          <p className={css.status}>{status}</p>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt="Poster"
          className={css.image}
        />
      </div>

      <div className={(css.col, css.generalInfo)}>
        <h2 className={css.title}>{original_title}</h2>
        <p className={css.score}>User score: {vote_average}/10</p>
        <div className={css.infoBlock}>
          <h3 className={css.subtitle}>Overview</h3>
          <p className={css.overview}>{overview}</p>
        </div>
        <div className={css.infoBlock}>
          <h3 className={css.subtitle}>Genres</h3>
          <ul className={css.genresList}>
            {genres.map((genre) => (
              <li key={genre.id} className={css.genreItem}>
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
