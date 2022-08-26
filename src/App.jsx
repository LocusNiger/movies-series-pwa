import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Results from "./pages/Results/index";
import MovieDetail from "./pages/MovieDetail";
import SeriesDetail from "./pages/SeriesDetail";
import TrendingMovies from "./pages/TrendingMovies/index";
import TrendingSeries from "./pages/TrendingSeries/index";

import Header from "./components/Header/index";
import Footer from "./components/Footer/index";

function App() {
  const location = useLocation();
  let token = sessionStorage.getItem("token");
  const [isLogged, setIsLogged] = useState(null);
  useEffect(() => {
    if (!token) {
      setIsLogged(false);
    } else {
      setIsLogged(true);
    }
  }, [isLogged]);

  return (
    <div className="App">
      <Header isLogged={isLogged} />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home setIsLogged={setIsLogged} isLogged={isLogged} />} />
          <Route path="/login" element={<Login setIsLogged={setIsLogged} isLogged={isLogged} />} />
          <Route path="/results" element={<Results isLogged={isLogged} />} />
          <Route path="/movie-detail" element={<MovieDetail isLogged={isLogged} />} />
          <Route path="/series-detail" element={<SeriesDetail isLogged={isLogged} />} />
          <Route path="/trending-movies" element={<TrendingMovies isLogged={isLogged} />} />
          <Route path="/trending-series" element={<TrendingSeries isLogged={isLogged} />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
