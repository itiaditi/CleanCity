import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import AllRoutes from './Routes/AllRoutes'
import AdminRoutes from './Routes/AdminRoutes'
import Sidebar from './dashboard/components/Sidebar'
import LoginForm from './components/Login'
import Auth from './AuthContext/Auth'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <AllRoutes/>

   <AdminRoutes/>

  {/* <LoginForm/> */}
  </>
  )
}

export default App
