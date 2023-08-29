
import "./globals.scss";
import "@/components/core/assets/backgrounds/wave/wave.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/core/shared/navbar";
import Footer from "@/components/core/assets/footer";

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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
