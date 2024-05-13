import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const cormorant = Cormorant_Garamond({
  weight: "700",
  subsets: ["latin"],
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
      <body className={cn("antialiased", cormorant.className)}>
        <ClerkProvider>
          <html lang="en">
            <body>{children}</body>
          </html>
        </ClerkProvider>
      </body>
    </html>
  );
}
