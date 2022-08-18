import { useState, useEffect } from "react";
import axios from "axios";

/* Hook para almacenar datos de películas */
export function useMovies() {
  /* Guarda los datos de las películas en el arreglo moviesTrending */
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

  /* Retorna el arreglo con los datos */
  return { moviesTrending };
}
