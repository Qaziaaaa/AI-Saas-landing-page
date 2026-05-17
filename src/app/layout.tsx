import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Dynamic viewport theme matching Celestial Modernism color variables
export const viewport: Viewport = {
  themeColor: "#04060f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Aether AI — Premium Celestial Modernism AI SaaS",
  description: "Transform your engineering workflows with Aether AI. A premium AI-native automation command center designed with triple-layered shadow cards, snappy GSAP matched animations, and absolute modern intelligence interfaces.",
  keywords: [
    "AI Automation",
    "SaaS Landing Page",
    "Celestial Modernism",
    "Next.js SaaS",
    "Enterprise AI",
    "GreenSock Animation Showcase",
    "Snappy Mobile UX",
    "Workflow Command Center",
    "Engineering Automation"
  ],
  authors: [{ name: "Aether AI Labs", url: "https://github.com/Qaziaaaa/AI-Saas-landing-page" }],
  creator: "Aether AI Labs",
  publisher: "Aether AI Labs",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Aether AI — Premium Celestial Modernism AI SaaS",
    description: "Transform your engineering workflows with Aether AI. An enterprise-grade AI-native command center featuring 3D glassmorphic widgets and snappy desktop animations.",
    url: "https://github.com/Qaziaaaa/AI-Saas-landing-page",
    siteName: "Aether AI",
    images: [
      {
        url: "/images/dashboard.png",
        width: 1200,
        height: 630,
        alt: "Aether AI - Ultimate Workflow Automation Command Center",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aether AI — Premium Celestial Modernism AI SaaS",
    description: "Transform your engineering workflows with Aether AI. An enterprise-grade AI-native command center featuring 3D glassmorphic widgets and snappy desktop animations.",
    images: ["/images/dashboard.png"],
    creator: "@aether_ai",
  },
  alternates: {
    canonical: "https://github.com/Qaziaaaa/AI-Saas-landing-page",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${plusJakartaSans.variable} ${inter.variable} h-full antialiased dark`}
    >
      <head>
  <link rel="icon" href="/icon.svg" type="image/svg+xml" sizes="any" />
  <link rel="shortcut icon" href="/icon.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="/icon.svg" />
</head>

      <body className="min-h-full flex flex-col font-body bg-surface text-on-surface">{children}</body>
    </html>
  );
}
