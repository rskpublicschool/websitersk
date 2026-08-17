import type { Metadata } from 'next';
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';
import { schoolInfo } from './lib/schoolData';

export const metadata: Metadata = {
  title: {
    default: `${schoolInfo.name} - Best CBSE School in Dehri on Sone, Bihar`,
    template: `%s | ${schoolInfo.name}`
  },
  description: `${schoolInfo.name} is the best CBSE affiliated school in Dehri on Sone, Bihar. Top-rated educational institution offering quality education from primary to senior secondary with modern infrastructure, experienced faculty, and holistic development programs. Enroll now for admission 2026-27.`,
  keywords: [
    'RSK Public School',
    'Best CBSE School Dehri on Sone',
    'Top School in Dehri on Sone',
    'Best School in Dehri on Sone',
    'CBSE School Dehri on Sone',
    'Dehri on Sone School Admission',
    'Quality Education Bihar',
    'CBSE Affiliation',
    schoolInfo.affiliationNo,
    'English Medium School Dehri',
    'Primary Education Dehri',
    'Secondary Education Dehri',
    'Best School Rohtas District',
    'Top 10 Schools Dehri on Sone',
    'School Admission 2026-27',
    'Quality Education Dehri'
  ],
  authors: [{ name: schoolInfo.name }],
  creator: schoolInfo.name,
  publisher: schoolInfo.name,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://rskpublicschool.edu.in',
    siteName: schoolInfo.name,
    title: `${schoolInfo.name} - Best CBSE School in Dehri on Sone`,
    description: 'Best CBSE affiliated school in Dehri on Sone, Bihar providing quality education and holistic development. Top-rated school with excellent results and modern facilities.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${schoolInfo.name} Campus`
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${schoolInfo.name} - Best CBSE School in Dehri on Sone`,
    description: 'Best CBSE affiliated school in Dehri on Sone, Bihar with excellent results and modern facilities',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://rskpublicschool.edu.in'
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo RSK best shcool in dehri rohtas.png', type: 'image/png' }
    ],
    apple: '/logo RSK best shcool in dehri rohtas.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon Configuration */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo RSK best shcool in dehri rohtas.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo RSK best shcool in dehri rohtas.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e40af" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": schoolInfo.name,
              "alternateName": "RSK School",
              "url": "https://rskpublicschool.edu.in",
              "logo": "https://rskpublicschool.edu.in/logo%20RSK%20best%20shcool%20in%20dehri%20rohtas.png",
              "description": "Best CBSE affiliated school in Dehri on Sone, Bihar providing quality education and holistic development",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": schoolInfo.address,
                "addressLocality": "Dehri",
                "addressRegion": "Bihar",
                "postalCode": schoolInfo.pinCode,
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": schoolInfo.phone,
                "contactType": "Admissions",
                "email": schoolInfo.email,
                "availableLanguage": ["English", "Hindi"]
              },
              "sameAs": [
                "https://facebook.com/rskpublicschool",
                "https://youtube.com/rskpublicschool"
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
