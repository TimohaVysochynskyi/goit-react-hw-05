import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import Loading from "../Loading/Loading";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../../pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);

const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"));

import css from "./App.module.css";

export default function App() {
  return (
    <>
      <header className={css.header}>
        <h1 className={css.title}>Kinoposhuk</h1>
        <Navigation />
      </header>

      <main className={css.content}>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/movies" element={<MoviesPage />}></Route>
            <Route path="/movies/:id" element={<MovieDetailsPage />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </Suspense>
      </main>
    </>
  );
}
