'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { User } from '@supabase/supabase-js';
import Auth from './Auth';
import LandingPage from './LandingPage';
import InvestmentFormWithSave from './InvestmentFormWithSave';

export default function AppWithAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [showAuth, setShowAuth] = useState(false);

  const supabase = createClient();

  useEffect(() => {
    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600">Lädt...</p>
      </div>
    );
  }

  if (!user) {
    if (showAuth) {
      return <Auth onAuthSuccess={() => {}} onBack={() => setShowAuth(false)} />;
    }
    return <LandingPage onGetStarted={() => setShowAuth(true)} />;
  }

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* InvestmentFormWithSave will render both sidebar and main content */}
      <InvestmentFormWithSave userId={user.id} userEmail={user.email || ''} onSignOut={handleSignOut} />
    </div>
  );
}
