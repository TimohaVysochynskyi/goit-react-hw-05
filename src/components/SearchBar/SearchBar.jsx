import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const input = event.target.elements.input.value;
    onSearch(input);
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <h2 className={css.title}>Find a movie</h2>
        <input
          type="text"
          name="input"
          className={css.input}
          placeholder="Enter movie name.."
        />
        <button className={css.btn} type="submit">
          Find
        </button>
      </form>
    </>
  );
}
