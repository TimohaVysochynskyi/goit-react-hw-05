import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../movies_api.js";

import MovieList from "../../components/MovieList/MovieList";
import Loading from "../../components/Loading/Loading";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";

import css from "./HomePage.module.css";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await fetchTrendingMovies();
        setMovies(response.data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <h2 className={css.title}>Trending today</h2>
      {loading && <Loading />}
      {movies.length > 0 && !error && <MovieList movies={movies} />}
      {error && <ErrorMessage />}
    </>
  );
}
