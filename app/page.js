import React from "react";
import ApplicationsGrid from "./components/ApplicationsGrid";
import CapabilitiesSection from "./components/CapabilitiesSection";
import FaqSection from "./components/FaqSection";
import Hero from "./components/Hero";
import MachineSpotlight from "./components/MachineSpotlight";
import ProductBannerSlider from "./components/ProductBannerSlider";
import ProductRange from "./components/ProductRange";
import QuickEnquirySection from "./components/QuickEnquirySection";
import ServiceWorkflow from "./components/ServiceWorkflow";
import TestimonialsSection from "./components/TestimonialsSection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <QuickEnquirySection />
      <ProductRange />
      {/* <ProductBannerSlider /> */}
      <MachineSpotlight />
      <ApplicationsGrid />
      <CapabilitiesSection />
      <ServiceWorkflow />
      <TestimonialsSection />
      <FaqSection />
    </main>
  );
}
