import type { Metadata } from "next";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "TORENOVATE | Public website prototype",
  description: "TORENOVATE public website information architecture prototype",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <body>{children}</body>
    </html>
  );
}

