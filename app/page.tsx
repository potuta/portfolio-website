import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Projects from "@/components/sections/Projects";
import Work from "@/components/sections/Work";

export default function Home() {
  return (
     <main className=""> 
        <About />      
        <Work />
        <Projects />
        <Contact />
    </main>
  );
}