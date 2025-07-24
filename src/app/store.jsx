// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";

import { configureStore } from "@reduxjs/toolkit";

// const store = configureStore({
// 	reducer: {
// 		counter: counterReducer,
// 	},
// });

// export default store;

export const store = configureStore({
	reducer: {
		books: bookReducer,
	}
})