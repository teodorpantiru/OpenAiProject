
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://nvmhgdzctpsjdaodrjof.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52bWhnZHpjdHBzamRhb2Ryam9mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc5NDI4NDksImV4cCI6MjA0MzUxODg0OX0.DWaGiHx2tuYegOh7vDKL7M7xGlbpjbpBePkXLIz7YPU"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;