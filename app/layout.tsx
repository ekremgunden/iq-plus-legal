import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.websiteUrl),
  title: {
    default: `${site.appName} — ${site.appTagline}`,
    template: `%s — ${site.appName}`,
  },
  description:
    "IQ Plus is a brain training app for every age. Improve memory, focus, logic, and problem-solving with fun daily exercises.",
  keywords: [
    "brain training",
    "IQ Plus",
    "memory games",
    "logic puzzles",
    "focus",
    "cognitive training",
  ],
  openGraph: {
    title: `${site.appName} — ${site.appTagline}`,
    description:
      "Brain training for every age. Improve memory, focus, logic, and problem-solving.",
    url: site.websiteUrl,
    siteName: site.appName,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
