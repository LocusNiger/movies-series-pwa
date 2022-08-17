import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import sweetAlert from "sweetalert2";

const Results = () => {
  const [params] = useSearchParams(); /* keyword viaja en la ruta */
  const keyword = params.get("keyword"); /* extraigo keyword del url */
  const [results, setResults] = useState([]);

  useEffect(() => {
    const endpoint = `https://api.themoviedb.org/3/search/multi?api_key=9cc2ccd6d9648c49e03bee3c9b88a569&language=en-US&query=${keyword}&page=1&include_adult=true`;
    axios
      .get(endpoint)
      .then((res) => {
        let searchResults = res.data.results;
        setResults(searchResults);
      })
      .catch((err) => {
        console.log(err);
        sweetAlert.fire({
          icon: "error",
          title: "Oops...",
          text: `Something is wrong. Try again later`,
        });
      });
  }, [keyword]);

  return (
    <>
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Results;
