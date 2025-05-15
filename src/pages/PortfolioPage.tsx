
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PortfolioPage = () => {
  const categories = [
    'All', 'Web Development', 'Mobile Apps', 'Data Analytics', 'Enterprise Solutions', 'Market Intelligence'
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      image: 'bg-gradient-to-br from-blue-500 to-purple-600',
      description: 'A fully-featured marketplace platform with payment integration and inventory management.',
      client: 'RetailNext',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS']
    },
    {
      id: 2,
      title: 'Financial Analytics Dashboard',
      category: 'Data Analytics',
      image: 'bg-gradient-to-br from-green-400 to-blue-500',
      description: 'Real-time analytics dashboard for financial institutions with predictive modeling.',
      client: 'FinanceCore',
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL']
    },
    {
      id: 3,
      title: 'Healthcare Management System',
      category: 'Enterprise Solutions',
      image: 'bg-gradient-to-br from-purple-500 to-pink-500',
      description: 'Comprehensive healthcare management system for hospitals and clinics.',
      client: 'MediCare Group',
      technologies: ['Java', 'Spring Boot', 'Angular', 'Oracle']
    },
    {
      id: 4,
      title: 'Smart Retail Analytics',
      category: 'Market Intelligence',
      image: 'bg-gradient-to-br from-yellow-400 to-orange-500',
      description: 'AI-driven retail analytics solution for customer behavior analysis.',
      client: 'ShopInsight',
      technologies: ['Python', 'TensorFlow', 'Vue.js', 'Google Cloud']
    },
    {
      id: 5,
      title: 'Logistics Management App',
      category: 'Mobile Apps',
      image: 'bg-gradient-to-br from-red-500 to-amber-500',
      description: 'Mobile application for logistics tracking and management with real-time updates.',
      client: 'FastTrack Logistics',
      technologies: ['React Native', 'Firebase', 'Google Maps API']
    },
    {
      id: 6,
      title: 'Social Media Management Platform',
      category: 'Web Development',
      image: 'bg-gradient-to-br from-cyan-500 to-blue-500',
      description: 'Comprehensive platform for scheduling, analytics, and management of social media accounts.',
      client: 'SocialBoost',
      technologies: ['React', 'Node.js', 'MongoDB', 'Redis']
    },
    {
      id: 7,
      title: 'Enterprise Resource Planning System',
      category: 'Enterprise Solutions',
      image: 'bg-gradient-to-br from-violet-500 to-indigo-500',
      description: 'Custom ERP solution for manufacturing companies with complex workflows.',
      client: 'IndustrialTech',
      technologies: ['.NET Core', 'SQL Server', 'React', 'Azure']
    },
    {
      id: 8,
      title: 'Market Research Platform',
      category: 'Market Intelligence',
      image: 'bg-gradient-to-br from-emerald-500 to-teal-500',
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
            <p className="text-lg text-foreground/70">
              Explore our successful projects and see how we've helped businesses transform their digital presence.
            </p>
          </div>

          <Tabs defaultValue="All" className="w-full">
            <div className="flex justify-center mb-12">
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
                        <div className={`h-56 ${item.image} flex items-center justify-center`}>
                          <span className="text-white text-4xl font-bold opacity-20">{item.id}</span>
                        </div>
                        <div className="p-6">
                          <span className="text-xs font-semibold text-primary/80 uppercase tracking-wider">{item.category}</span>
                          <h3 className="text-xl font-bold mt-2 mb-2">{item.title}</h3>
                          <p className="text-sm text-foreground/70 mb-4">{item.description}</p>
                          <div className="mb-4">
                            <span className="text-xs font-semibold block mb-1">Client:</span>
                            <span className="text-sm">{item.client}</span>
                          </div>
                          <div>
                            <span className="text-xs font-semibold block mb-1">Technologies:</span>
                            <div className="flex flex-wrap gap-1">
                              {item.technologies.map((tech, index) => (
                                <span key={index} className="text-xs bg-secondary px-2 py-1 rounded-full">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
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
