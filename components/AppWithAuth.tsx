'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { User } from '@supabase/supabase-js';
import Auth from './Auth';
import LandingPage from './LandingPage';
import InvestmentFormWithSave from './InvestmentFormWithSave';

export default function AppWithAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [showAuth, setShowAuth] = useState(false);

  const supabase = createClient();

  useEffect(() => {
    // Check current session (runs in background, doesn't block render)
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        setShowAuth(false); // Hide auth when user logs in
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setShowAuth(false); // Show landing page after sign out
  };

  // If user is logged in, show calculator
  if (user) {
    return (
      <div className="flex h-screen bg-gray-50">
        <InvestmentFormWithSave userId={user.id} userEmail={user.email || ''} onSignOut={handleSignOut} />
      </div>
    );
  }

  // Not logged in - show landing page immediately (no loading screen!)
  if (showAuth) {
    return <Auth onAuthSuccess={() => {}} onBack={() => setShowAuth(false)} />;
  }

  return <LandingPage onGetStarted={() => setShowAuth(true)} />;
}
