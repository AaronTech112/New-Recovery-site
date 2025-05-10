
import { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const testimonials = [
  {
    id: 1,
    name: "James Wilson",
    platform: "Uber Driver",
    quote: "After being deactivated for weeks, Reactivate Hub got my Uber driver account restored in just 3 days! Their service was professional and effective.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Johnson",
    platform: "Instagram Influencer",
    quote: "When my Instagram account with 50K followers was hacked, I thought all was lost. Reactivate Hub not only recovered it but helped secure it against future attacks.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    platform: "Crypto Trader",
    quote: "Lost access to my crypto wallet with substantial holdings. Their team guided me through the recovery process with expert knowledge and patience.",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    rating: 4
  },
  {
    id: 4,
    name: "Emily Chen",
    platform: "DoorDash Driver",
    quote: "My DoorDash account was deactivated due to a customer complaint. Reactivate Hub helped me appeal successfully and I was back delivering in just 48 hours!",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();
  const testimonialsToShow = isMobile ? 1 : 3;

  // Function to generate stars based on rating
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <svg 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
        fill="currentColor" 
        viewBox="0 0 20 20" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
      </svg>
    ));
  };

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

  // Automatic testimonial rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % (testimonials.length - testimonialsToShow + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonialsToShow]);

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 reveal-on-scroll">Success Stories</h2>
          <p className="max-w-2xl mx-auto text-gray-600 reveal-on-scroll">
            Don't just take our word for it. Here's what our satisfied customers have to say about our account recovery services.
          </p>
        </div>

        <div className="relative overflow-hidden reveal-on-scroll">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * (100 / testimonialsToShow)}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="w-full md:w-1/3 flex-shrink-0 px-4"
              >
                <div className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-14 h-14 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-secondary text-sm">{testimonial.platform}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  <blockquote className="text-gray-600 italic flex-grow">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-8">
          {Array(testimonials.length - testimonialsToShow + 1).fill(0).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full ${
                activeIndex === index ? 'bg-secondary' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
