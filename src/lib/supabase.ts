import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          first_name: string;
          last_name: string;
          username: string | null;
          bio: string | null;
          education_level: 'middle_school' | 'high_school' | 'undergraduate' | 'graduate' | null;
          location: string | null;
          interests: string[] | null;
          website_url: string | null;
          github_url: string | null;
          linkedin_url: string | null;
          avatar_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          first_name: string;
          last_name: string;
          username?: string | null;
          bio?: string | null;
          education_level?: 'middle_school' | 'high_school' | 'undergraduate' | 'graduate' | null;
          location?: string | null;
          interests?: string[] | null;
          website_url?: string | null;
          github_url?: string | null;
          linkedin_url?: string | null;
          avatar_url?: string | null;
        };
        Update: {
          first_name?: string;
          last_name?: string;
          username?: string | null;
          bio?: string | null;
          education_level?: 'middle_school' | 'high_school' | 'undergraduate' | 'graduate' | null;
          location?: string | null;
          interests?: string[] | null;
          website_url?: string | null;
          github_url?: string | null;
          linkedin_url?: string | null;
          avatar_url?: string | null;
        };
      };
      resources: {
        Row: {
          id: string;
          title: string;
          description: string;
          content: string | null;
          category: string;
          subcategory: string | null;
          level: 'beginner' | 'intermediate' | 'advanced';
          type: 'article' | 'video' | 'course' | 'tool' | 'book' | 'tutorial';
          url: string | null;
          image_url: string | null;
          tags: string[] | null;
          author_id: string | null;
          is_featured: boolean;
          view_count: number;
          rating: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          title: string;
          description: string;
          content?: string | null;
          category: string;
          subcategory?: string | null;
          level?: 'beginner' | 'intermediate' | 'advanced';
          type: 'article' | 'video' | 'course' | 'tool' | 'book' | 'tutorial';
          url?: string | null;
          image_url?: string | null;
          tags?: string[] | null;
          author_id?: string | null;
          is_featured?: boolean;
        };
        Update: {
          title?: string;
          description?: string;
          content?: string | null;
          category?: string;
          subcategory?: string | null;
          level?: 'beginner' | 'intermediate' | 'advanced';
          type?: 'article' | 'video' | 'course' | 'tool' | 'book' | 'tutorial';
          url?: string | null;
          image_url?: string | null;
          tags?: string[] | null;
          is_featured?: boolean;
        };
      };
      opportunities: {
        Row: {
          id: string;
          title: string;
          organization: string;
          description: string;
          type: 'scholarship' | 'internship' | 'competition' | 'hackathon';
          amount: string | null;
          deadline: string | null;
          registration_opens: string | null;
          location: string;
          eligibility_criteria: string[] | null;
          education_levels: string[] | null;
          application_url: string;
          status: 'active' | 'upcoming' | 'expired';
          tags: string[] | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          title: string;
          organization: string;
          description: string;
          type: 'scholarship' | 'internship' | 'competition' | 'hackathon';
          amount?: string | null;
          deadline?: string | null;
          registration_opens?: string | null;
          location: string;
          eligibility_criteria?: string[] | null;
          education_levels?: string[] | null;
          application_url: string;
          status?: 'active' | 'upcoming' | 'expired';
          tags?: string[] | null;
        };
        Update: {
          title?: string;
          organization?: string;
          description?: string;
          type?: 'scholarship' | 'internship' | 'competition' | 'hackathon';
          amount?: string | null;
          deadline?: string | null;
          registration_opens?: string | null;
          location?: string;
          eligibility_criteria?: string[] | null;
          education_levels?: string[] | null;
          application_url?: string;
          status?: 'active' | 'upcoming' | 'expired';
          tags?: string[] | null;
        };
      };
    };
  };
}