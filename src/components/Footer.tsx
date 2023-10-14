import classes from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={classes.containerFooter}>
      <div className={classes.cardLogo}>
        <h1>Archacdemy</h1>
        <p className={classes.p}>Start studying from the basics For experice within 4 months!</p>
      </div>

      <div className={classes.cardSocial}>
        <h1>Social Media</h1>
        <div className={classes.cardlink}>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
              height="50"
              width="50"
            />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo.png" height="50" width="50" />
          </a>
          <a href="https://bonbon-living.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png" height="50" width="90" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
              height="50"
              width="50"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
export default Footer
