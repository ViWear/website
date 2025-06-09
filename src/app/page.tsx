import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { AIFeatures } from "@/components/AIFeatures";
import { ProductWorkflow } from "@/components/ProductWorkflow";
import { Screenshots } from "@/components/Screenshots";
import { AboutUs } from "@/components/AboutUs";
import { Careers } from "@/components/Careers";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Features />
      <AIFeatures />
      <ProductWorkflow />
      <Screenshots />
      <AboutUs />
      <Careers />
      <Contact />
      <Footer />
    </div>
  );
} 