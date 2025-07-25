import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postsReducer from "../features/posts/postsSlice";
// import  bookReducer  from "../features/bookSlice";
const store = configureStore({
	reducer: {
		counter: counterReducer,
		// booksR: bookReducer,
		posts: postsReducer,
	},
});

export default store;