/*
  # Initial Schema for Reignited Minds Platform

  1. New Tables
    - `profiles` - User profile information
    - `resources` - Educational resources
    - `opportunities` - Scholarships, internships, competitions
    - `blog_posts` - Educational content posts
    - `user_bookmarks` - User saved resources
    - `applications` - User applications to opportunities
    - `projects` - User project submissions
    - `competitions` - Competition management
    - `mentorships` - Mentor-student relationships

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
    - Secure admin operations
*/

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Profiles table (extends auth.users)
CREATE TABLE IF NOT EXISTS profiles (
  id uuid REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  first_name text NOT NULL,
  last_name text NOT NULL,
  username text UNIQUE,
  bio text,
  education_level text CHECK (education_level IN ('middle_school', 'high_school', 'undergraduate', 'graduate')),
  location text,
  interests text[],
  website_url text,
  github_url text,
  linkedin_url text,
  avatar_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Resources table
CREATE TABLE IF NOT EXISTS resources (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  title text NOT NULL,
  description text NOT NULL,
  content text,
  category text NOT NULL,
  subcategory text,
  level text CHECK (level IN ('beginner', 'intermediate', 'advanced')) DEFAULT 'beginner',
  type text CHECK (type IN ('article', 'video', 'course', 'tool', 'book', 'tutorial')) NOT NULL,
  url text,
  image_url text,
  tags text[],
  author_id uuid REFERENCES profiles(id),
  is_featured boolean DEFAULT false,
  view_count integer DEFAULT 0,
  rating numeric(3,2) DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Opportunities table
CREATE TABLE IF NOT EXISTS opportunities (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  title text NOT NULL,
  organization text NOT NULL,
  description text NOT NULL,
  type text CHECK (type IN ('scholarship', 'internship', 'competition', 'hackathon')) NOT NULL,
  amount text,
  deadline timestamptz,
  registration_opens timestamptz,
  location text,
  eligibility_criteria text[],
  education_levels text[],
  application_url text NOT NULL,
  status text CHECK (status IN ('active', 'upcoming', 'expired')) DEFAULT 'active',
  tags text[],
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Blog posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL,
  excerpt text,
  category text NOT NULL,
  tags text[],
  author_id uuid REFERENCES profiles(id) NOT NULL,
  featured_image_url text,
  is_published boolean DEFAULT false,
  published_at timestamptz,
  view_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- User bookmarks
CREATE TABLE IF NOT EXISTS user_bookmarks (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  resource_id uuid REFERENCES resources(id) ON DELETE CASCADE,
  opportunity_id uuid REFERENCES opportunities(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  CONSTRAINT bookmark_type_check CHECK (
    (resource_id IS NOT NULL AND opportunity_id IS NULL) OR
    (resource_id IS NULL AND opportunity_id IS NOT NULL)
  )
);

-- User applications
CREATE TABLE IF NOT EXISTS applications (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  opportunity_id uuid REFERENCES opportunities(id) ON DELETE CASCADE NOT NULL,
  status text CHECK (status IN ('draft', 'submitted', 'under_review', 'accepted', 'rejected')) DEFAULT 'draft',
  application_data jsonb,
  submitted_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  content text,
  category text NOT NULL,
  tags text[],
  github_url text,
  demo_url text,
  image_urls text[],
  is_public boolean DEFAULT true,
  view_count integer DEFAULT 0,
  like_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Competitions table
CREATE TABLE IF NOT EXISTS competitions (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  title text NOT NULL,
  description text NOT NULL,
  rules text,
  category text NOT NULL,
  start_date timestamptz NOT NULL,
  end_date timestamptz NOT NULL,
  registration_deadline timestamptz,
  max_participants integer,
  prizes jsonb,
  status text CHECK (status IN ('upcoming', 'active', 'judging', 'completed')) DEFAULT 'upcoming',
  created_by uuid REFERENCES profiles(id) NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Competition participants
CREATE TABLE IF NOT EXISTS competition_participants (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  competition_id uuid REFERENCES competitions(id) ON DELETE CASCADE NOT NULL,
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  project_id uuid REFERENCES projects(id),
  registration_date timestamptz DEFAULT now(),
  UNIQUE(competition_id, user_id)
);

-- Mentorships table
CREATE TABLE IF NOT EXISTS mentorships (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  mentor_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  mentee_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  status text CHECK (status IN ('pending', 'active', 'completed', 'cancelled')) DEFAULT 'pending',
  subject_area text NOT NULL,
  goals text,
  start_date timestamptz,
  end_date timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(mentor_id, mentee_id)
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE opportunities ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_bookmarks ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE competitions ENABLE ROW LEVEL SECURITY;
ALTER TABLE competition_participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE mentorships ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view all profiles" ON profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- Resources policies
CREATE POLICY "Anyone can view published resources" ON resources FOR SELECT USING (true);
CREATE POLICY "Authenticated users can create resources" ON resources FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Users can update own resources" ON resources FOR UPDATE USING (auth.uid() = author_id);

-- Opportunities policies
CREATE POLICY "Anyone can view active opportunities" ON opportunities FOR SELECT USING (true);
CREATE POLICY "Authenticated users can create opportunities" ON opportunities FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Blog posts policies
CREATE POLICY "Anyone can view published posts" ON blog_posts FOR SELECT USING (is_published = true);
CREATE POLICY "Authors can view own posts" ON blog_posts FOR SELECT USING (auth.uid() = author_id);
CREATE POLICY "Authors can create posts" ON blog_posts FOR INSERT WITH CHECK (auth.uid() = author_id);
CREATE POLICY "Authors can update own posts" ON blog_posts FOR UPDATE USING (auth.uid() = author_id);

-- User bookmarks policies
CREATE POLICY "Users can manage own bookmarks" ON user_bookmarks FOR ALL USING (auth.uid() = user_id);

-- Applications policies
CREATE POLICY "Users can manage own applications" ON applications FOR ALL USING (auth.uid() = user_id);

-- Projects policies
CREATE POLICY "Anyone can view public projects" ON projects FOR SELECT USING (is_public = true);
CREATE POLICY "Users can view own projects" ON projects FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own projects" ON projects FOR ALL USING (auth.uid() = user_id);

-- Competitions policies
CREATE POLICY "Anyone can view competitions" ON competitions FOR SELECT USING (true);
CREATE POLICY "Authenticated users can create competitions" ON competitions FOR INSERT WITH CHECK (auth.uid() = created_by);
CREATE POLICY "Creators can update own competitions" ON competitions FOR UPDATE USING (auth.uid() = created_by);

-- Competition participants policies
CREATE POLICY "Anyone can view participants" ON competition_participants FOR SELECT USING (true);
CREATE POLICY "Users can register for competitions" ON competition_participants FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can manage own participation" ON competition_participants FOR ALL USING (auth.uid() = user_id);

-- Mentorships policies
CREATE POLICY "Users can view own mentorships" ON mentorships FOR SELECT USING (auth.uid() = mentor_id OR auth.uid() = mentee_id);
CREATE POLICY "Users can create mentorship requests" ON mentorships FOR INSERT WITH CHECK (auth.uid() = mentee_id);
CREATE POLICY "Mentors can update mentorship status" ON mentorships FOR UPDATE USING (auth.uid() = mentor_id);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_resources_category ON resources(category);
CREATE INDEX IF NOT EXISTS idx_resources_level ON resources(level);
CREATE INDEX IF NOT EXISTS idx_resources_created_at ON resources(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_opportunities_type ON opportunities(type);
CREATE INDEX IF NOT EXISTS idx_opportunities_deadline ON opportunities(deadline);
CREATE INDEX IF NOT EXISTS idx_opportunities_status ON opportunities(status);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(is_published, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_projects_category ON projects(category);
CREATE INDEX IF NOT EXISTS idx_projects_public ON projects(is_public, created_at DESC);

-- Create functions for updated_at timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_resources_updated_at BEFORE UPDATE ON resources FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_opportunities_updated_at BEFORE UPDATE ON opportunities FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_applications_updated_at BEFORE UPDATE ON applications FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_competitions_updated_at BEFORE UPDATE ON competitions FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_mentorships_updated_at BEFORE UPDATE ON mentorships FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();