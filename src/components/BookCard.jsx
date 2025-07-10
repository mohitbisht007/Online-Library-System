import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <div className="border bg-amber-50 border-balck-200 shadow-md rounded-xl transition cursor-pointer hover:shadow-lg cursor text-center w-full flex flex-col justify-center items-center">
      <img className="md:h-[300px] object-cover rounded-lg w-[90%] p-3" src={`${book.img}`} alt="" />
      <div className="p-3">
        <div className="stars flex justify-center items-center">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          {book.rating > 4.6 ? (
            <i className="fa-solid fa-star"></i>
          ) : book.rating > 4.2 ? (
            <i className="fa-solid fa-star-half-stroke"></i>
          ) : (
            <i className="fa-regular fa-star"></i>
          )}
          <p className="text-black mx-4 font-semibold"> {book.rating}</p>
        </div>
        <h3 className="font-bold mb-1 text-[18px]">{book.title}</h3>
        <p className="text-sm">Author: <span className="text-amber-950 font-semibold">{book.author}</span></p>
        <Link to={`/books/${book.id}`} ><button className="mt-3 px-4 py-2 bg-amber-500 text-white rounded-lg font-semibold shadow cursor-pointer hover:bg-amber-600 transition-colors duration-200">View Details</button></Link>
      </div>
    </div>
  );
}
