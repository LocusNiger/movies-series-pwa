import sweetAlert from "sweetalert2";
import { createSearchParams, useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const keyword = e.currentTarget.keyword.value.trim();
    if (keyword.length == 0) {
      sweetAlert.fire({
        icon: "error",
        title: "Oops...",
        text: `Fields can't be empty`,
      });
    } else if (keyword == 1) {
      sweetAlert.fire({
        icon: "error",
        title: "Oops...",
        text: `You must write more than one character`,
      });
    } else {
      /* Si pasa las 2 validaciones:  */
      const params = { keyword: keyword }; /* guardo en params el keyword */
      navigate({
        pathname: "/results" /* redirijo a la ruta y le agrego los params */,
        search: `?${createSearchParams(params)}`,
      });
      /* ej: keyword = cars =>  url: /results?cars */
      e.currentTarget.keyword.value = "";
    }
  };

  return (
    <form onSubmit={handleSearch} className="max-w-md px-4 mx-auto mb-8">
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
          id="search"
          type="search"
          name="keyword"
          placeholder="Search..."
        />
      </div>
    </form>
  );
};

export default Search;
