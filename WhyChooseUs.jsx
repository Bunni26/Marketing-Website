import { motion } from 'framer-motion'

const features = [
  {
    title: 'Instant Valuation',
    description: 'Get an immediate estimate of your license value based on current market rates.',
    icon: '⚡',
  },
  {
    title: 'Secure Transfer',
    description: 'Our platform ensures safe and verified license transfers between parties.',
    icon: '🛡️',
  },
  {
    title: 'Fast Payout',
    description: 'Receive payment within 24 hours of your license being sold.',
    icon: '💸',
  },
  {
    title: '24/7 Support',
    description: 'Our dedicated team is always available to help you with any questions.',
    icon: '🤝',
  },
]

const WhyChooseUs = () => {
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
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            Experience the most trusted platform for software license resale
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-white dark:hover:bg-gray-700 transition-colors duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="text-4xl mb-4"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs 