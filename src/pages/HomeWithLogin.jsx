import MoviesOfTheMonth from "../components/MoviesOfTheMonth";
import PeoplesFavorites from "../components/PeoplesFavorites";
import SeriesOfTheMonth from "../components/SeriesOfTheMonth";

const HomeWithLogin = () => {
  return (
    <>
      <MoviesOfTheMonth />
      <PeoplesFavorites />
      <SeriesOfTheMonth />
    </>
  );
};

export default HomeWithLogin;
