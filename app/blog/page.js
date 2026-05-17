import flags from '../../flags'
import styles from './page.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Blog — CutEdit | Video Editing Tips & Tutorials',
  description: 'Video editing tips, reels tutorials, and AI caption guides for Indian creators using CutEdit.',
}

const posts = [
  {
    date: 'May 2026',
    tag: 'Feature',
    title: 'Free AI Caption Generator for Videos in Hindi, Tamil, Telugu and More',
    excerpt: 'Speak in Hindi or English and get automatic captions in Tamil, Telugu, Kannada, Bengali, Marathi — free, offline, no internet needed.',
    slug: 'ai-captions-hindi-tamil-telugu',
  },
  {
    date: 'May 2026',
    tag: 'Guide',
    title: 'Best Free Video Editor for Android in 2025 — One App Replaces All',
    excerpt: 'Stop downloading 5 different apps. CutEdit packs video trimmer, GIF maker, AI captions, audio extractor, compressor and speed ramp — all in one free app.',
    slug: 'one-app-for-all',
  },
]

export default function Blog() {
  if (!flags.BLOG_ENABLED) {
    return (
      <div className={styles.page}>
        <div className="container">
          <div className={styles.coming}>
            <span className={styles.comingIcon}>✍️</span>
            <h1>Blog Coming Soon</h1>
            <p>We're working on something worth reading. Check back soon.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">From the team</span>
          <h1 className={styles.title}>CutEdit Blog</h1>
          <p className={styles.subtitle}>Tutorials, updates, and video editing tips.</p>
        </div>
        <div className={styles.posts}>
          {posts.map((p) => (
            <Link href={`/blog/${p.slug}`} key={p.title} style={{textDecoration:'none'}}>
              <article className={styles.post}>
                <div className={styles.postMeta}>
                  <span className={styles.tag}>{p.tag}</span>
                  <span className={styles.date}>{p.date}</span>
                </div>
                <h2 className={styles.postTitle}>{p.title}</h2>
                <p className={styles.postExcerpt}>{p.excerpt}</p>
                <span className={styles.readMore}>Read more →</span>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}