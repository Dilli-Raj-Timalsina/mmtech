
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CTO, Nexus Enterprises",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    content: "TechNex transformed our outdated systems into a streamlined digital ecosystem. Their expertise in cloud solutions has drastically improved our operational efficiency and data security.",
    rating: 5
  },
  {
    name: "Michael Chen",
    position: "CEO, InnovateTech",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    content: "Working with TechNex on our mobile app development project exceeded all expectations. Their team's attention to detail and commitment to quality delivered a product our customers love.",
    rating: 5
  },
  {
    name: "Rebecca Torres",
    position: "Director of IT, Global Logistics",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "The cybersecurity solutions provided by TechNex have given us peace of mind in an increasingly complex threat landscape. Their proactive approach to security is unmatched.",
    rating: 4
  },
  {
    name: "Alex Morgan",
    position: "Product Manager, FinTech Solutions",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    content: "TechNex's custom software development has been instrumental in helping us launch our innovative financial services platform. They truly understood our vision and brought it to life.",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-foreground/70">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="min-w-full p-1"
                >
                  <div className="glass-card rounded-2xl p-6 md:p-10">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                        <p className="text-foreground/70 text-sm">{testimonial.position}</p>
                        <div className="flex mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={cn(
                                "w-4 h-4", 
                                i < testimonial.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"
                              )}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-lg md:text-xl italic text-foreground/80">
                      "{testimonial.content}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Button 
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm"
            onClick={prev}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm"
            onClick={next}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full transition-colors",
                  index === currentIndex ? "bg-primary" : "bg-primary/20"
                )}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
