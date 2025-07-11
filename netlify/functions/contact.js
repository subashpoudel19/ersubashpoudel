export const handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    }
  }

  try {
    const data = JSON.parse(event.body)
    
    // Basic validation
    if (!data.name || !data.email || !data.message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      }
    }

    // Send email using Resend API
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Contact Form <contact@ersubashpoudel.com.np>',
        to: ['subash.poudel@students.jsums.edu'],
        subject: `New Contact: ${data.subject || 'Contact Form Submission'}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #374151; margin-bottom: 15px;">Contact Information:</h3>
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
              ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
              ${data.projectType ? `<p><strong>Project Type:</strong> ${data.projectType}</p>` : ''}
            </div>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #374151; margin-bottom: 15px;">Message:</h3>
              <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; border-left: 4px solid #1e40af;">
                ${data.message.replace(/\n/g, '<br>')}
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

Name: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ''}
${data.company ? `Company: ${data.company}` : ''}
${data.projectType ? `Project Type: ${data.projectType}` : ''}

Message:
${data.message}

Received at: ${new Date().toLocaleString()}
        `
      }),
    })

    if (response.ok) {
      return {
        statusCode: 200,
        body: JSON.stringify({ 
          success: true, 
          message: 'Message sent successfully! I\'ll get back to you within 24-48 hours.' 
        })
      }
    } else {
      const errorData = await response.json().catch(() => ({}))
      console.error('Resend API error:', errorData)
      throw new Error(`Email sending failed: ${response.status}`)
    }

  } catch (error) {
    console.error('Error in contact function:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        success: false, 
        message: 'Failed to send message. Please try again or contact me directly at subash.poudel@students.jsums.edu' 
      })
    }
  }
}
