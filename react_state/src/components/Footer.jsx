import { useTodoStore } from '../store/todoStore.js'

function Footer({ todos }) {
  const clearCompleted = useTodoStore((state) => state.clearCompleted)
  const remainingCount = todos.filter((todo) => !todo.completed).length
  const completedCount = todos.length - remainingCount

  return (
    <footer className="todo-footer">
      <span>
        {remainingCount} {remainingCount === 1 ? 'item' : 'items'} remaining
      </span>
      <button
        className="button-secondary"
        type="button"
        onClick={clearCompleted}
        disabled={completedCount === 0}
      >
        Clear completed
      </button>
    </footer>
  )
}

export default Footer
