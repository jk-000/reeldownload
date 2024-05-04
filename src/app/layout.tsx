import { Metadata } from "next";
import { DM_Sans as FontSans } from "next/font/google";

import "@/styles/globals.css";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { ReactQueryProvider } from "@/components/providers/react-query-provider";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Instagram Reels Downloader — Save Reels & Videos",
  description: "Instagram Reels Video Downloader is an amazing tool for Instagram reels video download",
  keywords:"instagram reels video, download instagram reels, reels video download, downloading instagram reels, instagram reels downloader, reels downloader, download reels, downloading instagram, instagram video download tool"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          fontSans.variable,
          "bg-background overflow-x-hidden font-sans antialiased"
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
      </body>
    </html>
  );
}
