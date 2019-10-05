import { useState, useEffect } from 'react'

const useFetch = url => {
  const [response, setResponse] = useState()
  const [errors, setError] = useState()
  
  useEffect(() => {
    async function fetchInfo() {
      (await fetch(url))
        .then(res => res.json())
        .then(res => setResponse(res))
        .catch(err => setError(err));
    } 
    fetchInfo() 
  }, [url])

  return { response, errors }
}

export default useFetch