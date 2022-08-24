import { useEffect, useState } from "react";
import axios from "axios";

/* Detalle  */
const MovieDetail = () => {
  let query = new URLSearchParams(window.location.search);
  let movieId = query.get("movieId");

  const [detail, setDetail] = useState(null);
  useEffect(() => {
    const endpoint = `https://api.themoviedb.org/3/movie/${movieId}?api_key=9cc2ccd6d9648c49e03bee3c9b88a569&language=en-US`;
    axios
      .get(endpoint)
      .then((res) => {
        const movieData = res.data;
        setDetail(movieData);
      })
      .catch((err) => console.log(err));
  }, [movieId]);

  return (
    <>
      {detail && (
        <>
          {/* Detalle película */}
          <section>
            <div className="flex flex-col justify-center text-white md:flex-row md:p-8">
              <div className="relative md:inline-block md:w-1/2 lg:w-2/6">
                <img
                  className="w-full rounded-xl p-2 box-border"
                  src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`}
                  alt={`${detail.title} poster`}
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-b from-transparent to-black h-80 flex flex-col justify-end items-center p-2 box-border ">
                  <h1 className="font-bold text-4xl text-center mb-2.5">{detail.title}</h1>
                  <div className="flex w-40 justify-around mb-2.5">
                    <p className="font-bold p-2 bg-gray-600 bg-opacity-40 rounded-md">
                      {detail.release_date.substring(0, 4)}
                    </p>
                    <p className="font-bold p-2 bg-gray-600 bg-opacity-40 rounded-md">
                      ⭐ {detail.vote_average.toFixed(1)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:w-1/2">
                <p className="py-4 px-2 mx-2 text-gray-200 ">{detail.overview}</p>

                <div className="w-full ">
                  <ul className=" text-gray-200 flex gap-4 flex-wrap justify-center md:justify-start  md:px-2 md:mx-2">
                    {detail.genres.map((genre) => (
                      <li className="list-none font-bold p-2 bg-gray-600 bg-opacity-40 rounded-md" key={genre.id}>
                        {genre.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default MovieDetail;
