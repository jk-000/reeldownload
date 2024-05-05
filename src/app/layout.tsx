/* eslint-disable @next/next/no-sync-scripts */
import { Metadata } from "next";
import { DM_Sans as FontSans } from "next/font/google";

import "@/styles/globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { ReactQueryProvider } from "@/components/providers/react-query-provider";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Instagram Reels Downloader — Save Reels & Videos",
  description:
    "Instagram Reels Video Downloader is an amazing tool for Instagram reels video download",
  keywords:
    "instagram reels video, download instagram reels, reels video download, downloading instagram reels, instagram reels downloader, reels downloader, download reels, downloading instagram, instagram video download tool",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <script type='text/javascript' src='//pl23229211.highcpmgate.com/6c/7d/1f/6c7d1fc65e4afb4ea22c9a7495dc0cf6.js'></script>

      <script type='text/javascript' src='//pl23229241.highcpmgate.com/6f/98/e0/6f98e07ef4829be4f8cf42eb323c78ef.js'></script>

<script type="application/ld+json">
  {`
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      "name": "Instagram Downloader",
      "url": "https://reelgram.online/",
      "description": "Instagram Reels Video Downloader is an amazing tool for Instagram reels video download"
    }
  `}
</script>
        
      </head>
      <body
        className={cn(
          fontSans.variable,
          "overflow-x-hidden bg-background font-sans antialiased"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReactQueryProvider>
            <Navbar />
            <main className="relative h-[calc(100vh-6rem)] overflow-y-auto px-2 sm:px-4">
              {children}
            </main>
            <Footer />
          </ReactQueryProvider>
        </ThemeProvider>
        <script type='text/javascript' src='//pl23229241.highcpmgate.com/6f/98/e0/6f98e07ef4829be4f8cf42eb323c78ef.js'></script>
      </body>
    </html>
  );
}
