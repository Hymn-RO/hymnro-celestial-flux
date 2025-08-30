import { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  userProfile: any | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signUp: (email: string, password: string, username: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  userProfile: null,
  loading: true,
  signIn: async () => ({ error: null }),
  signUp: async () => ({ error: null }),
  signOut: async () => {},
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [userProfile, setUserProfile] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUserProfile = async (userId: string) => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', userId)
      .single();
    
    if (!error && data) {
      setUserProfile(data);
    }
  };

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          setTimeout(() => {
            fetchUserProfile(session.user.id);
          }, 0);
        } else {
          setUserProfile(null);
        }
        setLoading(false);
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        fetchUserProfile(session.user.id);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    // Mock authentication for testing without database
    const mockUsers = {
      'admin@hymnro.com': { password: 'admin123', role: 'admin', username: 'Admin User' },
      'user1@hymnro.com': { password: 'user123', role: 'user', username: 'User One' },
      'user2@hymnro.com': { password: 'user123', role: 'user', username: 'User Two' },
      'user3@hymnro.com': { password: 'user123', role: 'user', username: 'User Three' },
    };

    const mockUser = mockUsers[email as keyof typeof mockUsers];
    
    if (mockUser && mockUser.password === password) {
      // Create mock user and session
      const mockUserData = {
        id: email.split('@')[0], // Use email prefix as ID
        email: email,
        user_metadata: { username: mockUser.username }
      };
      
      const mockSession = {
        user: mockUserData,
        access_token: 'mock-token',
        refresh_token: 'mock-refresh'
      };

      // Set mock data
      setUser(mockUserData as any);
      setSession(mockSession as any);
      setUserProfile({ role: mockUser.role, username: mockUser.username });
      
      return { error: null };
    } else {
      return { error: { message: 'Invalid login credentials' } };
    }
  };

  const signUp = async (email: string, password: string, username: string) => {
    const redirectUrl = `${window.location.origin}/`;
    
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl,
        data: {
          username: username
        }
      }
    });
    return { error };
  };

  const signOut = async () => {
    // Mock sign out
    setUser(null);
    setSession(null);
    setUserProfile(null);
  };

  const value = {
    user,
    session,
    userProfile,
    loading,
    signIn,
    signUp,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};