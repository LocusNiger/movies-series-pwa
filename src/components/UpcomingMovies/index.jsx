import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const UpcomingMovies = () => {
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=9cc2ccd6d9648c49e03bee3c9b88a569&language=en-US&page=1`)
      .then((res) => {
        setUpcoming(res.data.results);
        console.log(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  upcoming.splice(5, 19);
  return (
    <>
      <motion.section
        className="mx-auto my-10 max-w-7xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-gray-300 via-fuchsia-600 to-orange-600 h-20">
            Upcoming movies
          </h1>
        </div>
        <ul className="grid grid-cols-1 gap-10 box-border justify-items-center sm:grid-cols-2 sm:gap-x-0.5 sm:gap-y-8 lg:grid-cols-5">
          {upcoming.map((movie) => (
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
    </>
  );
};

export default UpcomingMovies;
