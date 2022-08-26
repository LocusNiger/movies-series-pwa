import axios from "axios";
import sweetAlert from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
const Login = (props) => {
  const navigate = useNavigate();
  const apiKey = "9cc2ccd6d9648c49e03bee3c9b88a569";

  const handleLogin = (e) => {
    e.preventDefault();
    /* extraigo datos del form */
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    /* validaciones */
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
    /* la correcta */
    if (email !== "login@testlogin.com" || password !== "react") {
      sweetAlert.fire({
        icon: "error",
        text: `Invalid credentials.`,
      });
      return;
    }
    /* genera un token */
    const endpoint = `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${apiKey}`;
    axios
      .get(endpoint)
      .then((res) => {
        /* seteo en sessionStrg y en el estado */
        sessionStorage.setItem("token", res.data.guest_session_id);
        navigate("/");
        props.setIsLogged(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {/* Si tengo token, redirecciono al home */}
      {props.isLogged == true ? (
        <Navigate to="/" />
      ) : (
        <>
          <AnimatePresence>
            <motion.div
              className="max-w-screen-xl min-h-max px-4 py-12 mx-auto sm:px-6 lg:px-8 bg-gray-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.6 } }}
            >
              <div className="max-w-lg mx-auto text-center h-auto mb-6">
                <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 h-14 mb-2">
                  Login
                </h1>
                <p className="text-xs bg-clip-text bg-gradient-to-r text-transparent from-green-300 to-blue-500 ">
                  username: login@testlogin.com - pw: react
                </p>
              </div>
              <form className="max-w-md mx-auto mt-8 mb-0 space-y-4" onSubmit={handleLogin}>
                <div>
                  <label htmlFor="email" className="sr-only">
                    E-mail
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter email"
                      className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    />
                    <span className="absolute inset-y-0 inline-flex items-center right-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter password"
                      className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    />
                    <span className="absolute inset-y-0 inline-flex items-center right-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="block w-full px-12 py-3 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </motion.div>
          </AnimatePresence>
        </>
      )}
    </>
  );
};

export default Login;
