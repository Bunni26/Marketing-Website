import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChatBubbleLeftRightIcon, XMarkIcon } from '@heroicons/react/24/outline'

const predefinedQuestions = [
  'How do I sell my license?',
  'Is it safe?',
  'How long does it take?',
]

const defaultAnswers = {
  'How do I sell my license?': 'Simply fill out our contact form with your license details, and we\'ll provide you with a valuation within 24 hours. Once you accept our offer, we\'ll handle the transfer and send you payment.',
  'Is it safe?': 'Yes, absolutely! We use enterprise-grade encryption and secure payment processing. All transactions are protected, and we verify the authenticity of every license.',
  'How long does it take?': 'The entire process typically takes 1-3 business days. You\'ll receive a valuation within 24 hours, and once you accept, payment is processed within 24 hours.',
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [isTyping, setIsTyping] = useState(false)
  const [error, setError] = useState(null)

  const handleQuestionClick = async (question) => {
    try {
      // Add user message
      setMessages((prev) => [...prev, { type: 'user', content: question }])
      setIsTyping(true)
      setError(null)

      // Check if we have a default answer
      if (defaultAnswers[question]) {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setMessages((prev) => [
          ...prev,
          { type: 'bot', content: defaultAnswers[question] },
        ])
      } else {
        // Use Groq API for custom questions
        const response = await fetch('https://api.groq.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
          },
          body: JSON.stringify({
            model: 'mixtral-8x7b-32768',
            messages: [
              {
                role: 'system',
                content: 'You are a helpful assistant for SoftSell, a software license resale platform. Keep responses concise and professional.',
              },
              {
                role: 'user',
                content: question,
              },
            ],
            temperature: 0.7,
            max_tokens: 150,
          }),
        })

        if (!response.ok) {
          throw new Error('Failed to get response from Groq API')
        }

        const data = await response.json()
        const botResponse = data.choices[0].message.content

        setMessages((prev) => [
          ...prev,
          { type: 'bot', content: botResponse },
        ])
      }
    } catch (err) {
      setError('Sorry, I encountered an error. Please try again later.')
      console.error('Chatbot error:', err)
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 p-4 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        onClick={() => setIsOpen(true)}
      >
        <ChatBubbleLeftRightIcon className="h-6 w-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary-600 p-4 flex justify-between items-center">
              <h3 className="text-white font-medium">Chat with us</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 focus:outline-none"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    message.type === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.type === 'user'
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                    }`}
                  >
                    {message.content}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                </div>
              )}
              {error && (
                <div className="flex justify-start">
                  <div className="bg-red-50 dark:bg-red-900 rounded-lg p-3">
                    <p className="text-red-600 dark:text-red-200 text-sm">{error}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Questions */}
            <div className="p-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Quick Questions:
              </h4>
              <div className="space-y-2">
                {predefinedQuestions.map((question) => (
                  <button
                    key={question}
                    onClick={() => handleQuestionClick(question)}
                    className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors duration-200"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Chatbot 