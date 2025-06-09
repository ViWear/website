import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-[#FDEDEE] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#262222] leading-tight">
              Transform Your
              <span className="text-[#FE9C9B]"> Wardrobe</span> with AI
            </h1>
            <p className="mt-6 text-lg text-[#262222]/70 max-w-lg">
              Experience the future of fashion with ViWear's AI-powered virtual try-on technology. 
              Organize your wardrobe, plan outfits, and share your style in our fashion network.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#FE9C9B] hover:bg-[#FE9C9B]/90 text-white">
                Download for iOS/Android
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-[#FE9C9B] text-[#FE9C9B] hover:bg-[#FDEDEE]">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-8">
              <div>
                <p className="text-2xl font-bold text-[#262222]">10K+</p>
                <p className="text-sm text-[#262222]/60">Active Users</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#262222]">50K+</p>
                <p className="text-sm text-[#262222]/60">Outfits Created</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#262222]">4.8★</p>
                <p className="text-sm text-[#262222]/60">App Rating</p>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="bg-[#FE9C9B]/10 rounded-2xl p-8 text-center">
              <div className="w-full h-96 bg-gradient-to-b from-[#FE9C9B]/20 to-[#FDEDEE] rounded-lg flex items-center justify-center">
                <p className="text-[#262222]/60">App Demo Video Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
