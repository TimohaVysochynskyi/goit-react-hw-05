import { useState } from "react";
import { fetchMoviesByName } from "../../movies_api.js";

import MoviesList from "../../components/MoviesList/MoviesList";
import Loading from "../../components/Loading/Loading";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import css from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.elements.input.value;
    try {
      setLoading(true);
      const response = await fetchMoviesByName(name);
      setMovies(response.data.results);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <h2 className={css.title}>Find a movie</h2>
        <input
          type="text"
          name="input"
          className={css.input}
          placeholder="Enter movie name.."
        />
        <button className={css.btn} type="submit">
          Find
        </button>
      </form>

      {loading && <Loading />}
      {movies.length > 0 && !error && <MoviesList movies={movies} />}
      {error && <ErrorMessage />}
    </>
  );
}
