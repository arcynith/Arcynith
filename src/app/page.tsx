import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Hero />
      <About />
      <Experience />
      <Work />
      <Contact />
    </div>
  );
}
