
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      image: 'bg-gradient-to-br from-blue-500 to-purple-600',
      description: 'A fully-featured marketplace platform with payment integration and inventory management.',
    },
    {
      id: 2,
      title: 'Financial Analytics Dashboard',
      category: 'Data Analytics',
      image: 'bg-gradient-to-br from-green-400 to-blue-500',
      description: 'Real-time analytics dashboard for financial institutions with predictive modeling.',
    },
    {
      id: 3,
      title: 'Healthcare Management System',
      category: 'Enterprise Solutions',
      image: 'bg-gradient-to-br from-purple-500 to-pink-500',
      description: 'Comprehensive healthcare management system for hospitals and clinics.',
    },
    {
      id: 4,
      title: 'Smart Retail Analytics',
      category: 'Market Intelligence',
      image: 'bg-gradient-to-br from-yellow-400 to-orange-500',
      description: 'AI-driven retail analytics solution for customer behavior analysis.',
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-secondary/20">
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
              <div className={`h-48 ${item.image} flex items-center justify-center`}>
                <span className="text-white text-4xl font-bold opacity-20">{item.id}</span>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-primary/80 uppercase tracking-wider">{item.category}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{item.title}</h3>
                <p className="text-sm text-foreground/70 mb-4">{item.description}</p>
                <Link to={`/portfolio/${item.id}`} className="text-primary inline-flex items-center text-sm hover:underline">
                  View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
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
