'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { HiGlobeAlt, HiSun, HiMoon } from 'react-icons/hi2'
import { useTranslation } from '@/contexts/TranslationContext'
import { useTheme } from '@/contexts/ThemeContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showLanguageMenu, setShowLanguageMenu] = useState(false)
  const { language, setLanguage, t } = useTranslation()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showLanguageMenu) {
        const target = event.target as Element
        if (!target.closest('[data-language-menu]')) {
          setShowLanguageMenu(false)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [showLanguageMenu])

  const navItems = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.contact, href: '#contact' },
  ]

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/CostaCodesFullStack', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/caua-costa-222900278', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:cauadevcosta@gmail.com', label: 'Email' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-dark-900/95 backdrop-blur-md border-b border-gray-200 dark:border-dark-700'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-2"
          >
            <span 
              className="text-xl font-bold text-gray-900 dark:text-gray-100 cursor-pointer hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
              onClick={() => window.location.reload()}
            >
              Cauã Costa
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="nav-link"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Language and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative" data-language-menu>
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className="text-gray-600 dark:text-gray-300 hover:text-primary-400 transition-colors duration-300 p-2"
                aria-label="Select language"
              >
                <HiGlobeAlt className="w-5 h-5" />
              </motion.button>
              
              <AnimatePresence>
                {showLanguageMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 top-full mt-2 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-lg shadow-lg py-2 min-w-[120px] z-50"
                  >
                    <button
                      onClick={() => {
                        setLanguage('pt')
                        setShowLanguageMenu(false)
                      }}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors duration-200 ${
                        language === 'pt' 
                          ? 'text-primary-400 bg-primary-400/10' 
                          : 'text-gray-600 dark:text-gray-300 hover:text-primary-400 hover:bg-primary-400/5'
                      }`}
                    >
                      🇧🇷 Português
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('en')
                        setShowLanguageMenu(false)
                      }}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors duration-200 ${
                        language === 'en' 
                          ? 'text-primary-400 bg-primary-400/10' 
                          : 'text-gray-600 dark:text-gray-300 hover:text-primary-400 hover:bg-primary-400/5'
                      }`}
                    >
                      🇺🇸 English
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Toggle */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              onClick={toggleTheme}
              className="text-gray-300 hover:text-primary-400 transition-colors duration-300 p-2"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <HiSun className="w-5 h-5" />
              ) : (
                <HiMoon className="w-5 h-5" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 dark:text-gray-300 hover:text-primary-400 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/95 dark:bg-dark-800/95 backdrop-blur-md border-t border-gray-200 dark:border-dark-700"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-600 dark:text-gray-300 hover:text-primary-400 transition-colors duration-300 py-2"
                  >
                    {item.name}
                  </motion.a>
                ))}
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-dark-700">
                  {/* Language Selector Mobile */}
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400">Idioma:</span>
                    <button
                      onClick={() => setLanguage('pt')}
                      className={`px-3 py-1 text-sm rounded transition-colors duration-200 ${
                        language === 'pt' 
                          ? 'text-primary-400 bg-primary-400/10' 
                          : 'text-gray-600 dark:text-gray-300 hover:text-primary-400'
                      }`}
                    >
                      🇧🇷 PT
                    </button>
                    <button
                      onClick={() => setLanguage('en')}
                      className={`px-3 py-1 text-sm rounded transition-colors duration-200 ${
                        language === 'en' 
                          ? 'text-primary-400 bg-primary-400/10' 
                          : 'text-gray-600 dark:text-gray-300 hover:text-primary-400'
                      }`}
                    >
                      🇺🇸 EN
                    </button>
                  </div>

                  {/* Theme Toggle Mobile */}
                  <button
                    onClick={toggleTheme}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-400 transition-colors duration-300 p-2"
                    aria-label="Toggle theme"
                  >
                    {theme === 'dark' ? (
                      <HiSun className="w-5 h-5" />
                    ) : (
                      <HiMoon className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
