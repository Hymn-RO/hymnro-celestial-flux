import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.56.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Create admin client with service role key
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        }
      }
    )

    const testUsers = [
      { email: 'admin@hymnro.com', password: 'admin123', username: 'admin', role: 'admin' },
      { email: 'user1@hymnro.com', password: 'user123', username: 'user1', role: 'user' },
      { email: 'user2@hymnro.com', password: 'user123', username: 'user2', role: 'user' },
      { email: 'user3@hymnro.com', password: 'user123', username: 'user3', role: 'user' },
    ];

    const results = [];

    for (const testUser of testUsers) {
      console.log(`Creating user: ${testUser.email}`);
      
      // Create the user
      const { data: user, error: signUpError } = await supabaseAdmin.auth.admin.createUser({
        email: testUser.email,
        password: testUser.password,
        email_confirm: true,
        user_metadata: {
          username: testUser.username
        }
      });

      if (signUpError) {
        console.error(`Error creating user ${testUser.email}:`, signUpError);
        results.push({ 
          email: testUser.email, 
          success: false, 
          error: signUpError.message 
        });
        continue;
      }

      console.log(`User created successfully: ${testUser.email}`);
      results.push({ 
        email: testUser.email, 
        success: true, 
        userId: user.user.id 
      });
    }

    return new Response(JSON.stringify({ 
      message: 'Test users setup completed',
      results 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in setup-test-users function:', error);
    return new Response(JSON.stringify({ 
      error: error.message || 'Unknown error occurred'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});