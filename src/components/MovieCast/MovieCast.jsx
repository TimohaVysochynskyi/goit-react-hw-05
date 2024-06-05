import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import css from "./MovieCast.module.css";

import { fetchMovieCast } from "../../movies_api";
import Loading from "../Loading/Loading";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import CastCard from "../CastCard/CastCard";

export default function MovieCast() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const response = await fetchMovieCast(movieId);
        setCast(response.data.cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, []);

  return (
    <>
      {loading && <Loading />}
      {error && <ErrorMessage />}
      {cast.length > 0 && (
        <ul className={css.list}>
          {cast.map((actor) => (
            <li key={actor.id} className={css.item}>
              <CastCard actor={actor} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
