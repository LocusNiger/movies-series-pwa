import HomeWithoutLogin from "../pages/HomeWithoutLogin";
import HomeWithLogin from "../pages/HomeWithLogin";

const Home = (props) => {
  return <>{props.isLogged == true ? <HomeWithLogin /> : <HomeWithoutLogin />}</>;
};

export default Home;
