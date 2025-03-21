import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Britta Oblan",
  description: "Software Engineer from Philippines, living in Melbourne, Australia",
};

const isProductionGA = process.env.GA_ID || '';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.className} bg-darkBodyImg bg-cover min-h-screen`}>
          {children}
      </body>
      <GoogleAnalytics gaId={isProductionGA} />
    </html>
  );
}