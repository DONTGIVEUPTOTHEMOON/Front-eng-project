import { useAuth } from '../../providers/AuthProvider'
import classes from './Greeting.module.css'

const Greeting = () => {
  const { username } = useAuth()

  return (
    <div>
      <div className={classes.containermain}>
        <div className={classes.containerinfoUser}>
          <div className={classes.containerprofile}>
            <div className={classes.cardimg}>
              <img
                className={classes.profileImg}
                src="https://images.unsplash.com/photo-1540331547168-8b63109225b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2165&q=80"
              />
            </div>
          </div>
          <div className={classes.cardcontent}>
            <h1 className={classes.username}>{username}</h1>
            <p className={classes.status}>'Life is too short to waste it'</p>
          </div>
        </div>
        <div>
          <h1 className={classes.cardStatistic}>Tuemaster</h1>
        </div>
      </div>
    </div>
  )
}

export default Greeting
