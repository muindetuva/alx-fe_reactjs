import { useState } from 'react'

function EditTodoForm({ todo, onSave, onCancel }) {
  const [text, setText] = useState(todo.text)

  const handleSubmit = (event) => {
    event.preventDefault()
    const trimmedText = text.trim()

    if (!trimmedText) {
      return
    }

    onSave(trimmedText)
  }

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor={`edit-${todo.id}`}>
        Edit todo
      </label>
      <input
        id={`edit-${todo.id}`}
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
