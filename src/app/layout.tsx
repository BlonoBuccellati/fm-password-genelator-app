import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Frontend Mentor | Password generator app",
  description: "Password generator app",
  icons: "favicon-32x32.png",
};

const jetBransMono = JetBrains_Mono({
  variable: "--font-jet-brains-mono",
  weight: ["700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBransMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
