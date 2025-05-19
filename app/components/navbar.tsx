// components/Navbar.tsx
'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Set initial theme based on system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark')
      setIsDarkMode(true)
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="bg-white dark:bg-black shadow-lg relative z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-indigo-800 dark:text-white"
        >
          Rdoua
        </Link>

        <div className="hidden md:flex space-x-6">
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <Link
              key={item}
              href="/"
              className="nav-link text-black dark:text-white hover:text-black dark:hover:text-white transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="text-gray-700 dark:text-gray-200 hover:text-indigo-800 dark:hover:text-white"
          >
            {isDarkMode ? (
              <Sun className="w-6 h-6" />
            ) : (
              <Moon className="w-6 h-6" />
            )}
          </button>
        </div>

        <button
          onClick={toggleMobileMenu}
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
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <Link
                key={item}
                href="/"
                className="block text-black dark:text-white hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
