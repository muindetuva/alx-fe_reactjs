import { useTheme } from '../context/ThemeContext.jsx'

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button className="button-secondary" type="button" onClick={toggleTheme}>
      Use {theme === 'light' ? 'dark' : 'light'} theme
    </button>
  )
}

export default ThemeToggleButton
