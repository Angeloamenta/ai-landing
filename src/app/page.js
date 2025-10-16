import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Cases from "@/components/Cases";
import {FlickeringGrid} from "@/components/ui/shadcn-io/flickering-grid";



export default function Home() {
  return (
    <div>
      <FlickeringGrid className='fixed inset-0 z-0 opacity-50' />
      <Hero />
      <About />
      <Cases />
    </div>
  );
}
