import Header from "@/components/layout/header/Header";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Values from "@/components/em-values/Values";
import Realization from "@/components/realization/Realization";
import Footer from "@/components/layout/footer/Footer";
import Clients from "@/components/clients/Clients";
export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero/>
      <About/>
      <Values/>
      <Realization/>
      <Clients/>
      
    </div>
     
  );
}
