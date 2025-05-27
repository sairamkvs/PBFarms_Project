import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hnecxetxrhrhroytgolv.supabase.co'; // your real Supabase project URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6...'; // your anon public key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
