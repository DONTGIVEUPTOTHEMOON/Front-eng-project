import { useEffect, useState } from 'react'
import { ContentDTO, UpdateContentDTO } from '../types/dto'
import axios, { AxiosError } from 'axios'

const useContent = (id: string) => {
  const [content, setContent] = useState<ContentDTO | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get<ContentDTO>(`http://localhost:8080/content/${id}`)

        setContent(res.data)
      } catch (err) {
        setError('Data not found')
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [id])

  const editContent = async (updateBody: UpdateContentDTO) => {
    const token = localStorage.getItem('token')

    try {
      await axios.patch(`http://localhost:8080/content/${id}`, updateBody, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
    } catch (err) {
      if (err instanceof AxiosError) throw new Error(err.response?.data.message)
    }
  }

  const deletes = async () => {
    const token = localStorage.getItem('token')
    try {
      await axios.delete(`http://localhost:8080/content/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
    } catch (err) {
      if (err instanceof AxiosError) throw new Error(err.response?.data.message)
    }
  }

  return { content, isLoading, error, editContent, deletes }
}

export default useContent
