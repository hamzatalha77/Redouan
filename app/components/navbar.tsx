'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches

      if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add('dark')
        setIsDarkMode(true)
      } else {
        document.documentElement.classList.remove('dark')
        setIsDarkMode(false)
      }
    }
  }, [])

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDarkMode(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDarkMode(true)
    }
  }

  return (
    <header className="bg-white dark:bg-black shadow-lg relative z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-indigo-800 dark:text-white"
        >
          Rdoua.
        </Link>

        <div className="hidden md:flex space-x-6">
          {['Home', 'About', 'Services', 'Contact'].map((name) => (
            <Link
              key={name}
              href={`/${
                name.toLowerCase() === 'home' ? '' : name.toLowerCase()
              }`}
              className="text-black dark:text-white hover:text-black dark:hover:text-white transition-colors duration-300"
            >
              {name}
            </Link>
          ))}
        </div>

        {isDarkMode !== null && (
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="text-gray-700 dark:text-gray-200"
            >
              {isDarkMode ? (
                <Sun className="w-6 h-6" />
              ) : (
                <Moon className="w-6 h-6" />
              )}
            </button>
          </div>
        )}

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-700 dark:text-gray-200"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-black shadow-lg absolute w-full left-0 animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {['Home', 'About', 'Services', 'Contact'].map((name) => (
              <Link
                key={name}
                href={`/${
                  name.toLowerCase() === 'home' ? '' : name.toLowerCase()
                }`}
                className="block text-black dark:text-white hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
