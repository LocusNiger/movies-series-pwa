import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TrendingMovies = () => {
  const [moviesTrending, setMoviesTrending] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  /* movies of the month */
  useEffect(() => {
    const endpoint = "https://api.themoviedb.org/3/trending/movie/week?api_key=9cc2ccd6d9648c49e03bee3c9b88a569";
    axios
      .get(endpoint)
      .then((res) => {
        setMoviesTrending(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setMoviesTrending]);
  moviesTrending.splice(10, 19);

  /* popular movies */
  useEffect(() => {
    const endpoint =
      "https://api.themoviedb.org/3/discover/movie?api_key=9cc2ccd6d9648c49e03bee3c9b88a569&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&primary_release_year=2021&with_watch_monetization_types=flatrate";
    axios
      .get(endpoint)
      .then((res) => {
        setPopularMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setPopularMovies]);
  popularMovies.splice(10, 19);
  return (
    <>
      <section className="mx-auto my-4 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 h-20">
            Trending movies of the month
          </h1>
        </div>
        <ul className="grid grid-cols-1 gap-10 box-border justify-items-center sm:grid-cols-2 sm:gap-x-0.5 sm:gap-y-8 lg:grid-cols-5">
          {moviesTrending.map((movie) => (
            <li key={movie.id} className="shrink-0 snap-center">
              <Link to={`/detail?movieId=${movie.id}`}>
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
      <section className="mx-auto my-4 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 h-20">
            Popular movies
          </h2>
        </div>
        <ul className="grid grid-cols-1 gap-10 box-border justify-items-center sm:grid-cols-2 sm:gap-x-0.5 sm:gap-y-8 lg:grid-cols-5">
          {popularMovies.map((movie) => (
            <li key={movie.id} className="shrink-0 snap-center">
              <Link to={`/detail?movieId=${movie.id}`}>
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
