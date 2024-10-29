import type { Metadata } from "next";
import "./globals.css"; 
import SmoothScroll from "@/components/SmoothScroll";
export const metadata: Metadata = {
  title: "Elliot & Markus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="min-h-screen min-w-full max-w-[1440px] bg-background text-foreground font-gilroy overflow-x-hidden">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}