'use client'

import { motion } from 'framer-motion'
import {
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaArrowUp
} from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      'Swedish Massage',
      'Deep Tissue Massage',
      'Aromatherapy Massage',
      'Hot Stone Massage',
      'Facial Treatment',
      'Body Scrub & Wrap'
    ],
    company: [
      'About Us',
      'Our Team',
      'Careers',
      'Privacy Policy',
      'Terms of Service',
      'Contact Us'
    ],
    support: [
      'FAQ',
      'Booking Guide',
      'Cancellation Policy',
      'Gift Cards',
      'Membership',
      'Customer Support'
    ]
  }

  const socialLinks = [
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaWhatsapp, href: 'https://wa.me/919121289918', label: 'WhatsApp' }
  ]

  return (
    <footer className="bg-dark-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-maroon-400 to-maroon-600 rounded-full flex items-center justify-center">
                <span className="text-white font-serif font-bold text-xl">P</span>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold">Platinum Luxury Spa</h3>
                <p className="text-sm text-cream-300">Premium Wellness & Relaxation</p>
              </div>
            </div>

            <p className="text-cream-300 mb-6 leading-relaxed">
              Experience ultimate relaxation and rejuvenation in the heart of Hyderabad.
              Our premium spa treatments will transport you to a world of tranquility and wellness.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-cream-300">
                <FaPhone className="text-maroon-400" />
                <span>+91 9121289918</span>
              </div>
              <div className="flex items-center space-x-3 text-cream-300">
                <FaMapMarkerAlt className="text-maroon-400" />
                <span>KSR Towers, Madhapur, Hyderabad</span>
              </div>
              <div className="flex items-center space-x-3 text-cream-300">
                <FaClock className="text-maroon-400" />
                <span>9:00 AM - 9:00 PM</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-maroon-400">Our Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-cream-300 hover:text-maroon-400 transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-maroon-400">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-cream-300 hover:text-maroon-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-maroon-400">Support</h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.support.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-cream-300 hover:text-maroon-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold mb-4 text-maroon-400">Follow Us</h4>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center text-cream-300 hover:bg-maroon-500 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-dark-800 to-dark-700 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-serif font-bold mb-4">
            Stay Updated with Special Offers
          </h3>
          <p className="text-cream-300 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about exclusive spa packages,
            seasonal promotions, and wellness tips.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-maroon-500 text-dark-800"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary bg-maroon-500 hover:bg-maroon-600 whitespace-nowrap"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-dark-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-cream-400 text-sm mb-4 md:mb-0">
              © {currentYear} Platinum Luxury Spa. All rights reserved.
            </div>

            <div className="flex items-center space-x-6 text-sm text-cream-400">
              <a href="#" className="hover:text-maroon-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-maroon-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-maroon-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-maroon-500 hover:bg-maroon-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <FaArrowUp size={20} />
      </motion.button>
    </footer>
  )
}

export default Footer 