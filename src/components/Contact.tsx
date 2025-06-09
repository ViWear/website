import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Phone } from "lucide-react";

export const Contact = () => {
  const socialLinks = [
    { name: "Instagram", icon: "📷", url: "#" },
    { name: "LinkedIn", icon: "💼", url: "#" },
    { name: "RedNote", icon: "📝", url: "#" },
    { name: "Twitter", icon: "🐦", url: "#" },
    { name: "YouTube", icon: "📺", url: "#" },
    { name: "TikTok", icon: "🎵", url: "#" }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#262222]">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-[#262222]/70 max-w-2xl mx-auto">
            Have questions about ViWear? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-[#FDEDEE]/30 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-[#262222] mb-6">Send us a message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="First Name" className="border-[#FE9C9B]/20" />
                <Input placeholder="Last Name" className="border-[#FE9C9B]/20" />
              </div>
              <Input placeholder="Email Address" type="email" className="border-[#FE9C9B]/20" />
              <Input placeholder="Subject" className="border-[#FE9C9B]/20" />
              <Textarea 
                placeholder="Your Message" 
                rows={5} 
                className="border-[#FE9C9B]/20"
              />
              <Button className="w-full bg-[#FE9C9B] hover:bg-[#FE9C9B]/90 text-white">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FDEDEE] rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-[#FE9C9B]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#262222]">Email Us</h4>
                  <p className="text-[#262222]/70">hello@viwear.com</p>
                  <p className="text-[#262222]/70">support@viwear.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FDEDEE] rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-[#FE9C9B]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#262222]">Call Us</h4>
                  <p className="text-[#262222]/70">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FDEDEE] rounded-lg flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-[#FE9C9B]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#262222]">Follow Us</h4>
                  <div className="mt-2 grid grid-cols-3 gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className="flex items-center gap-2 text-sm text-[#262222]/70 hover:text-[#FE9C9B] transition-colors"
                      >
                        <span>{social.icon}</span>
                        {social.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
