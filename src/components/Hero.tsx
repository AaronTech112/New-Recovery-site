
import { Button } from "@/components/ui/button";
import { MessageSquare, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-20 z-10 relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Recover Your Accounts with Confidence</h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-xl">
              Got locked out of your social media or gig economy accounts? Reactivate Hub specializes in recovering and reactivating accounts across all major platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-secondary hover:bg-secondary-hover text-white px-8 py-6 text-lg flex items-center gap-2" 
                onClick={() => window.open('https://t.me/Reactivatehub', '_blank')}
              >
                <MessageSquare size={20} />
                Contact on Telegram
              </Button>
              <Button 
                className="bg-white hover:bg-gray-100 text-primary px-8 py-6 text-lg flex items-center gap-2" 
                variant="outline"
                onClick={() => window.location.href = 'mailto:Reactivatehubb@gmail.com'}
              >
                <Mail size={20} />
                Email Us
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="relative animate-float">
              <div className="bg-white p-8 rounded-xl shadow-2xl transform rotate-3">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-6">
                  <div className="h-10 bg-gray-100 rounded-md w-full"></div>
                  <div className="h-24 bg-gray-100 rounded-md w-full"></div>
                  <div className="flex space-x-4">
                    <div className="h-16 bg-secondary rounded-md w-1/2"></div>
                    <div className="h-16 bg-primary rounded-md w-1/2"></div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-secondary text-white p-4 rounded-full shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
