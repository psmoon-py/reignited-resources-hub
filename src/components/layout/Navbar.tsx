
import React, { useState, useEffect } from "react";
import { Menu, X, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import Button from "../ui/Button";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Resources", path: "/#resources" },
    { name: "Opportunities", path: "/#opportunities" },
    { name: "College Help", path: "/#services" },
    { name: "Workshops", path: "/#workshops" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4",
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-xl font-bold"
          onClick={closeMenu}
        >
          <Lightbulb className="h-8 w-8 text-gradient-primary" />
          <span className="text-gradient-primary">
            Reignited Minds
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-foreground/80 hover:text-foreground transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          <Button variant="primary" size="md">
            Get Started
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-foreground hover:text-brand-blue transition-colors duration-300"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col p-6 space-y-10 transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-8 mt-20">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-xl font-medium text-foreground hover:text-brand-blue transition-colors duration-300"
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}
          <Button 
            variant="primary" 
            size="lg" 
            className="mt-4 w-full"
            onClick={closeMenu}
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
