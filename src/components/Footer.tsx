import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary pt-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="MM Technology" className="w-10 h-10" />
              <span className="font-bold text-xl">MM Technology</span>
            </div>
            <p className="text-foreground/70 mb-4">
              Delivering innovative IT solutions that drive business growth and
              digital transformation.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center transition-colors hover:bg-primary/20"
              >
                <Facebook className="w-4 h-4 text-primary" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center transition-colors hover:bg-primary/20"
              >
                <Twitter className="w-4 h-4 text-primary" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center transition-colors hover:bg-primary/20"
              >
                <Instagram className="w-4 h-4 text-primary" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center transition-colors hover:bg-primary/20"
              >
                <Linkedin className="w-4 h-4 text-primary" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Software Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Cybersecurity
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Data Analytics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  IT Consulting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-foreground/70 mb-4">
              Subscribe to our newsletter for the latest news and insights.
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Your email" className="bg-background/50" />
              <Button variant="default">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/70">
            © 2025 MM Technology. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-sm text-foreground/70 hover:text-primary"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-foreground/70 hover:text-primary"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm text-foreground/70 hover:text-primary"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
