import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import ContactCTA from "@/components/contact-cta";
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { initScrollRevealer } from '@/utils/scrollRevealer';

const Index = () => {
  useEffect(() => {
    const cleanupScrollRevealer = initScrollRevealer();
    
    return () => {
      cleanupScrollRevealer();
    };
  }, []);

  // Update the page title
  useEffect(() => {
    document.title = "Reactivate Hub | Account Recovery & Reactivation Services";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Testimonials />
      <ContactCTA />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
