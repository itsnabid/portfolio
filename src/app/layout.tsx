import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
siteConfig
}
from "@/config/site";


export const metadata: Metadata = {

title:

siteConfig.name,

description:

siteConfig.description,

};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>

  <Navbar />

  {children}

  <Footer />

</ThemeProvider>
      </body>
    </html>
  );
}