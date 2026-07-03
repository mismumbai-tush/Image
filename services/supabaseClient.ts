import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://dqycpnnrcccrtskjdpql.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxeWNwbm5yY2NjcnRza2pkcHFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU2MjU3OTIsImV4cCI6MjA4MTIwMTc5Mn0.wJd10yTgf4XhKjn7cynlk0_4s5e0eP5WBjI1fEe7E3k";

if (!supabaseUrl || !supabaseAnonKey) {
  // This check is kept as a safeguard, but with hardcoded values, it should not be triggered.
  throw new Error("Supabase URL and Anon Key are required.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);