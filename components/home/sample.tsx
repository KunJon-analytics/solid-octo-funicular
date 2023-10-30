import React from "react";

const Sample = () => {
  return (
    <section className="relative">
      <div className="flex md:mx-4 mx-2">
        <div
          style={{
            backgroundImage: `url('/images/hero.png')`,
          }}
          className="relative pt-40 pb-52 w-full rounded-2xl shadow-md overflow-hidden bg-no-repeat bg-center bg-cover"
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="flex p-12">
            <div className="grid grid-cols-1">
              <div className="text-center">
                <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">
                  Luxury Apartments in Abuja: <br /> Discover{" "}
                  <span className="text-primary">Fort Fountain</span>
                </h1>
                <p className="text-xl text-white max-w-xl">
                  Elevate Your Lifestyle with Modern Comfort and Convenience in
                  the Capital City
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sample;
