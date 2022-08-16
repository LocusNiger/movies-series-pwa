import MoviesOfTheMonth from "../components/MoviesOfTheMonth/index";
import PeoplesFavorites from "../components/PeoplesFavorites/index";
import SeriesOfTheMonth from "../components/SeriesOfTheMonth/index";
import Search from "../components/Search/index";

const HomeWithLogin = () => {
  return (
    <>
      <MoviesOfTheMonth />
      <PeoplesFavorites />
      <SeriesOfTheMonth />
      <Search />
    </>
  );
};

export default HomeWithLogin;
