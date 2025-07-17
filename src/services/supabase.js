import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ttpbswtfvravvljvctyo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0cGJzd3RmdnJhdnZsanZjdHlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2MDg4NTksImV4cCI6MjA2ODE4NDg1OX0.jp_4MaLlFq5-MWU3T0JvLCBW34rYi5l3qJvBOaAfXDo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
