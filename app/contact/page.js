'use client'
import styles from './page.module.css'

export default function Contact() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.center}>
          <span className="section-label">Get in touch</span>
          <h1 className={styles.title}>Write to us</h1>
          <p className={styles.sub}>
            Have a question, feedback, or just want to say hello?<br />
            We read every message and reply within 24 hours.
          </p>
          <a href="mailto:markinostech@gmail.com" className={styles.emailCard}>
            <span className={styles.emailIcon}>✉️</span>
            <div>
              <p className={styles.emailLabel}>Email us at</p>
              <p className={styles.emailAddr}>markinostech@gmail.com</p>
            </div>
            <span className={styles.arrow}>→</span>
          </a>
          <p className={styles.note}>We typically respond within 24 hours on working days.</p>
        </div>
      </div>
    </div>
  )
}