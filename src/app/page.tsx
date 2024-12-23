import { HeaderComponent } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Features } from '@/sections/Features';
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {
  return (
  <>
    <HeaderComponent />
    <Hero />
    <LogoTicker />
    <ProductShowcase />
    <Features />
    <Testimonials />
  </>
  );
}
