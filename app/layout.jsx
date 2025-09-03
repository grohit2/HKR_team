import './globals.css';

export const metadata = {
  title: 'HKR Team - Land a Full-Time Role You\'ll Love | Career Success Platform',
  description: 'Join over 50 successful placements at 500+ leading US companies. Access exclusive job openings, get personal recruiter support within 24 hours, and unlock your career potential with proven results.',
  keywords: 'career placement, job search, recruitment services, full-time jobs, career growth, professional development, US companies, job opportunities',
  author: 'HKR Team',
  robots: 'index, follow',
  openGraph: {
    title: 'HKR Team - Land a Full-Time Role You\'ll Love',
    description: 'Join over 50 successful placements at 500+ leading US companies. Access exclusive job openings and unlock your career potential.',
    type: 'website',
    url: 'https://hkrteam.com',
    images: [
      {
        url: 'https://hkrteam.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HKR Team - Career Success Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HKR Team - Land a Full-Time Role You\'ll Love',
    description: 'Join over 50 successful placements at 500+ leading US companies. Access exclusive job openings and unlock your career potential.',
    images: ['https://hkrteam.com/twitter-image.jpg'],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
