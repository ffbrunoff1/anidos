import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Heart, BookOpen } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'livros', label: 'Livros' },
    { id: 'contato', label: 'Contato' }
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-primary-100' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('inicio')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <Heart 
                className={`h-8 w-8 ${
                  isScrolled ? 'text-primary-600' : 'text-white'
                } transition-colors duration-300`} 
                fill="currentColor"
              />
              <BookOpen 
                className={`absolute top-1 left-1 h-4 w-4 ${
                  isScrolled ? 'text-accent-500' : 'text-primary-200'
                } transition-colors duration-300`}
              />
            </div>
            <span 
              className={`text-2xl font-bold font-serif ${
                isScrolled ? 'text-secondary-800' : 'text-white'
              } transition-colors duration-300`}
            >
              Anidos
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-semibold transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-secondary-700 hover:text-primary-600' 
                    : 'text-white hover:text-primary-200'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.button>
            ))}
            
            <motion.button
              onClick={() => window.open('', '_blank')}
              className="btn-primary"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Adquira Agora
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMenu}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled 
                ? 'text-secondary-700 hover:bg-primary-50' 
                : 'text-white hover:bg-white/10'
            }`}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isMenuOpen ? 'auto' : 0, 
            opacity: isMenuOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-primary-100 m-4 p-6">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 text-secondary-700 font-semibold hover:text-primary-600 transition-colors duration-300"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item.label}
              </motion.button>
            ))}
            
            <motion.button
              onClick={() => window.open('', '_blank')}
              className="btn-primary w-full mt-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              Adquira Agora
            </motion.button>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
}