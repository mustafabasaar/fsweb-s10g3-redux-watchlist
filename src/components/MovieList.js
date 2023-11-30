import { movies } from "./../movies";
import Movie from "./Movie";
function MovieList() {
  const { movies } = useSelector((state) => state.movieList.movies);
  return (
    <div>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
