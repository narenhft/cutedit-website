import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.glow} />
        <div className={styles.gridBg} />
        <div className="container">
          <div className={`${styles.heroContent} fade-up`}>
            <span className="section-label">AI Video Editor</span>
            <h1 className={styles.heroTitle}>
              Edit Videos Like<br />
              <span className={styles.gradient}>a Pro.</span><br />
              Powered by AI.
            </h1>
            <p className={styles.heroSub}>
              CutEdit brings studio-grade video editing to your Android phone.
              Trim, enhance, add effects — all in seconds with AI assistance.
            </p>
            <div className={styles.heroCtas}>
              <a
                href="https://play.google.com/store/apps/details?id=com.framesnap.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" height={20} style={{filter:'brightness(10)'}} />
                Download on Play Store
              </a>
              <Link href="/products" className="btn-ghost">
                See Features →
              </Link>
            </div>
            <div className={styles.badges}>
              <span className={styles.badge}>✦ AI-Powered</span>
              <span className={styles.badge}>✦ Free to Download</span>
              <span className={styles.badge}>✦ Android</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className={styles.features}>
        <div className="container">
          <h2 className={styles.featHeading}>Why CutEdit</h2>
          <div className={styles.featGrid}>
            {[
              { icon: '⚡', title: 'Timeline Editor', desc: 'Full-featured timeline editor with multi-track support for precise control over your edits.' },
              { icon: '🎬', title: 'Cinematic filters', desc: 'Hollywood-grade color grading, right on your phone.' },
              { icon: '✂️', title: 'Smart trimming', desc: 'AI detects highlights and silences for clean cuts every time.' },
              { icon: '🎵', title: 'Auto captions', desc: 'Generate subtitles and captions automatically from your audio.' },
              { icon: '🌟', title: 'Speed Ramp', desc: 'Smooth speed ramping effects — slow motion, fast cuts, and everything in between.' },
              { icon: '📤', title: 'Export anywhere', desc: 'Export in any resolution for Instagram, YouTube, or TikTok.' },
            ].map((f) => (
              <div key={f.title} className={styles.featCard}>
                <span className={styles.featIcon}>{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.bannerInner}>
            <h2>Start editing for free</h2>
            <p>Available now on Google Play Store</p>
            <a
              href="https://play.google.com/store/apps/details?id=com.framesnap.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Download CutEdit Free
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
