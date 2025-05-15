
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Server, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-hero-pattern">
      {/* Decorative blobs */}
      <div className="hero-blob bg-primary/20 w-[600px] h-[600px] -top-64 -left-32"></div>
      <div className="hero-blob bg-accent/20 w-[500px] h-[500px] top-32 -right-20"></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span>Innovative </span>
            <span className="gradient-text">IT Solutions</span>
            <span> for the Modern Enterprise</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '100ms'}}>
            We deliver cutting-edge software development, cloud solutions, and IT consulting 
            services that drive business growth and digital transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 animate-fade-in" style={{animationDelay: '200ms'}}>
            <Button size="lg" className="rounded-full px-8 text-base gap-2 group">
              Get Started 
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 text-base">
              Book a Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in" style={{animationDelay: '300ms'}}>
            <div className="glass-card p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Custom Software</h3>
              <p className="text-sm text-foreground/70">Tailor-made applications that align perfectly with your business needs.</p>
            </div>
            
            <div className="glass-card p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Server className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Cloud Solutions</h3>
              <p className="text-sm text-foreground/70">Scalable infrastructure and services hosted in secure cloud environments.</p>
            </div>
            
            <div className="glass-card p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-secondary/30 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Cybersecurity</h3>
              <p className="text-sm text-foreground/70">Comprehensive protection against threats and vulnerabilities.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
