import React from 'react'
import AuthLayout from '../layouts/AuthLayout'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { login } from '../services/authService'
import { showSuccess, showError } from '../utils/toast'
import { useNavigate } from 'react-router-dom'

interface IFormInput {
  mobile_number: string
  password: string
}

const Login: React.FC = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const response = await login(data)
    if (response.success) {
      showSuccess('Login successful!')
      localStorage.setItem('authToken', response.data.token)
      setTimeout(() => navigate('/home'), 1500)
    } else {
      showError(response.message || 'Invalid credentials')
    }
  }

  const handleGuestLogin = () => {
    showSuccess('Logged in as guest')
    localStorage.setItem('isGuest', 'true')
    setTimeout(() => navigate('/home'), 1500)
  }

  const handleRegister = () => {
    showError('Registration feature is currently under development')
  }

  const handleForgotPassword = () => {
    showError('Password recovery feature is currently under development')
  }

  return (
    <AuthLayout>
      <div className="login-card">
        <h3>Welcome to Zyndify</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label>Mobile Number</label>
            <input
              type="text"
              className={`form-control ${errors.mobile_number ? 'is-invalid' : ''}`}
              {...register('mobile_number', {
                required: 'Mobile number is required',
                pattern: { value: /^[0-9]{10}$/, message: 'Enter a valid 10-digit number' },
              })}
            />
            {errors.mobile_number && <div className="invalid-feedback">{errors.mobile_number.message}</div>}
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 5, message: 'Password must be at least 5 characters' },
              })}
            />
            {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
          </div>

          <button type="submit" className="btn btn-primary w-100 mb-3" disabled={isSubmitting}>
            {isSubmitting ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="text-center">
          <button 
            onClick={handleGuestLogin}
            className="btn btn-guest w-100 mb-3"
          >
            Login as Guest
          </button>

          <div className="d-flex justify-content-between mb-3">
            <button 
              onClick={handleRegister}
              className="btn btn-link text-decoration-none"
            >
              Register
            </button>
            <button 
              onClick={handleForgotPassword}
              className="btn btn-link text-decoration-none"
            >
              Forgot Password?
            </button>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Login
