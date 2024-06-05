import css from "./CastCard.module.css";

export default function CastCard({ actor: { profile_path, name, character } }) {
  return (
    <>
      <div className={css.container}>
        <div className={css.col}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
            alt="Image"
            className={css.image}
          />
        </div>
        <div className={css.col}>
          <p className={css.name}>
            <b>Name: </b>
            <br />
            {name}
          </p>
          <br />
          <p className={css.character}>
            <b>Character: </b>
            <br />
            {character}
          </p>
        </div>
      </div>
    </>
  );
}
