import { useParams } from "react-router-dom";
import { useEffect } from "react";

import css from "./MovieDetailsPage.module.css";

import { fetchMovieDetails } from "../../movies_api";

export default function MovieDetailsPage() {
  const id = useParams().id;

  console.log();
  return (
    <>
      <div></div>
    </>
  );
}
