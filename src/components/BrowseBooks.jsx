import Filter from "./Filter";
import BookCard from "./BookCard";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function BrowseBooks() {

  const books = useSelector(state => state.books)

  const { category } = useParams();
  const navigate = useNavigate();
  console.log(category);
  const [search, setSearch] = useState("")

  const filteredBooks = category
    ? books.filter((book) => book.category.toLowerCase() === category.toLowerCase()) : search ? books.filter((book) => book.title.toLowerCase().includes(search) || book.author.includes(search.toLowerCase())) : books;

  const handleCategory = (selectedCategory) => {
    if (!selectedCategory) {
      navigate("/books");
    } else {
      navigate(`/books/categories/${selectedCategory}`);
    }
  };

  return (
    <div>
      <h1 className="text-center p-4 text-[30px] font-bold m-4 md:text-[40px]">
        List Of Books Available
      </h1>
      <div className="text-center p-2 m-3 flex justify-center items-center">
        <input
          className="p-2 border-2 mx-2 w-100"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for books...."
        />
      </div>
      <div className="flex flex-col md:flex-row justify-center">
        <div className="md:w-[20%] flex justify-center">
          <Filter handleCategory={handleCategory} selectedCategory={category} />
        </div>
        <div className="p-2 gap-3 md:w-[80%] grid grid-cols-2 md:grid-cols-4">
          {filteredBooks.length === 0 ? 
          (<div className="col-span-2 md:col-span-4 text-center text-gray-500 font-semibold py-8"><p>No Books Found...</p></div>) : 
          (filteredBooks.map((books) => (
            <BookCard key={books.id} book={books} />
          )))}
          
        </div>
      </div>
    </div>
  );
}
