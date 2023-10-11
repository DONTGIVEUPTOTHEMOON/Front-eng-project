import { useState } from 'react'
import { ContentDTO } from '../types/dto'
import classes from './Content.module.css'
import { Link } from 'react-router-dom'

interface IContentProps {
  content: ContentDTO
}

const Content = ({ content }: IContentProps) => {
  const [isShow, setIsShow] = useState<boolean>(false)

  const toggleShow = () => {
    setIsShow(!isShow)
  }

  return (
    <div className={classes.post}>
      <Link to={`/post/${content.id}`} style={{ textDecoration: 'none', color: 'white' }}>
        <img className={classes.thumbnailurl} src={content.thumbnailUrl}></img>
        <p>title: {content.videoTitle}</p>
        <h4>{content.comment}</h4>
        <p>{content.postedBy.username}</p>
        <p>{content.rating}</p>
      </Link>

      {isShow && <p style={{ textDecoration: 'bold', color: 'white' }}>more post info...</p>}
      <button onClick={toggleShow} style={{ textDecoration: 'bold', color: 'blue' }}>
        {isShow ? 'Show Less' : 'Show More'}
      </button>
    </div>
  )
}
export default Content
