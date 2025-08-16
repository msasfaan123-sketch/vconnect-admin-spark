-- Drop the overly permissive policy that allows everyone to view all profiles
DROP POLICY IF EXISTS "Profiles are viewable by everyone" ON public.profiles;

-- Create a more restrictive policy that only allows users to view their own profiles
CREATE POLICY "Users can view their own profile" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = user_id);

-- If you need certain profiles to be discoverable (like for a staff directory),
-- you could add an additional policy like this (commented out for now):
-- CREATE POLICY "Public profiles are viewable by authenticated users"
-- ON public.profiles
-- FOR SELECT
-- USING (auth.uid() IS NOT NULL AND display_name IS NOT NULL);