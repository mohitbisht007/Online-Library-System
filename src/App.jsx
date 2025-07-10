import AddNewBooks from "./components/AddNewBook"
import BrowseBooks from "./components/BrowseBooks"
import HomePage from "./components/HomePage"
import {Route, Routes} from "react-router-dom"
import Navbar from "./components/NavBar"
import BookDetails from "./components/BookDetails"
import PageNotFound from "./components/PageNotFound"

function App() {
  
  return (
    <>
    <Navbar/> 
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/books" element={<BrowseBooks/>}/>
      <Route path="/books/:id" element={<BookDetails/>} />
      <Route path="/books/categories/:category" element={<BrowseBooks/>}/>
      <Route path="/add-book" element={<AddNewBooks/>}/>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </>
  )
}

export default App