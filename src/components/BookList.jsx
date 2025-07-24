import React from 'react'
import { useSelector } from 'react-redux'

export default function BookList() {
	useSelector((state)=>console.log(state.book))
  return (
	<div>BookList</div>
  )
}
