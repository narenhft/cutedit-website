# CutEdit Website — cutedit.co.in

## Tech Stack
- **Next.js 14** (static export)
- **Hosted on:** Cloudflare Pages (free)

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Feature Flags

Edit `flags.js` in the root to toggle features:

```js
const flags = {
  BLOG_ENABLED: false, // set to true to show blog
}
```

## Build for Production

```bash
npm run build
# Output goes to /out folder
```

## Deploy on Cloudflare Pages

1. Push this repo to GitHub
2. Go to https://pages.cloudflare.com
3. Connect your GitHub repo
4. Set build command: `npm run build`
5. Set output directory: `out`
6. Add custom domain: cutedit.co.in

## Contact Form Setup

1. Sign up at https://formspree.io (free)
2. Create a new form → copy your Form ID
3. In `app/contact/page.js`, replace `YOUR_FORM_ID` with your actual ID:
   ```
   https://formspree.io/f/YOUR_FORM_ID
   ```
