import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import  bookReducer  from "../features/bookSlice";
const store = configureStore({
	reducer: {
		counter: counterReducer,
		booksR: bookReducer,
	},
});

export default store;