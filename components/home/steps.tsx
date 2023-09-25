import React from "react";
import { FaWallet } from "react-icons/fa";
import { SiBinance } from "react-icons/si";
import { GrConnect } from "react-icons/gr";
import { RiTokenSwapLine } from "react-icons/ri";

const Steps = () => {
  return (
    <section>
      <div className="container mx-auto flex flex-col p-6">
        <h2 className="py-4 text-3xl font-bold text-primary text-center">
          How to Buy BBR
        </h2>
        <div className="divide-y divide-gray-700">
          <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
            <div className="flex items-center justify-center lg:col-span-1 col-span-full">
              <FaWallet className="w-16 h-16" />
            </div>
            <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
              <span className="text-xs tracki uppercase text-secondary">
                Step 1 - Wallet
              </span>
              <span className="text-xl font-bold md:text-2xl text-primary">
                Download a Crypto Wallet
              </span>
              <span className="mt-4">
                Before you can buy BBR, you&apos;ll need a secure crypto wallet.
                We recommend popular options like Trust Wallet, MetaMask, or
                Binance Wallet. Download your preferred wallet from your app
                store and set it up.
              </span>
            </div>
          </div>
          <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
            <div className="flex items-center justify-center lg:col-span-1 col-span-full">
              <SiBinance className="w-16 h-16" />
            </div>
            <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
              <span className="text-xs tracki uppercase text-secondary">
                Step 2 - BNB
              </span>
              <span className="text-xl font-bold md:text-2xl text-primary">
                Acquire Binance Coin (BNB)
              </span>
              <span className="mt-4">
                To exchange for BBR, you&apos;ll need Binance Coin (BNB). You
                can buy BNB on major exchanges like Binance or Coinbase.
                Transfer the purchased BNB to your crypto wallet&apos;s Binance
                Smart Chain (BSC) address.
              </span>
            </div>
          </div>
          <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
            <div className="flex items-center justify-center lg:col-span-1 col-span-full">
              <GrConnect className="w-16 h-16" />
            </div>
            <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
              <span className="text-xs tracki uppercase text-secondary">
                Step 3 - PancakeSwap
              </span>
              <span className="text-xl font-bold md:text-2xl text-primary">
                Connect Your Wallet to PancakeSwap
              </span>
              <span className="mt-4">
                Access PancakeSwap (pancakeswap.finance) through your web
                browser. Click &quot;Connect Wallet&quot; in the upper right
                corner and select your wallet type (e.g., Trust Wallet,
                MetaMask). Connect your wallet to the PancakeSwap platform.
              </span>
            </div>
          </div>
          <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
            <div className="flex items-center justify-center lg:col-span-1 col-span-full">
              <RiTokenSwapLine className="w-16 h-16" />
            </div>
            <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
              <span className="text-xs tracki uppercase text-secondary">
                Step 4 - Swap
              </span>
              <span className="text-xl font-bold md:text-2xl text-primary">
                Swap BNB for BBR
              </span>
              <span className="mt-4">
                On PancakeSwap, select &quot;Trade&quot; and then
                &quot;Exchange.&quot; Choose BNB as your input currency and
                select BBR as the output currency. Enter the amount of BNB you
                want to swap for BBR. Adjust slippage tolerance if needed. Click
                &quot;Swap,&quot; and confirm the transaction when your wallet
                pops up.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
