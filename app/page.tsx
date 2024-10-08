import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Hero } from "@/components/Hero";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
