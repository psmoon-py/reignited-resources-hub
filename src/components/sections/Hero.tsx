
import React, { useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, BookOpen, Award, Users } from "lucide-react";

const Hero: React.FC = () => {
  const blobRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const blob = blobRef.current;
      if (blob) {
        const x = clientX - window.innerWidth / 2;
        const y = clientY - window.innerHeight / 2;
        
        blob.style.transform = `translate(${x / 50}px, ${y / 50}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-40 pb-24 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div ref={blobRef} className="absolute top-1/3 -left-64 w-96 h-96 bg-brand-blue/20 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-brand-orange/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-brand-blue/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your Path to <span className="text-gradient-primary">Global Education</span> Success
            </h1>
            
            <p className="text-xl text-foreground/70 mb-8 max-w-lg">
              Comprehensive resources and guidance for international students pursuing higher education opportunities worldwide.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/stem-resources">
                <Button size="lg" className="gap-2">
                  Explore STEM Resources
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              
              <Link to="/opportunities">
                <Button size="lg" variant="outline" className="gap-2">
                  Discover Opportunities
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-8">
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-full bg-brand-blue/10 mb-2">
                  <BookOpen className="h-6 w-6 text-brand-blue" />
                </div>
                <p className="text-lg font-semibold">1000+</p>
                <p className="text-sm text-foreground/70 text-center">Free Resources</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-full bg-brand-orange/10 mb-2">
                  <Award className="h-6 w-6 text-brand-orange" />
                </div>
                <p className="text-lg font-semibold">500+</p>
                <p className="text-sm text-foreground/70 text-center">Opportunities</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-full bg-brand-blue/10 mb-2">
                  <Users className="h-6 w-6 text-brand-blue" />
                </div>
                <p className="text-lg font-semibold">10,000+</p>
                <p className="text-sm text-foreground/70 text-center">Students Helped</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative">
              <div className="glow absolute inset-0"></div>
              <img 
                src="/lovable-uploads/1ee8b090-4e88-4118-97e7-d1d0b24aebe7.png" 
                alt="Reignited Minds Logo" 
                className="w-80 h-80 object-contain animate-float z-10 relative"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
