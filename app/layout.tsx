import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meta Modern Monkey",
  description: "Small, sincere, and slightly strange digital experiences—playful things made with equal parts curiosity and care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

