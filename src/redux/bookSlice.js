import { createSlice } from "@reduxjs/toolkit";
import { books as sampleBooks } from "../utils/sampleData";

const loadBooks = () => {
    const data = localStorage.getItem('books')
    if(data){
        return JSON.parse(data)
    } else {
        localStorage.setItem('books', JSON.stringify(sampleBooks))
        return sampleBooks;
    }
}

const bookSlice = createSlice({
    name: "books",
    initialState: loadBooks(),
    reducers: {
        addBooks: (state, action) => {
            state.push(action.payload);
            localStorage.setItem("books", JSON.stringify(state))
        }
    }
})

export const {addBooks} = bookSlice.actions;
export default bookSlice.reducer