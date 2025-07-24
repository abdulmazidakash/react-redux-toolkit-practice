import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increaseByAmount, increment, reset } from './counterSlice';

export default function CounterView() {
	const count =  useSelector((state)=>state.counter.count);
	console.log(count);
	const dispatch = useDispatch();
  return (
	<div>
		<h2 className='bg-amber-600 text-white p-4 rounded-lg font-semibold my-4 text-center'>Count: {count}</h2>
		<button className='btn' onClick={()=>dispatch(increment())}>+ Increment</button>
		<button className='btn' onClick={()=>dispatch(decrement())}>- decrement</button>
		<button className='btn' onClick={()=>dispatch(reset())}> reset</button>
		<button className='btn' onClick={()=>dispatch(increaseByAmount(5))}> IncreaseBy5</button>
	</div>
  )
}
