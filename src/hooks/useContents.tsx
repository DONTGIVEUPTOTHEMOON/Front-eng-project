import { useEffect, useState } from 'react'
import { ContentsDTO, CreateContentDTO } from '../types/dto'
import axios, { AxiosError } from 'axios'

const useContents = () => {
  const [contents, setContents] = useState<ContentsDTO | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get<ContentsDTO>('http://localhost:8080/content')

        console.log(res.data)
        setContents(res.data)
      } catch (err) {
        if (err instanceof AxiosError) setError(err.response?.data.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const createContent = async (newVideoUrl: string, newComment: string, newRating: number) => {
    const token = localStorage.getItem('token')
    const newContentBody: CreateContentDTO = {
      videoUrl: newVideoUrl,
      comment: newComment,
      rating: newRating,
    }

    setIsSubmitting(true)
    try {
      const res = await axios.post<CreateContentDTO>('http://localhost:8080/content', newContentBody, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })

      console.log(res.data)
    } catch (err) {
      if (err instanceof AxiosError) throw new Error(err.response?.data.message)
    } finally {
      setIsLoading(false)
    }
  }

  return { contents, isLoading, error, isSubmitting, createContent }
}

export default useContents
