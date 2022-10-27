import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import CartPage from './pages/CartPage'


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<IndexPage />}/>
        <Route path='login' element={<LoginPage />}/>
        <Route path='register' element={<RegisterPage />}/>
        <Route path='cart' element={<CartPage />}/>
      </Routes>
    </Router>
  )
}

export default AppRoutes
