import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Projects } from "@/components/Projects";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Contact />
      <Projects />
    </>
  );
}
