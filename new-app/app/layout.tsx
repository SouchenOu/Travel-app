import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Travel app",
  description: "UI/UX travel app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
