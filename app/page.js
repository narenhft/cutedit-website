import Link from 'next/link'
import styles from './page.module.css'
import CinemaHero from '../components/CinemaHero'

export default function Home() {
  return (
    <>
      {/* Cinema Animation */}
      <CinemaHero />

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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76a2 2 0 0 0 2.18-.22L18 13.54 14.46 10 3.18 23.76zM22.47 9.88a2 2 0 0 0 0-3.76L18.92 4.2 15.08 8l3.84 3.8 3.55-1.92zM2.1.32A2 2 0 0 0 1 2v20a2 2 0 0 0 1.1 1.76L14.3 12 2.1.32zM18 10.46 5.36.46A2 2 0 0 0 3.18.24L14.46 14 18 10.46z"/>
                </svg>
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
          <p className={`${styles.featLabel} section-label`}>Why CutEdit</p>
          <div className={styles.featGrid}>
            {[
              { icon: '⚡', title: 'One-tap edits', desc: 'AI auto-edits your clip in seconds — no timeline scrubbing needed.' },
              { icon: '🎬', title: 'Cinematic filters', desc: 'Hollywood-grade color grading, right on your phone.' },
              { icon: '✂️', title: 'Smart trimming', desc: 'AI detects highlights and silences for clean cuts every time.' },
              { icon: '🎵', title: 'Auto captions', desc: 'Generate subtitles and captions automatically from your audio.' },
              { icon: '🌟', title: 'Effects library', desc: 'Hundreds of transitions, overlays, and motion graphics.' },
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
