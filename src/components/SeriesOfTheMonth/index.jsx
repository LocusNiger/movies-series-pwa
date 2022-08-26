import { useSeries } from "../../hooks/useSeries";
import { Link } from "react-router-dom";
import { Month } from "../MoviesOfTheMonth/Month";

const SeriesOfTheMonth = () => {
  const { seriesTrending } = useSeries();
  const mesNum = new Date().getMonth() + 1;
  const mes = Month(mesNum);
  seriesTrending.splice(5, 19);

  return (
    <>
      <section className="mx-auto my-4 max-w-7xl">
        <h2 className="text-3xl text-transparent sm:text-4xl bg-clip-text bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400 h-auto text-center mb-4 font-bold">
          Best TV shows to watch in {mes}:
        </h2>
        <ul className="flex overflow-x-auto gap-6 snap-x snap-mandatory scroll-smooth before:shrink-0 before:w-1/12 after:shrink-0 after:w-1/12 lg:before:w-0 lg:after:w-0 lg:justify-around ">
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
        <div className="flex justify-center mt-6">
          <p className="text-2xl text-white ">
            <Link to={`/trending-series`}> See more </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default SeriesOfTheMonth;
