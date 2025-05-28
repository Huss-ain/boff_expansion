import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Boff AI - Empathetic Outreach',
  description: 'AI-powered empathetic outreach that builds relationships and converts prospects into customers.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/assets/Boff_favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: { url: '/assets/Boff_favicon/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    other: [
      {
        rel: 'android-icon',
        url: '/assets/Boff_favicon/android-icon-192x192.png',
        sizes: '192x192',
      },
      { rel: 'manifest', url: '/assets/Boff_favicon/manifest.json' },
    ],
  },

  openGraph: {
    title: "Boff AI - Empathetic Outreach",
    description: "AI-powered empathetic outreach that builds relationships and converts prospects into customers",
    url: 'https://boffai.com', // Replace with your actual URL
    siteName: 'Boff AI',
    images: [
      {
        url: '/og-image.png', // Create this image for social sharing
        width: 1200,
        height: 630,
        alt: 'Boff AI - Empathetic Outreach',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <head>
        {/* Basic Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/Boff_favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/Boff_favicon/favicon-16x16.png" />
        
        {/* Apple Icons */}
        <link rel="apple-touch-icon" href="/assets/Boff_favicon/apple-icon-180x180.png" />
        
        {/* Android */}
        <link rel="manifest" href="/assets/Boff_favicon/manifest.json" />
        
        {/* Microsoft */}
        <meta name="msapplication-config" content="/assets/Boff_favicon/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#ffffff" />
      </head>
      <body className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  );
}
