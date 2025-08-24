'use client'

import { motion } from 'framer-motion'
import {
  FaSpa,
  FaHandSparkles,
  FaLeaf,
  FaHeart,
  FaStar,
  FaClock
} from 'react-icons/fa'

interface ServicesProps {
  onBookAppointment: () => void
}

const Services = ({ onBookAppointment }: ServicesProps) => {
  const services = [
    {
      id: 1,
      name: 'Swedish Massage',
      description: 'Classic relaxation massage using long, flowing strokes to release muscle tension and promote deep relaxation.',
      duration: '60 min',
      price: '₹2,500',
      icon: FaSpa,
      features: ['Muscle relaxation', 'Stress relief', 'Improved circulation', 'Deep relaxation'],
      image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 2,
      name: 'Deep Tissue Massage',
      description: 'Intensive massage targeting deep muscle layers to release chronic tension and improve mobility.',
      duration: '75 min',
      price: '₹3,200',
      icon: FaHandSparkles,
      features: ['Chronic pain relief', 'Improved mobility', 'Muscle recovery', 'Deep healing'],
      image: 'https://images.unsplash.com/photo-1544161512-266c32b2b73f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 3,
      name: 'Aromatherapy Massage',
      description: 'Therapeutic massage using essential oils to enhance relaxation and promote emotional well-being.',
      duration: '90 min',
      price: '₹3,800',
      icon: FaLeaf,
      features: ['Essential oil therapy', 'Emotional balance', 'Enhanced relaxation', 'Aromatherapy benefits'],
      image: 'https://images.unsplash.com/photo-1600336153113-d66c79de3e91?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 4,
      name: 'Hot Stone Massage',
      description: 'Luxurious massage using heated stones to deeply relax muscles and provide therapeutic heat therapy.',
      duration: '90 min',
      price: '₹4,200',
      icon: FaHeart,
      features: ['Heat therapy', 'Deep muscle relaxation', 'Improved blood flow', 'Luxury experience'],
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbece2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 5,
      name: 'Facial Treatment',
      description: 'Rejuvenating facial treatment to cleanse, exfoliate, and nourish your skin for a radiant glow.',
      duration: '60 min',
      price: '₹2,800',
      icon: FaStar,
      features: ['Deep cleansing', 'Skin exfoliation', 'Moisturizing', 'Anti-aging benefits'],
      image: 'https://images.unsplash.com/photo-1570172619648-daa74ea7c4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 6,
      name: 'Body Scrub & Wrap',
      description: 'Exfoliating body treatment followed by a nourishing wrap to detoxify and rejuvenate your skin.',
      duration: '120 min',
      price: '₹4,500',
      icon: FaSpa,
      features: ['Body exfoliation', 'Detoxification', 'Skin nourishment', 'Full body treatment'],
      image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    }
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-800 mb-6">
            Our Premium Services
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Discover our range of luxurious spa treatments designed to rejuvenate your body,
            mind, and spirit. Each service is crafted with premium ingredients and expert techniques.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center space-x-2">
                      <FaClock className="text-maroon-400" />
                      <span className="text-sm font-medium">{service.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-maroon-400 font-bold">₹</span>
                      <span className="text-lg font-bold">{service.price}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-maroon-100 rounded-full flex items-center justify-center">
                    <service.icon className="text-maroon-600 text-xl" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-dark-800">
                    {service.name}
                  </h3>
                </div>

                <p className="text-dark-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-dark-700 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-dark-600">
                        <div className="w-2 h-2 bg-maroon-400 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full"
                  onClick={onBookAppointment}
                >
                  Book This Service
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Packages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-cream-50 to-cream-100 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-dark-800 mb-4">
              Special Wellness Packages
            </h3>
            <p className="text-lg text-dark-600">
              Experience the ultimate spa journey with our curated wellness packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <h4 className="text-xl font-serif font-semibold text-dark-800 mb-3">Couple's Retreat</h4>
              <p className="text-dark-600 mb-4">Perfect romantic getaway with dual treatments</p>
              <div className="text-2xl font-bold text-maroon-600 mb-4">₹8,500</div>
              <button className="btn-secondary w-full" onClick={onBookAppointment}>Book Package</button>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <h4 className="text-xl font-serif font-semibold text-dark-800 mb-3">Wellness Day</h4>
              <p className="text-dark-600 mb-4">Full day of treatments and relaxation</p>
              <div className="text-2xl font-bold text-maroon-600 mb-4">₹12,000</div>
              <button className="btn-secondary w-full" onClick={onBookAppointment}>Book Package</button>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <h4 className="text-xl font-serif font-semibold text-dark-800 mb-3">Monthly Membership</h4>
              <p className="text-dark-600 mb-4">Unlimited access to basic treatments</p>
              <div className="text-xl font-bold text-maroon-600 mb-4">₹25,000</div>
              <button className="btn-secondary w-full" onClick={onBookAppointment}>Book Package</button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 