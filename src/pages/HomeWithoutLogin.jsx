import { Link, Navigate } from "react-router-dom";
const HomeWithoutLogin = () => {
  let token = sessionStorage.getItem("token");

  return (
    <>
      {token && <Navigate to="/" />}
      <section className="text-white bg-gray-900">
        <div className="max-w-screen-xl h-full px-4 pt-12 mx-auto lg:items-center lg:flex">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 h-20">
              Welcome to Trending M&S
            </h1>
            <p className="max-w-xl mx-auto mt-4 text-xl sm:leading-relaxed sm:text-3xl">
              Hello! This project was made for the <span className="text-blue-300">"React Skill Up I"</span> of{" "}
              <a className="text-blue-500" href="https://www.alkemy.org/" target="_blank" rel="noopener noreferrer">
                Alkemy
              </a>
              . I hope you like it!
            </p>
            <p className="max-w-xl mx-auto mt-4 text-xl sm:leading-relaxed sm:text-3xl">
              Login if you want to see more!
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                className="block w-full px-12 py-3 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded sm:w-64 sm:text-lg active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring"
                to="/login"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeWithoutLogin;
