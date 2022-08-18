import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Results from "./pages/Results/index";
import TrendingMovies from "./pages/TrendingMovies/index";
import TrendingSeries from "./pages/TrendingSeries/index";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/results" element={<Results />} />
        <Route path="/trending-movies" element={<TrendingMovies />} />
        <Route path="/trending-series" element={<TrendingSeries />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
