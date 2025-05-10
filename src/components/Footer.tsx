
import { MessageSquare, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-gray-800">
          <div>
            <h3 className="text-2xl font-bold mb-4">Reactivate<span className="text-secondary">Hub</span></h3>
            <p className="text-gray-400 mb-6">
              Your trusted partner for account recovery and reactivation services across all major platforms.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://t.me/Reactivatehub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 transition-colors p-2 rounded-full"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
              <a 
                href="mailto:Reactivatehubb@gmail.com" 
                className="bg-red-600 hover:bg-red-700 transition-colors p-2 rounded-full"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-xl">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-secondary transition-colors">Social Media Recovery</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Gig Economy Account Reactivation</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Email Recovery</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Crypto Wallet Recovery</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-xl">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Services</a></li>
              <li><a href="#process" className="hover:text-secondary transition-colors">How It Works</a></li>
              <li><a href="#testimonials" className="hover:text-secondary transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Reactivate Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
