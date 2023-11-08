import { FormEvent, useState } from 'react'
import ReactStars from 'react-stars'

import classes from './Create.module.css'
import useContents from '../../../hooks/useContents'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const { createContent } = useContents()
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

      navigate('/community')
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

      <div className="flex items-center gap-2">
        <label>Rating:</label>
        <ReactStars
          count={5}
          value={newRating}
          onChange={(newRating) => setNewRating(newRating)}
          size={24}
          color2={'#ffd700'}
          half={false}
        />
      </div>
      <button className="bg-orange-500 p-3 rounded-lg text-white hover:bg-orange-600">Submit</button>
    </form>
  )
}

export default Create
