import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Platinum Luxury Spa - Premium Spa & Wellness in Hyderabad',
  description: 'Experience luxury and tranquility at Platinum Luxury Spa in Madhapur, Hyderabad. Premium spa treatments, massage therapy, and wellness services in a serene environment.',
  keywords: 'spa, luxury spa, hyderabad, madhapur, massage, wellness, beauty treatments, relaxation',
  authors: [{ name: 'Platinum Luxury Spa' }],
  openGraph: {
    title: 'Platinum Luxury Spa - Premium Spa & Wellness in Hyderabad',
    description: 'Experience luxury and tranquility at Platinum Luxury Spa in Madhapur, Hyderabad.',
    url: 'https://platinumluxuryspa.com',
    siteName: 'Platinum Luxury Spa',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Platinum Luxury Spa',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Platinum Luxury Spa - Premium Spa & Wellness in Hyderabad',
    description: 'Experience luxury and tranquility at Platinum Luxury Spa in Madhapur, Hyderabad.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 