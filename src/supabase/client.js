import { createClient } from "@supabase/supabase-js";

createClient(process.env.SUPABASE_URL, process.env.SUPABASE_PUBLIC_KEY);