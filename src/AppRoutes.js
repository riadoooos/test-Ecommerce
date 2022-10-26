import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import IndexPage from './pages/IndexPage'

const AppRoutes = () => {
  return (
    <Router>
      <h1>Fire Ecommerce</h1>
      <Routes>
        <Route path='/' element={<IndexPage />}/>
      </Routes>
    </Router>
  )
}

export default AppRoutes
