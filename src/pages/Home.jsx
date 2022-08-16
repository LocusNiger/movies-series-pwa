import HomeWithoutLogin from "../pages/HomeWithoutLogin";
import HomeWithLogin from "../pages/HomeWithLogin";

const Home = () => {
  let token = sessionStorage.getItem("token");

  return <>{!token ? <HomeWithoutLogin /> : <HomeWithLogin />}</>;
};

export default Home;
