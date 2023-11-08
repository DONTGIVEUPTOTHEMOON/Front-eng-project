import { INTERVIWE } from '../../constant/interviwe-data'
import InterviweDetail from './InterviweDetail'
import classes from './Interviwes.module.css'

const Interviwes = () => {
  return (
    <section className={classes.container}>
      <div className={classes.sectionHeader}>
        <div>
          <div className={classes.sectionTitle}>
            <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -960 960 960" width="35">
              <path d="m363-390 117-71 117 71-31-133 104-90-137-11-53-126-53 126-137 11 104 90-31 133ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
            </svg>
            <h1>Stories from real people</h1>
          </div>
        </div>
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
