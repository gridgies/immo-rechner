'use client';

import { useState } from 'react';

const BUDGET_OPTIONS = [
  'Bis 200.000 €',
  '200.000 – 400.000 €',
  '400.000 – 700.000 €',
  '700.000 – 1.000.000 €',
  'Über 1.000.000 €',
];

export default function DealAgentWaitlist() {
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('');
  const [budget, setBudget] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, region, budget }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.code === 'already_registered') {
          setStatus('success');
          return;
        }
        throw new Error(data.error || 'Unbekannter Fehler');
      }

      setStatus('success');
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten. Bitte versuche es erneut.');
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center max-w-lg mx-auto">
        <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Du bist auf der Liste!</h3>
        <p className="text-gray-600 mb-1">
          Wir benachrichtigen dich, sobald der Immo-Deal-Agent in den Frühzugang geht.
        </p>
        <p className="text-sm text-gray-500">Früh dabei sein und dauerhaft profitieren.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-200 p-8 max-w-lg mx-auto">
      <div className="space-y-5">
        {/* Email */}
        <div>
          <label htmlFor="wl-email" className="block text-sm font-medium text-gray-700 mb-1">
            E-Mail-Adresse <span className="text-red-500">*</span>
          </label>
          <input
            id="wl-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="deine@email.de"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none transition-colors"
          />
        </div>

        {/* Region */}
        <div>
          <label htmlFor="wl-region" className="block text-sm font-medium text-gray-700 mb-1">
            Investitionsregion <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <input
            id="wl-region"
            type="text"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            placeholder="z.B. München, NRW, Ruhrgebiet …"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none transition-colors"
          />
        </div>

        {/* Budget */}
        <div>
          <label htmlFor="wl-budget" className="block text-sm font-medium text-gray-700 mb-1">
            Investitionsbudget <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <select
            id="wl-budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none transition-colors bg-white text-gray-700"
          >
            <option value="">Bitte wählen …</option>
            {BUDGET_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        {status === 'error' && (
          <p className="text-sm text-red-600 bg-red-50 rounded-lg px-4 py-3">{errorMsg}</p>
        )}

        <button
          type="submit"
          disabled={status === 'loading' || !email}
          className="w-full py-4 bg-[#7099A3] text-white rounded-lg hover:bg-[#5d7e87] transition-colors font-medium text-base disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {status === 'loading' ? (
            <>
              <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              Wird gespeichert …
            </>
          ) : (
            'Frühzugang sichern →'
          )}
        </button>

        <p className="text-xs text-gray-500 text-center">
          Früh dabei sein und dauerhaft profitieren. Kein Spam, jederzeit abmeldbar.
        </p>
      </div>
    </form>
  );
}
