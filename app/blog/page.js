import flags from '../../flags'
import styles from './page.module.css'

export const metadata = {
  title: 'Blog — CutEdit | Video Editing Tips & Tutorials',
  description: 'Video editing tips, reels tutorials, and AI caption guides for Indian creators using CutEdit.',
}

const posts = [
  {
  date: 'May 2026',
  tag: 'Guide',
  title: 'Stop Downloading 5 Different Apps — CutEdit Does It All',
  excerpt: 'One app for trimming, GIF making, audio extraction, AI captions, speed ramp, compressor and more. No need to download multiple apps.',
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
            <article key={p.title} className={styles.post}>
              <div className={styles.postMeta}>
                <span className={styles.tag}>{p.tag}</span>
                <span className={styles.date}>{p.date}</span>
              </div>
              <h2 className={styles.postTitle}>{p.title}</h2>
              <p className={styles.postExcerpt}>{p.excerpt}</p>
              <span className={styles.readMore}>Read more →</span>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
