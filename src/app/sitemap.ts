import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://e4youth.org'
  const pages = [
    '/', '/funders', '/programs', '/programs/dsp', '/programs/get-creative',
    '/programs/hip', '/programs/wow', '/programs/wow-heritage-center',
    '/programs/e4-live', '/programs/e4-level-up', '/impact', '/stories',
    '/partner', '/about', '/contact',
  ]
  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '/' ? 1 : 0.8,
  }))
}
