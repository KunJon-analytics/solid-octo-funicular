import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import type { Metadata } from "next";
import { Comic_Neue } from "next/font/google";

import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import { Providers } from "./providers";

const comic = Comic_Neue({ subsets: ["latin"], weight: ["300", "400", "700"] });

export const metadata: Metadata = {
  title: "BabyBlackRock (BBR) - Crypto's Cutest Token with Big Dreams 🍼🚀",
  description:
    "Discover BabyBlackRock (BBR), the adorable meme coin symbolizing limitless crypto potential. Join our vibrant community and embark on a journey from small beginnings to the stars of the crypto galaxy! 🌟🌌",
  keywords: [
    "BabyBlackRock (BBR)",
    "Crypto Token",
    "Meme Coin",
    "Cryptocurrency",
    "Bitcoin ETF",
    "Community",
    "Binance Smart Chain (BSC)",
    "PancakeSwap",
    "Buy BBR",
    "Crypto Investment",
    "Blockchain",
    "Cryptocurrency News",
    "Crypto Community",
    "Cryptocurrency Exchange",
    "Secure Wallet",
    "Decentralized Finance (DeFi)",
    "Crypto Roadmap",
    "NFTs",
    "Bullish Crypto",
    "Tokenomics",
  ],
  creator: "noJnuK",
  metadataBase: new URL("https://babyrock.vercel.app/"),
  openGraph: {
    title: "BabyBlackRock (BBR) - Crypto's Cutest Token with Big Dreams 🍼🚀",
    description:
      "Discover BabyBlackRock (BBR), the adorable meme coin symbolizing limitless crypto potential. Join our vibrant community and embark on a journey from small beginnings to the stars of the crypto galaxy! 🌟🌌",
    url: "https://babyrock.vercel.app/",
    siteName: "BabyBlackRock",
    locale: "en_US",
    type: "website",
  },
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
