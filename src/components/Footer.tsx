export const Footer = () => {
  return (
    <footer className="bg-[#262222] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-[#FE9C9B]">ViWear</div>
            <p className="mt-4 text-white/70">
              Transforming fashion with AI-powered virtual try-on technology and wardrobe management.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#features" className="hover:text-[#FE9C9B] transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-[#FE9C9B] transition-colors">Download</a></li>
              <li><a href="#" className="hover:text-[#FE9C9B] transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#about" className="hover:text-[#FE9C9B] transition-colors">About Us</a></li>
              <li><a href="#careers" className="hover:text-[#FE9C9B] transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-[#FE9C9B] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-[#FE9C9B] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#FE9C9B] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#FE9C9B] transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/70">
          <p>&copy; 2024 ViWear. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
