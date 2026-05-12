import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kakamega Forest Ecosystem Consortium | KFE Consortium",
  description: "A community-based organization dedicated to sustainable nature conservation and livelihood improvement in the Kakamega Forest Ecosystem.",
  keywords: ["Kakamega Forest", "Conservation Kenya", "Biodiversity", "KFE Consortium", "Forest Restoration"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-zinc-950">
        {/* You can add a global Navbar here later */}
        <div className="flex-grow">
          {children}
        </div>
        {/* The footer in page.tsx will sit at the bottom */}
      </body>
    </html>
  );
}