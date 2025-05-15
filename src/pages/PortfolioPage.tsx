
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from 'lucide-react';

const PortfolioPage = () => {
  const categories = [
    'All', 'Financial Technology', 'Education Technology', 'Enterprise Solutions', 'Market Intelligence', 'Web Development'
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Nepse Trading Platform',
      category: 'Financial Technology',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop',
      description: 'A comprehensive trading platform for the Nepal Stock Exchange with real-time market data and analytics.',
      client: 'Nepse Trading',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      url: 'https://nepsetrading.com/'
    },
    {
      id: 2,
      title: 'AI Learning Platform',
      category: 'Education Technology',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop',
      description: 'Interactive educational platform focused on AI learning with hands-on projects and tutorials.',
      client: 'Learn With Open AI',
      technologies: ['Python', 'React', 'TensorFlow', 'PostgreSQL'],
      url: 'https://learnwithopen.ai/'
    },
    {
      id: 3,
      title: 'Healthcare Management System',
      category: 'Enterprise Solutions',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop',
      description: 'Comprehensive healthcare management system for hospitals and clinics.',
      client: 'MediCare Group',
      technologies: ['Java', 'Spring Boot', 'Angular', 'Oracle']
    },
    {
      id: 4,
      title: 'Smart Retail Analytics',
      category: 'Market Intelligence',
      image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1000&auto=format&fit=crop',
      description: 'AI-driven retail analytics solution for customer behavior analysis.',
      client: 'ShopInsight',
      technologies: ['Python', 'TensorFlow', 'Vue.js', 'Google Cloud']
    },
    {
      id: 5,
      title: 'Logistics Management App',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c7?q=80&w=1000&auto=format&fit=crop',
      description: 'Mobile application for logistics tracking and management with real-time updates.',
      client: 'FastTrack Logistics',
      technologies: ['React Native', 'Firebase', 'Google Maps API']
    },
    {
      id: 6,
      title: 'Social Media Management Platform',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop',
      description: 'Comprehensive platform for scheduling, analytics, and management of social media accounts.',
      client: 'SocialBoost',
      technologies: ['React', 'Node.js', 'MongoDB', 'Redis']
    },
    {
      id: 7,
      title: 'Enterprise Resource Planning System',
      category: 'Enterprise Solutions',
      image: 'https://images.unsplash.com/photo-1452830978618-d6feae7d0ffa?q=80&w=1000&auto=format&fit=crop',
      description: 'Custom ERP solution for manufacturing companies with complex workflows.',
      client: 'IndustrialTech',
      technologies: ['.NET Core', 'SQL Server', 'React', 'Azure']
    },
    {
      id: 8,
      title: 'Market Research Platform',
      category: 'Market Intelligence',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
      description: 'Platform for collecting and analyzing market research data with AI-powered insights.',
      client: 'MarketPulse',
      technologies: ['Python', 'Django', 'React', 'PostgreSQL', 'Machine Learning']
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container py-12">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-lg text-foreground/60">
              Explore our successful projects and see how we've helped businesses transform their digital presence.
            </p>
          </div>

          <Tabs defaultValue="All" className="w-full">
            <div className="flex justify-center mb-12 overflow-x-auto pb-2">
              <TabsList className="bg-background/50 backdrop-blur-sm">
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category} className="px-4 py-2">
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((categoryTab) => (
              <TabsContent key={categoryTab} value={categoryTab} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {portfolioItems
                    .filter(item => categoryTab === 'All' || item.category === categoryTab)
                    .map((item) => (
                      <div key={item.id} className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="h-56 overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        <div className="p-6">
                          <span className="text-xs font-semibold text-primary/70 uppercase tracking-wider">{item.category}</span>
                          <h3 className="text-xl font-bold mt-2 mb-2">{item.title}</h3>
                          <p className="text-sm text-foreground/60 mb-4">{item.description}</p>
                          <div className="mb-4">
                            <span className="text-xs font-semibold block mb-1">Client:</span>
                            <span className="text-sm">{item.client}</span>
                          </div>
                          <div className="mb-4">
                            <span className="text-xs font-semibold block mb-1">Technologies:</span>
                            <div className="flex flex-wrap gap-1">
                              {item.technologies.map((tech, index) => (
                                <span key={index} className="text-xs bg-muted px-2 py-1 rounded-full">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          {item.url && (
                            <a 
                              href={item.url} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-primary text-sm hover:underline inline-flex items-center"
                            >
                              Visit Website <ArrowRight className="ml-1 h-4 w-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
