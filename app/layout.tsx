import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Tasteology by AM",
  description: "Master cooking with expert tips, tasty recipes, and pro techniques. Elevate every meal into a masterpiece!",
  keywords: "cooking, recipes, food blog, gourmet, kitchen tips",
  openGraph: {
    title: 'Tasteology by AM',
    description: "Master cooking with expert tips, tasty recipes, and pro techniques. Elevate every meal into a masterpiece!",
    url: 'https://tasteologybyam.netlify.app/',
    siteName: 'Tasteology by AM',
    images: [
      {
        url: 'https://tasteologybyam.netlify.app/images/og_image.jpg',
        width: 800,
        height: 600,
      },
      {
        url: 'https://tasteologybyam.netlify.app/images/og_image.jpg',
        width: 1200,
        height: 630,
        alt: 'angelika macapagal website',
      },
    ],
    locale: 'en_US',
    type: 'website'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
