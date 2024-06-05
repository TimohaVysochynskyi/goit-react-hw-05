import {
  useParams,
  Link,
  useLocation,
  NavLink,
  Outlet,
} from "react-router-dom";
import { useEffect, useState, useRef, Suspense } from "react";

import Loading from "../../components/Loading/Loading.jsx";
import MovieDetails from "../../components/MovieDetails/MovieDetails.jsx";

import css from "./MovieDetailsPage.module.css";

import { fetchMovieDetails } from "../../movies_api.js";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/movies");

  useEffect(() => {
    setLoading(true);
    fetchMovieDetails(movieId)
      .then((data) => setMovie(data.data))
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <div className={css.container}>
      <Link to={backLinkRef.current} className={css.backLink}>
        Go back
      </Link>

      {loading && <Loading />}
      {movie && <MovieDetails movie={movie} />}
      <hr />
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>

      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
