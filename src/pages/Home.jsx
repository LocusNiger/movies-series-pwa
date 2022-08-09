import MoviesOfTheMonth from "../components/MoviesOfTheMonth";
import PeoplesFavorites from "../components/PeoplesFavorites";
import SeriesOfTheMonth from "../components/SeriesOfTheMonth";
import HomeWithoutLogin from "../pages/HomeWithoutLogin";
import HomeWithLogin from "../pages/HomeWithLogin";

const Home = () => {
  let token = sessionStorage.getItem("token");

  return <>{!token ? <HomeWithoutLogin /> : <HomeWithLogin />}</>;
};

export default Home;
