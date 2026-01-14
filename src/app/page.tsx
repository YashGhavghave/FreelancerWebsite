import { Hero3D } from "@/components/hero-3d";
import { ServicesSection } from "@/components/services-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero3D />
      <div id="services" className="scroll-mt-20">
        <ServicesSection />
      </div>
    </div>
  );
}
