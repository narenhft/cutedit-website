export default function sitemap() {
  return [
    {
      url: 'https://cutedit.co.in',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://cutedit.co.in/products',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://cutedit.co.in/contact',
      lastModified: new Date(),
      priority: 0.5,
    },
  ]
}