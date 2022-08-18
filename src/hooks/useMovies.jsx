import { useState, useEffect } from "react";
import axios from "axios";

export function useMovies() {
  const [moviesTrending, setMoviesTrending] = useState([]);
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

  return { moviesTrending };
}
