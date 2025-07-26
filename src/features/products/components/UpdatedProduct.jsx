import { useState } from "react";
import { useUpdateProductMutation } from "../../../services/productsApi"


export default function UpdatedProduct({editingProduct, setEditingProduct}) {

	const [updatedProduct, setUpdatedProduct] = useState(editingProduct)
	const [updateProduct] = useUpdateProductMutation();

	const handleSubmit = async e =>{
		e.preventDefault();

		try {
			await updateProduct({ id: editingProduct.id, updatedProduct: updatedProduct});
			// onclose();
			setEditingProduct(null)
			
		} catch (error) {
			console.log('failed updated the product',error);
		}
	}
  return (
	<div>
		<form onSubmit={handleSubmit} action="" className='w-full mx-auto'>
			<div>
				<label htmlFor="">Title</label>
				<input type="text" name="title" id="" value={updatedProduct.title} onChange={(e)=> setUpdatedProduct({...updatedProduct, title: e.target.value})} placeholder='title' className='p-2 input input-info m-2 rounded-lg' />
			</div>
			<div>
				<label htmlFor="">Price</label>
				<input 
					type="text" 
					name="price" 
					id="" 
					value={updatedProduct.price} 
					onChange={(e) =>
						setUpdatedProduct({
						...updatedProduct,
						price: parseFloat(e.target.value),
						})
					}  
					placeholder='price' 
					className='p-2 input input-info m-2 rounded-lg' 
					/>

			</div>
			<div>
				<label htmlFor="">Category</label>
				<input type="text" name="category" id="" value={updatedProduct.category} onChange={(e)=> setUpdatedProduct({...updatedProduct, category: e.target.value})}  placeholder='category' className='p-2 input input-info m-2 rounded-lg' />
			</div>
			<div>
				<label htmlFor="">Description</label>
				<textarea name="description" rows={4} cols={4} value={updatedProduct.description} onChange={(e)=> setUpdatedProduct({...updatedProduct, description: e.target.value})}  id="" className='textarea textarea-info rounded-lg p-2 m-2'></textarea>
			</div>
			<button className='btn btn-info my-2 cursor-pointer'>Update Product</button>
			<button type="button" onClick={()=>setEditingProduct(null)} className='btn btn-info my-2 cursor-pointer'>Cancel</button>
			{/* <button type='submit' className='btn btn-secondary'>
				{isEdit ? 'Update Product': 'Add Product'}
			</button> */}
		</form>
	</div>
  )
}
