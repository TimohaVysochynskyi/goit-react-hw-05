import { useEffect } from "react";

import css from "./HomePage.module.css";

export { fetchFilms } from "../../movies_api.js";

export default function HomePage() {
  useEffect(() => {
    console.log(fetchFilms);
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ul className={css.list}>
        <li className={css.item}></li>
      </ul>
    </>
  );
}
