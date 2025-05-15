
import React from 'react';
import { Check } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-xl animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 rounded-2xl -z-10"></div>
              
              {/* Stats card */}
              <div className="absolute bottom-6 -right-10 glass-card p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <p className="text-sm text-foreground/70">Years of Excellence</p>
                  <p className="text-4xl font-bold gradient-text">15+</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="gradient-text">MarketMinds IT Solutions</span>
            </h2>
            <p className="text-foreground/80 mb-6">
              Founded in 2008, MarketMinds IT Solutions has been at the forefront of technological innovation, 
              helping businesses across industries harness the power of technology to drive growth, 
              efficiency, and competitive advantage.
            </p>
            <p className="text-foreground/80 mb-8">
              Our team of skilled engineers, designers, and consultants brings decades of 
              combined experience to every project, ensuring solutions that are not just 
              technically robust but also aligned with your business objectives.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "15+ Years of Experience",
                "200+ Successful Projects",
                "24/7 Technical Support",
                "Client-Centered Approach",
                "Innovative Solutions",
                "Industry-Leading Expertise"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="p-4 bg-secondary/50 rounded-xl">
                <div className="text-3xl font-bold mb-1 gradient-text">500+</div>
                <div className="text-sm text-foreground/70">Happy Clients</div>
              </div>
              <div className="p-4 bg-secondary/50 rounded-xl">
                <div className="text-3xl font-bold mb-1 gradient-text">50+</div>
                <div className="text-sm text-foreground/70">Expert Team Members</div>
              </div>
              <div className="p-4 bg-secondary/50 rounded-xl">
                <div className="text-3xl font-bold mb-1 gradient-text">99%</div>
                <div className="text-sm text-foreground/70">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
