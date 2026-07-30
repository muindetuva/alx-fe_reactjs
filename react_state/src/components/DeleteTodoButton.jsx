import { useTodoStore } from '../store/todoStore.js'

function DeleteTodoButton({ todoId }) {
  const deleteTodo = useTodoStore((state) => state.deleteTodo)

  return (
    <button
      className="button-danger"
      type="button"
      onClick={() => deleteTodo(todoId)}
      aria-label="Delete todo"
    >
      Delete
    </button>
  )
}

export default DeleteTodoButton
