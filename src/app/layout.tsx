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
      { url: '/assets/Boff_favicon/favicon.ico' },
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
        {/* Standard Favicon */}
        <link rel="icon" href="/assets/Boff_favicon/favicon.ico" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="57x57" href="/assets/Boff_favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/assets/Boff_favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/assets/Boff_favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/assets/Boff_favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/assets/Boff_favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/assets/Boff_favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/assets/Boff_favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/assets/Boff_favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/Boff_favicon/apple-icon-180x180.png" />
        
        {/* Android Icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/assets/Boff_favicon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/Boff_favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/assets/Boff_favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/Boff_favicon/favicon-16x16.png" />
        
        {/* Web Manifest */}
        <link rel="manifest" href="/assets/Boff_favicon/manifest.json" />
        
        {/* Microsoft Tiles */}
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/assets/Boff_favicon/ms-icon-144x144.png" />
        <meta name="msapplication-config" content="/assets/Boff_favicon/browserconfig.xml" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  );
}
