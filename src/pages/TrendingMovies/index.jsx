import { Link, Navigate } from "react-router-dom";
import UpcomingMovies from "../../components/UpcomingMovies";
import { useMovies } from "../../hooks/useMovies";
import { motion } from "framer-motion";

const TrendingMovies = (props) => {
  const { moviesTrending } = useMovies();

  moviesTrending.splice(10, 19);
  return (
    <>
      {props.isLogged == false && <Navigate to="/" />}
      {/* Trending Movies */}
      <motion.section
        className="mx-auto my-4 max-w-7xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        exit={{ opacity: 0 }}
      >
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
      </motion.section>
      {/* Upcoming movies */}
      <UpcomingMovies />
    </>
  );
};

export default TrendingMovies;
