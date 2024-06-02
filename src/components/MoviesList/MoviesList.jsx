export default function MoviesList({ movies }) {
  return (
    <>
      {movies.map(({ id, original_title }) => (
        <li key={id}>{original_title}</li>
      ))}
    </>
  );
}
