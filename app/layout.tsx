import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import type { Metadata } from "next";
import { Inter, Comic_Neue } from "next/font/google";

import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });
const comic = Comic_Neue({ subsets: ["latin"], weight: ["300", "400", "700"] });

export const metadata: Metadata = {
  title: "BabyBlackRock (BBR)",
  description:
    "BabyBlackRock (BBR) - Where Tiny Tokens Dream Big in the Crypto Universe! Join the adorable revolution and celebrate the future of finance with a touch of humor. Discover the world of BBR today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={comic.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
