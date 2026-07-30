import { useEffect, useState } from 'react'

export default function useFetch(url, validate = (value) => value) {
  const [state, setState] = useState({
    status: 'idle',
    data: null,
    error: null,
  })

  useEffect(() => {
    if (!url) {
      setState({ status: 'idle', data: null, error: null })
      return undefined
    }

    const controller = new AbortController()

    const loadData = async () => {
      setState({ status: 'loading', data: null, error: null })

      try {
        const response = await fetch(url, { signal: controller.signal })

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}.`)
        }

        const rawData = await response.json()
        const parsedData = validate(rawData)

        if (parsedData === null) {
          throw new Error('Received malformed user data.')
        }

        setState({ status: 'success', data: parsedData, error: null })
      } catch (requestError) {
        if (requestError.name !== 'AbortError') {
          setState({ status: 'error', data: null, error: requestError })
        }
      }
    }

    loadData()

    return () => {
      controller.abort()
    }
  }, [url, validate])

  return state
}
