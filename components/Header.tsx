'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaMapMarkerAlt, FaBars, FaTimes } from 'react-icons/fa'

interface HeaderProps {
  onBookAppointment: () => void
}

const Header = ({ onBookAppointment }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-custom shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-maroon-400 to-maroon-600 rounded-full flex items-center justify-center">
              <span className="text-white font-serif font-bold text-xl">P</span>
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-dark-800">
                Platinum Luxury Spa
              </h1>
              <p className="text-xs text-maroon-600 font-medium">Premium Wellness & Relaxation</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-dark-700 hover:text-maroon-500 font-medium transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-dark-700">
              <FaPhone className="text-maroon-500" />
              <span className="text-sm font-medium">+91 9121289918</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              onClick={onBookAppointment}
            >
              Book Appointment
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-dark-700 hover:text-maroon-500 transition-colors"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-spa-200 bg-white/95 backdrop-blur-custom"
          >
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 text-dark-700 hover:text-maroon-500 hover:bg-cream-50 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 py-3 border-t border-cream-200">
                <div className="flex items-center space-x-2 text-dark-700 mb-3">
                  <FaPhone className="text-maroon-500" />
                  <span className="text-sm font-medium">+91 9121289918</span>
                </div>
                <div className="flex items-center space-x-2 text-dark-700 mb-4">
                  <FaMapMarkerAlt className="text-maroon-500" />
                  <span className="text-sm">KSR Towers, Madhapur, Hyderabad</span>
                </div>
                <button className="btn-primary w-full" onClick={onBookAppointment}>
                  Book Appointment
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  )
}

export default Header 