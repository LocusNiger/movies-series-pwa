import MoviesOfTheMonth from "../components/MoviesOfTheMonth/index";
import PeoplesFavorites from "../components/PeoplesFavorites/index";
import SeriesOfTheMonth from "../components/SeriesOfTheMonth/index";
import Search from "../components/Search/index";
import { Navigate } from "react-router-dom";

const HomeWithLogin = () => {
  let token = sessionStorage.getItem("token");

  return (
    <>
      {!token && <Navigate to="/login" />}
      <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 h-18">
        Welcome to Trending M&S
      </h1>
      <MoviesOfTheMonth />
      <PeoplesFavorites />
      <SeriesOfTheMonth />
      <Search />
    </>
  );
};

export default HomeWithLogin;
