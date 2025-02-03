import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { ThemeProvider } from "@/lib/themes";
import Header from "@/components/layout/header";

export const metadata: Metadata = {
  title: "Elliot & Markus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        suppressHydrationWarning={true} 
        className="min-h-screen min-w-full max-w-[1440px] font-gilroy overflow-x-hidden scrollbar-hide"
      >
        <ThemeProvider>
          {/* Move SmoothScroll inside the main content */}
          <div className="flex flex-col min-h-screen transition-colors duration-200">
            <Header />
            <SmoothScroll>
              <main className="flex-grow">
                {children}
              </main>
            </SmoothScroll>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}