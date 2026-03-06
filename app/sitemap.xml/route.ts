import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://rskpublicschool.edu.in';
  const currentDate = new Date().toISOString();

  const urls = [
    // Main pages
    { url: '', priority: '1.0', changefreq: 'daily' },
    { url: '/about', priority: '0.9', changefreq: 'monthly' },
    { url: '/about/principal', priority: '0.8', changefreq: 'monthly' },
    { url: '/about/director', priority: '0.8', changefreq: 'monthly' },
    { url: '/about/discipline', priority: '0.7', changefreq: 'monthly' },
    
    // Academics
    { url: '/academics', priority: '0.9', changefreq: 'weekly' },
    { url: '/teachers', priority: '0.8', changefreq: 'monthly' },
    { url: '/online-tuition', priority: '0.8', changefreq: 'weekly' },
    { url: '/non-academic', priority: '0.7', changefreq: 'monthly' },
    
    // Admissions
    { url: '/admissions', priority: '0.9', changefreq: 'daily' },
    { url: '/admissions/apply', priority: '0.9', changefreq: 'daily' },
    { url: '/admissions/process', priority: '0.8', changefreq: 'weekly' },
    { url: '/admissions/fees', priority: '0.8', changefreq: 'monthly' },
    
    // Facilities & Information
    { url: '/infrastructure', priority: '0.8', changefreq: 'monthly' },
    { url: '/disclosure', priority: '0.8', changefreq: 'monthly' },
    { url: '/notice-board', priority: '0.8', changefreq: 'daily' },
    { url: '/results-announcements', priority: '0.8', changefreq: 'weekly' },
    
    // Gallery
    { url: '/gallery', priority: '0.7', changefreq: 'weekly' },
    { url: '/gallery/photos', priority: '0.7', changefreq: 'weekly' },
    { url: '/gallery/videos', priority: '0.7', changefreq: 'weekly' },
    
    // Other pages
    { url: '/parents', priority: '0.7', changefreq: 'monthly' },
    { url: '/contact', priority: '0.8', changefreq: 'monthly' },
    { url: '/privacy-policy', priority: '0.5', changefreq: 'yearly' },
    { url: '/terms-conditions', priority: '0.5', changefreq: 'yearly' },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(({ url, priority, changefreq }) => `
  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
