import Link from 'next/link'
import styles from './page.module.css'

// ---- EDIT THESE LINKS LATER ----
const START_URL = 'https://play.google.com/store/apps/details?id=com.framesnap.app' // Start Free Reel (replace when you have the link)
const DEMO_URL = '#' // your Instagram reel link goes here
// --------------------------------

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.glow} />
        <div className={styles.gridBg} />
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={`${styles.heroText} fade-up`}>
              <span className="section-label">For clothing sellers, vloggers, salons &amp; carpenters</span>
              <h1 className={styles.heroTitle}>
                Upload clips. Get reels in 60 seconds.
              </h1>
              <p className={styles.heroSub}>
                See your fabric on a model, with captions and hashtags ready for Reels and Shorts.
              </p>
              <div className={styles.heroCtas}>
                <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Start Free Reel
                </a>
                <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  Watch 15-sec demo
                </a>
              </div>
              <p className={styles.note}>No credit card · Every export is free</p>
              <p className={styles.trust}>100+ product sellers using CutEdit</p>
            </div>

            {/* Right: phone visual */}
            <div className={`${styles.rightCol} fade-up-2`}>
              <p className={styles.visualTitle}>Raw clips to Instagram post in a minute</p>
              <div className={styles.visual}>
                <div className={`${styles.phone} ${styles.phoneBack}`}>
                  <img src="/images/2output.png" alt="Raw fabric clip" />
                  <span className={styles.chipTop}>Your raw clips</span>
                </div>
                <span className={styles.aiBadge}>✦ AI cuts, trims &amp; adds model look</span>
                <div className={`${styles.phone} ${styles.phoneFront}`}>
                  <img src="/images/promise_reel_final.png" alt="Saree shown on a model" />
                </div>
                <div className={styles.captionFloat}>
                  <span className={styles.captionLabel}>Caption &amp; hashtags, written for you</span>
                  <p className={styles.captionText}>
                    Wine Banarasi silk saree with gold zari work. DM or WhatsApp to book.
                  </p>
                  <p className={styles.tags}>#banarasisaree #sareelove #reelsindia</p>
                  <span className={styles.ready}>Ready to post on Instagram</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core products */}
      <section className={styles.products} id="products">
        <div className="container">
          <h2 className={styles.featHeading}>Our Core Products</h2>
          <div className={styles.prodGrid}>
            {[
              { title: 'AutoVlog – Sequential', desc: 'Ideal for product sellers, artisans and process videos. Keeps your upload order.', img: '/images/autovlog.jpg', pos: 'center' },
              { title: 'Aesthetic Reel – Beat Synced', desc: 'Perfect for travel, events and memories. Cuts sync to the music beats.', img: '/images/aesthetic-reel.jpg', pos: '55% center' },
              { title: 'Pro Timeline Editor', desc: 'Full control with AI captions, speed ramp and advanced editing tools.', img: '/images/timeline.png', pos: 'center top' },
            ].map((p) => (
              <div key={p.title} className={styles.prodCard}>
                <div className={styles.prodImg}>
                  <img src={p.img} alt={p.title} style={{ objectPosition: p.pos }} />
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* See the transformation */}
      <section className={styles.transform}>
        <div className="container">
          <h2 className={styles.featHeading}>See the Transformation</h2>
          <div className={styles.tGrid}>
            <div className={styles.tBox}>
              <p className={styles.tTitle}>Before (raw clips of a saree)</p>
              <div className={styles.tClips}>
                <img src="/images/1output.jpg" alt="Raw saree clip" />
                <img src="/images/2output.png" alt="Raw saree clip" />
              </div>
            </div>
            <div className={styles.tBox}>
              <p className={styles.tTitle}>After (reel with model look)</p>
              <div className={styles.tAfter}>
                <img src="/images/promise_reel_final.png" alt="Reel with model look" />
                <ul className={styles.checks}>
                  <li>AI cut &amp; trim</li>
                  <li>Applied filter</li>
                  <li>Added music</li>
                  <li>Superimposed model look</li>
                  <li>Caption &amp; hashtags</li>
                </ul>
              </div>
            </div>
          </div>
          <p className={styles.free}>Every export is free. No hidden fees.</p>
          <div className={styles.sampleWrap}>
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Watch Sample
            </a>
          </div>
        </div>
      </section>

      {/* Features strip (unchanged) */}
      <section className={styles.features}>
        <div className="container">
          <h2 className={styles.featHeading}>Other tools</h2>
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

      {/* CTA Banner (unchanged) */}
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
