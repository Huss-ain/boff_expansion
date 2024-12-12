import { HeaderComponent } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";

export default function Home() {
  return (
  <>
    <HeaderComponent />
    <Hero />
    <LogoTicker />
    <ProductShowcase />
  </>
  );
}
