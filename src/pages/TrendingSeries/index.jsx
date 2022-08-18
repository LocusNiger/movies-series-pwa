import { Link } from "react-router-dom";
import { useSeries } from "../../hooks/useSeries";

export default function TrendingSeries() {
  const { seriesTrending } = useSeries();
  seriesTrending.splice(10, 19);

  return (
    <>
      {/* Trending TV shows */}
      <section className="mx-auto my-4 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 h-20">
            Trending TV shows of the month
          </h1>
        </div>
        <ul className="grid grid-cols-1 gap-10 box-border justify-items-center sm:grid-cols-2 sm:gap-x-0.5 sm:gap-y-8 lg:grid-cols-5">
          {seriesTrending.map((serie) => (
            <li key={serie.id} className="shrink-0 snap-center">
              <Link to={`/detail?serieId=${serie.id}`}>
                <img
                  className="w-72 lg:w-52 rounded-xl"
                  src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`}
                  alt={`${serie.title} poster`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
      {/* Popular TV shows */}
    </>
  );
}
