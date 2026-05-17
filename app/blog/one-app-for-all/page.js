import fs from 'fs'
import path from 'path'
import styles from './page.module.css'

export const metadata = {
  title: 'Best Free Video Editor for Android 2025 — No Watermark | CutEdit',
  description: 'CutEdit is the best free video editor for Android with AI captions in Hindi, GIF maker, audio extractor, video compressor, speed ramp and timeline editor — all in one app, fully offline, no watermark.',
}

const post = {
  title: 'Best Free Video Editor for Android in 2025 — One App Replaces All',
  date: 'May 2026',
  tag: 'Guide',
  content: [
    {
      type: 'intro',
      text: 'If you are searching for a free video editor for Android that works offline, has no watermark, and does everything in one place — you just found it. Most Indian creators end up downloading 5 or 6 different apps just to edit one video. A separate trimmer. A separate compressor. A separate app for captions. Another one for GIFs. It wastes your storage, drains your battery, and wastes your time. CutEdit changes all of that.',
    },
    { type: 'h2', text: 'What Can CutEdit Do? Everything.' },
    { type: 'h3', text: '1. Video Trimmer and Cutter — Free, No Watermark' },
    { type: 'p', text: 'Looking for a free video trimmer for Android without watermark? CutEdit lets you trim, cut, split, and rotate any video in seconds. Export as MP4 instantly. No subscription. No watermark. Completely free.' },
    { type: 'h3', text: '2. Timeline Editor — Full Control Over Your Edits' },
    { type: 'p', text: 'CutEdit includes a full-featured multi-track timeline editor — the kind you usually only find in expensive desktop software. Layer multiple video clips, add music, apply effects, and adjust every frame with precision. Whether you are making YouTube Shorts, Instagram Reels, or WhatsApp status videos, the timeline editor gives you complete creative control.' },
    { type: 'h3', text: '3. AI Caption Generator in Hindi, Tamil, Telugu and More' },
    { type: 'p', text: 'One of the most searched features for Indian creators is an AI caption generator that works in Hindi offline. CutEdit does exactly this. Auto-generate subtitles from your video audio — in Hindi, Tamil, Telugu, Bengali, Marathi and more regional languages. It works fully offline. No internet needed. No typing required. Adding captions to your reels increases views by up to 40% because most people watch videos without sound.' },
    { type: 'h3', text: '4. Speed Ramp — Slow Motion and Fast Forward Free' },
    { type: 'p', text: 'Speed ramping is one of the most popular video effects in 2025 — used in trending reels, cinematic YouTube videos, and viral content. CutEdit lets you apply smooth speed changes — slow motion, fast forward, and cinematic speed ramp — to any part of your clip. Previously this was only possible in expensive apps or desktop software. CutEdit brings it to your Android phone for free.' },
    { type: 'h3', text: '5. Video Compressor for WhatsApp — Reduce Size Without Losing Quality' },
    { type: 'p', text: 'Tired of WhatsApp saying your video is too large? Use CutEdit\'s built-in video compressor for Android to shrink your video file size without losing quality. Perfect for sharing on WhatsApp, email, and Instagram. No separate compressor app needed.' },
    { type: 'h3', text: '6. GIF Maker — Convert Video to GIF in One Tap' },
    { type: 'p', text: 'Want to convert video to GIF on Android for free? CutEdit has a built-in GIF maker that converts any video clip to a GIF in one tap. Share your GIFs on WhatsApp, Twitter, Reddit, or anywhere else. Most GIF maker apps are full of ads or need internet. CutEdit works offline and is completely free.' },
    { type: 'h3', text: '7. Audio Extractor — Save MP3 from Any Video' },
    { type: 'p', text: 'Need to extract audio from video on Android? CutEdit saves the audio from any video as an MP3 instantly. Perfect for extracting background music, saving a voiceover, or getting audio from a recorded lecture or podcast.' },
    { type: 'h3', text: '8. HD Photo Extractor — Capture Sharp Frames from Video' },
    { type: 'p', text: 'CutEdit\'s HD photo extractor lets you capture high-quality still frames from any video. Use it for YouTube thumbnails, Instagram posts, profile photos, or saving that one perfect moment from your footage.' },
    { type: 'h2', text: 'Why CutEdit is the Best Video Editor for Budget Android Phones in India' },
    {
      type: 'bullets',
      items: [
        'Works on 2GB RAM phones — Redmi, Realme, Samsung, Infinix, Tecno',
        'Fully offline — no internet required for any feature',
        'No watermark — your videos are 100% yours',
        'No login required — open and start editing instantly',
        'No subscription — everything is free, always',
        'Your videos never leave your phone — complete privacy',
      ],
    },
    { type: 'h2', text: 'Frequently Asked Questions' },
    { type: 'faq', q: 'Is CutEdit really free?', a: 'Yes. CutEdit is 100% free to download and use. There are no hidden charges, no subscription, and no watermark on your exported videos.' },
    { type: 'faq', q: 'Does CutEdit work without internet?', a: 'Yes. Every feature in CutEdit works fully offline. You do not need an internet connection to trim, compress, add captions, make GIFs, or extract audio.' },
    { type: 'faq', q: 'Which phones does CutEdit support?', a: 'CutEdit works on all Android phones including budget devices with 2GB RAM. It is optimized for Redmi, Realme, Samsung, Infinix, Tecno, and other popular Indian brands.' },
    { type: 'faq', q: 'Can CutEdit generate captions in Hindi?', a: 'Yes. CutEdit\'s AI caption generator supports Hindi, Tamil, Telugu, Bengali, Marathi, and other Indian languages. It works fully offline.' },
    { type: 'faq', q: 'Is there a watermark on exported videos?', a: 'No. CutEdit never adds a watermark to your videos.' },
    { type: 'faq', q: 'Can I use CutEdit to make Instagram Reels?', a: 'Yes. CutEdit is perfect for making Instagram Reels. Use the timeline editor, add AI captions, apply speed ramp effects, and export in the right aspect ratio — all in one app.' },
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
            if (block.type === 'faq') return (
              <div key={i} className={styles.faq}>
                <h4 className={styles.faqQ}>{block.q}</h4>
                <p className={styles.faqA}>{block.a}</p>
              </div>
            )
            if (block.type === 'cta') return (
              <div key={i} className={styles.cta}>
                <h3>Download CutEdit — Free Video Editor for Android</h3>
                <p>Stop switching between 6 different apps. Get everything you need in one place, for free.</p>
                <a
                  href="https://play.google.com/store/apps/details?id=com.framesnap.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Download on Google Play
                </a>
                <p className={styles.ctaSub}>No watermark · No subscription · Works offline · All Android phones</p>
              </div>
            )
            return null
          })}
        </article>
      </div>
    </div>
  )
}
