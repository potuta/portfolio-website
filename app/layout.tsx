import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Navbar } from "@/components/blocks/navbar";
import Footer from "@/components/sections/Footer";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LesserDev - Cyril Bautista",
  description: "Portfolio of LesserDev - Cyril Bautista",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
            <div className="sticky top-0 z-100">
              <Navbar />
            </div>
            {children}
            <Analytics />
        <footer>
          <Footer />
        </footer>
        <Toaster position="bottom-left" richColors theme="system" />
        </ThemeProvider>
      </body>
    </html>
  );
}
