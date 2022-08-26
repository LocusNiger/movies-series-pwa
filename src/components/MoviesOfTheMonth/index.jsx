import { Link } from "react-router-dom";
import { useMovies } from "../../hooks/useMovies";
import { Month } from "./Month";

const MoviesOfTheMonth = () => {
  const { moviesTrending } = useMovies();

  const mesNum = new Date().getMonth() + 1;
  const mes = Month(mesNum);
  moviesTrending.splice(5, 19);

  return (
    <>
      <section className="mx-auto my-4 max-w-7xl">
        <h2 className="text-3xl h-auto text-transparent sm:text-4xl bg-clip-text bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400 text-center mb-4 font-bold">
          Best movies to watch in {mes}:
        </h2>
        <ul className="flex overflow-x-auto gap-6 snap-x snap-mandatory scroll-smooth before:shrink-0 before:w-1/12 after:shrink-0 after:w-1/12 lg:before:w-0 lg:after:w-0 lg:justify-around ">
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
        <div className="flex justify-center mt-6">
          <p className="text-2xl text-white ">
            <Link to={`/trending-movies`}> See more </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default MoviesOfTheMonth;
