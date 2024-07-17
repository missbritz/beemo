import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
const lexend = Lexend({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Britta Oblan",
//   description: "Software Engineer from Philippines, living in Singapore",
// };

const isProductionGA = process.env.GA_ID || '';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexend.className}>
          {children}
      </body>
      <GoogleAnalytics gaId={isProductionGA} />
    </html>
  );
}