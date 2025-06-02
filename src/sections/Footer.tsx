import { type FormEvent, useState } from 'react'
import emailjs from '@emailjs/browser'
import styles from './Footer.module.css'
import { emailConfig } from '../config/emailjs'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    
    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          from_name: 'Portfolio Contact Form',
          to_name: 'Emelie Boss',
          reply_to: email,
          from_email: email,
          message: `Email from: ${email}\n\nMessage:\n${message}`,
          contact_email: email
        },
        emailConfig.publicKey
      )

      setSubmitted(true)
      setEmail('')
      setMessage('')
      
      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    } catch (err) {
      setError('Failed to send message. Please try again.')
      console.error('EmailJS error:', err)
    }
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.contactInfo}>
          <h2>Let's Connect</h2>
          <div className={styles.contactLinks}>
            <a href="mailto:emelie.boss@outlook.com" className={styles.contactLink}>
              <i className="fas fa-envelope"></i>
              emelie.boss@outlook.com
            </a>
            <a href="https://www.linkedin.com/in/emelie-boss-31b36930b/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              <i className="fab fa-linkedin"></i>
              LinkedIn
            </a>
            <a href="https://github.com/EmelieSonjaBoss" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              <i className="fab fa-github"></i>
              GitHub
            </a>
          </div>
        </div>

        <div className={styles.contactForm}>
          <h3>Send Me a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your.email@example.com"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Your message here..."
                rows={4}
              />
            </div>
            {error && <div className={styles.errorMessage}>{error}</div>}
            <button type="submit" className={styles.submitBtn} disabled={submitted}>
              {submitted ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </footer>
  )
}

export default Footer 