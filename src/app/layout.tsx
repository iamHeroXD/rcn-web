import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { FloatingDiscordWidget } from "@/components/ui/FloatingDiscordWidget";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RCN Prime | The Digital Operating System for Discord",
  description: "RCN Prime is a secure automation and digital infrastructure system designed to power Discord communities with smart bot automation, a virtual economy, and a security-first backend.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col font-sans cursor-none">
        <CustomCursor />
        <FloatingDiscordWidget />
        {children}
      </body>
    </html>
  );
}
