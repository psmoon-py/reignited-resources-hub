
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <section id="resources" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comprehensive <span className="text-gradient-primary">Educational Resources</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Access our curated collection of high-quality educational resources designed to support your international academic journey, from test preparation to college applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ResourceCard 
            title="STEM Resources"
            description="Explore 1000+ resources for mathematics, science, technology, and engineering subjects."
            href="/stem-resources"
            icon="👩‍🔬"
          />
          <ResourceCard 
            title="Test Preparation"
            description="Materials and guides for international exams like SAT, ACT, GRE, and more."
            href="/test-preparation"
            icon="📝"
          />
          <ResourceCard 
            title="English Proficiency"
            description="Resources for TOEFL, IELTS, and other English language proficiency tests."
            href="/english-proficiency"
            icon="🔤"
          />
          <ResourceCard 
            title="Scholarship Applications"
            description="Guidance for finding and applying for international student scholarships."
            href="/scholarship-applications"
            icon="🎓"
          />
        </div>

        <div className="text-center mt-12">
          <Link to="/stem-resources">
            <Button className="gap-2">
              Browse STEM Resources
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const ResourceCard = ({ title, description, href, icon }: { title: string; description: string; href: string; icon: string }) => {
  return (
    <Link to={href} className="block">
      <div className="bg-card hover:bg-card/80 transition-colors shadow rounded-lg p-6 h-full border border-border">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-foreground/70">{description}</p>
        <div className="mt-4 flex items-center text-sm text-primary font-medium">
          Explore resources
          <ArrowRight className="ml-1 h-4 w-4" />
        </div>
      </div>
    </Link>
  );
};

export default Resources;
