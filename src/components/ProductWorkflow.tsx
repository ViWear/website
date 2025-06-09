import { Upload, Sparkles, Calendar, Share2 } from "lucide-react";

export const ProductWorkflow = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Garments",
      description: "Add clothes to your digital wardrobe by uploading photos of your garments."
    },
    {
      icon: Sparkles,
      title: "Virtual Try-On",
      description: "Use our AI-powered VTON technology to create and visualize outfit combinations."
    },
    {
      icon: Calendar,
      title: "Save & Plan",
      description: "Save your favorite outfits to your calendar for future occasions and events."
    },
    {
      icon: Share2,
      title: "Share & Connect",
      description: "Post your outfits on our fashion network or save VTON results locally."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#262222]">
            How ViWear Works
          </h2>
          <p className="mt-4 text-lg text-[#262222]/70 max-w-2xl mx-auto">
            From wardrobe upload to outfit sharing - experience seamless fashion management
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="mx-auto w-16 h-16 bg-[#FE9C9B] rounded-full flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="mt-4">
                    <div className="text-sm font-medium text-[#FE9C9B] mb-2">
                      Step {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-[#262222]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#262222]/70">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <div className="w-full h-0.5 bg-[#FDEDEE]"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
