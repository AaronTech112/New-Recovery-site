
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className="text-primary font-bold text-2xl">Reactivate<span className="text-secondary">Hub</span></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-800 hover:text-secondary transition-colors">Home</a>
          <a href="#services" className="text-gray-800 hover:text-secondary transition-colors">Services</a>
          <a href="#process" className="text-gray-800 hover:text-secondary transition-colors">How It Works</a>
          <a href="#testimonials" className="text-gray-800 hover:text-secondary transition-colors">Testimonials</a>
          <a href="#contact" className="text-gray-800 hover:text-secondary transition-colors">Contact</a>
          <Button className="bg-secondary hover:bg-secondary-hover flex items-center gap-2">
            <MessageSquare size={18} />
            <span>Contact Us</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            <a href="#home" className="text-gray-800 hover:text-secondary transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="#services" className="text-gray-800 hover:text-secondary transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a href="#process" className="text-gray-800 hover:text-secondary transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>How It Works</a>
            <a href="#testimonials" className="text-gray-800 hover:text-secondary transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</a>
            <a href="#contact" className="text-gray-800 hover:text-secondary transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            <Button className="bg-secondary hover:bg-secondary-hover w-full flex items-center justify-center gap-2">
              <MessageSquare size={18} />
              <span>Contact Us</span>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
