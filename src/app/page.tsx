import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";

import Blog from "@/components/sections/Blog";

import Social from "@/components/sections/Social";

export default function Home() {
  return (
    <main className="mx-auto max-w-[1100px] px-6">

      <Hero />

      <About />

      <Projects />

      <section
        id="resume"
        className="py-24"
      >

        <h2 className="text-4xl font-bold">

          RESUME

        </h2>

      </section>

      <Blog />

      <Social />
    </main>
  );
}