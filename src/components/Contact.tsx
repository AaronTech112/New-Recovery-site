
import { Button } from "@/components/ui/button";
import { MessageSquare, Mail, Phone, Shield } from "lucide-react";
import { useEffect } from 'react';

const Contact = () => {
  // Animation for elements when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-primary to-primary/90 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal-on-scroll">Ready to Recover Your Account?</h2>
          <p className="max-w-2xl mx-auto text-gray-100 opacity-90 reveal-on-scroll">
            Contact us today for a free consultation and let our experts help you regain access to your valuable accounts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal-on-scroll">
            <h3 className="text-2xl font-bold mb-6">Why Choose Reactivate Hub?</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-secondary/20 p-3 rounded-full mr-4">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Expert Recovery Specialists</h4>
                  <p className="text-gray-100 opacity-90">Our team consists of platform specialists who understand the intricacies of each service we support.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary/20 p-3 rounded-full mr-4">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">High Success Rate</h4>
                  <p className="text-gray-100 opacity-90">We've helped thousands of clients successfully recover their accounts across all platforms.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary/20 p-3 rounded-full mr-4">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Fast Turnaround Time</h4>
                  <p className="text-gray-100 opacity-90">Most accounts are recovered within 24-72 hours, getting you back online quickly.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white text-gray-800 rounded-xl shadow-2xl p-8 reveal-on-scroll">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">Contact Us</h3>
            
            <div className="space-y-6">
              <a 
                href="https://t.me/Reactivatehub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-all"
              >
                <div className="bg-blue-500 p-3 rounded-full mr-4">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold">Telegram</h4>
                  <p className="text-gray-600">@Reactivatehub</p>
                </div>
              </a>
              
              <a 
                href="mailto:Reactivatehubb@gmail.com"
                className="flex items-center p-4 bg-red-50 hover:bg-red-100 rounded-lg transition-all"
              >
                <div className="bg-red-500 p-3 rounded-full mr-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-gray-600">Reactivatehubb@gmail.com</p>
                </div>
              </a>
              
              <div className="text-center mt-8">
                <Button 
                  className="bg-secondary hover:bg-secondary-hover text-white px-8 py-6 w-full text-lg" 
                  onClick={() => window.open('https://t.me/Reactivatehub', '_blank')}
                >
                  Get Started Now
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  We typically respond within 1-2 hours during business hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
