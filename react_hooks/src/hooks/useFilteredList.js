import { useEffect, useMemo } from 'react'
import useDebounce from './useDebounce.js'
import usePagination from './usePagination.js'

/**
 * Composes debouncing, filtering, and pagination for an item collection.
 * @param {Array} items The complete list of items.
 * @param {string} query The current search query.
 * @param {number} itemsPerPage The page size.
 * @returns {{pageItems: Array, filteredItems: Array, debouncedQuery: string, currentPage: number, totalPages: number, nextPage: Function, previousPage: Function, goToPage: Function, startIndex: number, endIndex: number}} Filtered page data and navigation.
 */
export default function useFilteredList(items, query, itemsPerPage = 10) {
  const debouncedQuery = useDebounce(query, 300)
  const filteredItems = useMemo(() => {
    const normalizedQuery = debouncedQuery.trim().toLowerCase()

    if (!normalizedQuery) {
      return items
    }

    return items.filter((item) =>
      JSON.stringify(item).toLowerCase().includes(normalizedQuery),
    )
  }, [items, debouncedQuery])

  const pagination = usePagination(filteredItems.length, itemsPerPage)

  useEffect(() => {
    pagination.goToPage(1)
  }, [debouncedQuery, pagination.goToPage])

  const pageItems = filteredItems.slice(
    pagination.startIndex,
    pagination.endIndex,
  )

  return { pageItems, filteredItems, debouncedQuery, ...pagination }
}
