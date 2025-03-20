
import React, { useState, useEffect } from "react";
import { Menu, X, Lightbulb, LogOut, User } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import Button from "../ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

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
  
  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
    setIsProfileMenuOpen(false);
    navigate("/");
  };

  const scrollToSection = (sectionId: string) => {
    closeMenu();
    
    // If we're on the homepage, scroll to the section
    if (location.pathname === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If we're on another page, navigate to homepage and then scroll to section
      navigate('/');
      // Need to wait for navigation to complete before scrolling
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const navLinks = [
    { name: "Home", action: () => scrollToSection("home") },
    { name: "Resources", action: () => scrollToSection("resources") },
    { name: "Opportunities", action: () => scrollToSection("opportunities") },
    { name: "College Help", action: () => scrollToSection("services") },
    { name: "Workshops", action: () => scrollToSection("workshops") },
    { name: "Contact", action: () => scrollToSection("contact") },
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
          <img 
            src="/lovable-uploads/1ee8b090-4e88-4118-97e7-d1d0b24aebe7.png" 
            className="h-10 w-10" 
            alt="Reignited Minds" 
          />
          <span className="text-gradient-primary">
            Reignited Minds
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={link.action}
                className="text-foreground/80 hover:text-foreground transition-colors duration-300 font-medium"
              >
                {link.name}
              </button>
            ))}
          </div>

          {isAuthenticated ? (
            <div className="relative">
              <button
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                className="flex items-center space-x-2 text-foreground/80 hover:text-foreground transition-colors duration-300 font-medium"
              >
                <div className="h-8 w-8 bg-brand-blue text-white rounded-full flex items-center justify-center">
                  {user?.firstName.charAt(0)}{user?.lastName.charAt(0)}
                </div>
                <span className="text-sm">{user?.firstName}</span>
              </button>
              
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-background rounded-md shadow-lg py-1 z-10 border border-muted">
                  <div className="px-4 py-2 border-b border-muted">
                    <p className="text-sm font-medium">{user?.firstName} {user?.lastName}</p>
                    <p className="text-xs text-foreground/60">{user?.email}</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full px-4 py-2 text-sm text-foreground/80 hover:bg-muted transition-colors"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Log Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Button variant="primary" size="md" onClick={() => navigate("/auth")}>
              Get Started
            </Button>
          )}
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
            <button
              key={link.name}
              onClick={link.action}
              className="text-xl font-medium text-foreground hover:text-brand-blue transition-colors duration-300"
            >
              {link.name}
            </button>
          ))}
          
          {isAuthenticated ? (
            <>
              <div className="flex items-center space-x-3 text-foreground/80 py-2 border-t border-muted/30">
                <div className="h-10 w-10 bg-brand-blue text-white rounded-full flex items-center justify-center text-lg">
                  {user?.firstName.charAt(0)}{user?.lastName.charAt(0)}
                </div>
                <div>
                  <p className="font-medium">{user?.firstName} {user?.lastName}</p>
                  <p className="text-sm text-foreground/60">{user?.email}</p>
                </div>
              </div>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full mt-4 flex items-center justify-center"
                onClick={() => {
                  handleLogout();
                  closeMenu();
                }}
              >
                <LogOut className="mr-2 h-5 w-5" />
                Log Out
              </Button>
            </>
          ) : (
            <Button 
              variant="primary" 
              size="lg" 
              className="w-full mt-4"
              onClick={() => {
                closeMenu();
                navigate("/auth");
              }}
            >
              <User className="mr-2 h-5 w-5" />
              Get Started
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
