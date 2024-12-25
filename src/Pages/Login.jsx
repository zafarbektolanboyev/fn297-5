import React from 'react'

function Login() {
  return (
    <div>
      <form className='flex flex-col mx-auto rounded-md mt-[100px] w-[350px] gap-2 border p-[15px] text-white'>
        <input 
          className='w-full p-[12px] rounded-md border bg-transparent text-gray-100 placeholder-white' 
          type="text" 
          placeholder='Enter username' 
        />
        <input 
          className='w-full p-[12px] rounded-md border bg-transparent text-gray-100 placeholder-white' 
          type="password" 
          placeholder='Enter password' 
        />
        <button className='btn p-[12px] w-full bg-blue-500 rounded-md'>Login</button>
      </form>
    </div>
  )
}

export default Login
