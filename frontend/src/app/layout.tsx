import type { Metadata } from "next";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "TORENOVATE",
  description: "TORENOVATE project foundation",
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

