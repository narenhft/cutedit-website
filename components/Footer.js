import Link from 'next/link'
import flags from '../flags'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
 		 <span className={styles.logo}>CutEdit — AI-powered video editing, right in your pocket.</span>
	</div>
        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          {flags.BLOG_ENABLED && <Link href="/blog">Blog</Link>}
          <Link href="/contact">Contact</Link>
          <a href="https://play.google.com/store/apps/details?id=com.framesnap.app" target="_blank" rel="noopener noreferrer">Play Store</a>
	  <a href="https://sites.google.com/view/cutedit-privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} CutEdit. All rights reserved.</span>
        <span>cutedit.co.in</span>
      </div>
    </footer>
  )
}
