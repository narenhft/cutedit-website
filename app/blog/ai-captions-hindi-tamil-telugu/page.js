import styles from '../one-app-for-all/page.module.css'

export const metadata = {
  title: 'Free AI Caption Generator for Videos — Hindi, Tamil, Telugu, Kannada, Bengali, Marathi | CutEdit',
  description: 'Generate automatic subtitles and captions for your videos in Hindi, English, Tamil, Telugu, Kannada, Bengali, Marathi and more — free, offline, no internet needed. Download CutEdit.',
  keywords: 'ai caption generator hindi free, auto subtitle android, hindi caption video free, tamil caption generator, telugu subtitle app, kannada caption android, bengali subtitle free, marathi caption app, free caption generator android offline',
}

const post = {
  title: 'Free AI Caption Generator for Videos in Hindi, Tamil, Telugu and More',
  date: 'May 2026',
  tag: 'Feature',
  content: [
    {
      type: 'intro',
      text: 'If you speak in Hindi or English and want automatic captions and translations in multiple Indian languages — CutEdit does it for free, fully offline, right on your Android phone. No expensive software. No internet. No typing. Just speak, and CutEdit generates accurate subtitles in the language you choose.',
    },
    { type: 'h2', text: 'What is AI Caption Generation?' },
    { type: 'p', text: 'AI caption generation means your phone listens to what you say in your video and automatically converts it into text subtitles — without you typing a single word. Studies show that 85% of people watch videos on mute — especially on Instagram, Facebook, and WhatsApp. If your video has no captions, most people will scroll past it without watching. CutEdit\'s AI caption generator fixes this problem in seconds.' },
    { type: 'h2', text: 'Speak in Hindi or English — Get Captions in Any Language' },
    { type: 'p', text: 'You can record your video in Hindi or English, and CutEdit will not only generate captions in that language — it can also translate your captions into other Indian languages automatically.' },
    {
      type: 'h3', text: 'Supported Languages in CutEdit:'
    },
    {
      type: 'bullets',
      items: [
        'Hindi — हिंदी',
        'English',
        'Tamil — தமிழ்',
        'Telugu — తెలుగు',
        'Kannada — ಕನ್ನಡ',
        'Bengali — বাংলা',
        'Marathi — मराठी',
      ],
    },
    { type: 'p', text: 'This means a creator from Delhi speaking Hindi can reach audiences in Tamil Nadu, Karnataka, Bengal, and Maharashtra — without recording separate videos or hiring translators.' },
    { type: 'h2', text: 'Why AI Captions Matter for Indian Creators in 2026' },
    { type: 'h3', text: 'More Views on Instagram Reels and YouTube Shorts' },
    { type: 'p', text: 'Instagram and YouTube algorithms favor videos that keep viewers engaged. Captions increase watch time because viewers can follow along even without sound. More watch time means more reach.' },
    { type: 'h3', text: 'Reach Audiences Across India' },
    { type: 'p', text: 'India has 22 official languages and hundreds of dialects. With CutEdit\'s multilingual caption support, your content is no longer limited to viewers who understand your language. A single video can now reach all of India.' },
    { type: 'h3', text: 'Better Accessibility' },
    { type: 'p', text: 'Many viewers are hearing impaired or watch videos in public places where they cannot turn on sound. Captions make your content accessible to everyone.' },
    { type: 'h2', text: 'How to Add AI Captions in CutEdit — Step by Step' },
    {
      type: 'steps',
      items: [
        'Open CutEdit on your Android phone',
        'Import your video — any MP4, MOV, or recorded clip',
        'Tap AI Captions from the editing tools',
        'Select your video language — Hindi, English, or any supported language',
        'Select caption language — same language or translate to another',
        'Tap Generate — CutEdit processes your audio offline',
        'Edit if needed — fix any words the AI got wrong',
        'Export — your video is ready with captions burned in',
      ],
    },
    { type: 'p', text: 'The entire process works offline. Your video never gets uploaded to any server.' },
    { type: 'h2', text: 'Who Should Use CutEdit AI Captions?' },
    {
      type: 'bullets',
      items: [
        'Instagram Reels creators — add captions to boost reach and watch time',
        'YouTube Shorts creators — reach Hindi and regional language audiences',
        'Teachers and educators — make educational content accessible in multiple languages',
        'Business owners — create product videos with subtitles for customers across India',
        'Podcasters — turn audio content into captioned video clips for social media',
        'Students — add subtitles to project videos and presentations',
      ],
    },
    { type: 'h2', text: 'Frequently Asked Questions' },
    { type: 'faq', q: 'Is the AI caption generator in CutEdit free?', a: 'Yes. The AI caption generator in CutEdit is completely free. There are no hidden charges, no subscription, and no limit on how many videos you can caption.' },
    { type: 'faq', q: 'Does CutEdit need internet to generate captions?', a: 'No. CutEdit\'s AI caption generator works fully offline. Your video is processed on your phone — nothing is uploaded to any server.' },
    { type: 'faq', q: 'Can CutEdit generate captions in Hindi?', a: 'Yes. CutEdit supports Hindi captions natively. Speak in Hindi and get accurate Hindi subtitles automatically.' },
    { type: 'faq', q: 'Can I translate my Hindi video to Tamil or Telugu captions?', a: 'Yes. You can record in Hindi and generate captions in Tamil, Telugu, Kannada, Bengali, Marathi, or English — automatically.' },
    { type: 'faq', q: 'Which Android phones support AI captions in CutEdit?', a: 'CutEdit works on all Android phones including budget devices with 2GB RAM — Redmi, Realme, Samsung, Infinix, Tecno, and more.' },
    { type: 'faq', q: 'Can I edit the captions after they are generated?', a: 'Yes. After generation you can tap on any caption to edit the text, change timing, or adjust font and style.' },
    { type: 'faq', q: 'Does CutEdit add a watermark to captioned videos?', a: 'No. CutEdit never adds a watermark. Your exported video is completely clean.' },
    { type: 'cta' },
  ],
}

export default function BlogPost() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.tag}>{post.tag}</span>
            <span className={styles.date}>{post.date}</span>
          </div>
          <h1 className={styles.title}>{post.title}</h1>
        </div>

        <article className={styles.article}>
          {post.content.map((block, i) => {
            if (block.type === 'intro') return <p key={i} className={styles.intro}>{block.text}</p>
            if (block.type === 'h2') return <h2 key={i} className={styles.h2}>{block.text}</h2>
            if (block.type === 'h3') return <h3 key={i} className={styles.h3}>{block.text}</h3>
            if (block.type === 'p') return <p key={i} className={styles.p}>{block.text}</p>
            if (block.type === 'bullets') return (
              <ul key={i} className={styles.bullets}>
                {block.items.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            )
            if (block.type === 'steps') return (
              <ol key={i} className={styles.bullets}>
                {block.items.map((item, j) => (
                  <li key={j} style={{counterIncrement:'none'}}>
                    <strong style={{color:'#8a5cf6',marginRight:'8px'}}>{j+1}.</strong>{item}
                  </li>
                ))}
              </ol>
            )
            if (block.type === 'faq') return (
              <div key={i} className={styles.faq}>
                <h4 className={styles.faqQ}>{block.q}</h4>
                <p className={styles.faqA}>{block.a}</p>
              </div>
            )
            if (block.type === 'cta') return (
              <div key={i} className={styles.cta}>
                <h3>Download CutEdit — Free AI Caption Generator for Android</h3>
                <p>Speak in Hindi or English. Get captions in any Indian language. Free, offline, no watermark.</p>
                <a
                  href="https://play.google.com/store/apps/details?id=com.framesnap.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Download on Google Play
                </a>
                <p className={styles.ctaSub}>Free · Offline · Hindi · Tamil · Telugu · Kannada · Bengali · Marathi</p>
              </div>
            )
            return null
          })}
        </article>
      </div>
    </div>
  )
}
