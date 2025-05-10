
import { useState, useEffect } from 'react';

const services = [
  {
    id: 1,
    name: 'Social Media',
    icon: '🔄',
    platforms: ['Instagram', 'Facebook', 'Twitter', 'TikTok', 'LinkedIn', 'Snapchat']
  },
  {
    id: 2,
    name: 'Gig Economy',
    icon: '🚗',
    platforms: ['Uber', 'Lyft', 'DoorDash', 'Amazon Flex', 'Deliveroo', 'Shipt', 'Instacart', 'Glovo']
  },
    {
    id: 3,
    name: 'Spark Delivery',
    icon: '🚚',
    platforms: ['Spark Delivery']
  },
  {
    id: 4,
    name: 'Email & Accounts',
    icon: '📧',
    platforms: ['Gmail', 'Yahoo', 'Outlook', 'Apple ID']
  },
  {
    id: 5,
    name: 'Crypto',
    icon: '💰',
    platforms: ['Coinbase', 'Binance', 'MetaMask', 'Other Wallets']
  }
];

const Services = () => {
  const [activeTab, setActiveTab] = useState(1);

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
    <section id="services" className="section-padding bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 reveal-on-scroll">Our Recovery Services</h2>
          <p className="max-w-2xl mx-auto text-gray-600 reveal-on-scroll">
            We specialize in account recovery and reactivation across various platforms. Our team of experts can help you regain access to your valuable accounts.
          </p>
        </div>

        <div className="flex flex-wrap justify-center mb-8 reveal-on-scroll">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`px-6 py-3 m-2 rounded-full transition-all duration-300 ${
                activeTab === service.id
                  ? 'bg-secondary text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="mr-2">{service.icon}</span>
              {service.name}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 reveal-on-scroll">
          {services.map((service) => (
            <div
              key={service.id}
              className={`transition-opacity duration-300 ${
                activeTab === service.id ? 'block opacity-100' : 'hidden opacity-0'
              }`}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="text-4xl mr-3">{service.icon}</span>
                <span>{service.name} Recovery</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {service.platforms.map((platform, index) => (
                  <div 
                    key={index}
                    className="bg-gray-50 rounded-lg p-4 text-center card-hover border border-gray-100"
                  >
                    <p className="font-medium">{platform}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
