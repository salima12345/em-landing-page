import type { Metadata } from "next";
import "./globals.css"; 
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

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
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}