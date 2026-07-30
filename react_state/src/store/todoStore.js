import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { createFilterSlice } from './slices/filterSlice.js'
import { createTodosSlice } from './slices/todosSlice.js'

export const useTodoStore = create(
  devtools(
    persist(
      (set, get) => ({
        ...createTodosSlice(set, get),
        ...createFilterSlice(set, get),
      }),
      {
        name: 'todo-storage',
        partialize: (state) => ({ todos: state.todos }),
      },
    ),
    { name: 'todo-store' },
  ),
)
