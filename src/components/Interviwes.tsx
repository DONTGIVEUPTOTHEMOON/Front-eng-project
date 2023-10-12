import { INTERVIWE } from '../constant/interviwe-data'
import InterviweDetail from './InterviweDetail'
import classes from './Interviwes.module.css'

const Interviwes = () => {
  return (
    <section className={classes.container}>
      <div className={classes.sectionHeader}>
        <div>
          <div className={classes.sectionTitle}>
            <svg width="18" height="19" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="16" height="17" fill="none" stroke="currentColor" strokeWidth="2" />
              <rect x="4" y="4" width="10" height="2" fill="currentColor" stroke="none" />
              <rect x="4" y="8" width="8" height="2" fill="currentColor" stroke="none" />
              <rect x="4" y="12" width="5" height="2" fill="currentColor" stroke="none" />
            </svg>
            <h1>Stories from real people</h1>
          </div>
          <p>Whtch and read storise from the Arahacademy community</p>
        </div>
        <p className={classes.viewAll}>Explore more stories</p>
      </div>
      <div className={classes.blogContainer}>
        {INTERVIWE.map((interviwe) => {
          return <InterviweDetail key={interviwe.thumbnailUrl} interviwe={interviwe} />
        })}
      </div>
    </section>
  )
}
export default Interviwes
