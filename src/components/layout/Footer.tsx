
import React from "react";
import { Lightbulb, Instagram, Github, ExternalLink, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted/30 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
              <Lightbulb className="h-8 w-8 text-gradient-primary" />
              <span className="text-gradient-primary">Reignited Minds</span>
            </Link>
            <p className="mt-4 text-foreground/70 max-w-md">
              Empowering underprivileged students with free access to STEM resources,
              opportunities, and guidance to help talented minds reach their
              true potential.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-brand-blue/20 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="https://discord.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-brand-blue/20 transition-colors duration-300"
                aria-label="Discord"
              >
                <MessageSquare className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-brand-blue/20 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/resources" className="text-foreground/70 hover:text-brand-blue transition-colors duration-300">
                  Resources
                </Link>
              </li>
              <li>
                <a href="/#opportunities" className="text-foreground/70 hover:text-brand-blue transition-colors duration-300">
                  Opportunities
                </a>
              </li>
              <li>
                <a href="/#services" className="text-foreground/70 hover:text-brand-blue transition-colors duration-300">
                  College Help
                </a>
              </li>
              <li>
                <a href="/#workshops" className="text-foreground/70 hover:text-brand-blue transition-colors duration-300">
                  Workshops
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-foreground/70 hover:text-brand-blue transition-colors duration-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Join Our Community</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://discord.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-brand-blue transition-colors duration-300 flex items-center"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Discord Community
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-brand-blue transition-colors duration-300 flex items-center"
                >
                  <Instagram className="h-4 w-4 mr-2" />
                  Follow @reignitedminds
                </a>
              </li>
              <li className="text-foreground/70">
                Email: info@reignitedminds.org
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted/30 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/50 text-sm">
            © {new Date().getFullYear()} Reignited Minds. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-foreground/50 hover:text-brand-blue text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground/50 hover:text-brand-blue text-sm transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
