import { motion } from 'framer-motion'

const steps = [
  {
    title: 'List Your License',
    description: 'Enter your software license details and get an instant valuation.',
    icon: '📝',
  },
  {
    title: 'Get Paid',
    description: 'Receive payment within 24 hours of your license being sold.',
    icon: '💰',
  },
  {
    title: 'Transfer Securely',
    description: 'We handle the secure transfer of your license to the buyer.',
    icon: '🔒',
  },
]

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Selling your software license is simple and secure with SoftSell
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="text-4xl mb-4"
              >
                {step.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-2xl text-gray-400"
                >
                  →
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks 