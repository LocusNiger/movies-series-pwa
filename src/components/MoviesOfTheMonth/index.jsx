import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const MoviesOfTheMonth = () => {
  const endpoint = "https://api.themoviedb.org/3/trending/movie/week?api_key=9cc2ccd6d9648c49e03bee3c9b88a569";
  const [moviesTrending, setMoviesTrending] = useState([]);
  useEffect(() => {
    axios
      .get(endpoint)
      .then((res) => {
        setMoviesTrending(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setMoviesTrending]);

  return (
    <>
      <section>
        <h2 className="text-3xl text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400 h-14 text-center mb-4 font-bold">
          Movies of the month:
        </h2>
        <ul>
          {moviesTrending.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default MoviesOfTheMonth;
