import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBooks } from "../redux/bookSlice";
import { useNavigate } from "react-router-dom";

export default function AddNewBooks() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [newBook, setNewBook] = useState({
    img: "",
    title: "",
    author: "",
    publishedDate: "",
    description: "",
    category: "",
    rating: "",
  });

 const [error, setError] = useState({
    img: "",
    title: "",
    author: "",
    publishedDate: "",
    description: "",
    category: "",
    rating: "",
  });


  const validateInput = (key, value) => {
    if(!value.trim()) return `${key} is required. PLease Fill It`
    return ;
  }

  const handleOnchange = (e) => {
    const {name, value} = e.target;
    setNewBook((prev) => ({ ...prev, [name]: value}));
    setError((prev) => ({...prev, [name]: validateInput(name, value)}))
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {}
    let hasError = false
    for(const key in newBook){
    const err = validateInput(key, newBook[key])
      if(err){
        hasError = true
      }
      newErrors[key] = err || ""
    }

    setError(newErrors);

    if(hasError) return ;

    dispatch(
      addBooks({
        ...newBook,
        id: Date.now(),
        rating: Number(newBook.rating),
      })
    );
    setNewBook({
      img: "",
      title: "",
      author: "",
      publishedDate: "",
      description: "",
      category: "",
      rating: "",
    });

    alert("Book Added Successfully")
    navigate("/books")
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white rounded-xl shadow-lg p-8">
      <h1 className="text-2xl font-bold text-amber-700 mb-6 text-center">
        Add New Book To Our Database
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Book Title
          </label>
          <input
            name="title"
            value={newBook.title}
            onChange={(e) => handleOnchange(e)}
            type="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            required
          />
          {error.title && <p className="text-red-500">{error.title}</p>}
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Book Author
          </label>
          <input
            name="author"
            value={newBook.author}
            onChange={(e) => handleOnchange(e)}
            type="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          {error.author && <p className="text-red-500">{error.author}</p>}
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Published Date
          </label>
          <input
            name="publishedDate"
            value={newBook.publishedDate}
            onChange={(e) => handleOnchange(e)}
            type="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          {error.publishedDate && <p className="text-red-500">{error.publishedDate}</p>}
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Description
          </label>
          <textarea
            name="description"
            value={newBook.description}
            onChange={(e) => handleOnchange(e)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            rows={3}
          ></textarea>
          {error.description && <p className="text-red-500">{error.description}</p>}
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Book Category
          </label>
          <input
            name="category"
            value={newBook.category}
            onChange={(e) => handleOnchange(e)}
            type="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          {error.category && <p className="text-red-500">{error.category}</p>}
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Ratings
          </label>
          <input
            name="rating"
            value={newBook.rating}
            onChange={(e) => handleOnchange(e)}
            type="number"
            step="0.1"
            min="0"
            max="5"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          {error.rating && <p className="text-red-500">{error.rating}</p>}
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Image Link
          </label>
          <input
            name="img"
            value={newBook.img}
            onChange={(e) => handleOnchange(e)}
            type="text"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
        {error.img && <p className="text-red-500">{error.img}</p>}
        <button
          type="submit"
          className="mt-4 bg-amber-500 text-white font-semibold py-2 rounded-lg shadow hover:bg-amber-600 transition-colors duration-200"
        >
          Add Book
        </button>
      </form>
    </div>
  );
}
