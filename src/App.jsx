import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

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
      <Routes>
        <Route path="/" element={<Home isLogged={isLogged} />} />
        <Route path="/login" element={<Login setIsLogged={setIsLogged} />} />
        <Route path="/results" element={<Results isLogged={isLogged} />} />
        <Route path="/movie-detail" element={<MovieDetail isLogged={isLogged} />} />
        <Route path="/series-detail" element={<SeriesDetail isLogged={isLogged} />} />
        <Route path="/trending-movies" element={<TrendingMovies isLogged={isLogged} />} />
        <Route path="/trending-series" element={<TrendingSeries isLogged={isLogged} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
