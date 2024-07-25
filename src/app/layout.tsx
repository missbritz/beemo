import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Britta Oblan",
  description: "Software Engineer from Philippines, living in Singapore",
};

const isProductionGA = process.env.GA_ID || '';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.className} dark:bg-darkImg dark:bg-transparent`}>
          {children}
      </body>
      <GoogleAnalytics gaId={isProductionGA} />
    </html>
  );
}