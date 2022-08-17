import MoviesOfTheMonth from "../components/MoviesOfTheMonth/index";
import PeopleFavorites from "../components/PeopleFavorites/index";
import SeriesOfTheMonth from "../components/SeriesOfTheMonth/index";
import Search from "../components/Search/index";
import { Navigate } from "react-router-dom";

const HomeWithLogin = () => {
  let token = sessionStorage.getItem("token");

  return (
    <>
      {!token && <Navigate to="/login" />}
      <section>
        <div className="max-w-screen-xl h-full px-4 pt-12 mx-auto lg:items-center lg:flex">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 h-20">
              Trending M&S
            </h1>
          </div>
        </div>
      </section>
      <Search />
      <MoviesOfTheMonth />
      <SeriesOfTheMonth />
    </>
  );
};

export default HomeWithLogin;
