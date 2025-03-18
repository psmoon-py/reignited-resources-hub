
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { StemResource } from '@/types/resource';
import { 
  allResources, 
  getResourcesBySubject, 
  getResourcesBySubcategory, 
  getResourcesByType,
  searchResources
} from '@/data/resources/index';

interface ResourceContextType {
  isLoading: boolean;
  allResources: StemResource[];
  filteredResources: StemResource[];
  filterBySubject: (subject: string) => void;
  filterBySubcategory: (subcategory: string) => void;
  filterByType: (type: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  clearFilters: () => void;
  totalCount: number;
}

const ResourceContext = createContext<ResourceContextType | undefined>(undefined);

export const ResourceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [filteredResources, setFilteredResources] = useState<StemResource[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Initialize with all resources
  useEffect(() => {
    // Simulate loading delay to prevent UI jank
    const timer = setTimeout(() => {
      setFilteredResources(allResources);
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Handle search query changes
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredResources(allResources);
      return;
    }
    
    setFilteredResources(searchResources(searchQuery));
  }, [searchQuery]);
  
  const filterBySubject = (subject: string) => {
    setIsLoading(true);
    
    setTimeout(() => {
      if (subject === 'all') {
        setFilteredResources(allResources);
      } else {
        setFilteredResources(getResourcesBySubject(subject));
      }
      setIsLoading(false);
    }, 300);
  };
  
  const filterBySubcategory = (subcategory: string) => {
    setIsLoading(true);
    
    setTimeout(() => {
      setFilteredResources(getResourcesBySubcategory(subcategory));
      setIsLoading(false);
    }, 300);
  };
  
  const filterByType = (type: string) => {
    setIsLoading(true);
    
    setTimeout(() => {
      setFilteredResources(getResourcesByType(type));
      setIsLoading(false);
    }, 300);
  };
  
  const clearFilters = () => {
    setSearchQuery('');
    setFilteredResources(allResources);
  };
  
  return (
    <ResourceContext.Provider
      value={{
        isLoading,
        allResources,
        filteredResources,
        filterBySubject,
        filterBySubcategory,
        filterByType,
        searchQuery,
        setSearchQuery,
        clearFilters,
        totalCount: allResources.length
      }}
    >
      {children}
    </ResourceContext.Provider>
  );
};

export const useResources = () => {
  const context = useContext(ResourceContext);
  if (context === undefined) {
    throw new Error('useResources must be used within a ResourceProvider');
  }
  return context;
};
