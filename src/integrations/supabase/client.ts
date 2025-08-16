import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://mijqqvybmfgwvhxjdjib.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1panFxdnlibWZnd3ZoeGpkamliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2Mzk0NTYsImV4cCI6MjA2OTIxNTQ1Nn0.aPv-oF-mYypHm6XVryQc5eYXrp0R0TZG0BayPs0-FyA"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)