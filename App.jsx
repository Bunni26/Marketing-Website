import React from 'react'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Chatbot from './components/Chatbot'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <Chatbot />
    </div>
  )
}

export default App 