'use client'

import { motion } from 'framer-motion'
import {
  FaSpa,
  FaLeaf,
  FaHeart,
  FaStar,
  FaUsers,
  FaAward,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaPhone,
  FaClock
} from 'react-icons/fa'

const About = () => {
  const features = [
    {
      icon: FaSpa,
      title: 'Premium Facilities',
      description: 'State-of-the-art spa equipment and luxurious treatment rooms'
    },
    {
      icon: FaLeaf,
      title: 'Natural Ingredients',
      description: 'Only the finest organic and natural products for your treatments'
    },
    {
      icon: FaHeart,
      title: 'Expert Therapists',
      description: 'Certified professionals with years of experience in wellness'
    },
    {
      icon: FaStar,
      title: 'Luxury Experience',
      description: 'Impeccable service and attention to every detail'
    }
  ]

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '15+', label: 'Expert Therapists' },
    { number: '98%', label: 'Satisfaction Rate' }
  ]

  return (
    <section id="about" className="section-padding bg-spa-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-800 mb-6">
              About Platinum Luxury Spa
            </h2>
            <p className="text-lg text-dark-600 mb-6 leading-relaxed">
              Welcome to Platinum Luxury Spa, where luxury meets tranquility in the heart of Hyderabad.
              Our journey began with a simple vision: to create an oasis of relaxation and wellness
              that transcends the ordinary spa experience.
            </p>
            <p className="text-lg text-dark-600 mb-8 leading-relaxed">
              Located in the prestigious KSR Towers, Madhapur, we offer a sanctuary where you can
              escape the hustle and bustle of city life and immerse yourself in pure bliss. Our
              commitment to excellence is reflected in every aspect of your visit, from the moment
              you step through our doors.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-10 h-10 bg-maroon-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <feature.icon className="text-maroon-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-800 mb-1">{feature.title}</h4>
                    <p className="text-sm text-dark-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* About Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Platinum Luxury Spa Interior"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-600 mb-2">5+</div>
                <div className="text-sm text-spa-600">Years of Excellence</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-dark-800 mb-4">
              Our Success in Numbers
            </h3>
            <p className="text-lg text-dark-600">
              Trusted by hundreds of clients for their wellness journey
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-maroon-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-dark-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Location & Hours */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-dark-800 to-dark-900 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Visit Our Spa
            </h3>
            <p className="text-xl text-cream-200">
              Experience luxury and tranquility in the heart of Hyderabad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-maroon-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt className="text-maroon-400 text-2xl" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Location</h4>
              <p className="text-cream-200">
                KSR Towers, Madhapur<br />
                Hyderabad, Telangana<br />
                India
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-maroon-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClock className="text-maroon-400 text-2xl" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Opening Hours</h4>
              <p className="text-cream-200">
                Monday - Sunday<br />
                9:00 AM - 9:00 PM<br />
                Last appointment: 8:00 PM
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-maroon-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPhone className="text-maroon-400 text-2xl" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Contact</h4>
              <p className="text-cream-200">
                Phone: +91 9121289918<br />
                Email: info@platinumluxuryspa.com<br />
                WhatsApp available
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary bg-maroon-500 hover:bg-maroon-600 text-lg px-8 py-4"
            >
              Get Directions
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 