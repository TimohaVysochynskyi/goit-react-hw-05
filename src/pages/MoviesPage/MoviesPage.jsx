import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { fetchMoviesByName } from "../../movies_api.js";

import MoviesList from "../../components/MoviesList/MoviesList";
import Loading from "../../components/Loading/Loading";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";

import css from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const nameFilter = searchParams.get("name") ?? "";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await fetchMoviesByName(nameFilter);
        setMovies(response.data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [nameFilter]);

  const changeNameFilter = (newNameFilter) => {
    newNameFilter === ""
      ? searchParams.delete("name")
      : searchParams.set("name", newNameFilter);
    setSearchParams(searchParams);
  };

  return (
    <>
      <SearchBar onSearch={changeNameFilter} />
      {loading && <Loading />}
      {movies.length > 0 && !error && <MoviesList movies={movies} />}
      {error && <ErrorMessage />}
    </>
  );
}
