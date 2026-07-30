import TodoItem from './TodoItem.jsx'

function TodoList({ todos }) {
  if (todos.length === 0) {
    return <p className="empty-state">No todos match this filter.</p>
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList
