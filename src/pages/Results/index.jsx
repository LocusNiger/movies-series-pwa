import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams, Navigate, useNavigate } from "react-router-dom";
import sweetAlert from "sweetalert2";
import Search from "../../components/Search";

const Results = (props) => {
  const [params] = useSearchParams(); /* keyword viaja en la ruta */
  const keyword = params.get("keyword"); /* extraigo keyword del url */
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

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

  results.splice(8, 19);

  return (
    <>
      {props.isLogged == false && <Navigate to="/" />}
      <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
        <div className=" w-4/6 my-10">
          <Search />
        </div>
        <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 mb-4 h-auto sm:mb-10">
          Search results for "{keyword}"
        </h1>
      </div>
      <div>
        {/* mapeo los resultados de la búsqueda y muestro las películas */}
        <ul className="grid grid-cols-1 gap-10 box-border justify-items-center sm:grid-cols-2 sm:gap-x-0.5 sm:gap-y-8 lg:grid-cols-4">
          {results.map((result) => (
            <li key={result.id} className="shrink-0 snap-center">
              <img
                className="w-72 lg:w-52 rounded-xl"
                src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
                alt={`${result.title} poster`}
                id={result.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Results;
