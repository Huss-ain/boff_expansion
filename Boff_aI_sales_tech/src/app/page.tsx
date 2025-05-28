import Image from 'next/image'
import { HeaderComponent } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Features } from '@/sections/Features';
import { HowItWorks } from '@/sections/HowItWorks';
import { Testimonials } from "@/sections/Testimonials";
import { Footer } from "@/sections/Footer";
import { Team } from "@/sections/Team";

export default function Home() {
  return (
    <main>
      <HeaderComponent />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Team />
      <Footer />
    </main>
  );
}
