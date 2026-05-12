import { FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle({ className = '' }) {
  const { dark, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`w-9 h-9 flex items-center justify-center rounded-full transition-colors
        bg-slate-100 hover:bg-slate-200
        dark:bg-slate-700 dark:hover:bg-slate-600
        text-slate-600 dark:text-yellow-300
        ${className}`}
    >
      {dark
        ? <FaSun size={15} aria-hidden="true" />
        : <FaMoon size={15} aria-hidden="true" />
      }
    </button>
  )
}
