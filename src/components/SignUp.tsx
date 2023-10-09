import { FormEvent, useState } from 'react'
import classes from './SignUp.module.css'
import { useAuth } from '../providers/AuthProvider'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
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
    <form className={classes.loginForm} onSubmit={handleSubmit}>
      <h1>Join the millions learning to code avigatewith Codecademy for free</h1>
      <label>Your Name:</label>
      <input className={classes.buttonforCreated} type="text" onChange={(e) => setUsername(e.target.value)} />

      <label>Username:</label>
      <input className={classes.buttonforCreated} type="text" onChange={(e) => setUsername(e.target.value)} />

      <label>Password:</label>
      <input className={classes.buttonforCreated} type="Password" onChange={(e) => setPassword(e.target.value)} />

      <label>Confirm Password:</label>
      <input className={classes.buttonforCreated} type="Password" onChange={(e) => setPassword(e.target.value)} />

      <input className={classes.signup} type="submit" value="Sign up" />
    </form>
  )
}

export default SignUp
