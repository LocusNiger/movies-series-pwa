import { Link, Navigate, useNavigate } from "react-router-dom";
import { useSeries } from "../../hooks/useSeries";
import { motion } from "framer-motion";

export default function TrendingSeries(props) {
  const { seriesTrending } = useSeries();
  seriesTrending.splice(10, 19);
  const navigate = useNavigate();

  return (
    <>
      {props.isLogged == false && <Navigate to="/" />}

      {/* Trending TV shows */}
      <motion.section
        className="mx-auto my-4 max-w-7xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <div className="max-w-3xl mx-auto text-center h-auto mb-6">
          <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 h-auto">
            Trending TV shows of the month
          </h1>
        </div>
        <ul className="grid grid-cols-1 gap-10 box-border justify-items-center sm:grid-cols-2 sm:gap-x-0.5 sm:gap-y-8 lg:grid-cols-5">
          {seriesTrending.map((serie) => (
            <li key={serie.id} className="shrink-0 snap-center">
              <Link to={`/series-detail?serieId=${serie.id}`}>
                <img
                  className="w-72 lg:w-52 rounded-xl"
                  src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`}
                  alt={`${serie.title} poster`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </motion.section>
      {/* Popular TV shows */}
    </>
  );
}
