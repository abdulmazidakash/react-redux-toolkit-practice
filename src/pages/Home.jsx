// import React, { useState } from 'react'
// import CounterView from '../features/counter/CounterView'
// import BookList from '../components/BookList'
// import BookForm from '../components/BookForm'
// import PostsView from '../features/posts/PostsView'

import { useState } from "react";
import ProductForm from "../features/products/components/ProductForm";
import ProductListView from "../features/products/components/ProductListView";

export default function Home() {
	// const [bookToEdit, setBookToEdit] = useState(null);

	// const handleEdit = (book) =>{
	// 	setBookToEdit(book)
	// }

	// const handleCancelEdit = () =>{
	// 	setBookToEdit(null);
	// }

	const [isEdit, setIsEdit] = useState(false);
	const [productToEdit, setProductToEdit] = useState({});

	const handleSetProductToEdit = (product) =>{
		setProductToEdit(product);
		setIsEdit(true);
	}
  return (
	<div className='w-11/12 mx-auto'>
		{/* <CounterView/> */}
		{/* <BookForm 
		bookToEdit={bookToEdit}
		onCancel={handleCancelEdit}
		/> */}
		{/* <BookList onHandleEdit={handleEdit} /> */}
		{/* <PostsView/> */}
		<ProductForm 
		isEdit={isEdit}
		productToEdit={productToEdit} />

		<ProductListView onHandleSetProductToEdit={handleSetProductToEdit} />
	</div>
  )
}
