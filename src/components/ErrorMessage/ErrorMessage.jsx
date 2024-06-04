import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <div className={css.container}>
      <p className={css.errorMessage}>Unknown error. Please, try again later</p>
    </div>
  );
}
