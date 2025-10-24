import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import { ToastContainer } from 'react-toastify'
import Home from '../pages/Home'

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home   />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {/* ToastContainer only once in the root */}
      <ToastContainer />
    </BrowserRouter>
  )
}

export default AppRoutes
