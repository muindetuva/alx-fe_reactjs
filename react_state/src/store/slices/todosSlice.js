export const createTodosSlice = (set, get) => ({
  todos: [],

  addTodo: (text) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: crypto.randomUUID(),
          text,
          completed: false,
        },
      ],
    })),

  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo,
      ),
    })),

  editTodo: (id, text) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, text } : todo,
      ),
    })),

  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),

  clearCompleted: () => {
    const completedTodos = get().todos.filter((todo) => todo.completed)
    console.log(`Clearing ${completedTodos.length} completed todos`)
    set((state) => ({
      todos: state.todos.filter((todo) => !todo.completed),
    }))
  },
})
