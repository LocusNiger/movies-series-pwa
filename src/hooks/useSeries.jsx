import axios from "axios";
import { useState, useEffect } from "react";

export function useSeries() {
  const [seriesTrending, setSeriesTrending] = useState([]);
  useEffect(() => {
    const endpoint = `https://api.themoviedb.org/3/trending/tv/week?api_key=9cc2ccd6d9648c49e03bee3c9b88a569`;
    axios
      .get(endpoint)
      .then((res) => {
        setSeriesTrending(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setSeriesTrending]);

  return { seriesTrending };
}
