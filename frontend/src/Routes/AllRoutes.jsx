import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../page/Home';
import LoginForm from '../components/Login';
const AllRoutes = () => {
  return (
    <div>
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        
      </Routes>
    </div>
  )
}

export default AllRoutes;
