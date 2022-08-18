import { useState, useEffect } from "react";
import axios from "axios";

export function usePopularMovies() {
  const [popularMovies, setPopularMovies] = useState([]);

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

  return { popularMovies };
}
