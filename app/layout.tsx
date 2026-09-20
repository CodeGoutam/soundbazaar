import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SoundBazaar - Sound Service Marketplace",
  description:
    "SoundBazaar is a marketplace connecting event organizers with sound service providers, offering seamless booking and management of audio solutions for events of all sizes. Our platform simplifies the process of finding, booking, and managing sound services, ensuring that every event sounds its best.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <title>SoundBazaar - Sound Service Marketplace</title>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
