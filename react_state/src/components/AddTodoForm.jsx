import { useState } from 'react'
import { useTodoStore } from '../store/todoStore.js'

function AddTodoForm() {
  const [text, setText] = useState('')
  const addTodo = useTodoStore((state) => state.addTodo)

  const handleSubmit = (event) => {
    event.preventDefault()
    const trimmedText = text.trim()

    if (!trimmedText) {
      return
    }

    addTodo(trimmedText)
    setText('')
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <label htmlFor="new-todo">New todo</label>
      <div className="input-row">
        <input
          id="new-todo"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="What needs to be done?"
        />
        <button type="submit">Add todo</button>
      </div>
    </form>
  )
}

export default AddTodoForm
