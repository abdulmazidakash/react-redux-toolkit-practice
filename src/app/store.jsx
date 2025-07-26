import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
// import postsReducer from "../features/posts/postsSlice";
import productReducer from "../features/products/productSlice";
import { productsApi } from "../services/productsApi";
// import  bookReducer  from "../features/bookSlice";
import { setupListeners } from '@reduxjs/toolkit/query'


const store = configureStore({
	reducer: {
		[productsApi.reducerPath] : productsApi.reducer,
		counter: counterReducer,
		// booksR: bookReducer,
		// posts: postsReducer,
		productsR: productReducer,
	},
		 // Adding the api middleware enables caching, invalidation, polling,
		// and other useful features of `rtk-query`.
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(productsApi.middleware),
});
// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)

export default store;