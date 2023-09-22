import { About } from "@/components/home/about";
import Hero from "@/components/home/hero";
import Steps from "@/components/home/steps";
import Timeline from "@/components/home/timeline";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Timeline />
      <Steps />
    </>
  );
}
