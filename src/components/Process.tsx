
import { useEffect } from 'react';

const steps = [
  {
    number: 1,
    title: "Contact Us",
    description: "Reach out to us via Telegram or email with details about your locked account.",
    icon: "💬"
  },
  {
    number: 2,
    title: "Consultation",
    description: "Our experts will analyze your case and provide a recovery assessment.",
    icon: "🔍"
  },
  {
    number: 3,
    title: "Recovery Process",
    description: "We implement our specialized techniques to recover or reactivate your account.",
    icon: "⚙️"
  },
  {
    number: 4,
    title: "Account Restored",
    description: "Regain access to your account with our guidance on maintaining future security.",
    icon: "🔐"
  }
];

const Process = () => {
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
    <section id="process" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 reveal-on-scroll">How It Works</h2>
          <p className="max-w-2xl mx-auto text-gray-600 reveal-on-scroll">
            Our simple 4-step process to help you recover your valuable accounts
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>

          {/* Process steps */}
          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <div key={step.number} className={`flex flex-col md:flex-row items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} reveal-on-scroll`}>
                <div className={`md:w-1/2 p-6 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                  <h3 className="text-2xl font-bold text-secondary mb-2">
                    Step {step.number}: {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
                
                <div className="md:w-1/12 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-secondary text-white flex items-center justify-center text-2xl font-bold shadow-lg z-10 mb-4 md:mb-0">
                    {step.icon}
                  </div>
                </div>
                
                <div className="md:w-5/12">
                  {/* Empty div for layout on alternating sides */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
