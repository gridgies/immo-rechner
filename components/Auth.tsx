'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { Home, Mail, Lock, ArrowRight, User } from 'lucide-react';

interface AuthProps {
  onAuthSuccess: () => void;
  onBack?: () => void;
}

export default function Auth({ onAuthSuccess, onBack }: AuthProps) {
  const [isLogin, setIsLogin] = useState(true); // Start with login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
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

        if (error) {
          // Translate common error messages to German
          if (error.message.includes('Invalid login credentials')) {
            throw new Error('Ungültige Anmeldedaten. Bitte überprüfen Sie Ihre E-Mail und Ihr Passwort.');
          }
          if (error.message.includes('Email not confirmed')) {
            throw new Error('Bitte bestätigen Sie zuerst Ihre E-Mail-Adresse.');
          }
          throw error;
        }
        
        if (data.user) {
          onAuthSuccess();
        }
      } else {
        // Sign up
        if (password.length < 6) {
          throw new Error('Das Passwort muss mindestens 6 Zeichen lang sein.');
        }

        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName,
            },
          },
        });

        if (error) {
          // Translate common error messages to German
          if (error.message.includes('User already registered')) {
            throw new Error('Diese E-Mail-Adresse ist bereits registriert.');
          }
          if (error.message.includes('Password should be at least')) {
            throw new Error('Das Passwort muss mindestens 6 Zeichen lang sein.');
          }
          throw error;
        }

        if (data.user) {
          // Check if email confirmation is required
          if (data.user.identities && data.user.identities.length === 0) {
            setMessage('Diese E-Mail-Adresse ist bereits registriert. Bitte melden Sie sich an.');
            setIsLogin(true);
          } else if (data.session) {
            // User is automatically logged in (email confirmation disabled)
            onAuthSuccess();
          } else {
            // Email confirmation required
            setMessage('Registrierung erfolgreich! Bitte bestätigen Sie Ihre E-Mail-Adresse und melden Sie sich dann an.');
            setIsLogin(true);
          }
        }
      }
    } catch (error: any) {
      setError(error.message || 'Ein Fehler ist aufgetreten');
    } finally {
      setLoading(false);
    }
  };

  const switchMode = (toLogin: boolean) => {
    setIsLogin(toLogin);
    setError(null);
    setMessage(null);
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
            <div className="bg-[#7099A3]/10 p-4 rounded-2xl backdrop-blur-sm">
              <Home className="h-12 w-12 text-[#7099A3]" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Immobilien Rechner
          </h2>
          <p className="text-gray-600">
            {isLogin
              ? 'Melden Sie sich an, um Ihre Szenarien zu speichern'
              : 'Erstellen Sie ein kostenloses Konto'}
          </p>
        </div>

        {/* Auth Card */}
        <div className="bg-white rounded-2xl shadow-xl border-0 p-8">
          {/* Tab Navigation */}
          <div className="flex gap-2 mb-6 p-1 bg-gray-100 rounded-lg">
            <button
              type="button"
              onClick={() => switchMode(true)}
              className={`flex-1 py-2.5 px-4 rounded-md text-sm font-medium transition-all ${
                isLogin
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Anmelden
            </button>
            <button
              type="button"
              onClick={() => switchMode(false)}
              className={`flex-1 py-2.5 px-4 rounded-md text-sm font-medium transition-all ${
                !isLogin
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Registrieren
            </button>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {error && (
              <div className="rounded-xl bg-red-50 border border-red-200 p-4">
                <p className="text-sm text-red-800 font-medium">{error}</p>
              </div>
            )}

            {message && (
              <div className="rounded-xl bg-green-50 border border-green-200 p-4">
                <p className="text-sm text-green-800 font-medium">{message}</p>
              </div>
            )}

            {/* Full Name Field - Only show during signup */}
            {!isLogin && (
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Name <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full pl-10 h-11 px-4 text-base border-2 border-gray-200 rounded-lg focus:border-[#7099A3] focus:ring-0 transition-colors bg-white text-gray-900"
                    placeholder="Max Mustermann"
                  />
                </div>
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
                  className="w-full pl-10 h-11 px-4 text-base border-2 border-gray-200 rounded-lg focus:border-[#7099A3] focus:ring-0 transition-colors bg-white text-gray-900"
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
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 h-11 px-4 text-base border-2 border-gray-200 rounded-lg focus:border-[#7099A3] focus:ring-0 transition-colors bg-white text-gray-900"
                  placeholder="••••••••"
                />
              </div>
              {!isLogin && (
                <p className="mt-1.5 text-xs text-gray-500">
                  Mindestens 6 Zeichen
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-11 bg-[#7099A3] hover:bg-[#5d7e87] text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium flex items-center justify-center gap-2"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  {isLogin ? 'Anmelden' : 'Konto erstellen'}
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
                  onClick={() => switchMode(false)}
                  className="text-[#7099A3] hover:text-[#5d7e87] font-medium"
                >
                  Jetzt registrieren
                </button>
              </p>
            ) : (
              <p>
                Bereits registriert?{' '}
                <button
                  type="button"
                  onClick={() => switchMode(true)}
                  className="text-[#7099A3] hover:text-[#5d7e87] font-medium"
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
