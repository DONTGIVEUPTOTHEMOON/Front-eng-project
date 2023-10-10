import { InterviweDTO } from '../types/dto'
import classes from './InterviweDetail.module.css'

interface IInterviweProps {
  interviwe: InterviweDTO
}

const InterviweDetail = ({ interviwe }: IInterviweProps) => {
  return (
    <div className={classes.container}>
      <div className={classes.metaData}>
        <h2 className={classes.blogHeader}>{interviwe.profile}</h2>
      </div>
      <div>
        <p className={classes.author}>{interviwe.user}</p>
        <p className={classes.dateAndTime}>{interviwe.date}</p>
        <p className={classes.description}>{interviwe.description}</p>
      </div>
    </div>
  )
}
export default InterviweDetail
