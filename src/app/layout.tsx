import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const cormorant = Cormorant_Garamond({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-jersey-20",
});

export const metadata: Metadata = {
  title: "Imagin AI",
  description:
    "ImaginAI is a platform for creating and sharing AI-generated art.",
  icons: {
    icon: "https://img.icons8.com/color/48/sparkling.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased", cormorant.className)}>{children}</body>
    </html>
  );
}
