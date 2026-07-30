import { useEffect } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { useSettingsStore } from '../store/settingsStore.js'

function DarkModeToggle() {
  const { darkMode, updateSettings } = useSettingsStore(
    useShallow((state) => ({
      darkMode: state.darkMode,
      updateSettings: state.updateSettings,
    })),
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <button
      className="button-secondary"
      type="button"
      onClick={() => updateSettings({ darkMode: !darkMode })}
    >
      Use {darkMode ? 'light' : 'dark'} mode
    </button>
  )
}

export default DarkModeToggle
