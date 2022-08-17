import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PeopleFavorites = () => {
  const [peopleFavorites, setPeopleFavorites] = useState([]);

  useEffect(() => {
    const endpoint = `
    https://api.themoviedb.org/3/discover/movie?api_key=9cc2ccd6d9648c49e03bee3c9b88a569&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&year=2022&with_watch_monetization_types=flatrate`;
    axios
      .get(endpoint)
      .then((res) => {
        setPeopleFavorites(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [peopleFavorites]);

  peopleFavorites.splice(5, 19);

  return (
    <>
      <section className="mx-auto my-4 max-w-7xl">
        <h2 className="text-3xl text-transparent sm:text-4xl bg-clip-text bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400 h-14 text-center mb-4 font-bold">
          People favorites:
        </h2>
        <ul className="flex overflow-x-auto gap-6 snap-x snap-mandatory scroll-smooth before:shrink-0 before:w-1/12 after:shrink-0 after:w-1/12 lg:before:w-0 lg:after:w-0 lg:justify-around ">
          {peopleFavorites.map((movie) => (
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
        <div className="flex justify-center mt-6">
          <p className="text-2xl text-white ">
            <Link to={`/`}> See more </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default PeopleFavorites;
