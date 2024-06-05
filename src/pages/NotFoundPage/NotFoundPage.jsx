import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.container}>
      <Link to="/" className={css.link}>
        Back to main
      </Link>
      <p className={css.text}>Page not found</p>
    </div>
  );
}
