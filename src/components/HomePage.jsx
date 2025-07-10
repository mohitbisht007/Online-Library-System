import Categories from "./Categories";
import BookCard from "./BookCard";
import { useSelector } from "react-redux";

export default function HomePage() {

const books = useSelector(state => state.books)

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-amber-700 mb-4 text-center">
        Welcome to ReadVerse — Your Online Library!
      </h1>
      <p className="text-gray-700 text-center mb-8 max-w-2xl mx-auto">
        Dive into a world of stories, knowledge, and imagination. Whether you're
        into epic Sci-Fi adventures, classic Fiction, insightful Non-Fiction, or
        children's tales — we have something for everyone. Discover hand-picked
        collections from various genres, updated regularly to keep your
        curiosity alive. Start exploring today and unlock endless reading
        possibilities from the comfort of your screen.
      </p>
      <Categories />
      <h2 className="text-2xl font-semibold mt-10 mb-4 text-center">
        List Of Popular Books
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {books.map((book) => {
          if (book.rating >= 4.5) {
            return <BookCard book={book} />;
          }
        })}
      </div>
    </div>
  );
}
