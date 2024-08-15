import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://fqwzczizunegpfawccyz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxd3pjeml6dW5lZ3BmYXdjY3l6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE1NjA4NDQsImV4cCI6MjAzNzEzNjg0NH0.XHjgzhYVePLJ1ekrPmaWxwaZGo9_vP2nwq-xInd_tmE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
