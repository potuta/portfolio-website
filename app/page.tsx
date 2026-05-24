import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";
import Work from "@/components/sections/Work";

export default function Home() {
  return (
     <main className=""> 
        <About />      
        <Work />
        <Projects />
        <Education />
    </main>
  );
}