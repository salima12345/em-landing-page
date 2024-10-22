import Image from "next/image";
import Header from "@/components/header";
import About from "@/components/about";
export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header/>
      <About/>
      
    </div>
     
  );
}
