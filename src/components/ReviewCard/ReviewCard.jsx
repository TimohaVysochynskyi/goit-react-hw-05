import css from "./ReviewCard.module.css";

export default function CastCard({
  review: {
    author_details: { avatar_path, username },
    content,
    url,
  },
}) {
  return (
    <>
      <div className={css.container}>
        <div className={css.row}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${avatar_path}`}
            alt="Avatar"
            className={css.image}
          />
          <p className={css.name}>{username}</p>
          <a href=""></a>
        </div>
        <p className={css.content}>{content}</p>
      </div>
    </>
  );
}
