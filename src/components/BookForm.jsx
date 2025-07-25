import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import { useDispatch } from 'react-redux';
import { addBook, updateBook } from '../features/bookSlice';

export default function BookForm({ bookToEdit, onCancel }) {
	const [book, setBook] = useState({
		title: '',
		author: '',
		price: '',
		quantity: '',
	});

	useEffect(()=>{
		if(bookToEdit){
			setBook(bookToEdit);
		}
	}, [bookToEdit])
	const dispatch = useDispatch();

	const handleChange = (e) =>{
		const { name, value } = e.target;
		setBook((prevBook)=> ({
			...prevBook,
			[name]: value
		}))
	}

	const handleSubmit = e =>{
		e.preventDefault();
	if(bookToEdit){
		//update required
		dispatch(updateBook(book))
	}else{
		// console.log({...book, id: nanoid()});
		dispatch(addBook({...book, id: nanoid()}))
	}
	setBook({
		title: '',
		author: '',
		price: '',
		quantity: '',
	})
	}

  return (
	<div className='my-8'>
		<form onSubmit={handleSubmit} action="">
			<input required type="text" name="title" id="" onChange={handleChange} value={book.title} placeholder='title' className='input input-accent rounded-lg border my-2 p-2'/>
			<input required type="text" name="author" id="" onChange={handleChange} value={book.author} placeholder='author' className='input input-accent rounded-lg border my-2 p-2'/>
			<input required type="number" name="price" id="" onChange={handleChange} value={book.price} placeholder='price' className='input input-accent rounded-lg border my-2 p-2'/>
			<input required type="number" name="quantity" id="" onChange={handleChange} value={book.quantity} placeholder='quantity' className='input input-accent rounded-lg border my-2 p-2'/>

			<button className='btn btn-dash block text-center' type='submit'>
				{bookToEdit ? 'Update Book' : 'Add Book'}
			</button>
			{bookToEdit && <button onClick={onCancel} className='btn btn-dash block text-center' type='submit'>
				Cancel
			</button>}

		</form>
	</div>
  )
}
