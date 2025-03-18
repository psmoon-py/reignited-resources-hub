
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import TestPreparation from "./pages/TestPreparation";
import EnglishProficiency from "./pages/EnglishProficiency";
import ScholarshipApplications from "./pages/ScholarshipApplications";
import CollegeApplicationGuide from "./pages/CollegeApplicationGuide";
import Resources from "./pages/Resources";
import Opportunities from "./pages/Opportunities";
import NotFound from "./pages/NotFound";
import ResourceDetail from "./pages/ResourceDetail";
import StemResourcesHub from "./pages/stem-resources/StemResourcesHub";
import MathResources from "./pages/stem-resources/MathResources";
import ScienceResources from "./pages/stem-resources/ScienceResources";
import TechnologyResources from "./pages/stem-resources/TechnologyResources";
import EngineeringResources from "./pages/stem-resources/EngineeringResources";
import ResourcesByType from "./pages/stem-resources/ResourcesByType";

// Theme and Context providers
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/contexts/AuthContext";
import { ResourceProvider } from "@/contexts/ResourceContext";
import { Toaster } from "@/components/ui/toaster";

// Styles
import "./App.css";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="ui-theme">
      <AuthProvider>
        <ResourceProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/test-preparation" element={<TestPreparation />} />
              <Route path="/english-proficiency" element={<EnglishProficiency />} />
              <Route path="/scholarship-applications" element={<ScholarshipApplications />} />
              <Route path="/college-application-guide" element={<CollegeApplicationGuide />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/resources/:id" element={<ResourceDetail />} />
              <Route path="/opportunities" element={<Opportunities />} />
              <Route path="/stem-resources" element={<StemResourcesHub />} />
              <Route path="/stem-resources/math" element={<MathResources />} />
              <Route path="/stem-resources/science" element={<ScienceResources />} />
              <Route path="/stem-resources/technology" element={<TechnologyResources />} />
              <Route path="/stem-resources/engineering" element={<EngineeringResources />} />
              <Route path="/stem-resources/type/:type" element={<ResourcesByType />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster />
          </BrowserRouter>
        </ResourceProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
