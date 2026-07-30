import { useState } from 'react'
import { useTodoStore } from '../store/todoStore.js'

function EditTodoForm({ id, initialText, onCancel }) {
  const [text, setText] = useState(initialText)
  const editTodo = useTodoStore((state) => state.editTodo)

  const handleSubmit = (event) => {
    event.preventDefault()
    const trimmedText = text.trim()

    if (!trimmedText) {
      return
    }

    editTodo(id, trimmedText)
    onCancel()
  }

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor={`edit-${id}`}>
        Edit todo
      </label>
      <input
        id={`edit-${id}`}
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button type="submit">Save</button>
      <button className="button-secondary" type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  )
}

export default EditTodoForm
