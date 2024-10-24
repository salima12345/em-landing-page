import Header from "@/components/layout/header/Header";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Values from "@/components/em-values/Values";
import Realization from "@/components/realization/Realization";
export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header/>
      <Hero/>
      <About/>
      <Values/>
      <Realization/>
      
    </div>
     
  );
}
