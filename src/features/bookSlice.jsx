import { createSlice } from "@reduxjs/toolkit";

const initialState = {book: []};

export const bookSlice = createSlice({
	name: 'book',
	initialState,
	reducers: {}
});

export  const bookReducer = bookSlice.reducer;