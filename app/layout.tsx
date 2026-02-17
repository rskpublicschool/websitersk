import type { Metadata } from 'next';
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';
import { schoolInfo } from './lib/schoolData';

export const metadata: Metadata = {
  title: {
    default: `${schoolInfo.name} - CBSE Affiliated School in Buxar, Bihar`,
    template: `%s | ${schoolInfo.name}`
  },
  description: `${schoolInfo.name} is a premier CBSE affiliated educational institution in Buxar, Bihar. Offering quality education from primary to senior secondary with modern infrastructure, experienced faculty, and holistic development programs.`,
  keywords: [
    'RSK Public School',
    'CBSE School Buxar',
    'Best School in Buxar',
    'Buxar School Admission',
    'Quality Education Bihar',
    'CBSE Affiliation',
    schoolInfo.affiliationNo,
    'English Medium School',
    'Primary Education',
    'Secondary Education'
  ],
  authors: [{ name: schoolInfo.name }],
  creator: schoolInfo.name,
  publisher: schoolInfo.name,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://rskpublicschool.edu.in',
    siteName: schoolInfo.name,
    title: `${schoolInfo.name} - Excellence in Education`,
    description: 'Premier CBSE affiliated school providing quality education and holistic development in Buxar, Bihar.',
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
    title: `${schoolInfo.name} - Excellence in Education`,
    description: 'Premier CBSE affiliated school in Buxar, Bihar',
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
        <link rel="icon" href="/logo RSK best shcool in dehri rohtas.png" />
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
              "description": "Premier CBSE affiliated school in Buxar, Bihar providing quality education",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": schoolInfo.address,
                "addressLocality": "Buxar",
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
