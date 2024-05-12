import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://evqituzovcjxppwwgdsj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2cWl0dXpvdmNqeHBwd3dnZHNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI0NDc0MTMsImV4cCI6MjAxODAyMzQxM30.3i5Pb0sVUBoU2YgxTIpZrXMHr5t1D09OjK7Kxaz870o";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
