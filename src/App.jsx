import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import ErrorPage from './Pages/ErrorPage'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Products from './Pages/Products'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </div>
  )
}

export default App
