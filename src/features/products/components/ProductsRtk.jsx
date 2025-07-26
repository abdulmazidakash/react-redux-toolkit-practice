import React, { useState } from 'react'
import { useDeleteProductMutation, useGetProductsQuery } from '../../../services/productsApi'
import UpdatedProduct from './UpdatedProduct';

export default function ProductsRtk() {

	const {data: products, isLoading, error} = useGetProductsQuery();
	console.log(products, isLoading, error);

	const [deleteProduct] = useDeleteProductMutation();
	const [editingProduct, setEditingProduct] = useState(null)

	const handleDelete = async id =>{
		await deleteProduct(id);
	}
  return (
	<div className='w-11/12 mx-auto'>
		<h2>List of Products</h2>
		{isLoading && <p>Loading...</p>}
		{error && <p>error: {error.message}</p>}
		{!isLoading && !error && products && products.length > 0 && (
			<section className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 p-4'>
				{products.map((product)=> {
					return <article className='rounded-lg border border-gray-300 shadow bg-rose-200 p-4 text-justify' key={product.id}>
						
						<h2 className='font-bold text-2xl my-2'>Title: {product.title}</h2>
						<p>Description: {product.description}</p>
						<button onClick={()=>setEditingProduct(product)} className='btn btn-info cursor-pointer my-2'>Edit</button>
						<button onClick={()=>handleDelete(product.id)} className='btn btn-info cursor-pointer my-2'>Delete</button>
					</article>
				})}
				{editingProduct && <UpdatedProduct editingProduct={editingProduct} setEditingProduct={setEditingProduct} />}
			</section>
		)}
	</div>
  )
}
