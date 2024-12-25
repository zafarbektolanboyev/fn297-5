import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../store/counterSlice';

function Home() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch()
  console.log(counter)

  function handleInc(){
    dispatch(increment(1))
  }
  function handleDec(){
    dispatch(decrement(1))
  }

  return (
    <div className='flex flex-col'>
      <Header></Header>
      <div className='flex flex-row gap-5 items-center mt-5 mx-auto'>
        <button onClick={handleInc} className='pl-5 pr-5 pt-2 pb-2 bg-blue-500 rounded-md text-white text-2xl'>Increment</button>
        <h1 className='text-white text-3xl'>{counter}</h1>
        <button onClick={handleDec} className='pl-5 pr-5 pt-2 pb-2 bg-red-500 rounded-md text-white text-2xl'>Decrement</button>
      </div>
    </div>
  )
}

export default Home