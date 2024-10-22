import Image from "next/image";
import Header from "@/components/layout/header/Header";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header/>
      <Hero/>
      <About/>
      
    </div>
     
  );
}
