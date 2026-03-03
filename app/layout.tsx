import type { Metadata } from "next";
import { Outfit, Newsreader } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/navbar";
import { WhatsAppButton } from "@/components/whatsapp-button";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CCD Digital Hub",
  description: "The digital home of Chai Coffee Darbar at JKLU. Your emotions, your food.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${outfit.className} ${newsreader.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <NavBar />
        <main className="flex-1 w-full max-w-[1200px] mx-auto pt-16 md:pt-20">
          {children}
        </main>
        <WhatsAppButton />
      </body>
    </html>
  );
}
