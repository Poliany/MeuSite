
import { AosInit } from "./_components/AosInit";
import { Hero } from "./_components/hero";
import { About } from "./_components/about";
import { Services } from "./_components/services";

export default function Home() {
  return (
    <main>
      <AosInit />
      <Hero />
      <About />
      <Services />
    </main>
  );
}