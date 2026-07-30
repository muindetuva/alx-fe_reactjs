import { useEffect, useState } from 'react'

function readInitialTheme() {
  if (typeof window === 'undefined') {
    return 'light'
  }

  return window.localStorage.getItem('react-styling-theme') === 'dark'
    ? 'dark'
    : 'light'
}

function ThemeSwitcher() {
  const [theme, setTheme] = useState(readInitialTheme)

  useEffect(() => {
    const isDark = theme === 'dark'
    document.documentElement.classList.toggle('dark', isDark)
    window.localStorage.setItem('react-styling-theme', theme)
  }, [theme])

  return (
    <button
      className="rounded-lg border border-slate-300 bg-white px-4 py-2 font-semibold text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-soft dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
      type="button"
      onClick={() =>
        setTheme((currentTheme) =>
          currentTheme === 'light' ? 'dark' : 'light',
        )
      }
    >
      Use {theme === 'light' ? 'dark' : 'light'} theme
    </button>
  )
}

export default ThemeSwitcher
