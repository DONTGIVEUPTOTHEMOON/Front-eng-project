import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'
import useContent from '../hooks/useContent'
import classes from './PostDetail.module.css'
import ReactPlayer from 'react-player'
import { useState } from 'react'
import { FormEvent } from 'react'
import { Rating, styled } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Modal } from 'antd'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

const PostDetail = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { username } = useAuth()
  const [open, setOpen] = useState(false)
  const { content, isLoading, error, deletes } = useContent(id || '1')
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [modalText, setModalText] = useState('You cannot undo this action.')
  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },
  })

  const handledelete = async (e: FormEvent) => {
    setModalText('Deleting...')
    setConfirmLoading(true)
    e.preventDefault()

    try {
      await deletes()
      toast.success('Delete Successful')
      navigate('/community')
    } catch (err) {
      if (err instanceof Error) toast.error(err.message)
      // console.log(err)
    } finally {
      setOpen(false)
      setConfirmLoading(false)
    }
  }
  if (isLoading) return <h1>Loading...</h1>
  if (error) return <p>{error}</p>

  return (
    <div className={classes.container}>
      {content && (
        <>
          <div className={classes.containerUrl}>
            <div className={classes.cardUrl}>
              <div className={classes.Url}>
                <ReactPlayer width="100%" height="100%" url={content.videoUrl} />
              </div>
            </div>
            <div className={classes.containercontent}>
              <div>
                <div className={classes.fontmian}>
                  <p className={classes.fontmian}>{content.videoTitle}</p>
                  <p className={classes.font}>{content.creatorName}</p>
                </div>

                <p>{content.comment}</p>
                <div>
                  <p>{content.postedBy.username}</p>
                  <p>{content.createdAt}</p>
                  <p>{content.updatedAt}</p>
                </div>
                {username === content.postedBy.username && (
                  <div className="flex gap-12">
                    <Link to={`/editcontent/${id}`} className="font-semibold text-lg text-orange-500">
                      Edit
                    </Link>
                    <button onClick={() => setOpen(true)} className="font-semibold text-lg text-red-500">
                      delete
                    </button>
                  </div>
                )}
              </div>

              <div className={classes.rathing}>
                <StyledRating
                  name="customized-color"
                  value={content.rating}
                  readOnly
                  getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
                  icon={<FavoriteIcon fontSize="inherit" />}
                  emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                />
              </div>
            </div>
          </div>
          <Modal
            title="Do you want to delete this content?"
            open={open}
            onOk={handledelete}
            confirmLoading={confirmLoading}
            onCancel={() => setOpen(false)}
          >
            <p>{modalText}</p>
          </Modal>
        </>
      )}
    </div>
  )
}

export default PostDetail
