// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import axios from 'axios'

// const initialState = {
//   products: [],
//   isLoading: false,
//   error: null,
// }
// const BASE_URL = 'http://localhost:3003/products';

// //get data
// export const fetchProducts = createAsyncThunk('products/fetchProducts',
// 	async()=>{
// 		const res = await axios.get(BASE_URL);
// 		console.log(res.data);
// 		return res.data;
// 	}
// );
// //delete data
// export const deleteProduct = createAsyncThunk('products/deleteProduct',
// 	async(id)=>{
// 		const res = await axios.delete(`${BASE_URL}/${id}`);
// 		console.log(res.data);
// 		return id;
// 	}
// );
// //create data
// export const createProduct = createAsyncThunk('products/createProduct',
// 	async(product)=>{
// 		const res = await axios.post(BASE_URL, product);
// 		console.log(res.data);
// 		return res.data;
// 	}
// );
// //update data
// export const updateProduct = createAsyncThunk('products/updateProduct',
// 	async({id, product})=>{
// 		const res = await axios.put(`${BASE_URL}/${id}`, product);
// 		console.log(res.data);
// 		return res.data;
// 	}
// );

// export const productSlice = createSlice({
//   name: 'products',
//   initialState,
//   reducers: {},
//   extraReducers: (builder)=>{
// 	builder
// 	.addCase(fetchProducts.pending, (state)=>{
// 		state.isLoading = true;
// 		state.error = null;
// 	})
// 	.addCase(fetchProducts.fulfilled, (state, action)=>{
// 		state.isLoading = false;
// 		state.products = action.payload;
// 	})
// 	.addCase(fetchProducts.rejected, (state, action)=>{
// 		state.isLoading = false;
// 		state.error = action.error.message || "Failed to fetch data";
// 	})
// 	.addCase(deleteProduct.fulfilled, (state, action)=>{
// 		state.products = state.products.filter((product)=> product.id !== action.payload)
// 	})
// 	.addCase(createProduct.fulfilled, (state, action)=>{
// 		state.products.push(action.payload)
// 	})
// 	.addCase(updateProduct.fulfilled, (state, action)=>{
// 		const index = state.products.findIndex((product)=> product.id === action.payload.id);
// 		state.products[index]  = action.payload;
// 	})
//   }
// })
// export default productSlice.reducer;


//rtk query start
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  isLoading: false,
  error: null,
}


export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
})
export default productSlice.reducer;