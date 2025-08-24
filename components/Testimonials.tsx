'use client'

import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

interface TestimonialsProps {
  onBookAppointment: () => void
}

const Testimonials = ({ onBookAppointment }: TestimonialsProps) => {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Regular Client',
      rating: 5,
      comment: 'Platinum Luxury Spa has become my sanctuary in Hyderabad. The Swedish massage is absolutely divine, and the therapists are incredibly skilled. I always leave feeling completely rejuvenated.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      role: 'Business Executive',
      rating: 5,
      comment: 'As someone who travels frequently for work, I\'ve tried many spas around the world. Platinum Luxury Spa in Madhapur is truly world-class. The deep tissue massage helped me recover from jet lag.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 3,
      name: 'Anjali Patel',
      role: 'Wellness Enthusiast',
      rating: 5,
      comment: 'The aromatherapy massage here is exceptional. The therapists use the finest essential oils and create such a peaceful atmosphere. It\'s worth every penny for the luxury experience.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 4,
      name: 'Suresh Reddy',
      role: 'Fitness Trainer',
      rating: 5,
      comment: 'I recommend Platinum Luxury Spa to all my clients. The hot stone massage is perfect for muscle recovery after intense workouts. The facility is immaculate and the service is outstanding.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 5,
      name: 'Meera Singh',
      role: 'Yoga Instructor',
      rating: 5,
      comment: 'The body scrub and wrap treatment was transformative. My skin feels so soft and rejuvenated. The spa\'s commitment to using natural ingredients really shows in the results.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 6,
      name: 'Vikram Malhotra',
      role: 'Tech Professional',
      rating: 5,
      comment: 'Working in IT can be stressful, but Platinum Luxury Spa helps me unwind completely. The facial treatment is excellent, and the therapists are very professional and caring.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`${index < rating ? 'text-gold-400' : 'text-gray-300'
          } text-lg`}
      />
    ))
  }

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-800 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our valued clients have to say about
            their experience at Platinum Luxury Spa.
          </p>
        </motion.div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-cream-50 to-cream-100 rounded-3xl p-8 md:p-12 mb-16 text-center"
        >
          <div className="flex justify-center mb-4">
            {renderStars(5)}
          </div>
          <h3 className="text-3xl font-serif font-bold text-dark-800 mb-2">
            5.0 out of 5.0
          </h3>
          <p className="text-lg text-dark-600 mb-6">
            Based on 500+ verified reviews
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div>
              <div className="text-2xl font-bold text-maroon-600">98%</div>
              <div className="text-sm text-dark-600">Would Recommend</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-maroon-600">4.9</div>
              <div className="text-sm text-dark-600">Service Quality</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-maroon-600">4.8</div>
              <div className="text-sm text-dark-600">Cleanliness</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-maroon-600">4.9</div>
              <div className="text-sm text-dark-600">Value for Money</div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-cream-100"
            >
              {/* Quote Icon */}
              <div className="text-maroon-300 mb-4">
                <FaQuoteLeft size={24} />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
                <span className="ml-2 text-sm text-spa-600 font-medium">
                  {testimonial.rating}.0
                </span>
              </div>

              {/* Comment */}
              <p className="text-dark-700 mb-6 leading-relaxed italic">
                "{testimonial.comment}"
              </p>

              {/* Client Info */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-800">{testimonial.name}</h4>
                  <p className="text-sm text-dark-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-serif font-bold text-dark-800 mb-4">
            Ready to Experience the Difference?
          </h3>
          <p className="text-lg text-dark-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have discovered the perfect blend of luxury,
            wellness, and tranquility at Platinum Luxury Spa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              className="btn-secondary text-lg px-8 py-4"
            >
              Read More Reviews
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 