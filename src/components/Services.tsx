import React, { useState, useEffect } from "react";
import {
  Code,
  Server,
  Shield,
  Database,
  Globe,
  Users,
  MonitorSmartphone,
  Rocket,
  Cloud,
  Settings,
  Briefcase,
  ChevronRight,
  ArrowRight,
  Award,
  BarChart3,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import AOS from "aos";
import SectionDivider from "./SectionDivider";

// Enhanced service data with more content and better images
const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description:
      "Bespoke applications tailored to your specific business requirements and workflows.",
    color: "from-blue-500 to-indigo-600",
    image:
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    details: [
      "Business process automation",
      "Enterprise resource planning (ERP)",
      "Customer relationship management (CRM)",
      "Legacy system modernization",
      "API integration and development",
      "Custom workflow solutions",
    ],
    technologies: ["React", "Node.js", "Python", ".NET", "Java", "Docker"],
    caseStudy: {
      title: "Enterprise Workflow Transformation",
      description:
        "Reduced processing time by 68% by implementing a custom workflow automation system for a Fortune 500 financial services provider.",
      metrics: [
        "68% faster processing",
        "94% user satisfaction",
        "$2.4M annual savings",
      ],
    },
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable and secure cloud infrastructure to optimize operations and reduce costs.",
    color: "from-blue-400 to-indigo-500",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    details: [
      "Cloud migration and implementation",
      "Infrastructure as a Service (IaaS)",
      "Platform as a Service (PaaS)",
      "Software as a Service (SaaS)",
      "Multi-cloud strategy and management",
      "Cloud security and compliance",
    ],
    technologies: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Kubernetes",
      "Terraform",
      "Docker",
    ],
    caseStudy: {
      title: "Global Healthcare Provider Migration",
      description:
        "Successfully migrated 200+ applications to a secure cloud infrastructure while maintaining 99.99% uptime during transition.",
      metrics: [
        "42% cost reduction",
        "3x performance improvement",
        "Zero security incidents",
      ],
    },
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Comprehensive protection for your digital assets against evolving cyber threats.",
    color: "from-slate-600 to-slate-800",
    image:
      "https://images.unsplash.com/photo-1614064642639-e398f3ebdf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    details: [
      "Security assessment and auditing",
      "Network and endpoint protection",
      "Identity and access management",
      "Compliance and risk management",
      "Incident response and recovery",
      "Security awareness training",
    ],
    technologies: [
      "SIEM",
      "Zero Trust Architecture",
      "Encryption",
      "Penetration Testing",
      "SOC",
      "IAM",
    ],
    caseStudy: {
      title: "Financial Institution Protection",
      description:
        "Implemented advanced threat detection system for a banking network with 30+ branches, preventing multiple ransomware attempts.",
      metrics: [
        "100% threat detection",
        "75% faster response time",
        "Zero data breaches",
      ],
    },
  },
  {
    icon: Database,
    title: "Data Analytics",
    description:
      "Transform raw data into actionable insights to drive strategic business decisions.",
    color: "from-violet-500 to-purple-600",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    details: [
      "Business intelligence solutions",
      "Big data processing and analysis",
      "Predictive analytics models",
      "Data visualization and reporting",
      "Machine learning implementation",
      "Real-time analytics dashboards",
    ],
    technologies: [
      "Python",
      "R",
      "TensorFlow",
      "Tableau",
      "Power BI",
      "Hadoop",
    ],
    caseStudy: {
      title: "Retail Giant Customer Analysis",
      description:
        "Developed predictive analytics system that increased targeted marketing effectiveness by 47% for a national retail chain.",
      metrics: [
        "47% higher conversion",
        "28% revenue increase",
        "3.2M customer insights",
      ],
    },
  },
  {
    icon: MonitorSmartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications with intuitive interfaces and robust performance.",
    color: "from-indigo-500 to-blue-600",
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    details: [
      "iOS and Android native development",
      "Cross-platform frameworks (React Native, Flutter)",
      "Progressive Web Apps (PWAs)",
      "Mobile UI/UX design",
      "App performance optimization",
      "Mobile backend services",
    ],
    technologies: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Firebase",
      "AWS Amplify",
    ],
    caseStudy: {
      title: "Healthcare Communication Platform",
      description:
        "Delivered HIPAA-compliant mobile platform connecting 500+ healthcare providers with patients, reducing appointment no-shows by 35%.",
      metrics: [
        "4.8 App Store rating",
        "92% user retention",
        "35% fewer missed appointments",
      ],
    },
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Responsive and SEO-optimized websites that deliver exceptional user experiences.",
    color: "from-purple-500 to-indigo-600",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    details: [
      "Responsive web applications",
      "E-commerce solutions",
      "Content management systems",
      "Frontend and backend development",
      "Web performance optimization",
      "Accessibility compliance",
    ],
    technologies: ["React", "Next.js", "Vue.js", "Node.js", "PHP", "WordPress"],
    caseStudy: {
      title: "E-commerce Platform Overhaul",
      description:
        "Rebuilt international e-commerce platform serving 12 countries, resulting in 2.7x revenue growth within 6 months of launch.",
      metrics: [
        "82% faster page loads",
        "3.5x conversion rate",
        "65% lower bounce rate",
      ],
    },
  },
  {
    icon: Users,
    title: "IT Consulting",
    description:
      "Strategic guidance to align your technology investments with business objectives.",
    color: "from-blue-400 to-indigo-500",
    image:
      "https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    details: [
      "IT strategy and roadmap development",
      "Digital transformation planning",
      "Technology stack assessment",
      "IT governance and compliance",
      "Project portfolio management",
      "Technology vendor selection",
    ],
    technologies: [
      "ITIL",
      "TOGAF",
      "Agile",
      "DevOps",
      "COBIT",
      "Lean Six Sigma",
    ],
    caseStudy: {
      title: "Manufacturing Digital Transformation",
      description:
        "Guided complete digital transformation for manufacturing firm with 2,000+ employees across 6 locations.",
      metrics: [
        "$12M in operational savings",
        "30% productivity increase",
        "18-month ROI achievement",
      ],
    },
  },
  {
    icon: Server,
    title: "DevOps & Infrastructure",
    description:
      "Streamlined development and operations with continuous integration and delivery.",
    color: "from-gray-600 to-gray-800",
    image:
      "https://images.unsplash.com/photo-1607292819379-c96b4224b9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    details: [
      "CI/CD pipeline implementation",
      "Containerization (Docker, Kubernetes)",
      "Infrastructure as Code (IaC)",
      "Monitoring and logging solutions",
      "Automated testing and deployment",
      "Microservices architecture",
    ],
    technologies: [
      "Jenkins",
      "GitHub Actions",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Prometheus",
    ],
    caseStudy: {
      title: "E-learning Platform Scaling",
      description:
        "Implemented scalable architecture for e-learning platform that smoothly handled 25x traffic growth during COVID-19.",
      metrics: [
        "99.99% uptime",
        "8x deployment frequency",
        "72% infrastructure cost savings",
      ],
    },
  },
];

// Redesigned ServiceCard for a cleaner, more modern look
const ServiceCard = ({
  service,
  index,
  onClick,
}: {
  service: (typeof services)[0];
  index: number;
  onClick: () => void;
}) => {
  return (
    <div
      className="service-card group cursor-pointer overflow-hidden relative hover:shadow-lg transition-all"
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={onClick}
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {/* Card image with gradient overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Card content */}
      <div className="relative z-10 p-6">
        <div
          className={cn(
            "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-5",
            service.color
          )}
        >
          <service.icon className="w-6 h-6 text-white" />
        </div>

        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
          {service.title}
        </h3>

        <p className="text-foreground/70 mb-5 line-clamp-3">
          {service.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {service.technologies.slice(0, 3).map((tech, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded-full bg-background/80 text-foreground/60"
            >
              {tech}
            </span>
          ))}
          {service.technologies.length > 3 && (
            <span className="text-xs px-2 py-1 rounded-full bg-background/80 text-foreground/60">
              +{service.technologies.length - 3} more
            </span>
          )}
        </div>

        <div className="flex items-center text-primary text-sm font-medium">
          <span>Learn more</span>
          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};

// Enhanced ServiceDetails with more rich content and visual appeal
const ServiceDetails = ({
  service,
  onClose,
}: {
  service: (typeof services)[0];
  onClose: () => void;
}) => {
  return (
    <div
      className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-card w-full max-w-5xl max-h-[90vh] overflow-auto rounded-2xl shadow-xl p-6 md:p-8 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Service header with image */}
        <div className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden mb-8">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {service.title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {service.technologies.slice(0, 6).map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 rounded-full bg-white/20 text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Service content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Main content (3/5 width) */}
          <div className="md:col-span-3">
            <p className="text-lg text-foreground/80 mb-8">
              {service.description}
            </p>

            <h3 className="text-xl font-semibold mb-5 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-primary" />
              What we offer
            </h3>
            <ul className="space-y-3 mb-8">
              {service.details.map((detail, idx) => (
                <li key={idx} className="flex items-start">
                  <div
                    className={cn(
                      "w-5 h-5 rounded-full bg-gradient-to-br flex-shrink-0 flex items-center justify-center mr-3 mt-0.5",
                      service.color
                    )}
                  >
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mb-5 flex items-center">
              <Award className="w-5 h-5 mr-2 text-primary" />
              Case Study
            </h3>
            <div className="bg-secondary/40 p-6 rounded-xl mb-8">
              <h4 className="font-semibold text-lg mb-2">
                {service.caseStudy.title}
              </h4>
              <p className="text-foreground/70 mb-4">
                {service.caseStudy.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {service.caseStudy.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="bg-background/40 p-3 rounded-lg text-center"
                  >
                    <span className="text-primary font-medium">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar (2/5 width) */}
          <div className="md:col-span-2">
            <div className="bg-secondary/20 p-6 rounded-xl mb-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Settings className="w-5 h-5 mr-2 text-primary" />
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1.5 rounded-full bg-background/60 text-foreground/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-secondary/20 p-6 rounded-xl mb-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-primary" />
                Why Choose Us
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span>Industry-leading expertise</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span>Proven track record of success</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span>Dedicated support and maintenance</span>
                </li>
              </ul>
            </div>

            <div className="flex space-x-4 mt-8">
              <Button className="w-full gap-2 group">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" onClick={onClose} className="w-1/3">
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add Check icon for lists
const Check = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

// Main services component with layout improvements
const Services = () => {
  const [selectedService, setSelectedService] = useState<
    (typeof services)[0] | null
  >(null);

  useEffect(() => {
    // Refresh AOS when component mounts or when selectedService changes
    AOS.refresh();
  }, [selectedService]);

  return (
    <>
      <SectionDivider variant="angle" height={60} className="translate-y-1" />
      <section
        id="services"
        className="py-20 bg-secondary/30 relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute w-64 h-64 rounded-full bg-primary/5 -top-20 -right-20 animate-float"></div>
        <div className="absolute w-96 h-96 rounded-full bg-accent/5 -bottom-40 -left-40 animate-float-delay"></div>

        <div className="container relative z-10">
          <div
            className="text-center max-w-2xl mx-auto mb-16"
            data-aos="fade-up"
          >
            <span className="text-sm font-medium text-primary px-4 py-1.5 rounded-full bg-primary/10 inline-block mb-4">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive <span className="gradient-text">Services</span> for
              Your Business
            </h2>
            <p className="text-foreground/70">
              We offer a complete suite of IT solutions designed to help your
              business thrive in today's competitive digital landscape. Our team
              of experts will work closely with you to understand your unique
              needs and deliver tailored solutions.
            </p>
          </div>

          {/* Service Grid - Improved layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
                onClick={() => setSelectedService(service)}
              />
            ))}
          </div>

          {/* Featured service section - enhanced with better visuals */}
          <div
            className="bg-card rounded-2xl overflow-hidden shadow-lg"
            data-aos="fade-up"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image column */}
              <div className="h-full relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80"
                  alt="Team collaboration"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                {/* Overlaid stats */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="glass-card p-4 rounded-xl text-center backdrop-blur-sm">
                      <p className="text-white text-opacity-80 text-sm">
                        Successful Projects
                      </p>
                      <p className="text-white text-2xl font-bold">200+</p>
                    </div>
                    <div className="glass-card p-4 rounded-xl text-center backdrop-blur-sm">
                      <p className="text-white text-opacity-80 text-sm">
                        Client Satisfaction
                      </p>
                      <p className="text-white text-2xl font-bold">99%</p>
                    </div>
                    <div className="glass-card p-4 rounded-xl text-center backdrop-blur-sm">
                      <p className="text-white text-opacity-80 text-sm">
                        Expert Team
                      </p>
                      <p className="text-white text-2xl font-bold">50+</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content column */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className="text-sm font-medium text-primary px-4 py-1.5 rounded-full bg-primary/10 inline-block mb-4">
                  Why Choose Us
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Industry-Leading Solutions for Modern Businesses
                </h2>
                <p className="text-foreground/70 mb-8">
                  At MM Technology, we combine technical expertise with deep
                  industry knowledge to deliver solutions that not only solve
                  your immediate challenges but also position your business for
                  future growth and success.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "Customized solutions tailored to your business needs",
                    "Experienced team with diverse technical backgrounds",
                    "Agile methodology for faster delivery and adaptation",
                    "Ongoing support and maintenance options",
                    "Transparent communication throughout the project lifecycle",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-fit gap-2 group">
                  Explore All Services
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Service details modal */}
        {selectedService && (
          <ServiceDetails
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </section>
      <SectionDivider
        variant="arrow"
        height={30}
        inverted={true}
        className="-translate-y-1"
      />
    </>
  );
};

export default Services;
