import { FormEvent, useState } from 'react'
import classes from './SignUp.module.css'
import {} from '../../providers/AuthProvider'
import { useNavigate } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const SignUp = () => {
  const navigate = useNavigate()
  const [name, setName] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmpassword, setConpassword] = useState<string>('')
  const [errMsg, setErrMsg] = useState<string>('')
  const { signup } = useSignup()
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (confirmpassword !== password) {
      setErrMsg('abcde')

      return
    }
    try {
      console.log(name, username, password)
      await signup(name, username, password)
      // await signUp(name, username, password)
      navigate('/login')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form className={classes.loginForm} onSubmit={handleSubmit}>
      <h1>Join the millions learning to code avigate with Archacademy for free</h1>
      <label>Name</label>
      <input className={classes.buttonforCreated} type="text" onChange={(e) => setName(e.target.value)} />

      <label>Username:</label>
      <input className={classes.buttonforCreated} type="text" onChange={(e) => setUsername(e.target.value)} />

      <label>Password:</label>
      <input className={classes.buttonforCreated} type="Password" onChange={(e) => setPassword(e.target.value)} />

      <label>Confirm Password:</label>
      <input className={classes.buttonforCreated} type="Password" onChange={(e) => setConpassword(e.target.value)} />
      {errMsg && <p>{errMsg}</p>}
      <input className={classes.signup} type="submit" value="Sign up" />
    </form>
  )
}

export default SignUp
