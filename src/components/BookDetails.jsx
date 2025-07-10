import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";


export default function BookDetails() {

const navigate = useNavigate()
  const books = useSelector(state => state.books)

  const { id } = useParams();
  const book = books.find((b) => b.id === Number(id));

 return (
    <>
    <button
        onClick={() => navigate("/books")}
        className="m-4 cursor-pointer ml-4 px-4 py-2 bg-amber-500 text-white rounded-lg font-semibold shadow hover:bg-amber-600 transition-colors duration-200"
      >
        &larr; Back to Browse
      </button>
    <div className="max-w-xl mx-auto mt-10 px-4">
      <img
        src={book.img}
        alt={book.title}
        className="w-40 h-56 object-cover rounded-lg shadow mb-4 mx-auto"
      />
      <h1 className="text-3xl font-bold text-amber-700 mb-2 text-center">{book.title}</h1>
      <p className="text-lg mb-1 text-center">
        <span className="font-semibold text-gray-700">Author:</span>{" "}
        <span className="text-amber-900">{book.author}</span>
      </p>
      <p className="mb-1 text-center">
        <span className="font-semibold text-gray-700">Published:</span>{" "}
        {book.publishedDate}
      </p>
      <p className="mb-2 text-center">
        <span className="font-semibold text-gray-700">Category:</span>{" "}
        <span className="inline-block bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-semibold">
          {book.category}
        </span>
      </p>
      <div className="flex items-center justify-center mb-2">
        <span className="text-yellow-500 mr-2">
          {[...Array(Math.floor(book.rating))].map((_, i) => (
            <i key={i} className="fa-solid fa-star"></i>
          ))}
          {book.rating % 1 >= 0.5 && (
            <i className="fa-solid fa-star-half-stroke"></i>
          )}
        </span>
        <span className="font-semibold text-gray-700">{book.rating}</span>
      </div>
      <h2 className="text-xl font-semibold mb-1 text-gray-800 mt-4 text-center">Description</h2>
      <p className="text-gray-700 text-center">{book.description}</p>
    </div>
    </>
  );
}
