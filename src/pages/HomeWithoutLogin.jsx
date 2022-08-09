import { Link } from "react-router-dom";
const HomeWithoutLogin = () => {
  return (
    <>
      <h1>Welcome to Trending M&S</h1>
      <p>Hello! This project was made for the "React Skill Up I" of Alkemy</p>
      <p>Login if you want to see more!</p>
      <button>
        <Link to="/login">Sign in</Link>
      </button>
    </>
  );
};

export default HomeWithoutLogin;
