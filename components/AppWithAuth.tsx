'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { User } from '@supabase/supabase-js';
import Auth from './Auth';
import InvestmentFormWithSave from './InvestmentFormWithSave';

export default function AppWithAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

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
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600">Lädt...</p>
      </div>
    );
  }

  if (!user) {
    return <Auth onAuthSuccess={() => {}} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with user info */}
      <div className="bg-[#4B644A] shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">
            Immobilien Rechner
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-white/90">{user.email}</span>
            <button
              onClick={handleSignOut}
              className="px-3 py-1.5 text-sm bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
            >
              Abmelden
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <InvestmentFormWithSave userId={user.id} />
    </div>
  );
}
