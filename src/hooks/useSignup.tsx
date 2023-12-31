import axios from 'axios'
import { SignUpDTO } from '../types/dto'

const useSignup = () => {
  const signup = async (name: string, username: string, password: string) => {
    const body: SignUpDTO = {
      name: name,
      username: username,
      password: password,
    }
    try {
      await axios.post(`https://api.learnhub.thanayut.in.th/user`, body)
    } catch (err) {
      throw new Error('sign agian ja')
    }
  }
  return { signup }
}

export default useSignup
