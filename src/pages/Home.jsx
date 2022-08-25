import HomeWithoutLogin from "../pages/HomeWithoutLogin";
import HomeWithLogin from "../pages/HomeWithLogin";

const Home = (props) => {
  return <>{props.isLogged == false ? <HomeWithoutLogin /> : <HomeWithLogin />}</>;
};

export default Home;
