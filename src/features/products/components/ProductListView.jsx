
import React, { useEffect } from 'react'
import { deleteProduct, fetchProducts } from '../productSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function ProductListView({onHandleSetProductToEdit}) {
	const { products, isLoading, error } = useSelector((state)=> state.productsR);

	const dispatch = useDispatch();

	useEffect(()=>{
		dispatch(fetchProducts());
	}, [dispatch]);

	const handleEdit = product =>{
		onHandleSetProductToEdit(product);
	}
  return (
	<div>
		{isLoading && <p>Loading...</p>}
		{error && <p>{error}</p>}

		{!isLoading && 
		!error && 
		products && 
		products.length >0 && 
		<section className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8'>
			{products.map((product)=>{
				return <article className='shadow font-semibold border border-gray-300 rounded-lg p-4 bg-amber-200 my-2' key={product.id}>
					<h3 className='my-2 font-bold text-2xl'>Title: {product.title}</h3>
					<p className='text-justify my-2'>Description: {product.description}</p>
					<p className='text-justify my-2'>Category: {product.category}</p>
					<p className='text-justify my-2'>Price: {product.price}</p>
					<button className='cursor-pointer btn btn-error my-2 text-white' onClick={()=>dispatch(deleteProduct(product.id))}>Delete</button>
					<button className='cursor-pointer btn btn-success my-2 text-white ml-4' onClick={()=>handleEdit(product)}>Edit</button>
				</article>
			})
			}
		</section>
		}
	</div>
  )
}
