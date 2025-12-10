'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { Home, Mail, Lock, ArrowRight } from 'lucide-react';

interface AuthProps {
  onAuthSuccess: () => void;
  onBack?: () => void;
}

export default function Auth({ onAuthSuccess, onBack }: AuthProps) {
  const [isLogin, setIsLogin] = useState(false); // Start with signup/register
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inviteCode, setInviteCode] = useState('');
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
        // Sign up - validate invite code first
        if (!inviteCode.trim()) {
          throw new Error('Bitte geben Sie einen Einladungscode ein');
        }

        // Validate invite code
        const { data: isValid, error: codeError } = await supabase.rpc('use_invite_code', {
          invite_code: inviteCode.trim().toUpperCase(),
        });

        if (codeError) {
          throw new Error('Fehler bei der Validierung des Einladungscodes');
        }

        if (!isValid) {
          throw new Error('Ungültiger oder bereits verwendeter Einladungscode');
        }

        // Invite code is valid, proceed with signup
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
        {/* Back Button */}
        {onBack && (
          <button
            onClick={onBack}
            className="mb-4 text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1 transition-colors"
          >
            ← Zurück zur Startseite
          </button>
        )}
        
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
              : 'Beta-Zugang mit Einladungscode'}
          </p>
        </div>

        {/* Auth Card */}
        <div className="bg-white rounded-2xl shadow-xl border-0 p-8">
          {/* Tab Navigation */}
          <div className="flex gap-2 mb-6 p-1 bg-gray-100 rounded-lg">
            <button
              type="button"
              onClick={() => {
                setIsLogin(false);
                setError(null);
                setMessage(null);
              }}
              className={`flex-1 py-2.5 px-4 rounded-md text-sm font-medium transition-all ${
                !isLogin
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Registrieren
            </button>
            <button
              type="button"
              onClick={() => {
                setIsLogin(true);
                setError(null);
                setMessage(null);
              }}
              className={`flex-1 py-2.5 px-4 rounded-md text-sm font-medium transition-all ${
                isLogin
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Anmelden
            </button>
          </div>

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

            {/* Invite Code Field - Only show during signup */}
            {!isLogin && (
              <div>
                <label htmlFor="inviteCode" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Einladungscode
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                  </div>
                  <input
                    id="inviteCode"
                    name="inviteCode"
                    type="text"
                    required={!isLogin}
                    value={inviteCode}
                    onChange={(e) => setInviteCode(e.target.value.toUpperCase())}
                    className="w-full pl-10 h-11 px-4 text-sm border-2 border-gray-200 rounded-lg focus:border-secondary focus:ring-0 transition-colors bg-white text-gray-900 uppercase"
                    placeholder="BETA2025"
                  />
                </div>
                <p className="mt-1.5 text-xs text-gray-500">
                  Nur für ausgewählte Beta-Tester. Noch keinen Code? Kontaktiere uns!
                </p>
              </div>
            )}

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

          {/* Helper Text */}
          <div className="mt-6 text-center text-sm text-gray-600">
            {isLogin ? (
              <p>
                Noch kein Konto?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setIsLogin(false);
                    setError(null);
                    setMessage(null);
                  }}
                  className="text-[#7199a2] hover:text-[#5d7e87] font-medium"
                >
                  Jetzt registrieren
                </button>
              </p>
            ) : (
              <p>
                Bereits registriert?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setIsLogin(true);
                    setError(null);
                    setMessage(null);
                  }}
                  className="text-[#7199a2] hover:text-[#5d7e87] font-medium"
                >
                  Anmelden
                </button>
              </p>
            )}
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
