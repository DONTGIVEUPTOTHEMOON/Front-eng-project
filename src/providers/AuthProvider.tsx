import { ReactNode, createContext, useContext, useState } from 'react'
import { CredentialDTO, LoginDTO, SignUpDTO } from '../types/dto'
import axios, { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'

interface IAuthProviderProps {
  children: ReactNode
}

interface IAuthContextType {
  isLoggedIn: boolean
  username: string | null
  login: (username: string, password: string) => Promise<void>
  signup: (registerBody: SignUpDTO) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<IAuthContextType | null>(null)
export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) throw new Error('useAuth must be used within AuthProvider')

  return context
}
const token = localStorage.getItem('token')
const user = localStorage.getItem('username')

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedin] = useState<boolean>(!!token)
  const [username, setUsername] = useState<string | null>(user)

  const login = async (username: string, password: string) => {
    const loginBody: LoginDTO = { username, password }
    try {
      const res = await axios.post<CredentialDTO>('http://localhost:8080/auth/login', loginBody, {
        headers: { 'Content-Type': 'application/json' },
      })

      localStorage.setItem('token', res.data.accessToken)
      localStorage.setItem('username', username)
      setIsLoggedin(true)
      setUsername(username)
    } catch (err) {
      if (err instanceof AxiosError) throw new Error(err.response?.data.message)
    }
  }

  const signup = async (registerBody: SignUpDTO) => {
    try {
      await axios.post('http://localhost:8080/user', registerBody, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
    } catch (err) {
      if (err instanceof AxiosError) throw new Error(err.response?.data.message)
    }
  }

  const logout = () => {
    localStorage.clear
    setIsLoggedin(false)
    setUsername(null)

    navigate('/')
  }
  return <AuthContext.Provider value={{ isLoggedIn, login, logout, signup, username }}>{children}</AuthContext.Provider>
}

export default AuthProvider
