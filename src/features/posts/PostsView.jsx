import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './postsSlice';

export default function PostsView() {
	// const post = useSelector((state)=>console.log(state))
	const {isLoading, posts, error } = useSelector((state)=>state.posts);
	const dispatch = useDispatch();
	console.log(posts);

	useEffect(()=> {
		dispatch(fetchPosts());
	}, [dispatch])

  return (
	<div className='w-11/12 mx-auto'>
		{isLoading && <p>Loading...</p>}
		{error && <p>{error}</p>}

		<section className='grid grid-cols-3 gap-4 my-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
			{posts && posts.map(post=>{
				return (
					<div className='border shadow border-gray-300 rounded-lg p-4' key={post.id}>
						<h2>Title: {post.title}</h2>
						<h2>Body: {post.body}</h2>
					</div>
				)
			})}
		</section>
	</div>
  )
}
