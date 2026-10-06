import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'CutEdit — Faceless Reel Maker for Android',
  description:
    'Turn a fabric or product photo into a reel with an AI model wearing your clothes. Add captions for kurti, saree and lehenga reels. Faceless reel maker for Android.',
  keywords:
    'ai model wearing my clothes, fabric to model ai, clothing reel maker, saree reel video, kurti reels, lehenga reel, ai fashion model video, product photo to video ai, faceless reel maker, make reels without showing face, instagram reel captions for clothing, boutique reels app, video editor android',
  openGraph: {
    title: 'CutEdit — Turn Fabric Photos into Reels with an AI Model',
    description:
      'Upload a fabric or clothing photo, pick a category, and get a reel with an AI model wearing it, plus captions for Instagram and YouTube Shorts.',
    url: 'https://cutedit.co.in',
    siteName: 'CutEdit',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-82JZ92Z7KV"></script>
        <script dangerouslySetInnerHTML={{__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-82JZ92Z7KV');
        `}} />
	 <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5345619282627829" crossorigin="anonymous"></script>
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}