export const Screenshots = () => {
  const screenshots = [
    { title: "Virtual Try-On Interface", description: "See how clothes look on you instantly" },
    { title: "Wardrobe Management", description: "Organize your entire closet digitally" },
    { title: "Calendar Planning", description: "Plan outfits for upcoming events" },
    { title: "Fashion Network", description: "Share and discover new styles" }
  ];

  return (
    <section className="py-20 bg-[#FDEDEE]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#262222]">
            App Screenshots
          </h2>
          <p className="mt-4 text-lg text-[#262222]/70 max-w-2xl mx-auto">
            Get a glimpse of ViWear's intuitive interface and powerful features
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="aspect-[9/16] bg-gradient-to-b from-[#FE9C9B]/10 to-[#FDEDEE] rounded-xl flex items-center justify-center">
                <p className="text-[#262222]/60 text-sm text-center px-4">
                  {screenshot.title}<br />Screenshot Placeholder
                </p>
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-[#262222]">{screenshot.title}</h3>
                <p className="text-sm text-[#262222]/70 mt-1">{screenshot.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
