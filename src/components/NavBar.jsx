import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png"

export default function Navbar() {
  const [navBarOpen, setNavBarOpen] = useState(false);

  const handleHamburger = () => {
    setNavBarOpen(!navBarOpen);
  };

  return (
   <nav className="bg-amber-500 shadow-md px-4 py-3">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-12 w-auto object-contain" />
          <span className="text-xl font-bold text-amber-900 tracking-wide hidden sm:inline">ReadVerse</span>
        </Link>
        <div onClick={handleHamburger} className="text-2xl md:hidden cursor-pointer">
          {navBarOpen ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-semibold text-lg items-center">
          <li>
            <Link
              to="/books"
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-amber-600 transition hover:bg-amber-500 text-white hover:text-black"
            >
              <i className="fa-solid fa-book"></i> Browse Books
            </Link>
          </li>
          <li>
            <Link
              to="/add-book"
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#74C0FC] text-black hover:bg-amber-500 transition"
            >
              <i className="fa-solid fa-plus"></i> Add New Books
            </Link>
          </li>
          <li>
            <Link
              to="/add-book"
              className="flex text-[30px] items-center gap-2 px-4 py-2 rounded-md text-black hover:bg-amber-500 transition"
            >
              <i class="fa-brands fa-github"></i>
            </Link>
          </li>
        </ul>
      </div>
      {/* Mobile Dropdown */}
      <ul
        className={`md:hidden overflow-hidden transition-all duration-300 font-semibold text-base flex flex-col gap-2 bg-amber-400 rounded-b-lg shadow ${
          navBarOpen ? "max-h-40 py-2 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <li>
          <Link
            to="/books"
            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#4ea8de] transition text-black hover:text-white"
            onClick={() => setNavBarOpen(false)}
          >
            <i className="fa-solid fa-book"></i> Browse Books
          </Link>
        </li>
        <li>
          <Link
            to="/add-book"
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-amber-400  text-black hover:bg-[#4ea8de] transition"
            onClick={() => setNavBarOpen(false)}
          >
            <i className="fa-solid fa-plus"></i> Add New Books
          </Link>
        </li>
      </ul>
    </nav>
  );
}
