import { useAuth } from '../providers/AuthProvider'
import classes from './CourseInhome.module.css'

const CourseInhome = () => {
  const { username } = useAuth()

  return (
    <div className={classes.card}>
      <h3>Welcome!</h3>
      <p>{username}</p>
    </div>
  )
}

export default CourseInhome
