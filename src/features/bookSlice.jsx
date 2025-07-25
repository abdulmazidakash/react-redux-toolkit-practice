import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    { id: 1, title: 'x', author: 'anisul', price: 12, quantity: 13 },
    { id: 2, title: 'x', author: 'akash', price: 19, quantity: 16 },
  ],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
	deleteBook: (state, action) =>{
		const  id = action.payload;
		state.books = state.books.filter((book)=> book.id !== id);
	},
  addBook: (state, action)=>{
    state.books.push(action.payload);
  },
  updateBook: (state, action)=>{
    const { id, title, author, price, quantity } = action.payload;
    const existingBook = state.books.find((book)=> book.id === id);
    if(existingBook){
      existingBook.title = title;
      existingBook.author = author;
      existingBook.price = price;
      existingBook.quantity = quantity;
    }
  }
  },
});

export const { deleteBook, addBook, updateBook } = bookSlice.actions;

export default bookSlice.reducer;
