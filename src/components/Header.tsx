
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'py-2 bg-background/80 backdrop-blur-lg shadow-sm' : 'py-5'
      )}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="font-bold text-white">IT</span>
            </div>
            <span className="font-bold text-xl">TechNex</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="hover-lift text-foreground/80 hover:text-primary">Services</a>
          <a href="#about" className="hover-lift text-foreground/80 hover:text-primary">About</a>
          <a href="#testimonials" className="hover-lift text-foreground/80 hover:text-primary">Testimonials</a>
          <a href="#contact" className="hover-lift text-foreground/80 hover:text-primary">Contact</a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="text-sm rounded-full px-5 py-2 h-auto">
            Log In
          </Button>
          <Button className="text-sm rounded-full px-5 py-2 h-auto">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t absolute top-full left-0 w-full py-4 shadow-lg animate-fade-in">
          <nav className="container flex flex-col space-y-4">
            <a href="#services" className="text-lg px-3 py-2 hover:bg-muted rounded-md" onClick={toggleMobileMenu}>Services</a>
            <a href="#about" className="text-lg px-3 py-2 hover:bg-muted rounded-md" onClick={toggleMobileMenu}>About</a>
            <a href="#testimonials" className="text-lg px-3 py-2 hover:bg-muted rounded-md" onClick={toggleMobileMenu}>Testimonials</a>
            <a href="#contact" className="text-lg px-3 py-2 hover:bg-muted rounded-md" onClick={toggleMobileMenu}>Contact</a>
            <div className="flex flex-col space-y-2 pt-2 border-t">
              <Button variant="outline" className="justify-center">
                Log In
              </Button>
              <Button className="justify-center">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
