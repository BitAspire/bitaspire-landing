import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { Viewport } from 'next'

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BitAspire.com",
  description: "We make high quality Minecraft plugins so you can enjoy your game even more. Join our Discord server for support or check our documentation to learn about plugins.",
  keywords: [
    "Minecraft plugins",
    "BitAspire",
    "Minecraft server",
    "Spigot",
    "Paper",
    "Bukkit",
    "Plugin development",
    "Game mods",
    "Documentation",
    "Discord support"
  ],
  authors: [{ name: "BitAspire", url: "https://bitaspire.com" }],
  robots: "index, follow",
  openGraph: {
    title: "BitAspire.com",
    description: "We make high quality Minecraft plugins so you can enjoy your game even more. Join our Discord server for support or check our documentation to learn about plugins.",
    url: "https://bitaspire.com",
    siteName: "BitAspire",
    images: [
      {
        url: "https://bitaspire.com/banner.png",
        width: 800,
        height: 512,
        alt: "BitAspire - High Quality Minecraft Plugins",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BitAspire.com",
    description: "We make high quality Minecraft plugins so you can enjoy your game even more. Join our Discord server for support or check our documentation to learn about plugins.",
    images: ["https://bitaspire.com/banner.png"],
  }
};

export const viewport: Viewport = {
  themeColor: '#3041F3',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
