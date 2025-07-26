import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { createProduct, updateProduct } from '../productSlice';

export default function ProductForm({productToEdit ={}, isEdit = false}) {
	const dispatch = useDispatch();

	const [product, setProduct] = useState({
		title: '',
		price: '',
		description: '',
		category: '',
	});

	useEffect(()=>{
		if(productToEdit){
			setProduct({
			title: productToEdit.title ?? '',
			price: productToEdit.price ?? '',
			description: productToEdit.description ?? '',
			category: productToEdit.category ?? '',
			}
			)
		}
	}, [productToEdit])

	const handleSubmit = e =>{
		e.preventDefault();

		if(isEdit){
			dispatch(updateProduct({id:productToEdit.id, product: product}))
		}else{
			dispatch(createProduct({...product, id:nanoid()}))
			// console.log({...product, id: nanoid()});
			console.log('Add submit product:--->');
			console.table(product);
		}
	}

	const handleChange = (e)=>{
		setProduct({
			...product, 
			[e.target.name]: e.target.value,
		})
	}
  return (
	<div className='border border-gray-300 shadow w-11/12 mx-auto bg-amber-100 p-4 rounded-lg'>
		<form onSubmit={handleSubmit} action="" className='w-full mx-auto'>
			<div>
				<label htmlFor="">Title</label>
				<input type="text" name="title" id="" value={product.title} onChange={handleChange} placeholder='title' className='p-2 input input-info m-2 rounded-lg' />
			</div>
			<div>
				<label htmlFor="">Price</label>
				<input type="text" name="price" id="" value={product.price} onChange={handleChange} placeholder='price' className='p-2 input input-info m-2 rounded-lg' />
			</div>
			<div>
				<label htmlFor="">Category</label>
				<input type="text" name="category" id="" value={product.category} onChange={handleChange} placeholder='category' className='p-2 input input-info m-2 rounded-lg' />
			</div>
			<div>
				<label htmlFor="">Description</label>
				<textarea name="description" rows={4} cols={4} value={product.description} onChange={handleChange} id="" className='textarea textarea-info rounded-lg p-2 m-2'></textarea>
			</div>
			<button type='submit' className='btn btn-secondary'>
				{isEdit ? 'Update Product': 'Add Product'}
			</button>
		</form>
	</div>
  )
}
