import type { Metadata } from "next";
import "./globals.css"; 

export const metadata: Metadata = {
  title: "Ellior & Markus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground font-gilroy">
        {children}
      </body>
    </html>
  );
}
