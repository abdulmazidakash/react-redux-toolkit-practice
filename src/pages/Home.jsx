// import React, { useState } from 'react'
import CounterView from '../features/counter/CounterView'
import BookList from '../components/BookList'
import BookForm from '../components/BookForm'
import PostsView from '../features/posts/PostsView'

export default function Home() {
	// const [bookToEdit, setBookToEdit] = useState(null);

	// const handleEdit = (book) =>{
	// 	setBookToEdit(book)
	// }

	// const handleCancelEdit = () =>{
	// 	setBookToEdit(null);
	// }
  return (
	<div className='w-11/12 mx-auto'>
		<CounterView/>
		{/* <BookForm 
		bookToEdit={bookToEdit}
		onCancel={handleCancelEdit}
		/> */}
		{/* <BookList onHandleEdit={handleEdit} /> */}
		<PostsView/>
	</div>
  )
}
