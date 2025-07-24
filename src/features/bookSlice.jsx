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
  },
});

export const { deleteBook } = bookSlice.actions;

export default bookSlice.reducer;
