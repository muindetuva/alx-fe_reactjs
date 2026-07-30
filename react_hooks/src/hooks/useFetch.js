import { useEffect, useState } from 'react'

/**
 * Fetches JSON data and aborts obsolete requests when the URL changes.
 * @param {string|null} url The endpoint to request, or null to skip fetching.
 * @returns {{data: any, error: Error|null, loading: boolean}} Request state.
 */
export default function useFetch(url) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!url) {
      setData(null)
      setError(null)
      setLoading(false)
      return undefined
    }

    const controller = new AbortController()

    const loadData = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(url, { signal: controller.signal })

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }

        const responseData = await response.json()
        setData(responseData)
      } catch (requestError) {
        if (requestError.name !== 'AbortError') {
          setError(requestError)
          setData(null)
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    loadData()

    return () => {
      controller.abort()
    }
  }, [url])

  return { data, error, loading }
}
