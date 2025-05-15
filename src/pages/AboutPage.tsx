
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container py-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About MarketMinds</h1>
            <p className="text-lg text-foreground/70">
              Learn about our mission, our team, and our approach to building innovative software solutions.
            </p>
          </div>
        </div>
        <About />
        
        <section className="py-20 bg-secondary/20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-foreground/70 mb-6">
                  At MarketMinds Software, we believe in harnessing the power of technology to solve complex business problems. Our mission is to deliver innovative software solutions that provide measurable value and drive sustainable growth for our clients.
                </p>
                <p className="text-lg text-foreground/70">
                  We combine technical excellence with market intelligence to create solutions that not only meet current needs but anticipate future challenges in an ever-evolving digital landscape.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6">Our Core Values</h3>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Innovation</h4>
                      <p className="text-foreground/70">We constantly push the boundaries of what's possible.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Excellence</h4>
                      <p className="text-foreground/70">We strive for excellence in everything we do.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Client Focus</h4>
                      <p className="text-foreground/70">We put our clients' success at the center of our work.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Integrity</h4>
                      <p className="text-foreground/70">We operate with transparency and ethical principles.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
