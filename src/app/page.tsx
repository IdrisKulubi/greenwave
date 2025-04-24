"use client";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { HowItWorks } from "@/components/landing/how-it-works";
import { FeaturedPodcasts } from "@/components/landing/featured-podcasts";
import { Features } from "@/components/landing/features";
import { CtaSection } from "@/components/landing/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <HowItWorks />
        <FeaturedPodcasts />
        <Features />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

