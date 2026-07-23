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
<div className={styles.socials}>
  <a href="https://www.youtube.com/@CutEditapp" target="_blank" rel="noopener noreferrer">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.3-1C17.1 2.5 12 2.5 12 2.5h0s-5.1 0-8.3.4c-.4 0-1.4.1-2.3 1C.7 4.6.5 6.2.5 6.2S.3 8.1.3 10v1.9c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.9.9 2.1.9 2.6 1 1.9.2 8 .3 8 .3s5.1 0 8.3-.4c.4 0 1.4-.1 2.3-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8V10c0-1.9-.2-3.8-.2-3.8zM9.7 14.1V7.4l6.4 3.4-6.4 3.3z"/></svg>
    YouTube
  </a>
  <a href="https://instagram.com/cuteditapp" target="_blank" rel="noopener noreferrer">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.6.8.9 1.4.2.4.3 1 .4 2.2.1 1.3.1 1.6.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.6-1.4.9-.4.2-1 .3-2.2.4-1.3.1-1.6.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.6-.8-.9-1.4-.2-.4-.3-1-.4-2.2C2.2 15.6 2.2 15.3 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.6 1.4-.9.4-.2 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 5.3a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 7.4a2.9 2.9 0 110-5.8 2.9 2.9 0 010 5.8zm5.7-7.6a1.05 1.05 0 100-2.1 1.05 1.05 0 000 2.1z"/></svg>
    Instagram
  </a>
</div>
        </div>
      </div>
    </div>
  )
}