import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import type { Database } from '@/lib/supabase';

type Tables = Database['public']['Tables'];
type Resource = Tables['resources']['Row'];
type Opportunity = Tables['opportunities']['Row'];
type Profile = Tables['profiles']['Row'];

// Resources hooks
export const useResources = (filters?: {
  category?: string;
  level?: string;
  type?: string;
  search?: string;
}) => {
  return useQuery({
    queryKey: ['resources', filters],
    queryFn: async () => {
      let query = supabase
        .from('resources')
        .select('*')
        .order('created_at', { ascending: false });

      if (filters?.category && filters.category !== 'All') {
        query = query.eq('category', filters.category);
      }

      if (filters?.level && filters.level !== 'All') {
        query = query.eq('level', filters.level);
      }

      if (filters?.type && filters.type !== 'All') {
        query = query.eq('type', filters.type);
      }

      if (filters?.search) {
        query = query.or(`title.ilike.%${filters.search}%,description.ilike.%${filters.search}%`);
      }

      const { data, error } = await query;

      if (error) throw error;
      return data as Resource[];
    },
  });
};

export const useResource = (id: string) => {
  return useQuery({
    queryKey: ['resource', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('resources')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      return data as Resource;
    },
    enabled: !!id,
  });
};

// Opportunities hooks
export const useOpportunities = (filters?: {
  type?: string;
  status?: string;
  education_level?: string;
  search?: string;
}) => {
  return useQuery({
    queryKey: ['opportunities', filters],
    queryFn: async () => {
      let query = supabase
        .from('opportunities')
        .select('*')
        .order('deadline', { ascending: true });

      if (filters?.type && filters.type !== 'all') {
        query = query.eq('type', filters.type);
      }

      if (filters?.status && filters.status !== 'all') {
        query = query.eq('status', filters.status);
      }

      if (filters?.education_level && filters.education_level !== 'all') {
        query = query.contains('education_levels', [filters.education_level]);
      }

      if (filters?.search) {
        query = query.or(`title.ilike.%${filters.search}%,organization.ilike.%${filters.search}%`);
      }

      const { data, error } = await query;

      if (error) throw error;
      return data as Opportunity[];
    },
  });
};

// User profile hooks
export const useProfile = (userId?: string) => {
  return useQuery({
    queryKey: ['profile', userId],
    queryFn: async () => {
      if (!userId) return null;

      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) throw error;
      return data as Profile;
    },
    enabled: !!userId,
  });
};

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (updates: Tables['profiles']['Update'] & { id: string }) => {
      const { id, ...profileUpdates } = updates;
      const { data, error } = await supabase
        .from('profiles')
        .update(profileUpdates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['profile', data.id] });
    },
  });
};

// Bookmarks hooks
export const useBookmarks = (userId?: string) => {
  return useQuery({
    queryKey: ['bookmarks', userId],
    queryFn: async () => {
      if (!userId) return [];

      const { data, error } = await supabase
        .from('user_bookmarks')
        .select(`
          *,
          resources(*),
          opportunities(*)
        `)
        .eq('user_id', userId);

      if (error) throw error;
      return data;
    },
    enabled: !!userId,
  });
};

export const useToggleBookmark = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      userId,
      resourceId,
      opportunityId,
    }: {
      userId: string;
      resourceId?: string;
      opportunityId?: string;
    }) => {
      // Check if bookmark exists
      const { data: existing } = await supabase
        .from('user_bookmarks')
        .select('id')
        .eq('user_id', userId)
        .eq(resourceId ? 'resource_id' : 'opportunity_id', resourceId || opportunityId)
        .single();

      if (existing) {
        // Remove bookmark
        const { error } = await supabase
          .from('user_bookmarks')
          .delete()
          .eq('id', existing.id);

        if (error) throw error;
        return { action: 'removed' };
      } else {
        // Add bookmark
        const { error } = await supabase
          .from('user_bookmarks')
          .insert({
            user_id: userId,
            resource_id: resourceId || null,
            opportunity_id: opportunityId || null,
          });

        if (error) throw error;
        return { action: 'added' };
      }
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['bookmarks', variables.userId] });
    },
  });
};

// Search hook with full-text search
export const useSearch = (query: string, type?: 'resources' | 'opportunities' | 'all') => {
  return useQuery({
    queryKey: ['search', query, type],
    queryFn: async () => {
      if (!query.trim()) return { resources: [], opportunities: [] };

      const results: { resources: Resource[]; opportunities: Opportunity[] } = {
        resources: [],
        opportunities: [],
      };

      if (type === 'resources' || type === 'all') {
        const { data: resources, error: resourcesError } = await supabase
          .from('resources')
          .select('*')
          .or(`title.ilike.%${query}%,description.ilike.%${query}%,tags.cs.{${query}}`)
          .limit(20);

        if (resourcesError) throw resourcesError;
        results.resources = resources as Resource[];
      }

      if (type === 'opportunities' || type === 'all') {
        const { data: opportunities, error: opportunitiesError } = await supabase
          .from('opportunities')
          .select('*')
          .or(`title.ilike.%${query}%,organization.ilike.%${query}%,description.ilike.%${query}%`)
          .limit(20);

        if (opportunitiesError) throw opportunitiesError;
        results.opportunities = opportunities as Opportunity[];
      }

      return results;
    },
    enabled: query.trim().length > 2,
  });
};