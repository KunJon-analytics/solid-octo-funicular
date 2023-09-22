import Image from "next/image";
import React from "react";

import timelineImage from "@/assets/images/timeline.png";

const Timeline = () => {
  return (
    <section>
      <div className="bg-base-200 text-primary py-8">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <p className="ml-2 text-secondary uppercase tracking-loose">
              Roadmap
            </p>
            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
              BBR&apos;s Cosmic Journey
            </p>
            <p className="text-sm md:text-base text-accent mb-4">
              Buckle Up for a Galactic Adventure Packed with Cute Beginnings and
              Limitless Possibilities!
            </p>
            <a
              href="#"
              className="bg-transparent mr-auto hover:bg-secondary text-secondary hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-secondary hover:border-transparent"
            >
              Explore Now
            </a>
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div
                  className="border-4-4 border-primary absolute h-full border"
                  style={{
                    right: "50%",
                    borderRadius: "1%",
                  }}
                ></div>
                <div
                  className="border-4-4 border-primary absolute h-full border"
                  style={{
                    left: "50%",
                    borderRadius: "1%",
                  }}
                ></div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-secondary">Phase 1</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Launch & Baby Steps 🍼
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-accent text-opacity-100">
                      Baby steps! Fair launch, community building, cute mascot.
                      Nurture BabyBlackRock and join the fun.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1  w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-base text-secondary">Phase 2</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Toddler Triumphs 🚀
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-accent text-opacity-100">
                      Growing up! Exchanges, partnerships, creative campaigns.
                      BBR&apos;s presence expands with exciting developments.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-secondary"> Phase 3</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Crypto Superstar 🌟
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-accent text-opacity-100">
                      Crypto icon! DeFi, NFTs, partnerships. BBR reaches new
                      heights with a bright roadmap ahead.
                    </p>
                  </div>
                </div>
              </div>
              <Image
                className="mx-auto -mt-36 md:-mt-36"
                src={timelineImage}
                alt="BabyBlackRock Timeline Image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
