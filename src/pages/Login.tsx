import { FormEvent, useState } from 'react'
import classes from './Login.module.css'
import { useAuth } from '../providers/AuthProvider'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await login(username, password)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className={classes.container}>
      <img
        className={classes.img}
        src="https://images.unsplash.com/photo-1556565681-67b9cd907d20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
      />
      <form className={classes.loginForm} onSubmit={handleSubmit}>
        <label>Username:</label>
        <input className={classes.buttonforCreated} type="text" onChange={(e) => setUsername(e.target.value)} />

        <label>Password:</label>
        <input className={classes.buttonforCreated} type="Password" onChange={(e) => setPassword(e.target.value)} />

        <input className={classes.buttonforCreated} type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login
