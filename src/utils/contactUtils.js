// Contact form utilities
export const sendContactMessage = async (formData) => {
  try {
    // For Netlify deployment with Netlify Forms
    if (window.location.hostname.includes('netlify') || window.location.hostname.includes('ersubashpoudel.com.np')) {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'form-name': 'contact-chat',
          ...formData,
        }),
      })
      
      if (response.ok) {
        return { success: true, message: 'Message sent successfully!' }
      } else {
        throw new Error('Network response was not ok')
      }
    }
    
    // For local development or other deployments
    // You can integrate with Resend, EmailJS, or other email services here
    console.log('Contact form submission:', formData)
    
    // Simulate successful submission for development
    await new Promise(resolve => setTimeout(resolve, 1000))
    return { success: true, message: 'Message sent successfully!' }
    
  } catch (error) {
    console.error('Error sending message:', error)
    return { success: false, message: 'Failed to send message. Please try again.' }
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
