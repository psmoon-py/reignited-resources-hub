
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { AnimatePresence } from "framer-motion";
import ResourcesPage from "./pages/Resources";
import ResourceDetail from "./pages/ResourceDetail";
import Auth from "./pages/Auth";
import Opportunities from "./pages/Opportunities";
import CollegeApplicationGuide from "./pages/CollegeApplicationGuide";
import TestPreparation from "./pages/TestPreparation";
import EnglishProficiency from "./pages/EnglishProficiency";
import ScholarshipApplications from "./pages/ScholarshipApplications";
import { AuthProvider } from "./contexts/AuthContext";
import ProgrammingResources from "./pages/resources/ProgrammingResources";
import ScienceResources from "./pages/resources/ScienceResources";
import MathematicsResources from "./pages/resources/MathematicsResources";
import AiMlResources from "./pages/resources/AiMlResources";
import AstronomyResources from "./pages/resources/AstronomyResources";
import StudyMaterialsResources from "./pages/resources/StudyMaterialsResources";
import AcademicSuccessResources from "./pages/resources/AcademicSuccessResources";
import ResearchSkillsResources from "./pages/resources/ResearchSkillsResources";
import NetworkingResources from "./pages/resources/NetworkingResources";
import ProjectsResources from "./pages/resources/ProjectsResources";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/resource/:id" element={<ResourceDetail />} />
              <Route path="/resources/programming" element={<ProgrammingResources />} />
              <Route path="/resources/science" element={<ScienceResources />} />
              <Route path="/resources/mathematics" element={<MathematicsResources />} />
              <Route path="/resources/ai-ml" element={<AiMlResources />} />
              <Route path="/resources/astronomy" element={<AstronomyResources />} />
              <Route path="/resources/study-materials" element={<StudyMaterialsResources />} />
              <Route path="/resources/academic-success" element={<AcademicSuccessResources />} />
              <Route path="/resources/research-skills" element={<ResearchSkillsResources />} />
              <Route path="/resources/networking" element={<NetworkingResources />} />
              <Route path="/resources/projects" element={<ProjectsResources />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/opportunities" element={<Opportunities />} />
              <Route path="/college-application-guide" element={<CollegeApplicationGuide />} />
              <Route path="/college-application-guide/:section" element={<CollegeApplicationGuide />} />
              <Route path="/test-preparation" element={<TestPreparation />} />
              <Route path="/test-preparation/:sectionId" element={<TestPreparation />} />
              <Route path="/english-proficiency" element={<EnglishProficiency />} />
              <Route path="/english-proficiency/:sectionId" element={<EnglishProficiency />} />
              <Route path="/scholarship-applications" element={<ScholarshipApplications />} />
              <Route path="/scholarship-applications/:sectionId" element={<ScholarshipApplications />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
