import { useState, useEffect } from "react";
import css from "./MovieReviews.module.css";
import { useParams } from "react-router-dom";

import { fetchMovieReviews } from "../../movies_api";
import Loading from "../Loading/Loading";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ReviewCard from "../ReviewCard/ReviewCard";

export default function MovieReviews() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const response = await fetchMovieReviews(movieId);
        setReviews(response.data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return (
    <>
      {loading && <Loading />}
      {error && <ErrorMessage />}
      {reviews.length > 0 && (
        <ul className={css.list}>
          {reviews.map((review) => (
            <li key={review.id} className={css.item}>
              {console.log(reviews)}
              <ReviewCard review={review} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
