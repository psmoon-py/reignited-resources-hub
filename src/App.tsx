
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { AnimatePresence } from "framer-motion";
// import ResourcesPage from "./pages/Resources";
// import ResourceDetail from "./pages/ResourceDetail";
import Auth from "./pages/Auth";
import Opportunities from "./pages/Opportunities";
import CollegeApplicationGuide from "./pages/CollegeApplicationGuide";
import TestPreparation from "./pages/TestPreparation";
import EnglishProficiency from "./pages/EnglishProficiency";
import ScholarshipApplications from "./pages/ScholarshipApplications";
import { AuthProvider } from "./contexts/AuthContext";
import StemResourcesHub from "./pages/stem-resources/StemResourcesHub";
import MathResources from "./pages/stem-resources/MathResources";
import ScienceResources from "./pages/stem-resources/ScienceResources";
import TechnologyResources from "./pages/stem-resources/TechnologyResources";
import EngineeringResources from "./pages/stem-resources/EngineeringResources";
import ResourcesByType from "./pages/stem-resources/ResourcesByType";

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
              {/* <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/resource/:id" element={<ResourceDetail />} /> */}
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
              
              {/* STEM Resources Routes */}
              <Route path="/stem-resources" element={<StemResourcesHub />} />
              <Route path="/stem-resources/math" element={<MathResources />} />
              <Route path="/stem-resources/science" element={<ScienceResources />} />
              <Route path="/stem-resources/technology" element={<TechnologyResources />} />
              <Route path="/stem-resources/engineering" element={<EngineeringResources />} />
              <Route path="/stem-resources/type/:resourceType" element={<ResourcesByType />} />
              
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
