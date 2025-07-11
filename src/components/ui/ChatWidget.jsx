import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Mail, Phone, User, ArrowRight } from 'lucide-react'
import { sendContactMessage, validateContactForm } from '../../utils/contactUtils'

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showOptions, setShowOptions] = useState(true)
  const [showMessageForm, setShowMessageForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate form
    const validation = validateContactForm(formData)
    if (!validation.isValid) {
      setFormErrors(validation.errors)
      return
    }
    
    setIsSubmitting(true)
    setFormErrors({})
    
    try {
      const result = await sendContactMessage(formData)
      
      if (result.success) {
        setSubmitStatus('success')
        setTimeout(() => {
          setFormData({ name: '', email: '', message: '' })
          setShowMessageForm(false)
          setShowOptions(true)
          setSubmitStatus('')
        }, 2000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleImmediateContact = () => {
    // This will trigger the Tawk.to widget
    if (window.Tawk_API && window.Tawk_API.toggle) {
      window.Tawk_API.toggle()
    }
    setIsOpen(false)
  }

  const handleLeaveMessage = () => {
    setShowOptions(false)
    setShowMessageForm(true)
  }

  const resetWidget = () => {
    setShowOptions(true)
    setShowMessageForm(false)
    setSubmitStatus('')
    setFormData({ name: '', email: '', message: '' })
    setFormErrors({})
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="mb-4 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 w-80 max-h-96 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white p-4 flex items-center justify-between">
              <h3 className="font-semibold">Quick Contact</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 rounded-full p-1 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4">
              {showOptions && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-3"
                >
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    How would you like to get in touch?
                  </p>
                  
                  <button
                    onClick={handleImmediateContact}
                    className="w-full flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-4 rounded-lg transition-colors font-medium"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Chat Right Now
                  </button>
                  
                  <button
                    onClick={handleLeaveMessage}
                    className="w-full flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg transition-colors font-medium"
                  >
                    <Mail className="h-5 w-5" />
                    Leave a Message
                  </button>
                </motion.div>
              )}

              {showMessageForm && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  {submitStatus === 'success' && (
                    <div className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 p-3 rounded-lg text-sm">
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 p-3 rounded-lg text-sm">
                      Failed to send message. Please try again.
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 ${
                            formErrors.name 
                              ? 'border-red-500 dark:border-red-400' 
                              : 'border-gray-300 dark:border-gray-600'
                          }`}
                        />
                      </div>
                      {formErrors.name && (
                        <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 ${
                            formErrors.email 
                              ? 'border-red-500 dark:border-red-400' 
                              : 'border-gray-300 dark:border-gray-600'
                          }`}
                        />
                      </div>
                      {formErrors.email && (
                        <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                      )}
                    </div>
                    
                    <div>
                      <textarea
                        name="message"
                        placeholder="Your message..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={3}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none ${
                          formErrors.message 
                            ? 'border-red-500 dark:border-red-400' 
                            : 'border-gray-300 dark:border-gray-600'
                        }`}
                      />
                      {formErrors.message && (
                        <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={resetWidget}
                        className="flex-1 py-2 px-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white py-2 px-3 rounded-lg transition-colors"
                      >
                        {isSubmitting ? (
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            Send
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button with Text */}
      <div className="flex items-center gap-3">
        {/* Text with Arrow */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: isOpen ? 0 : 1, x: isOpen ? 20 : 0 }}
          transition={{ duration: 0.3 }}
          className="hidden md:flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <span className="text-sm font-medium whitespace-nowrap">
            Anonymous fast response
          </span>
          <ArrowRight className="h-4 w-4 text-gray-500 dark:text-gray-400" />
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  )
}

export default ChatWidget
