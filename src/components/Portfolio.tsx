
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Nepse Trading Platform',
      category: 'Financial Technology',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop',
      description: 'A comprehensive trading platform for the Nepal Stock Exchange with real-time market data and analytics.',
      client: 'Nepse Trading',
      url: 'https://nepsetrading.com/'
    },
    {
      id: 2,
      title: 'AI Learning Platform',
      category: 'Education Technology',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop',
      description: 'Interactive educational platform focused on AI learning with hands-on projects and tutorials.',
      client: 'Learn With Open AI',
      url: 'https://learnwithopen.ai/'
    },
    {
      id: 3,
      title: 'Healthcare Management System',
      category: 'Enterprise Solutions',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop',
      description: 'Comprehensive healthcare management system for hospitals and clinics.',
      client: 'MediCare Group'
    },
    {
      id: 4,
      title: 'Smart Retail Analytics',
      category: 'Market Intelligence',
      image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1000&auto=format&fit=crop',
      description: 'AI-driven retail analytics solution for customer behavior analysis.',
      client: 'ShopInsight'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/40">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore our recent projects and see how we've helped businesses across industries 
            achieve their digital transformation goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-primary/70 uppercase tracking-wider">{item.category}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{item.title}</h3>
                <p className="text-sm text-foreground/60 mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{item.client}</span>
                  <Link to={`/portfolio/${item.id}`} className="text-primary inline-flex items-center text-sm hover:underline">
                    View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" className="rounded-full px-8">
            <Link to="/portfolio">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
