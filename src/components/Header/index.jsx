import { Link } from "react-router-dom";

const index = () => {
  let token = sessionStorage.getItem("token");

  return (
    <>
      {!token ? (
        <>
          <header className="bg-gray-900 mb-4">
            <nav className="max-w-3xl p-4 mx-auto">
              <ul className="flex justify-end text-base text-white">
                <li>
                  <Link className="px-3 py-2 rounded-lg" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="px-3 py-2 rounded-lg" to="/login">
                    Login
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
        </>
      ) : (
        <header className="bg-gray-900 mb-4">
          <nav className="max-w-3xl p-4 mx-auto">
            <ul className="flex justify-end text-base text-white">
              <li>
                <Link className="px-3 py-2 rounded-lg" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="px-3 py-2 rounded-lg" to="/trending-movies">
                  Trending movies
                </Link>
              </li>
              <li>
                <Link className="px-3 py-2 rounded-lg" to="/trending-series">
                  Trending series
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      )}
    </>
  );
};

export default index;
