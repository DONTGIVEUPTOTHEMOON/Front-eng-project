import { FormEvent, useState } from 'react'
import classes from './Create.module.css'
import useContents from '../hooks/useContents'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const { isSubmitting, createContent } = useContents()
  const navigate = useNavigate()
  const [newVideoUrl, setNewVideoUrl] = useState<string>('')
  const [newComment, setNewComment] = useState<string>('')
  const [newRating, setNewRating] = useState<number>(0)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await createContent(newVideoUrl, newComment, newRating)

      setNewVideoUrl('')
      setNewComment('')
      setNewRating(0)

      navigate('/')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <form className={classes.postForm} onSubmit={handleSubmit}>
      <h2>Share your content</h2>
      <label>Your Video URL</label>
      <input
        className={classes.buttonforCreated}
        type="Url"
        value={newVideoUrl}
        onChange={(e) => setNewVideoUrl(e.target.value)}
        required
      />
      <label>Comment</label>
      <input
        className={classes.buttonforCreated}
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        required
      />
      <label>Rating</label>
      <input
        className={classes.buttonforCreated}
        type="text"
        value={newRating}
        onChange={(e) => setNewRating(Number(e.target.value))}
        required
      />

      <button className={classes.buttonforCreated} type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  )
}

export default Create
