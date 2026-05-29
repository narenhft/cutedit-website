import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'CutEdit — Free AI Video Editor for Android | No Watermark',
  description: 'CutEdit is a free offline AI video editor for Android. Make reels, add AI captions in Hindi & more, trim, compress, extract audio — no watermark, no subscription.',
  keywords: 'free video editor android, offline video editor, ai captions hindi, reels editor, no watermark video editor, video trimmer, video compressor, gif maker, speed ramp, slow motion, audio extractor, indian video editor, budget phone video editor',
  openGraph: {
    title: 'CutEdit — Free AI Video Editor | No Watermark',
    description: 'Free offline video editor for Indian creators. AI captions, reels, GIF maker, compressor — no watermark, no paywall, no internet needed.',
    url: 'https://cutedit.co.in',
    siteName: 'CutEdit',
    type: 'website',
  },
}

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