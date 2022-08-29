import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const index = (props) => {
  const navigate = useNavigate();
  /* logout. Si acepta, se redirije al inicio (sin token) */
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure you want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        props.setIsLogged(false);
        sessionStorage.removeItem("token");
        navigate("/");
      }
    });
  };
  return (
    <>
      {props.isLogged == true ? (
        <header className="bg-gray-900 mb-4">
          <nav className="p-4 mx-auto my-4 ">
            <ul className="flex w-full md:justify-end text-white">
              <li className="w-1/4 md:w-auto">
                <Link className="md:px-3 md:py-2" to="/">
                  Home
                </Link>
              </li>
              <li className="w-1/4 md:w-auto">
                <Link className="md:px-3 md:py-2" to="/trending-movies">
                  Trending movies
                </Link>
              </li>
              <li className="w-1/4 md:w-auto">
                <Link className="md:px-3 md:py-2" to="/trending-series">
                  Trending series
                </Link>
              </li>
              <li className="w-1/4 md:w-auto">
                <Link className="md:px-3 md:py-2" to="/" onClick={handleLogout}>
                  Logout
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      ) : (
        <>
          <header className="bg-gray-900 mb-4 ">
            <nav className="p-4 mx-auto my-4">
              <ul className="flex w-full justify-end text-white">
                <li className="w-auto">
                  <Link className="md:px-3 md:py-2" to="/">
                    Home
                  </Link>
                </li>
                <li className="w-auto">
                  <Link className="md:px-3 md:py-2" to="/login">
                    Login
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
        </>
      )}
    </>
  );
};

export default index;
