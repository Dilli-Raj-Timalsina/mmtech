
import React from 'react';
import { 
  Code, Server, Shield, Database, Globe, Users, 
  MonitorSmartphone, Rocket, Cloud, Settings, Briefcase 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Bespoke applications tailored to your specific business requirements and workflows.",
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure to optimize operations and reduce costs.",
    color: "from-cyan-400 to-blue-500"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive protection for your digital assets against evolving cyber threats.",
    color: "from-emerald-500 to-green-600"
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights to drive strategic business decisions.",
    color: "from-violet-500 to-purple-600"
  },
  {
    icon: MonitorSmartphone,
    title: "Mobile App Development",
    description: "Cross-platform mobile applications with intuitive interfaces and robust performance.",
    color: "from-rose-500 to-pink-600"
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Responsive and SEO-optimized websites that deliver exceptional user experiences.",
    color: "from-amber-500 to-orange-600"
  },
  {
    icon: Users,
    title: "IT Consulting",
    description: "Strategic guidance to align your technology investments with business objectives.",
    color: "from-blue-400 to-indigo-500"
  },
  {
    icon: Server,
    title: "DevOps & Infrastructure",
    description: "Streamlined development and operations with continuous integration and delivery.",
    color: "from-teal-400 to-emerald-500"
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  return (
    <div 
      className="service-card"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={cn(
        "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4",
        service.color
      )}>
        <service.icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
      <p className="text-foreground/70">{service.description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-foreground/70">
            We offer a comprehensive suite of IT solutions designed to help your business 
            thrive in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
