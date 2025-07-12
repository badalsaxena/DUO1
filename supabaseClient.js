import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://isibbetgfrpzmqmolmqy.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzaWJiZXRnZnJwem1xbW9sbXF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyMzU5ODQsImV4cCI6MjA2NzgxMTk4NH0.8HzkzAiWklKrTtR7z2NNRixQybGZLJvhcLRhnmbOgRY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
