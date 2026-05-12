'use client'
import { useState } from 'react'
import Link from 'next/link'
import flags from '../flags'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <img src="/icon.png" alt="CutEdit" width={32} height={32} style={{borderRadius:'8px'}} />
	  CutEdit
        </Link>

        <ul className={`${styles.links} ${open ? styles.open : ''}`}>
          <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link href="/products" onClick={() => setOpen(false)}>Products</Link></li>
          {flags.BLOG_ENABLED && (
            <li><Link href="/blog" onClick={() => setOpen(false)}>Blog</Link></li>
          )}
          <li><Link href="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
          <li>
            <a
              href="https://play.google.com/store/apps/details?id=com.framesnap.app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
              onClick={() => setOpen(false)}
            >
              ▶ Get App
            </a>
          </li>
        </ul>

        <button className={styles.burger} onClick={() => setOpen(!open)} aria-label="Menu">
          <span className={open ? styles.x : ''}></span>
          <span className={open ? styles.x : ''}></span>
          <span className={open ? styles.x : ''}></span>
        </button>
      </div>
    </nav>
  )
}
