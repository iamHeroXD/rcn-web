import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingDiscordWidget } from "@/components/ui/FloatingDiscordWidget";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RCN Prime | The Digital Operating System for Discord",
  description: "RCN Prime is a secure automation and digital infrastructure system designed to power Discord communities with smart bot automation, a virtual economy, and a security-first backend.",
  metadataBase: new URL("https://rcn-web.vercel.app"),
  keywords: ["RCN", "Discord", "Bot", "Automation", "Virtual Economy", "Community", "SaaS"],
  authors: [{ name: "RCN Prime" }],
  openGraph: {
    title: "RCN Prime | The Digital Operating System for Discord",
    description: "Secure automation, virtual economy systems, and robust infrastructure designed to scale your Discord community effortlessly.",
    url: "https://rcn-web.vercel.app",
    siteName: "RCN Prime",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "RCN Prime - Digital OS for Discord",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RCN Prime | The Digital Operating System for Discord",
    description: "Secure automation, virtual economy systems, and robust infrastructure designed to scale your Discord community effortlessly.",
    images: ["/og-image.jpeg"],
  },
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
  other: {
    "theme-color": "#050505",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col font-sans">
        <FloatingDiscordWidget />
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
