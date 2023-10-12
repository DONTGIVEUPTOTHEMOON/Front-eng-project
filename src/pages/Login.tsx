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
      navigate('/profile')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className={classes.container}>
      <img
        className={classes.img}
        src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2855&q=80"
      />
      <div className={classes.containerLogin}>
        <div className={classes.formcontainer}>
          <form className={classes.loginForm} onSubmit={handleSubmit}>
            <h1>Hi! What's your username?</h1>
            <label>Username:</label>
            <input className={classes.postForm} type="text" onChange={(e) => setUsername(e.target.value)} />

            <label>Password:</label>
            <input className={classes.postForm} type="Password" onChange={(e) => setPassword(e.target.value)} />

            <input className={classes.buttonforCreated} type="submit" value="Login" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
