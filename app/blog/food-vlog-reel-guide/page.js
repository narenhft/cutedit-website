import styles from '../one-app-for-all/page.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'How to Make a Food Vlog Reel — Free AI Video Editor for Android',
  description: 'Turn your cooking clips into a scroll-stopping food reel in minutes. Upload your final dish first, add the Food filter, and let CutEdit handle the rest. Free, no editing skills needed.',
  keywords: 'how to make ai video for food, how to make food video for tiktok, how to make food video for youtube, how to make product video with ai free, how to make video for beginners, how to make food vlog without showing face, how to make ai video for jewelry',
  alternates: {
    canonical: 'https://cutedit.co.in/blog/food-vlog-reel-guide',
  },
  openGraph: {
    title: 'How to Make a Food Vlog Reel — Free AI Video Editor',
    description: 'Upload your final dish first, pick the Food filter, and CutEdit builds your reel automatically. Free, fast, and works for sarees, jewellery, woodwork and travel too.',
    url: 'https://cutedit.co.in/blog/food-vlog-reel-guide',
    siteName: 'CutEdit',
    type: 'article',
  },
}

const post = {
  title: 'How to Make a Food Vlog Reel — Step by Step',
  date: 'July 2026',
  tag: 'Guide',
  content: [
    {
      type: 'intro',
      text: 'You spend hours cooking, plating, and getting the shot right — the last thing you want to do next is spend another hour editing. Here\'s exactly how to turn your cooking clips into a polished food reel in just a few minutes using CutEdit.',
    },
    { type: 'h2', text: 'Step by Step — Making Your Food Reel' },
    {
      type: 'steps',
      items: [
        'Open CutEdit and tap "Make My Reel" (you can also get here via the slider at the top — same destination)',
        'Select "For Product Sellers"',
        'Upload your clips in this order: start with your final cooked dish — this is your hook — then follow with preparation, cooking, and the final result',
        'CutEdit shows you an instant preview of your reel',
        'Change the filter, music, or template if you want, or simply export as-is',
        'For best results, select the "Food" filter — it\'s built specifically for food content',
        'Want to explain what you\'re doing? Add a voiceover — it layers on top of your video automatically',
      ],
    },
    { type: 'h2', text: 'You Cook. We Edit.' },
    { type: 'p', text: 'That\'s really the whole idea. You focus on the food — the sizzle, the plating, the final reveal — and CutEdit handles the cuts, the music, and the pacing. The entire process takes just a few minutes from upload to export, so you can go from finishing a dish to posting about it almost immediately.' },
    { type: 'h2', text: 'Grow Faster With Auto-Generated Captions (Premium)' },
    { type: 'p', text: 'If you\'re a Premium member, CutEdit automatically generates captions for Instagram and YouTube alongside your reel — so you\'re not stuck writing a caption every time you post. Less friction means you can post daily, and posting daily is what actually grows a food page — more consistency leads to more reach, and more reach leads to more engagement from people who want to see what you\'re cooking next.' },
    { type: 'h2', text: 'The Same Method Works Beyond Food' },
    { type: 'p', text: 'This exact flow — hook clip first, then the rest in order, pick the right filter — works for more than just food. Just swap the filter for your category:' },
    {
      type: 'bullets',
      items: [
        'Food creators — use the "Food" filter',
        'Saree and lehenga sellers — use the "Clothing" filter',
        'Wooden furniture and carpentry — use the "Wood" filter',
        'Travel creators — use the "Travel" filter',
        'Jewellery sellers — use the "Jewellery" or "Diamond" filter',
      ],
    },
    { type: 'h2', text: 'Frequently Asked Questions' },
    { type: 'faq', q: 'How do I make an AI video for food content?', a: 'Open CutEdit, tap "Make My Reel," select "For Product Sellers," upload your clips starting with the final dish, and select the "Food" filter. The app builds your reel automatically.' },
    { type: 'faq', q: 'How do I make a food video for TikTok or YouTube?', a: 'Upload your cooking clips into CutEdit in the order: final dish first, then preparation and cooking. Preview, adjust filter or music if needed, and export — ready for TikTok or YouTube.' },
    { type: 'faq', q: 'Can I make a product video with AI for free?', a: 'Yes. CutEdit is free with unlimited exports. The auto-editing, filters, and music are all available on the free tier.' },
    { type: 'faq', q: 'Can I make a food vlog without showing my face?', a: 'Yes. Since the focus is on the food and cooking process, you don\'t need to appear on camera — you can add a voiceover instead if you want to narrate.' },
    { type: 'faq', q: 'Does this only work for food videos?', a: 'No. The same method works for sarees, jewellery, woodwork, and travel content too — just select the matching filter for your category.' },
    { type: 'link', text: 'Making a wedding, birthday or travel reel instead?', href: '/blog/memory-reels-wedding-birthday-travel', linkText: 'Check out our memory reel guide →' },
    { type: 'cta' },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": post.content
    .filter(block => block.type === 'faq')
    .map(block => ({
      "@type": "Question",
      "name": block.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": block.a
      }
    }))
}

export default function BlogPost() {
  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
            if (block.type === 'link') return (
              <p key={i} className={styles.p}>
                {block.text} <Link href={block.href} style={{color:'#E65100'}}>{block.linkText}</Link>
              </p>
            )
            if (block.type === 'bullets') return (
              <ul key={i} className={styles.bullets}>
                {block.items.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            )
            if (block.type === 'steps') return (
              <ol key={i} className={styles.bullets}>
                {block.items.map((item, j) => (
                  <li key={j}>
                    <strong style={{color:'#E65100',marginRight:'8px'}}>{j+1}.</strong>{item}
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
                <h3>Download CutEdit — Free Food Vlog & Reel Maker</h3>
                <p>Upload your dish first, pick the Food filter, and let CutEdit handle the rest. Free, fast, no watermark.</p>
                
                  <a
		  href="https://play.google.com/store/apps/details?id=com.framesnap.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Download on Google Play
                </a>
                <p className={styles.ctaSub}>Free · Unlimited Exports · No Watermark</p>
              </div>
            )
            return null
          })}
        </article>
      </div>
    </div>
  )
}