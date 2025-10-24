interface LoginResponse {
  success: boolean
  message?: string
  data?: any // you can type this according to your API response
}

interface LoginPayload {
  mobile_number: string
  password: string
}

export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  try {
    const response = await fetch('https://tailboys.com/dev/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    const data = await response.json()

    if (response.ok) {
      return { success: true, data }
    } else {
      return { success: false, message: data.message || 'Login failed' }
    }
  } catch (error) {
    return { success: false, message: 'Network error' }
  }
}
