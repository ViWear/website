import { Calendar, Target, TrendingUp } from "lucide-react";

export const AboutUs = () => {
  const team = [
    { role: "CEO", name: "Team Member", description: "Visionary leader driving ViWear's mission" },
    { role: "CTO", name: "Team Member", description: "Technical expertise in mobile development" },
    { role: "AI Researcher", name: "Team Member", description: "Pioneering virtual try-on technology" },
    { role: "UI/UX Designer", name: "Team Member", description: "Crafting beautiful user experiences" }
  ];

  const milestones = [
    { date: "April 2024", event: "Company Founded", icon: Calendar },
    { date: "April 2025", event: "MVP Launch", icon: Target },
    { date: "June 2025", event: "Funding Raised", icon: TrendingUp }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#262222]">
            About ViWear
          </h2>
          <p className="mt-4 text-lg text-[#262222]/70 max-w-3xl mx-auto">
            We're revolutionizing the fashion industry with AI-powered virtual try-on technology 
            and creating a global community of fashion enthusiasts.
          </p>
        </div>

        {/* Company Timeline */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-[#262222] text-center mb-8">Our Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto w-12 h-12 bg-[#FDEDEE] rounded-full flex items-center justify-center">
                  <milestone.icon className="h-6 w-6 text-[#FE9C9B]" />
                </div>
                <h4 className="mt-4 font-semibold text-[#262222]">{milestone.event}</h4>
                <p className="text-sm text-[#262222]/70">{milestone.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-[#262222] text-center mb-8">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto w-24 h-24 bg-[#FDEDEE] rounded-full flex items-center justify-center">
                  <span className="text-[#262222]/60">Photo</span>
                </div>
                <h4 className="mt-4 font-semibold text-[#262222]">{member.role}</h4>
                <p className="text-sm text-[#FE9C9B]">{member.name}</p>
                <p className="text-sm text-[#262222]/70 mt-1">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
