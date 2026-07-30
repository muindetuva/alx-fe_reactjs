import { useTodoStore } from '../store/todoStore.js'

export function logTodos() {
  const { todos } = useTodoStore.getState()
  console.log(`Todo count: ${todos.length}`)
  console.log(todos)
}
