import Image from "next/image";
import React from "react";
import Link from "next/link";

import aboutSvg from "@/assets/images/about.svg";
import rock1 from "@/assets/images/rock1.jpeg";
import rock3 from "@/assets/images/rock3.png";
import rock4 from "@/assets/images/rock4.png";

export const About = () => {
  return (
    <>
      <section className="pt-20 px-10 lg:pt-1 pb-12 lg:pb-5 overflow-hidden">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <Image
                      src={rock1}
                      alt="rock1"
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <Image
                      src={rock3}
                      alt="rock3"
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <Image
                      src={rock4}
                      alt="rock4"
                      className="w-full rounded-2xl"
                    />
                    <span className="absolute -right-7 -bottom-7 z-[-1]">
                      <Image src={aboutSvg} alt="about svg" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-2 text-lg font-semibold text-primary">
                  Introducing BabyBlackRock (BBR)
                </span>
                <h2 className="mb-8 text-3xl font-bold text-dark sm:text-4xl">
                  The Future of Crypto Beginnings! 🚀
                </h2>
                <p className="mb-8 text-base text-body-color">
                  In the crypto cosmos, BabyBlackRock (BBR) shines as a symbol
                  of boundless potential. Born amid whispers of BlackRock&apos;s
                  quest for a Bitcoin ETF, BBR, with its adorable pacifier-clad
                  bull logo, embodies the idea that grand dreams start small.
                  BBR holders share a vision of two BlackRocks—one in finance,
                  one in crypto. Fueled by humor and optimism, our community
                  crafts memes and chants like &quot;BBR - Born Bullish and
                  Ready!&quot; Join us on this enchanting adventure, where even
                  the tiniest tokens dream big. Hold your BBR close, and
                  together, let&apos;s nurture the baby steps shaping the crypto
                  universe&apos;s future! 🌟🍼🌌
                </p>

                <Link
                  href="/#"
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-normal text-center text-white rounded-lg bg-primary hover:bg-opacity-90 lg:px-8 xl:px-10"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
