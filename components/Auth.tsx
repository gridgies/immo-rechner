'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { Home, Mail, Lock, ArrowRight } from 'lucide-react';

interface AuthProps {
  onAuthSuccess: () => void;
}

export default function Auth({ onAuthSuccess }: AuthProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      if (isLogin) {
        // Login
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;
        if (data.user) {
          onAuthSuccess();
        }
      } else {
        // Sign up
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
        });

        if (error) throw error;
        
        if (data.user) {
          setMessage('Registrierung erfolgreich! Bitte überprüfen Sie Ihre E-Mail zur Bestätigung.');
        }
      }
    } catch (error: any) {
      setError(error.message || 'Ein Fehler ist aufgetreten');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {/* Header with Icon */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="bg-primary/10 p-4 rounded-2xl backdrop-blur-sm">
              <Home className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Immobilien Rechner
          </h2>
          <p className="text-gray-600">
            {isLogin
              ? 'Melden Sie sich an, um Ihre Szenarien zu speichern'
              : 'Erstellen Sie ein Konto, um Szenarien zu speichern'}
          </p>
        </div>

        {/* Auth Card */}
        <div className="bg-white rounded-2xl shadow-xl border-0 p-8">
          <form className="space-y-5" onSubmit={handleSubmit}>
            {error && (
              <div className="rounded-xl bg-red-50 border border-red-200 p-4 animate-fade-in">
                <p className="text-sm text-red-800 font-medium">{error}</p>
              </div>
            )}

            {message && (
              <div className="rounded-xl bg-green-50 border border-green-200 p-4 animate-fade-in">
                <p className="text-sm text-green-800 font-medium">{message}</p>
              </div>
            )}

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                E-Mail-Adresse
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 h-11 px-4 text-sm border-2 border-gray-200 rounded-lg focus:border-secondary focus:ring-0 transition-colors bg-white text-gray-900"
                  placeholder="ihre@email.de"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
                Passwort
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete={isLogin ? 'current-password' : 'new-password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 h-11 px-4 text-sm border-2 border-gray-200 rounded-lg focus:border-secondary focus:ring-0 transition-colors bg-white text-gray-900"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium flex items-center justify-center gap-2"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  {isLogin ? 'Anmelden' : 'Registrieren'}
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>

          {/* Toggle Login/Register */}
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setError(null);
                setMessage(null);
              }}
              className="text-sm text-primary hover:text-primary/80 font-medium transition-colors"
            >
              {isLogin
                ? 'Noch kein Konto? Jetzt registrieren'
                : 'Bereits registriert? Anmelden'}
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <p className="mt-6 text-center text-xs text-gray-500">
          Ihre Daten werden sicher verschlüsselt gespeichert
        </p>
      </div>
    </div>
  );
}
