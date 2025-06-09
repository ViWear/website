import { Smartphone, Calendar, Users, Sparkles } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Virtual Try-On",
      description: "AI-powered virtual fitting for clothes and accessories with realistic visualization."
    },
    {
      icon: Smartphone,
      title: "Wardrobe Management",
      description: "Organize and catalog your entire wardrobe digitally for easy access and planning."
    },
    {
      icon: Calendar,
      title: "Outfit Planning",
      description: "Plan your outfits in advance with calendar integration and weather considerations."
    },
    {
      icon: Users,
      title: "Fashion Network",
      description: "Share your style, discover trends, and connect with fashion enthusiasts worldwide."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#262222]">
            Core Features
          </h2>
          <p className="mt-4 text-lg text-[#262222]/70 max-w-2xl mx-auto">
            Discover how ViWear revolutionizes your fashion experience with cutting-edge technology
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="mx-auto w-16 h-16 bg-[#FDEDEE] rounded-2xl flex items-center justify-center group-hover:bg-[#FE9C9B] transition-colors">
                <feature.icon className="h-8 w-8 text-[#FE9C9B] group-hover:text-white" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#262222]">
                {feature.title}
              </h3>
              <p className="mt-2 text-[#262222]/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
