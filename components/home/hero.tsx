import Image from "next/image";
import React from "react";

import heroImg from "@/assets/images/hero.png";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-base-300 via-transparent to-transparent pb-12 pt-20 sm:pb-16 sm:pt-32 lg:pb-24 xl:pb-32 xl:pt-40">
      <div className="relative z-10">
        <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
          <Image src={"/images/hero.png"} fill alt="hero image" />
        </div>
      </div>
      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Join the
            <span className="text-primary"> BBR Community</span>
          </h1>
          <h2 className="mt-6 text-lg leading-8">
            Because We Believe in Making Crypto as Adorable as a Baby Rock
            Riding a Rocket! 🗿🚀
          </h2>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              className="isomorphic-link isomorphic-link--internal inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-secondary-focus focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-focus"
              href="/"
            >
              Join the Rockers
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
        <div className="relative mx-auto mt-10 max-w-lg">
          <Image
            className="w-full rounded-2xl border border-gray-100 shadow"
            src={heroImg}
            alt="babyblackrock"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
