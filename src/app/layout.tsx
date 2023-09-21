import "./globals.scss";
import "@/components/core/assets/backgrounds/wave/wave.scss";
import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import Navbar from "@/components/core/shared/navbar";
import Footer from "@/components/core/assets/footer";
import ContextWrapper from "@/context/context-wrapper";

const hindSiliguri = Hind_Siliguri({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

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
    <html lang="en" id="customThemes">
      <body className={hindSiliguri.className}>
          <ContextWrapper>
            <>
              <Navbar />
              {children}
              <Footer />
            </>
          </ContextWrapper>
      </body>
    </html>
  );
}
