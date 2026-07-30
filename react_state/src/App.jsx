import { useEffect } from 'react'
import AddTodoForm from './components/AddTodoForm.jsx'
import DarkModeToggle from './components/DarkModeToggle.jsx'
import FilterButtons from './components/FilterButtons.jsx'
import Footer from './components/Footer.jsx'
import TodoList from './components/TodoList.jsx'
import { useSettingsStore } from './store/settingsStore.js'
import { useTodoStore } from './store/todoStore.js'

function App() {
  const todos = useTodoStore((state) => state.todos)
  const filter = useTodoStore((state) => state.filter)
  const darkMode = useSettingsStore((state) => state.darkMode)
  const fontSize = useSettingsStore((state) => state.fontSize)
  const fontFamily = useSettingsStore((state) => state.fontFamily)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  const visibleTodos = todos.filter((todo) => {
    if (filter === 'active') {
      return !todo.completed
    }

    if (filter === 'completed') {
      return todo.completed
    }

    return true
  })

  return (
    <main
      className="app-shell"
      style={{ fontSize: `${fontSize}px`, fontFamily }}
    >
      <header className="app-header">
        <div>
          <p className="eyebrow">Zustand state management</p>
          <h1>Focused Todo List</h1>
        </div>
        <DarkModeToggle />
      </header>

      <section className="todo-panel" aria-label="Todo manager">
        <AddTodoForm />
        <FilterButtons />
        <TodoList todos={visibleTodos} />
        <Footer todos={todos} />
      </section>
    </main>
  )
}

export default App
