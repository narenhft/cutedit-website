import flags from '../../flags'
import styles from './page.module.css'

export const metadata = {
  title: 'Blog — CutEdit',
  description: 'Tips, tutorials and updates from the CutEdit team.',
}

const posts = [
  {
    date: 'May 2025',
    tag: 'Tutorial',
    title: '5 AI editing tricks that save hours of work',
    excerpt: 'Discover how CutEdit\'s AI features can automate the most time-consuming parts of video editing.',
  },
  {
    date: 'Apr 2025',
    tag: 'Update',
    title: 'Introducing Auto Captions — now in CutEdit',
    excerpt: 'We launched one of our most-requested features: AI-generated subtitles in multiple languages.',
  },
  {
    date: 'Mar 2025',
    tag: 'Guide',
    title: 'How to make Reels that get views in 2025',
    excerpt: 'A deep dive into aspect ratios, hooks, pacing, and the formats that Instagram\'s algorithm loves.',
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
