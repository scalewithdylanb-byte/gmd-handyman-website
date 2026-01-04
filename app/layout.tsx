import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "GMD Handyman Services | Reliable Home Repairs",
  description:
    "Professional, prompt, and trustworthy handyman services for every home improvement project in the GMD area.",
  openGraph: {
    title: "GMD Handyman Services | Reliable Home Repairs",
    description:
      "Professional, prompt, and trustworthy handyman services for every home improvement project in the GMD area.",
    url: "https://www.gmdhandyman.com",
    siteName: "GMD Handyman Services",
    images: [
      {
        url: "/social-preview.png",
        width: 1200,
        height: 630,
        alt: "GMD Handyman Services social preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GMD Handyman Services | Reliable Home Repairs",
    description:
      "Professional, prompt, and trustworthy handyman services for every home improvement project in the GMD area.",
    images: ["/social-preview.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-neutral-50 text-neutral-900">
        <div className="flex min-h-screen flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
