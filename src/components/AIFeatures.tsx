import { Brain, Eye, Zap } from "lucide-react";

export const AIFeatures = () => {
  return (
    <section id="ai-features" className="py-20 bg-[#FDEDEE]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#262222]">
            AI-Powered Technology
          </h2>
          <p className="mt-4 text-lg text-[#262222]/70 max-w-2xl mx-auto">
            Experience the future of fashion with our advanced AI and computer vision models
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="w-12 h-12 bg-[#FE9C9B]/10 rounded-lg flex items-center justify-center">
              <Brain className="h-6 w-6 text-[#FE9C9B]" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-[#262222]">
              Smart Recommendations
            </h3>
            <p className="mt-2 text-[#262222]/70">
              Our AI analyzes your style preferences, body type, and occasions to suggest perfect outfit combinations.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="w-12 h-12 bg-[#FE9C9B]/10 rounded-lg flex items-center justify-center">
              <Eye className="h-6 w-6 text-[#FE9C9B]" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-[#262222]">
              Computer Vision Models
            </h3>
            <p className="mt-2 text-[#262222]/70">
              Advanced diffusion models for realistic virtual try-on experiences with accurate fit and style visualization.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="w-12 h-12 bg-[#FE9C9B]/10 rounded-lg flex items-center justify-center">
              <Zap className="h-6 w-6 text-[#FE9C9B]" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-[#262222]">
              Style Matching
            </h3>
            <p className="mt-2 text-[#262222]/70">
              Intelligent algorithms that understand color coordination, pattern matching, and style compatibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
