'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaStar,
  FaInstagram,
  FaFacebook,
  FaWhatsapp
} from 'react-icons/fa'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import BookingModal from '@/components/BookingModal'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const openBookingModal = () => setIsBookingModalOpen(true)
  const closeBookingModal = () => setIsBookingModalOpen(false)

  if (isLoading) {
    return (
      <div className="min-h-screen bg-spa-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gold-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-serif text-spa-800">Platinum Luxury Spa</h2>
          <p className="text-spa-600">Loading your wellness journey...</p>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-cream-50">
      <Header onBookAppointment={openBookingModal} />
      <Hero onBookAppointment={openBookingModal} />
      <Services onBookAppointment={openBookingModal} />
      <About />
      <Testimonials onBookAppointment={openBookingModal} />
      <Contact onBookAppointment={openBookingModal} />
      <Footer />
      <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />
    </main>
  )
} 