import { useCallback, useEffect, useMemo, useState } from 'react'

/**
 * Calculates clamped pagination state and stable navigation callbacks.
 * @param {number} totalItems The total number of available items.
 * @param {number} itemsPerPage The number of items displayed on each page.
 * @returns {{currentPage: number, totalPages: number, nextPage: Function, previousPage: Function, goToPage: Function, startIndex: number, endIndex: number}} Pagination state and controls.
 */
export default function usePagination(totalItems, itemsPerPage = 10) {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(totalItems / itemsPerPage)),
    [totalItems, itemsPerPage],
  )

  const goToPage = useCallback(
    (page) => {
      const nextPage = Math.min(Math.max(1, page), totalPages)
      setCurrentPage(() => nextPage)
    },
    [totalPages],
  )

  const nextPage = useCallback(() => {
    setCurrentPage((page) => Math.min(page + 1, totalPages))
  }, [totalPages])

  const previousPage = useCallback(() => {
    setCurrentPage((page) => Math.max(page - 1, 1))
  }, [])

  useEffect(() => {
    setCurrentPage((page) => Math.min(page, totalPages))
  }, [totalPages])

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems)

  return {
    currentPage,
    totalPages,
    nextPage,
    previousPage,
    goToPage,
    startIndex,
    endIndex,
  }
}
