import { useState } from 'react'
import { useTodoStore } from '../store/todoStore.js'
import DeleteTodoButton from './DeleteTodoButton.jsx'
import EditTodoForm from './EditTodoForm.jsx'

function TodoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false)
  const toggleTodo = useTodoStore((state) => state.toggleTodo)
  const editTodo = useTodoStore((state) => state.editTodo)

  const saveEdit = (text) => {
    editTodo(todo.id, text)
    setIsEditing(false)
  }

  if (isEditing) {
    return (
      <li className="todo-item">
        <EditTodoForm
          todo={todo}
          onSave={saveEdit}
          onCancel={() => setIsEditing(false)}
        />
      </li>
    )
  }

  return (
    <li className="todo-item">
      <label className="todo-label">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span className={todo.completed ? 'todo-completed' : ''}>
          {todo.text}
        </span>
      </label>
      <div className="todo-actions">
        <button
          className="button-secondary"
          type="button"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
        <DeleteTodoButton todoId={todo.id} />
      </div>
    </li>
  )
}

export default TodoItem
