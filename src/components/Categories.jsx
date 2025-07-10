import { categories } from "../utils/bookCategory";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-center">Genres</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 p-6 m-3">
        {categories.map((c) => {
          return (
            <Link to={`books/categories/${c.category}`}>
              <div className="relative group rounded-xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer bg-gradient-to-t from-amber-400/30 to-white">
                <img
                  className="w-full h-50 object-cover filter brightness-75 group-hover:brightness-100 group-hover:scale-105 transition duration-300"
                  src={`${c.img}`}
                  alt=""
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-lg md:text-xl font-bold bg-black/40 px-3 py-1 rounded">
                    {c.category}
                  </h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
