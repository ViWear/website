import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users } from "lucide-react";

export const Careers = () => {
  const positions = [
    {
      title: "Flutter Developer",
      type: "Full-time",
      location: "Remote",
      description: "Join our mobile team to build cutting-edge fashion technology with Flutter and Dart."
    },
    {
      title: "AI Research Engineer",
      type: "Full-time", 
      location: "Remote",
      description: "Advance our virtual try-on technology with computer vision and machine learning expertise."
    }
  ];

  return (
    <section id="careers" className="py-20 bg-[#FDEDEE]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#262222]">
            Join Our Team
          </h2>
          <p className="mt-4 text-lg text-[#262222]/70 max-w-2xl mx-auto">
            Help us shape the future of fashion technology and create amazing experiences for users worldwide.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {positions.map((position, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-[#262222]">{position.title}</h3>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-[#262222]/70">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {position.type}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {position.location}
                </div>
              </div>
              <p className="mt-4 text-[#262222]/70">{position.description}</p>
              <Button className="mt-6 bg-[#FE9C9B] hover:bg-[#FE9C9B]/90 text-white">
                Apply Now
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-white p-8 rounded-2xl">
          <Users className="mx-auto h-12 w-12 text-[#FE9C9B]" />
          <h3 className="mt-4 text-xl font-semibold text-[#262222]">Don't see a perfect fit?</h3>
          <p className="mt-2 text-[#262222]/70">
            We're always looking for talented individuals. Send us your resume and let's talk!
          </p>
          <Button className="mt-4 bg-[#FE9C9B] hover:bg-[#FE9C9B]/90 text-white">
            Send Resume
          </Button>
        </div>
      </div>
    </section>
  );
};
