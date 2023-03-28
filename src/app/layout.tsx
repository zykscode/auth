import { Metadata } from 'next';
import './globals.css'
import { Footer } from '#/components/Footer';
import Header from '#/components/Header/Header';

export const metadata: Metadata = {
  title: {
    default: 'Zykson',
    template: '%s | Lee Robinson',
  },
  description: 'Developer, writer, and creator.',
  openGraph: {
    title: 'Lee Robinson',
    description: 'Developer, writer, and creator.',
    url: 'https://leerob.io',
    siteName: 'Lee Robinson',
    images: [
      {
        url: 'https://leerob.io/og.jpg',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
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
  twitter: {
    title: 'Lee Robinson',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
  verification: {
    google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
    yandex: '14d2e73487fa6c71',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      
        <body className="app notion rounded-t-2xl">
          <div className="viewpoint z-60"></div>
          <div className="frame text-clip rounded-t-2xl px-2">
            <Header />
            <div className="page-scroller">{children}</div>
          </div>
          <Footer />
        </body>
   
    </html>
  )
}
