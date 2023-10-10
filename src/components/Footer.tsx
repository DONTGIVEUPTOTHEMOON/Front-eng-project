import { Link } from 'react-router-dom'
import classes from './Footer.module.css'
import classe from './Navbar.module.css'

const Footer = () => {
  return (
    <footer className={classes.navbar}>
      <div className={classes.menu}>
        <image></image>
        <h1>Archacdemy</h1>
        <p>Start studying from the basics For experice within 4 months!</p>
      </div>

      <div className={classes.menu}>
        <h1>Social Media</h1>
        <div>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            IG
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            linkin
          </a>
          <a href="https://bonbon-living.com/" target="_blank" rel="noopener noreferrer">
            www
          </a>
        </div>
      </div>
      <div>
        <Link to="/login" className={classe.login}>
          Login
        </Link>
      </div>
    </footer>
  )
}
export default Footer
