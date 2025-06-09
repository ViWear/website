import { Navigation } from "@/components/Navigation";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <Contact />
      <Footer />
    </div>
  );
} 