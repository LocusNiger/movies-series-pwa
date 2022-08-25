import { Link } from "react-router-dom";

const index = (props) => {
  return (
    <>
      {props.isLogged == false ? (
        <>
          <header className="bg-gray-900 mb-4 ">
            <nav className="p-4 mx-auto my-4">
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
          <nav className="p-4 mx-auto my-4">
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
