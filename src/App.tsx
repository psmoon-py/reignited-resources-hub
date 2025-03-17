
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
import { AuthProvider } from "./contexts/AuthContext";

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
              <Route path="/auth" element={<Auth />} />
              <Route path="/opportunities" element={<Opportunities />} />
              <Route path="/college-application-guide" element={<CollegeApplicationGuide />} />
              <Route path="/college-application-guide/:section" element={<CollegeApplicationGuide />} />
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
