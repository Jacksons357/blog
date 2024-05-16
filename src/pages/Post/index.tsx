import { useCallback, useEffect, useState } from 'react'
import { PostHeader } from './components/PostHeader'
import { IPost } from '../Blog'
import { api } from '../../lib/axios'
import { useParams } from 'react-router-dom'
import { PostContent } from './components/PostContent'

const username = import.meta.env.VITE_GITHUB_USERNAME
const reponame = import.meta.env.VITE_GITHUB_REPONAME

export function Post() {
  const [postData, setPostData] = useState<IPost>({} as IPost)
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  const getPostDetails = useCallback(async () => {
    try {
      setIsLoading(true)

      const response = await api.get(
        `/repos/${username}/${reponame}/issues/${id}`,
      )

      setPostData(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getPostDetails()
  })

  return (
    <>
      <PostHeader isLoading={isLoading} postData={postData} />
      {!isLoading && <PostContent content={postData.body} />}
    </>
  )
}
