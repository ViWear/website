import { Navigation } from "@/components/Navigation";
import { AIFeatures } from "@/components/AIFeatures";
import { ProductWorkflow } from "@/components/ProductWorkflow";
import { Screenshots } from "@/components/Screenshots";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <AIFeatures />
      <ProductWorkflow />
      <Screenshots />
      <Footer />
    </div>
  );
} 