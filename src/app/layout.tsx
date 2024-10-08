import type { Metadata } from "next";
import { Rubik } from 'next/font/google'; 
import "./globals.css";

const rubik = Rubik({
  subsets: ['latin'], 
  variable: '--font-rubik', 
  weight: ['300', '400', '500', '700'], 
});

export const metadata: Metadata = {
  title: "Urban Rental",
  description: "Urban Rental",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
