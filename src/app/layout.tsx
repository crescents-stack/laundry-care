import { ThemeProvider } from "@/components/theme-provider";
import "./globals.scss";
import "@/components/core/assets/backgrounds/wave/wave.scss"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/core/shared/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Laundry Care",
  description: "Laundry solution",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
