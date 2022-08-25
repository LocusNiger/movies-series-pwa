import { Link, Navigate, useNavigate } from "react-router-dom";
import { useMovies } from "../../hooks/useMovies";
import { usePopularMovies } from "../../hooks/usePopularMovies";

const TrendingMovies = (props) => {
  const { moviesTrending } = useMovies();
  const { popularMovies } = usePopularMovies();
  const navigate = useNavigate();

  moviesTrending.splice(10, 19);
  popularMovies.splice(10, 19);
  return (
    <>
      {props.isLogged == false && <Navigate to="/" />}
      {/* Trending Movies */}
      <section className="mx-auto my-4 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 h-20">
            Trending movies of the month
          </h1>
        </div>
        <ul className="grid grid-cols-1 gap-10 box-border justify-items-center sm:grid-cols-2 sm:gap-x-0.5 sm:gap-y-8 lg:grid-cols-5">
          {moviesTrending.map((movie) => (
            <li key={movie.id} className="shrink-0 snap-center">
              <Link to={`/movie-detail?movieId=${movie.id}`}>
                <img
                  className="w-72 lg:w-52 rounded-xl"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={`${movie.title} poster`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
      {/* Popular Movies */}
      <section className="mx-auto my-4 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 h-20">
            Popular movies
          </h2>
        </div>
        <ul className="grid grid-cols-1 gap-10 box-border justify-items-center sm:grid-cols-2 sm:gap-x-0.5 sm:gap-y-8 lg:grid-cols-5">
          {popularMovies.map((movie) => (
            <li key={movie.id} className="shrink-0 snap-center">
              <Link to={`/movie-detail?movieId=${movie.id}`}>
                <img
                  className="w-72 lg:w-52 rounded-xl"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={`${movie.title} poster`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default TrendingMovies;
