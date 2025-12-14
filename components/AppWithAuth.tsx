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
  const [isTransitioning, setIsTransitioning] = useState(false);

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
      if (session?.user && !user) {
        // User just logged in - trigger transition
        setIsTransitioning(true);
        setTimeout(() => {
          setUser(session.user);
          setShowAuth(false);
          setIsTransitioning(false);
          // Reset viewport zoom after login
          if (typeof window !== 'undefined') {
            const viewport = document.querySelector('meta[name="viewport"]');
            if (viewport) {
              viewport.setAttribute('content', 'width=device-width, initial-scale=1');
            }
          }
        }, 50);
      } else {
        setUser(session?.user ?? null);
        if (session?.user) {
          setShowAuth(false);
        }
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setShowAuth(false); // Show landing page after sign out
  };

  // Show brief loading during transition
  if (isTransitioning) {
    return (
      <div className="flex h-screen bg-gray-50 items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#7099A3] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // If user is logged in, show calculator
  if (user) {
    return (
      <div className="flex h-screen bg-gray-50 overflow-hidden">
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
