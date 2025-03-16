
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/button";
import { ArrowRight, Sparkles, BookOpen, Award, Users } from "lucide-react";

const Hero: React.FC = () => {
  const blobRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const blob = blobRef.current;
      if (blob) {
        // Calculate position relative to the center of the viewport
        const x = clientX - window.innerWidth / 2;
        const y = clientY - window.innerHeight / 2;
        
        // Apply subtle movement, scaled down
        blob.style.transform = `translate(${x / 50}px, ${y / 50}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen gradient-bg flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background blobs and effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div ref={blobRef} className="absolute top-1/3 -left-64 w-96 h-96 bg-brand-blue/20 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-brand-orange/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-brand-blue/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 max-w-2xl animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-brand-blue/30 bg-brand-blue/10 mb-6">
              <Sparkles className="h-4 w-4 mr-2 text-brand-blue" />
              <span className="text-sm font-medium text-brand-blue">Empowering Students Worldwide</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="text-gradient-blue">Ignite</span> Your Potential with <span className="text-gradient-orange">Free</span> STEM Resources
            </h1>
            
            <p className="text-xl text-foreground/70 mb-8 text-balance">
              Access 1000+ STEM resources, scholarships, competitions, and guidance - 
              all in one place, completely free for underprivileged students.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="group" 
                onClick={() => navigate("/resources")}
              >
                Explore Resources
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Join Our Community
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 mt-12">
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
          
          <div className="flex-1 flex justify-center items-center animate-fade-in">
            <div className="relative">
              <div className="glow absolute inset-0"></div>
              <img 
                src="/lovable-uploads/a03d48ae-f3bc-4742-8bfa-8a0d0166c413.png" 
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
