'use client'

import { useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import Link from 'next/link'
import { useTheme } from 'next-themes'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <header className="bg-white dark:bg-black shadow-lg relative z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-black dark:text-white"
        >
          Rdoua.
        </Link>

        <div className="hidden md:flex space-x-6">
          {['Home', 'About', 'Error404', 'Contact'].map((name) => (
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

        <div className="hidden md:flex items-center space-x-4">
          <button onClick={toggleTheme} className="text-black dark:text-white">
            {theme === 'dark' ? (
              <Sun className="w-6 h-6" />
            ) : (
              <Moon className="w-6 h-6" />
            )}
          </button>
        </div>

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
            {['Home', 'About', 'Error404', 'Contact'].map((name) => (
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

            {/* Optional: Show toggle on mobile too */}
            <button
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-200 flex items-center space-x-2"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-5 h-5" /> <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-5 h-5" /> <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
