import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://unnujrcjhfqgwmrnqnqw.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVubnVqcmNqaGZxZ3dtcm5xbnF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjExMjQxMTAsImV4cCI6MjAzNjcwMDExMH0.rS92gZ4oOaROFS4G61VOCdKj7QrZampQjQJJnsTWiFE';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
