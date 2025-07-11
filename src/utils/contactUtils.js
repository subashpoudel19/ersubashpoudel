// Contact form utilities
export const sendContactMessage = async (formData) => {
  try {
    // Use Netlify function for secure email sending
    const response = await fetch('/.netlify/functions/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    
    const result = await response.json()
    
    if (response.ok && result.success) {
      return { 
        success: true, 
        message: result.message || 'Message sent successfully! I\'ll get back to you within 24-48 hours.' 
      }
    } else {
      throw new Error(result.message || 'Failed to send message')
    }
    
  } catch (error) {
    console.error('Error sending message:', error)
    
    // Fallback for development or if Netlify functions aren't available
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      console.log('Contact form submission (development):', formData)
      await new Promise(resolve => setTimeout(resolve, 1000))
      return { 
        success: true, 
        message: 'Message logged successfully! (Development mode)' 
      }
    }
    
    return { 
      success: false, 
      message: 'Failed to send message. Please try again or contact me directly at subash.poudel@students.jsums.edu' 
    }
  }
}

// Email validation
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Form validation
export const validateContactForm = (formData) => {
  const errors = {}
  
  if (!formData.name.trim()) {
    errors.name = 'Name is required'
  }
  
  if (!formData.email.trim()) {
    errors.email = 'Email is required'
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email'
  }
  
  if (!formData.message.trim()) {
    errors.message = 'Message is required'
  } else if (formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters'
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}
