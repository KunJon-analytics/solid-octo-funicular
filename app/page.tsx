import { About } from "@/components/home/about";
import Hero from "@/components/home/hero";
import Steps from "@/components/home/steps";
import Roadmap from "@/components/home/roadmap";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Roadmap />
      <Steps />
    </>
  );
}
