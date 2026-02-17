import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://e4youth.org'
  const pages = [
    '/',
    '/ecosystem',
    '/experiences',
    '/experiences/ar-heritage-tours',
    '/experiences/digital-storytelling',
    '/experiences/get-creative',
    '/experiences/hip',
    '/experiences/wow',
    '/experiences/wow-heritage-center',
    '/experiences/e4-live',
    '/experiences/e4-level-up',
    '/impact',
    '/partner',
    '/stories',
    '/about',
    '/contact',
    '/funders',
  ]
  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '/' ? 1 : path === '/ecosystem' || path === '/experiences' ? 0.9 : 0.8,
  }))
}
