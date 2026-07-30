import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import useCounter from '../useCounter.js'

describe('useCounter', () => {
  it('increments, decrements, and resets synchronously', () => {
    const { result } = renderHook(() => useCounter(4))

    expect(result.current.count).toBe(4)

    act(() => result.current.increment())
    expect(result.current.count).toBe(5)

    act(() => result.current.decrement())
    expect(result.current.count).toBe(4)

    act(() => {
      result.current.increment()
      result.current.increment()
    })
    expect(result.current.count).toBe(6)

    act(() => result.current.reset())
    expect(result.current.count).toBe(4)
  })
})
