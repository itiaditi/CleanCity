import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../page/Home'
import LoginForm from '../components/Login'
import Sidebar from '../dashboard/components/Sidebar'
import AdminDash from '../dashboard/pages/AdminDash'

const AdminRoutes = () => {
  return (
    <div>
         <Routes>
        <Route path="/admin" element={<AdminDash/>}/>
        {/* <Route path="/login" element={<LoginForm/>}/> */}
        
      </Routes>
    </div>
  )
}

export default AdminRoutes
