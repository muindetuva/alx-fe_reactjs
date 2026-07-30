import { create } from 'zustand'

export const useSettingsStore = create((set) => ({
  darkMode: false,
  fontSize: 16,
  fontFamily: 'sans-serif',
  updateSettings: (partial) => set(partial),
}))
