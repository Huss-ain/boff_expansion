import React from 'react';
import { HeaderComponent } from "@/sections/Header";
import { HeroAccounting } from "@/sections/accounting/HeroAccounting";
import { OutreachShowcase } from "@/sections/accounting/OutreachShowcase";
import { AccountingTestimonials } from "@/sections/accounting/AccountingTestimonials";
import { AccountingCTA } from "@/sections/accounting/AccountingCTA";
import { Footer } from "@/sections/Footer";

export default function AccountingPage() {
  return (
    <main>
      <HeaderComponent />
      <HeroAccounting />
      <OutreachShowcase />
      <AccountingTestimonials />
      <AccountingCTA />
      <Footer />
    </main>
  );
} 