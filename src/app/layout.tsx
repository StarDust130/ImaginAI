import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { dark, neobrutalism } from "@clerk/themes";
import { ThemeProvider } from "@/components/theme-provider";

const cormorant = Cormorant_Garamond({
  weight: "700",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Imagin AI",
  description:
    "ImaginAI is a platform for creating and sharing AI-generated art.",
  icons: {
    icon: "https://img.icons8.com/fluency/240/artstation.png",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider
            appearance={{
              variables: { colorPrimary: "#007ACC" },
              baseTheme: [dark],
            }}
          >
            <html lang="en">
              <body>{children}</body>
            </html>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
