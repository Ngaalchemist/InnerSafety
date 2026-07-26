import React from 'react';
import { Hero } from '@/components/landing/Hero';
import { Problem } from '@/components/landing/Problem';
import { Solution } from '@/components/landing/Solution';
import { Authority } from '@/components/landing/Authority';
import { Offer } from '@/components/landing/Offer';
import { Closing } from '@/components/landing/Closing';
import { FooterForm } from '@/components/landing/FooterForm';

export default function LandingPage() {
  return (
    <div className="font-sans antialiased text-foreground bg-background selection:bg-primary/30 selection:text-foreground">
      <Hero />
      <Problem />
      <Solution />
      <Authority />
      <Offer />
      <Closing />
      <FooterForm />
    </div>
  );
}
