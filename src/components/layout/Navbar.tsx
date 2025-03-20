
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Menu } from "lucide-react";
import Logo from "./Logo";

const MobileNav = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (value: boolean) => void }) => {
  return (
    <div
      className={`fixed inset-0 bg-background/95 z-50 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out md:hidden`}
    >
      <div className="flex flex-col h-full justify-center items-center space-y-8 p-8">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-6 text-foreground/60 hover:text-foreground transition-colors"
          aria-label="Close menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="text-2xl font-medium hover:text-primary transition-colors"
        >
          Home
        </Link>
        <Link
          to="/stem-resources"
          onClick={() => setIsOpen(false)}
          className="text-2xl font-medium hover:text-primary transition-colors"
        >
          STEM Resources
        </Link>
        <Link
          to="/opportunities"
          onClick={() => setIsOpen(false)}
          className="text-2xl font-medium hover:text-primary transition-colors"
        >
          Opportunities
        </Link>
        <Link
          to="/college-application-guide"
          onClick={() => setIsOpen(false)}
          className="text-2xl font-medium hover:text-primary transition-colors"
        >
          College Guide
        </Link>
        <Link
          to="/test-preparation"
          onClick={() => setIsOpen(false)}
          className="text-2xl font-medium hover:text-primary transition-colors"
        >
          Test Prep
        </Link>
        <Link
          to="/auth"
          onClick={() => setIsOpen(false)}
          className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerClass, setHeaderClass] = useState("");
  const { user, logout } = useAuth();
  const isLoggedIn = !!user;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHeaderClass("bg-background/90 backdrop-blur-sm shadow-md");
      } else {
        setHeaderClass("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Logo />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/stem-resources" className="text-sm font-medium hover:text-primary transition-colors">
              STEM Resources
            </Link>
            <Link to="/opportunities" className="text-sm font-medium hover:text-primary transition-colors">
              Opportunities
            </Link>
            <Link to="/college-application-guide" className="text-sm font-medium hover:text-primary transition-colors">
              College Guide
            </Link>
            <Link to="/test-preparation" className="text-sm font-medium hover:text-primary transition-colors">
              Test Prep
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <Button variant="outline" size="sm" onClick={logout}>
                Logout
              </Button>
            ) : (
              <Link to="/auth">
                <Button size="sm">Sign In</Button>
              </Link>
            )}
            <Button variant="ghost" size="sm" onClick={toggleMobileMenu} className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      <MobileNav isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
    </header>
  );
};

export default Navbar;
