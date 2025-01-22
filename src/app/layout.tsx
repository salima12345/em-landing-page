import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { ThemeProvider } from "@/lib/themes";

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
          <SmoothScroll>
            <div className="flex flex-col min-h-screen  transition-colors duration-200">
              <main className="flex-grow">
                {children}
              </main>
            </div>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}