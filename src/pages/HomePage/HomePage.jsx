import axios from "axios";
import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../movies_api.js";

import MoviesList from "../../components/MoviesList/MoviesList";

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
      <h2>Trending today</h2>
      {movies.length > 0 && (
        <ul className={css.list}>
          <MoviesList movies={movies} />
        </ul>
      )}
    </>
  );
}
