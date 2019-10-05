import { useState, useEffect } from 'react'

const useFetch = url => {
  const [response, setResponse] = useState([])
  const [errors, setError] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchInfo() {
      setLoading(true)
      try {
        const response = await fetch(url)
        const result = await response.json()
        setResponse(result)
      } catch (error) {
        setError(error)
      }
      setLoading(false)
    }
    fetchInfo()
  }, [url])

  return { response, loading, errors }
}

export default useFetch