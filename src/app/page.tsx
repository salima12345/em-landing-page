import Header from "@/components/layout/header/Header";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Values from "@/components/em-values/Values";
import ValuesMobile from "@/components/em-valuesMobile/ValuesMobile";
import Realization from "@/components/realization/Realization";
import Footer from "@/components/layout/footer/Footer";
import Clients from "@/components/clients/Clients";
export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero/>
      <About/>
      <div className="hidden xl:block">
        <Values />
      </div>
      
      <div className="xl:hidden">
        <ValuesMobile />
      </div>
      <Realization/>
      <Clients/>
      
    </div>
     
  );
}
