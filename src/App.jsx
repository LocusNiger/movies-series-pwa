import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Results from "./pages/Results/index";
import TrendingMovies from "./pages/TrendingMovies/index";
import TrendingSeries from "./pages/TrendingSeries/index";

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
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLogged={setIsLogged} />} />
        <Route path="/results" element={<Results />} />
        <Route path="/trending-movies" element={<TrendingMovies />} />
        <Route path="/trending-series" element={<TrendingSeries />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
