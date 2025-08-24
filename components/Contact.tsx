'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaTwitter
} from 'react-icons/fa'

interface ContactProps {
  onBookAppointment: () => void
}

const Contact = ({ onBookAppointment }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      details: '+91 9121289918',
      link: 'tel:+919121289918'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      details: '+91 9121289918',
      link: 'https://wa.me/919121289918'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: 'info@platinumluxuryspa.com',
      link: 'mailto:info@platinumluxuryspa.com'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      details: 'KSR Towers, Madhapur, Hyderabad, Telangana',
      link: 'https://maps.google.com/?q=KSR+Towers+Madhapur+Hyderabad'
    },
    {
      icon: FaClock,
      title: 'Opening Hours',
      details: 'Monday - Sunday: 9:00 AM - 9:00 PM',
      link: null
    }
  ]

  const services = [
    'Swedish Massage',
    'Deep Tissue Massage',
    'Aromatherapy Massage',
    'Hot Stone Massage',
    'Facial Treatment',
    'Body Scrub & Wrap',
    'Other'
  ]

  return (
    <section id="contact" className="section-padding bg-cream-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-800 mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Ready to start your wellness journey? Contact us today to book your appointment
            or learn more about our services. We're here to help you achieve ultimate relaxation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-serif font-bold text-dark-800 mb-6">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-spa-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-spa-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-dark-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-spa-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-dark-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-spa-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-spa-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your wellness goals or any questions you have..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn-primary w-full text-lg py-4"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-dark-800 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-maroon-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-maroon-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-800 mb-1">{info.title}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          target={info.link.startsWith('http') ? '_blank' : '_self'}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                          className="text-dark-600 hover:text-maroon-500 transition-colors"
                        >
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-dark-600">{info.details}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-dark-800 mb-6">
                Follow Us
              </h3>
              <p className="text-dark-600 mb-6">
                Stay connected with us on social media for the latest updates, special offers,
                and wellness tips.
              </p>

              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="w-12 h-12 bg-maroon-100 rounded-full flex items-center justify-center text-maroon-600 hover:bg-maroon-500 hover:text-white transition-colors"
                >
                  <FaInstagram size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="w-12 h-12 bg-maroon-100 rounded-full flex items-center justify-center text-maroon-600 hover:bg-maroon-500 hover:text-white transition-colors"
                >
                  <FaFacebook size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="w-12 h-12 bg-maroon-100 rounded-full flex items-center justify-center text-maroon-600 hover:bg-maroon-500 hover:text-white transition-colors"
                >
                  <FaTwitter size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://wa.me/919121289918"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 hover:bg-green-500 hover:text-white transition-colors"
                >
                  <FaWhatsapp size={20} />
                </motion.a>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-dark-800 to-dark-900 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-serif font-bold mb-4">
                Book Your Session Today
              </h3>
              <p className="text-cream-200 mb-6">
                Don't wait to start your wellness journey. Book your appointment now and
                experience the luxury you deserve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary bg-maroon-500 hover:bg-maroon-600"
                  onClick={onBookAppointment}
                >
                  Book Appointment
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary border-white text-white hover:bg-white hover:text-dark-800"
                  onClick={onBookAppointment}
                >
                  Call Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 