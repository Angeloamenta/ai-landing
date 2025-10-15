import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Cases from "@/components/Cases";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Cases />
    </div>
  );
}
