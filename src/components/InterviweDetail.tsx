import { InterviweDTO } from '../types/dto'
import classes from './InterviweDetail.module.css'

interface InterviweProps {
  interviwe: InterviweDTO
}

const InterviweDetail = ({ interviwe }: InterviweProps) => {
  return (
    <div className={classes.container}>
      <div className={classes.containercardimg}>
        <div className={classes.containercard}>
          <div className={classes.cardimg}>
            <img className={classes.img} src={interviwe.thumbnailUrl} />
          </div>
        </div>

        <div>
          <p className={classes.author}>{interviwe.user}</p>
          <p className={classes.dateAndTime}>{interviwe.date}</p>
          <p className={classes.description}>{interviwe.description}</p>
        </div>
      </div>
    </div>
  )
}
export default InterviweDetail
