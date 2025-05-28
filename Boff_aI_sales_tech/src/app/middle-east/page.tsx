"use client";

import React from 'react';
import { HeaderComponent } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { HeroME } from "@/sections/middle-east/HeroME";
import { InteractiveMap } from "@/sections/middle-east/InteractiveMap"; 
import { ServiceOverview } from "@/sections/middle-east/ServiceOverview";
import { ArabicAITech } from "@/sections/middle-east/ArabicAITech";
import { ProcessSteps } from "@/sections/middle-east/ProcessSteps";
import { CTASection } from "@/sections/middle-east/CTASection";

export default function MiddleEastPage() {
  return (
    <main>
      <HeaderComponent />
      
      {/* Hero Section */}
      <HeroME />
      
      {/* Interactive Map - Now second section */}
      <InteractiveMap />
      
      {/* Service Overview */}
      <ServiceOverview />
      
      {/* Arabic AI Technology */}
      <ArabicAITech />
      
      {/* Process Steps */}
      <ProcessSteps />
      
      {/* CTA Section */}
      <CTASection />
      
      <Footer />
    </main>
  );
}