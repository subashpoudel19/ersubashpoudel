// Contact form utilities
export const sendContactMessage = async (formData) => {
  try {
    // Use Resend API directly for GitHub Pages deployment
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer re_BTtuSEet_HPVtcSFBD5KzCwDEqXVBDeCN',
      },
      body: JSON.stringify({
        from: 'Contact Form <contact@ersubashpoudel.com.np>',
        to: ['subash.poudel@students.jsums.edu'],
        subject: `New Contact: ${formData.subject || 'Contact Form Submission'}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #374151; margin-bottom: 15px;">Contact Information:</h3>
              <p><strong>Name:</strong> ${formData.name}</p>
              <p><strong>Email:</strong> ${formData.email}</p>
              ${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ''}
              ${formData.company ? `<p><strong>Company:</strong> ${formData.company}</p>` : ''}
              ${formData.projectType ? `<p><strong>Project Type:</strong> ${formData.projectType}</p>` : ''}
            </div>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #374151; margin-bottom: 15px;">Message:</h3>
              <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; border-left: 4px solid #1e40af;">
                ${formData.message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
              <p>This email was sent from the contact form on ersubashpoudel.com.np</p>
              <p>Received at: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        `,
        text: `
New Contact Form Submission

Name: ${formData.name}
Email: ${formData.email}
${formData.phone ? `Phone: ${formData.phone}` : ''}
${formData.company ? `Company: ${formData.company}` : ''}
${formData.projectType ? `Project Type: ${formData.projectType}` : ''}

Message:
${formData.message}

Received at: ${new Date().toLocaleString()}
        `
      }),
    })
    
    if (response.ok) {
      return { 
        success: true, 
        message: 'Message sent successfully! I\'ll get back to you within 24-48 hours.' 
      }
    } else {
      const errorData = await response.json().catch(() => ({}))
      console.error('Resend API error:', errorData)
      throw new Error(`Email sending failed: ${response.status}`)
    }
    
  } catch (error) {
    console.error('Error sending message:', error)
    
    // Fallback for development
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
