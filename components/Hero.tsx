'use client'

import { motion } from 'framer-motion'
import { FaPhone, FaMapMarkerAlt, FaClock, FaArrowDown } from 'react-icons/fa'

interface HeroProps {
  onBookAppointment: () => void
}

const Hero = ({ onBookAppointment }: HeroProps) => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1540555700478-4be289fbece2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-shadow">
            Welcome to{' '}
            <span className="text-gradient">Platinum Luxury Spa</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-cream-100 max-w-3xl mx-auto leading-relaxed">
            Experience ultimate relaxation and rejuvenation in the heart of Hyderabad.
            Our premium spa treatments will transport you to a world of tranquility and wellness.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4"
              onClick={onBookAppointment}
            >
              Book Your Session
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-dark-800"
            >
              View Services
            </motion.button>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-custom rounded-lg p-6 border border-white/20"
            >
              <FaPhone className="text-maroon-400 text-3xl mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Call Us</h3>
              <p className="text-cream-100">+91 9121289918</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur-custom rounded-lg p-6 border border-white/20"
            >
              <FaMapMarkerAlt className="text-maroon-400 text-3xl mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
              <p className="text-cream-100">KSR Towers, Madhapur, Hyderabad</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white/10 backdrop-blur-custom rounded-lg p-6 border border-white/20"
            >
              <FaClock className="text-maroon-400 text-3xl mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Open Hours</h3>
              <p className="text-cream-100">9:00 AM - 9:00 PM</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={scrollToServices}
          className="text-white hover:text-maroon-400 transition-colors duration-300"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm font-medium">Explore Services</span>
            <FaArrowDown className="animate-bounce text-xl" />
          </div>
        </button>
      </motion.div>
    </section>
  )
}

export default Hero 