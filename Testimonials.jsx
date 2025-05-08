import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    content: "SoftSell made selling our unused Microsoft licenses incredibly easy. The process was smooth and we received payment within hours.",
    author: "Sarah Johnson",
    role: "IT Director",
    company: "TechCorp Solutions",
  },
  {
    content: "I was skeptical at first, but SoftSell's platform is incredibly secure and their customer service is outstanding. Highly recommended!",
    author: "Michael Chen",
    role: "CTO",
    company: "Innovate Labs",
  },
]

const Testimonials = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Join hundreds of satisfied customers who have successfully sold their licenses
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative p-8 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                "{testimonial.content}"
              </p>
              <div>
                <p className="text-base font-medium text-gray-900 dark:text-white">
                  {testimonial.author}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials 