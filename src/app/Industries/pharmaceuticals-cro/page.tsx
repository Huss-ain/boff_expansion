import React from 'react';
import { HeaderComponent } from "@/sections/Header";
import { HeroPharma } from "@/sections/pharmaceuticals-cro/HeroPharma";
import { RecruitmentShowcase } from "@/sections/pharmaceuticals-cro/RecruitmentShowcase";
import { HowItWorksPharma } from "@/sections/pharmaceuticals-cro/HowItWorksPharma";
import { SaveMillions } from "@/sections/pharmaceuticals-cro/SaveMillions";
import { PharmaTestimonials } from "@/sections/pharmaceuticals-cro/PharmaTestimonials";
import { PharmaCTA } from "@/sections/pharmaceuticals-cro/PharmaCTA";
import { Footer } from "@/sections/Footer";

export default function PharmaceuticalsPage() {
  return (
    <main>
      <HeaderComponent />
      <HeroPharma />
      <RecruitmentShowcase />
      <HowItWorksPharma />
      <SaveMillions />
      <PharmaTestimonials />
      <PharmaCTA />
      <Footer />
    </main>
  );
}