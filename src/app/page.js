
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About"; // Temporaneamente disabilitato
import Main from "@/components/Main";
import Footer from "@/components/Footer";
// import {FlickeringGrid} from "@/components/ui/shadcn-io/flickering-grid";



export default function Home() {
  return (
    <div>
      {/* <FlickeringGrid className='fixed inset-0 z-0 opacity-60'  color='rgb(247 128 87)'/> */}
      <Navbar />
      <Hero />
      {/* <About /> */}
       <Main />
      <Footer />
    </div>
  );
}
