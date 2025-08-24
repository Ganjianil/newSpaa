'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FaPhone, FaWhatsapp, FaTimes, FaPhoneAlt } from 'react-icons/fa'

interface BookingModalProps {
    isOpen: boolean
    onClose: () => void
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
    const phoneNumber = '+919121289918'
    const whatsappLink = 'https://api.whatsapp.com/send/?phone=919121289918&text=Hi%21+I+would+like+to+book+a+spa+appointment.+Please+help+me+with+the+available+slots.&type=phone_number&app_absent=0'

    const handleCallNow = () => {
        window.location.href = `tel:${phoneNumber}`
    }

    const handleWhatsApp = () => {
        window.open(whatsappLink, '_blank')
    }

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                    onClick={handleOverlayClick}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-dark-800 to-dark-900 text-white p-6 text-center relative">
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center"
                            >
                                <FaTimes size={16} />
                            </button>

                            <div className="w-16 h-16 bg-gradient-to-br from-maroon-400 to-maroon-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-serif font-bold text-2xl">P</span>
                            </div>

                            <h2 className="text-2xl font-serif font-bold mb-2">
                                Book Your Spa Session
                            </h2>
                            <p className="text-cream-200">
                                Choose how you'd like to book your appointment
                            </p>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <div className="space-y-4">
                                {/* Call Now Button */}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handleCallNow}
                                    className="w-full bg-maroon-500 hover:bg-maroon-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 group"
                                >
                                    <FaPhoneAlt className="text-xl group-hover:scale-110 transition-transform" />
                                    <span className="text-lg">Call Now</span>
                                </motion.button>

                                {/* WhatsApp Button */}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handleWhatsApp}
                                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 group"
                                >
                                    <FaWhatsapp className="text-xl group-hover:scale-110 transition-transform" />
                                    <span className="text-lg">WhatsApp</span>
                                </motion.button>

                                {/* Cancel Button */}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={onClose}
                                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-4 px-6 rounded-xl transition-all duration-300"
                                >
                                    Cancel
                                </motion.button>
                            </div>

                            {/* Additional Info */}
                            <div className="mt-6 p-4 bg-cream-50 rounded-xl">
                                <div className="text-center text-dark-600">
                                    <p className="font-medium mb-2">📞 Call us directly</p>
                                    <p className="text-lg font-bold text-dark-800">{phoneNumber}</p>
                                    <p className="text-sm mt-1">Available 9:00 AM - 9:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default BookingModal 