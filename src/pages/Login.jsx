import axios from "axios";
const Login = () => {
  const apiKey = "9cc2ccd6d9648c49e03bee3c9b88a569";
  const handleLogin = (e) => {
    e.preventDefault();
    const endpoint = `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${apiKey}`;
    axios
      .get(endpoint)
      .then((res) => {
        sessionStorage.setItem("token", res.data.guest_session_id);
        console.log(res.data.guest_session_id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1>Login</h1>
      <form>
        <div>
          <label>E-mail</label>
          <input type="text" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" />
        </div>
        <button onClick={handleLogin}>Sign in</button>
      </form>
    </>
  );
};

export default Login;
