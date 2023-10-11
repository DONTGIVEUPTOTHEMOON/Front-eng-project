import { useNavigate, useParams } from 'react-router-dom'
import useContent from '../hooks/useContent'
import classes from './PostDetail.module.css'
import ReactPlayer from 'react-player'
import { FormEvent } from 'react'
import { Rating, styled } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const PostDetail = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { content, isLoading, error, deletes } = useContent(id || '1')
  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },
  })
  const handledelete = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await deletes()
      navigate('/community')
    } catch (err) {
      console.log(err)
    }
  }
  if (isLoading) return <h1>Loading...</h1>
  if (error) return <p>{error}</p>

  return (
    <div className={classes.container}>
      {content && (
        <>
          <div>
            <h1>{content.videoTitle}</h1>
            <h5>{content.creatorName}</h5>
          </div>
          <div>
            <ReactPlayer url={content.videoUrl} />
          </div>
          <div>
            <p>{content.comment}</p>
            <div>
              <p>{content.rating}</p>
              <p>{content.postedBy.username}</p>
              <p>{content.createdAt}</p>
              <p>{content.updatedAt}</p>
            </div>
            <button onClick={handledelete}>delete</button>
          </div>

          <StyledRating
            name="customized-color"
            value={content.rating}
            readOnly
            getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
            icon={<FavoriteIcon fontSize="inherit" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          />
        </>
      )}
    </div>
  )
}

export default PostDetail
