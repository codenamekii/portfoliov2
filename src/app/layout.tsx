import BottomNavbar from "@/components/bottom-navbar";
import { ScheduleCallFloat } from "@/components/cal";
import { ThemeProvider } from "@/components/theme-provider";
import { TopNavbar } from "@/components/top-navbar";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/config/site.config";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s - ${DATA.name}`,
  },
  description: DATA.description,
  keywords: [
    "Taufiqurrahman",
    "Kiifiki",
    "Taufiqurrahman Portfolio",
    "Taufiqurrahman Projects",
    "Taufiqurrahman Blogs",
    "Taufiqurrahman Resume",
    "Taufiqurrahman Contact",
    "Taufiqurrahman Instagram",
    "Taufiqurrahman Youtube",
    "Taufiqurrahman Email",
    "Taufiqurrahman LinkedIn",
    "Taufiqurrahman GitHub",
    "Taufiqurrahman Twitter",
    "kii",
    "Kiifiki",
    "Kiifiki",
  ],
  authors: [
    {
      name: `${DATA.name}`,
      url: DATA.url,
    },
  ],
  creator: `${DATA.name}`,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    images: [
      {
        url: DATA.prevImage,
      },
    ],
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
    site: DATA.url,
    creator: `${DATA.name}`,
    description: DATA.description,
    images: [
      {
        url: DATA.prevImage,
        width: 1200,
        height: 630,
        alt: `${DATA.name}`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <TooltipProvider delayDuration={0}>
            <div className="hidden md:block">
              <TopNavbar />
            </div>
            {children}
            <SpeedInsights />
            <div className="block md:hidden">
              <BottomNavbar />
            </div>
            <ScheduleCallFloat />
            <Analytics/>
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
