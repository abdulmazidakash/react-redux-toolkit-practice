import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBook } from '../features/bookSlice';

export default function BookList() {
	const {books} = useSelector((state)=>state.booksR);
	const dispatch = useDispatch();

	const handleDelete = (id)=>{
		// console.log(id);
		dispatch(deleteBook(id))

	}

  return (
	<div>
		<h2>List of books</h2>
		{books && books.length > 0 ? (
			<ul>
			{books.map((book)=>{

				return (<li key={book.id} className='my-4'>
					{book.title} by {book.author} - ${book.price} - {book.quantity} pcs
					<button onClick={()=>handleDelete(book.id)} className='ml-4 cursor-pointer p-2 rounded-lg bg-sky-900 text-white'>Delete</button>	
				</li>
			);
			})}
		</ul>
		): (<p>No books Exist</p>)}
	</div>
  )
}
