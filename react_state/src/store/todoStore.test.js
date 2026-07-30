import { beforeEach, describe, expect, it } from 'vitest'
import { useTodoStore } from './todoStore.js'

describe('todoStore', () => {
  beforeEach(() => {
    window.localStorage.clear()
    useTodoStore.setState({ todos: [], filter: 'all' })
  })

  it('adds a todo with a stable shape', () => {
    useTodoStore.getState().addTodo('Learn Zustand')
    const [todo] = useTodoStore.getState().todos

    expect(useTodoStore.getState().todos).toHaveLength(1)
    expect(todo.text).toBe('Learn Zustand')
    expect(todo.completed).toBe(false)
    expect(typeof todo.id).toBe('string')
  })

  it('toggles a todo immutably', () => {
    useTodoStore.getState().addTodo('Test the store')
    const originalTodo = useTodoStore.getState().todos[0]

    useTodoStore.getState().toggleTodo(originalTodo.id)
    const updatedTodo = useTodoStore.getState().todos[0]

    expect(updatedTodo.completed).toBe(true)
    expect(updatedTodo).not.toBe(originalTodo)
  })
})
