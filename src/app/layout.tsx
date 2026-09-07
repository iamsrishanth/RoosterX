import type { Metadata } from "next";
import { Lalezar, Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ScrollToTop } from "@/components/roosterx/scroll-to-top";

const lalezar = Lalezar({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lalezar",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RoosterX - The Arabian Fusion | Flame-Grilled Shawarma in Hyderabad",
  description:
    "Hyderabad's favourite shawarma, grilled over open flame and wrapped to order. 8 branches, halal certified, open late. Order online or walk in.",
  keywords: [
    "RoosterX",
    "shawarma",
    "Hyderabad",
    "Arabian fusion",
    "flame grilled",
    "halal",
    "late night food",
    "order shawarma online",
  ],
  authors: [{ name: "RoosterX" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "RoosterX - The Arabian Fusion",
    description:
      "Freshly grilled. Perfectly rolled. Totally addictive. Hyderabad's favourite flame-grilled shawarma.",
    siteName: "RoosterX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RoosterX - The Arabian Fusion",
    description: "Freshly grilled. Perfectly rolled. Totally addictive.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${lalezar.variable} ${outfit.variable} antialiased bg-smoke text-cream min-h-[100dvh] flex flex-col`}
      >
        {children}
        <Toaster />
        <ScrollToTop />
      </body>
    </html>
  );
}
