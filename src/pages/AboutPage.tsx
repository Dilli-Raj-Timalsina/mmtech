import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Building2,
  Target,
  Award,
  Users,
  CheckCircle,
  Star,
  TrendingUp,
  LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/MagneticButton";
import InteractiveDots from "@/components/InteractiveDots";

// Team members data
const teamMembers = [
  {
    name: "Sarah Johnson",
    position: "Chief Executive Officer",
    bio: "With 15+ years of experience in tech leadership, Sarah drives our vision and strategic direction.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Michael Chen",
    position: "Chief Technology Officer",
    bio: "Michael oversees our technological vision and leads our development team with cutting-edge innovations.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Priya Patel",
    position: "Lead Developer",
    bio: "Priya specializes in full-stack development and leads our core engineering initiatives.",
    image:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "David Wilson",
    position: "UX/UI Design Lead",
    bio: "David ensures our solutions not only function well but deliver outstanding user experiences.",
    image:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Elena Rodriguez",
    position: "Data Science Director",
    bio: "Elena leads our data science initiatives, transforming complex data into business insights.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "James Taylor",
    position: "DevOps Lead",
    bio: "James ensures smooth operations and deployments through our automated infrastructure systems.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  },
];

// Milestones data
const milestones = [
  {
    year: "2010",
    title: "Company Founded",
    description:
      "MM Technology was established with a vision to transform how businesses leverage technology.",
  },
  {
    year: "2013",
    title: "First Major Enterprise Client",
    description:
      "Secured our first Fortune 500 client, marking a significant milestone in our growth.",
  },
  {
    year: "2016",
    title: "International Expansion",
    description:
      "Opened offices in Europe and Asia, allowing us to serve clients globally.",
  },
  {
    year: "2018",
    title: "Cloud Solutions Launch",
    description:
      "Introduced our comprehensive suite of cloud-native solutions and services.",
  },
  {
    year: "2021",
    title: "AI & ML Department",
    description:
      "Established a dedicated AI and machine learning division to drive innovation.",
  },
  {
    year: "2023",
    title: "200+ Team Members",
    description:
      "Reached the milestone of 200 team members across our global offices.",
  },
];

// Core values
const coreValues = [
  {
    icon: Target,
    title: "Innovation",
    description:
      "We push the boundaries of technology to deliver cutting-edge solutions.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for excellence in every line of code and every client interaction.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We believe the best solutions emerge from teamwork and diverse perspectives.",
  },
  {
    icon: CheckCircle,
    title: "Reliability",
    description:
      "We deliver what we promise, when we promise it, with exceptional quality.",
  },
  {
    icon: Star,
    title: "Client Focus",
    description:
      "Our clients' success is our success. We're committed to delivering real value.",
  },
  {
    icon: TrendingUp,
    title: "Growth Mindset",
    description:
      "We continuously learn, adapt, and improve to stay ahead of industry trends.",
  },
];

// Team member component
const TeamMember = ({
  member,
  index,
}: {
  member: (typeof teamMembers)[0];
  index: number;
}) => {
  return (
    <div
      className="bg-card rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="h-64 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
        <p className="text-primary font-medium mb-3">{member.position}</p>
        <p className="text-foreground/70">{member.bio}</p>
        <div className="flex space-x-3 mt-4">
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center transition-colors hover:bg-primary/20"
          >
            <svg
              className="w-4 h-4 text-primary"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center transition-colors hover:bg-primary/20"
          >
            <svg
              className="w-4 h-4 text-primary"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

// Value item component
const ValueItem = ({
  value,
  index,
}: {
  value: { icon: LucideIcon; title: string; description: string };
  index: number;
}) => {
  const Icon = value.icon;
  return (
    <div
      className="flex gap-4 bg-card p-6 rounded-xl shadow-sm"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex-shrink-0 flex items-center justify-center">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{value.title}</h3>
        <p className="text-foreground/70">{value.description}</p>
      </div>
    </div>
  );
};

// Milestone component
const Milestone = ({
  milestone,
  index,
}: {
  milestone: (typeof milestones)[0];
  index: number;
}) => {
  return (
    <div
      className="relative pl-8 pb-8 before:content-[''] before:absolute before:left-3 before:top-2 before:w-px before:h-full before:bg-primary/30"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center z-10">
        <div className="w-2 h-2 rounded-full bg-white"></div>
      </div>
      <div className="bg-primary/5 p-6 rounded-xl">
        <div className="text-sm font-bold text-primary mb-2">
          {milestone.year}
        </div>
        <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
        <p className="text-foreground/70">{milestone.description}</p>
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero section */}
        <section className="relative py-20 bg-gradient-to-b from-secondary/50 to-background overflow-hidden">
          <div className="absolute w-96 h-96 rounded-full bg-primary/5 -top-48 -right-48 animate-float"></div>
          <div className="absolute w-96 h-96 rounded-full bg-accent/5 -bottom-48 -left-48 animate-float-delay"></div>

          <InteractiveDots
            className="absolute inset-0 z-0"
            color="rgba(94, 92, 230, 0.3)"
            density={0.05}
            speed={6}
          />

          <div className="container relative z-10">
            <div
              className="max-w-3xl mx-auto text-center mb-16"
              data-aos="fade-up"
            >
              <span className="text-sm font-medium text-primary px-4 py-1.5 rounded-full bg-primary/10 inline-block mb-4">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                The Story of{" "}
                <span className="gradient-text">MM Technology</span>
              </h1>
              <p className="text-lg text-foreground/70">
                Learn about our journey, our mission, and the passionate team
                behind our innovative solutions that drive digital
                transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1" data-aos="fade-right">
                <h2 className="text-3xl font-bold mb-6">
                  Driving Innovation Through Technology
                </h2>
                <p className="text-lg text-foreground/70 mb-6">
                  Founded in 2010, MM Technology has grown from a small startup
                  to a global leader in software development and digital
                  solutions. Our journey has been fueled by a passion for
                  innovation and a commitment to helping businesses thrive in
                  the digital age.
                </p>
                <p className="text-lg text-foreground/70 mb-8">
                  Today, we work with organizations of all sizes across
                  industries, delivering cutting-edge solutions that solve
                  complex problems and create measurable business value. Our
                  team of experts combines deep technical expertise with
                  industry knowledge to deliver results that exceed
                  expectations.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                  <div className="bg-secondary/30 p-4 rounded-xl text-center">
                    <div className="text-3xl font-bold gradient-text mb-1">
                      200+
                    </div>
                    <div className="text-sm text-foreground/70">
                      Team Members
                    </div>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-xl text-center">
                    <div className="text-3xl font-bold gradient-text mb-1">
                      15+
                    </div>
                    <div className="text-sm text-foreground/70">
                      Years Experience
                    </div>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-xl text-center">
                    <div className="text-3xl font-bold gradient-text mb-1">
                      500+
                    </div>
                    <div className="text-sm text-foreground/70">
                      Clients Worldwide
                    </div>
                  </div>
                </div>

                <Button className="px-8">Contact Us</Button>
              </div>

              <div className="order-1 lg:order-2 relative" data-aos="fade-left">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                    alt="MM Technology Team"
                    className="w-full h-auto"
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/10 rounded-2xl -z-10"></div>
                <div className="absolute -top-6 -right-6 w-40 h-40 bg-accent/10 rounded-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision section */}
        <section className="py-24 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div data-aos="fade-right">
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                      alt="Team meeting"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 glass-card p-8 rounded-xl max-w-xs text-center">
                    <Building2 className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Our Purpose</h3>
                    <p>
                      To transform businesses through innovative technology
                      solutions
                    </p>
                  </div>
                </div>
              </div>

              <div data-aos="fade-left">
                <div className="mb-16">
                  <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                  <p className="text-lg text-foreground/70">
                    At MM Technology, our mission is to empower organizations
                    with innovative technology solutions that drive growth,
                    efficiency, and competitive advantage. We are committed to
                    delivering exceptional value through a combination of
                    technical excellence, industry expertise, and client-focused
                    service.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                  <p className="text-lg text-foreground/70">
                    We aspire to be the global leader in technology solutions,
                    recognized for our innovation, excellence, and commitment to
                    client success. Our vision is to create a future where
                    businesses of all sizes can harness the full potential of
                    technology to achieve their goals and make a positive impact
                    on the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values section */}
        <section className="py-24 bg-secondary/20">
          <div className="container">
            <div
              className="text-center max-w-3xl mx-auto mb-16"
              data-aos="fade-up"
            >
              <span className="text-sm font-medium text-primary px-4 py-1.5 rounded-full bg-primary/10 inline-block mb-4">
                Our Principles
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Core <span className="gradient-text">Values</span> That Drive Us
              </h2>
              <p className="text-lg text-foreground/70">
                Our values define who we are as a company and guide every
                decision we make. They're the foundation upon which we've built
                our success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((value, index) => (
                <ValueItem key={value.title} value={value} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Team section */}
        <section className="py-24 bg-background">
          <div className="container">
            <div
              className="text-center max-w-3xl mx-auto mb-16"
              data-aos="fade-up"
            >
              <span className="text-sm font-medium text-primary px-4 py-1.5 rounded-full bg-primary/10 inline-block mb-4">
                Meet Our Team
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The <span className="gradient-text">Talented People</span>{" "}
                Behind MM Technology
              </h2>
              <p className="text-lg text-foreground/70">
                Our success is driven by our diverse team of passionate
                professionals. Get to know the experts who make the magic
                happen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <TeamMember key={member.name} member={member} index={index} />
              ))}
            </div>

            <div className="text-center mt-16" data-aos="fade-up">
              <h3 className="text-2xl font-bold mb-6">Join Our Team</h3>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
                We're always looking for talented individuals who share our
                passion for innovation and excellence. Explore career
                opportunities at MM Technology.
              </p>
              <Button size="lg" className="px-8">
                View Open Positions
              </Button>
            </div>
          </div>
        </section>

        {/* Milestones section */}
        <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container">
            <div
              className="text-center max-w-3xl mx-auto mb-16"
              data-aos="fade-up"
            >
              <span className="text-sm font-medium text-primary px-4 py-1.5 rounded-full bg-primary/10 inline-block mb-4">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Key <span className="gradient-text">Milestones</span> in Our
                History
              </h2>
              <p className="text-lg text-foreground/70">
                From our humble beginnings to where we are today, here are some
                of the significant milestones in our journey.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              {milestones.map((milestone, index) => (
                <Milestone
                  key={milestone.year}
                  milestone={milestone}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10 relative">
          <InteractiveDots
            className="absolute inset-0"
            color="rgba(186, 73, 239, 0.25)"
            density={0.08}
            speed={7}
            variation={0.8}
          />

          <div
            className="container text-center relative z-10"
            data-aos="fade-up"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-10">
              Let's discuss how MM Technology can help your business with
              innovative technology solutions tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton size="lg" className="px-8" strength={7}>
                Get in Touch
              </MagneticButton>
              <MagneticButton
                size="lg"
                variant="outline"
                className="px-8"
                strength={5}
              >
                Explore Services
              </MagneticButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
