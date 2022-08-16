import axios from "axios";
import sweetAlert from "sweetalert2";
const Login = () => {
  const apiKey = "9cc2ccd6d9648c49e03bee3c9b88a569";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (email === "" || password === "") {
      sweetAlert.fire({
        icon: "error",
        title: "Oops...",
        text: `Fields can't be empty`,
      });
      return;
    }
    if (!regEx.test(email)) {
      sweetAlert.fire({
        icon: "error",
        text: `Email is not valid`,
      });
      return;
    }
    if (password.lenth < 3) {
      sweetAlert.fire({
        icon: "error",
        text: `The password must contain at least 4 characters.`,
      });
      return;
    }
    if (email !== "login@testlogin.com" || password !== "react") {
      sweetAlert.fire({
        icon: "error",
        text: `Invalid credentials.`,
      });
      return;
    }

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
          <input type="text" id="email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password" />
        </div>
        <button onClick={handleLogin}>Sign in</button>
      </form>
    </>
  );
};

export default Login;
