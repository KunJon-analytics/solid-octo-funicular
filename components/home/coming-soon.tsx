import React from "react";

import Countdown from "./countdown";

const ComingSoon = () => {
  return (
    <section className="relative">
      <div className="flex md:mx-4 mx-2">
        <div
          style={{
            backgroundImage: `url('/images/bunch2.png')`,
          }}
          className="relative pt-40 pb-52 w-full rounded-2xl shadow-md overflow-hidden bg-no-repeat bg-center bg-cover"
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="flex p-12">
            <div className="grid grid-cols-1">
              <div className="text-center">
                <p className="inline-block px-3 py-px text-xs font-semibold tracking-wider uppercase rounded-full bg-secondary">
                  BabyBlackRock
                </p>
                <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">
                  Coming Soon
                </h1>
                <Countdown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
