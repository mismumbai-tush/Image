
import { supabase } from './supabaseClient';

export const authService = {
  signUp: async (email, password) => {
    return await (supabase.auth as any).signUp({ email, password });
  },

  signInWithEmail: async (email, password) => {
    return await (supabase.auth as any).signInWithPassword({ email, password });
  },
  
  signInWithGoogle: async () => {
    return await (supabase.auth as any).signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin,
      },
    });
  },

  signOut: async () => {
    await (supabase.auth as any).signOut();
  },
  
  getUser: async (): Promise<any | null> => {
    const { data, error } = await (supabase.auth as any).getUser();
    if (error) {
        console.error("Error fetching user:", error);
        return null;
    }
    return data.user;
  },
  
  getSession: async () => {
    const { data, error } = await (supabase.auth as any).getSession();
    if (error) {
        console.error("Error fetching session:", error);
        return null;
    }
    return data.session;
  },
  
  onAuthStateChange: (callback: any) => {
    return (supabase.auth as any).onAuthStateChange((event: any, session: any) => {
      callback(session);
    });
  }
};
