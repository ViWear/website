import { Navigation } from "@/components/Navigation";
import { Careers } from "@/components/Careers";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Careers />
      <Footer />
    </div>
  );
} 