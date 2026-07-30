import { useTheme } from '../context/ThemeContext.jsx'

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button type="button" onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'dark' : 'light'} theme
    </button>
  )
}

export default ThemeToggleButton
