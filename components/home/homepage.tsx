import React from "react";

import Hero from "./hero";
import { About } from "./about";
import Roadmap from "./roadmap";
import Steps from "./steps";

const Homepage = () => {
  return (
    <>
      <Hero />
      <About />
      <Roadmap />
      <Steps />
    </>
  );
};

export default Homepage;
