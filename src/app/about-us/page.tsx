import { Navigation } from "@/components/Navigation";
import { AboutUs } from "@/components/AboutUs";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <AboutUs />
      <Footer />
    </div>
  );
} 