import styles from './page.module.css'

export const metadata = {
  title: 'Features — CutEdit Free Video Editor | AI Captions, Reels, GIF',
  description: 'Explore CutEdit features — AI captions in Hindi & regional languages, timeline editor, speed ramp, video compressor, GIF maker, audio extractor. All free, all offline.',
}

const features = [
  {
    tag: 'Core',
    title: 'Timeline Editor',
    desc: 'Full-featured timeline editor with multi-track support for precise control over every cut, transition and effect.',
    icon: '🎬',
  },
  {
    tag: 'Visual',
    title: 'Cinematic Color Grading',
    desc: 'One-tap LUT filters inspired by Hollywood films. Adjust exposure, contrast, saturation, and shadows with precision sliders.',
    icon: '🎨',
  },
  {
    tag: 'Audio',
    title: 'Auto Captions & Subtitles',
    desc: 'AI transcribes your video audio and generates styled captions in seconds. Supports multiple languages and fonts.',
    icon: '🎙️',
  },
  {
    tag: 'Effects',
    title: 'Speed Ramp',
    desc: 'Smooth speed ramping effects — slow motion, fast cuts, and everything in between for cinematic results.',
    icon: '⚡',
  },
  {
    tag: 'Export',
    title: 'Multi-Platform Export',
    desc: 'Export optimised for Instagram Reels, YouTube Shorts, TikTok, or full HD — with the right resolution and aspect ratio, automatically.',
    icon: '📤',
  },
  {
    tag: 'Tools',
    title: 'Background Remover',
    desc: 'Cut out subjects from any video clip with AI-powered background removal. No green screen needed.',
    icon: '🪄',
  },
]

export default function Products() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">What's inside</span>
          <h1 className={styles.title}>Everything you need to<br /><span className={styles.gradient}>edit like a pro</span></h1>
          <p className={styles.subtitle}>CutEdit packs powerful editing tools into a simple, intuitive interface — powered by AI throughout.</p>
        </div>

        <div className={styles.grid}>
          {features.map((f) => (
            <div key={f.title} className={styles.card}>
              <div className={styles.cardTop}>
  		<h3 className={styles.cardTitle}>
    		<span className={styles.icon}>{f.icon}</span>
   		 {f.title}
 		</h3>
  		<span className={styles.tag}>{f.tag}</span>
	      </div>
              <p className={styles.cardDesc}>{f.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.playBanner}>
          <p>All features available free on Android</p>
          <a
            href="https://play.google.com/store/apps/details?id=com.framesnap.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Download on Google Play
          </a>
        </div>
      </div>
    </div>
  )
}
