import React, { type ReactNode } from 'react'
import '../styles/login.css'

interface AuthLayoutProps {
  children: ReactNode
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return <div className="login-bg">{children}</div>
}

export default AuthLayout
