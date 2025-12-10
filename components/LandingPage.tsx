'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, Shield, FileText, BarChart3, Mail } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

interface LandingPageProps {
  onGetStarted: () => void;
}

export default function LandingPage({ onGetStarted }: LandingPageProps) {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistName, setWaitlistName] = useState('');
  const [waitlistMessage, setWaitlistMessage] = useState('');
  const [waitlistLoading, setWaitlistLoading] = useState(false);
  const [waitlistSuccess, setWaitlistSuccess] = useState(false);
  const [waitlistError, setWaitlistError] = useState<string | null>(null);

  const supabase = createClient();

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setWaitlistLoading(true);
    setWaitlistError(null);

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert({
          email: waitlistEmail.toLowerCase().trim(),
          name: waitlistName.trim() || null,
          message: waitlistMessage.trim() || null,
        });

      if (error) {
        if (error.code === '23505') {
          // Unique constraint violation
          throw new Error('Diese E-Mail ist bereits auf der Warteliste');
        }
        throw error;
      }

      setWaitlistSuccess(true);
      setWaitlistEmail('');
      setWaitlistName('');
      setWaitlistMessage('');
      
      // Reset success message after 5 seconds
      setTimeout(() => setWaitlistSuccess(false), 5000);
    } catch (error: any) {
      setWaitlistError(error.message || 'Ein Fehler ist aufgetreten');
    } finally {
      setWaitlistLoading(false);
    }
  };

  const features = [
    {
      icon: Shield,
      title: 'Gewinne Sicherheit in deine Investitionen',
      description: 'Fundierte Entscheidungen treffen durch präzise Cashflow- und Renditeberechnungen über 10-30 Jahre.',
    },
    {
      icon: TrendingUp,
      title: 'Kaufe deine erste Immobilie mit uns',
      description: 'Schritt für Schritt zum erfolgreichen Immobilieninvestor. Verstehe alle Kosten und Erträge im Detail.',
    },
    {
      icon: BarChart3,
      title: 'Vergleiche verschiedene Szenarien',
      description: 'Speichere und vergleiche mehrere Investitionsoptionen, um die beste Entscheidung zu treffen.',
      comingSoon: true,
    },
  ];

  const stats = [
    { value: 'IRR', label: 'Internal Rate of Return' },
    { value: '30 Jahre', label: 'Projektionszeitraum' },
    { value: 'Cashflow', label: 'Monatliche Analyse' },
    { value: 'Szenarien', label: 'Speichern & Vergleichen' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#7099A3] to-[#5d7e87] rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">IR</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">Immobilien Rechner</span>
            </div>
            <button
              onClick={onGetStarted}
              className="px-4 py-2 bg-[#7099A3] text-white rounded-lg hover:bg-[#5d7e87] transition-colors text-sm font-medium"
            >
              Anmelden
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            {/* Beta Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-yellow-600 rounded-full animate-pulse"></span>
              Private Beta
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Analysiere potentielle{' '}
              <span className="bg-gradient-to-r from-[#7099A3] to-[#5d7e87] bg-clip-text text-transparent">
                Immobilien
              </span>{' '}
              in Minuten
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Der intelligente Rechner für deine erste oder nächste Immobilieninvestition. 
              Berechne Cashflow, IRR und Rendite – präzise und einfach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={onGetStarted}
                className="group px-8 py-4 bg-[#7099A3] text-white rounded-lg hover:bg-[#5d7e87] transition-all text-lg font-medium flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                Beta-Zugang anfordern
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>Limitiert auf 20 Beta-Tester</span>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Screenshot Preview */}
          <div className="relative max-w-6xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-[#7099A3]/20 to-[#5d7e87]/20 blur-3xl transform -translate-y-12"></div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
              <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 text-center text-sm text-gray-600 font-medium">
                  Immobilien Rechner
                </div>
              </div>
              <img 
                src="/screenshot.png" 
                alt="Immobilien Rechner Interface" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Alles, was du für deine Investition brauchst
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Von der ersten Analyse bis zur finalen Entscheidung – alle Tools an einem Ort.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                className={`relative bg-white rounded-xl p-8 border border-gray-200 transition-all duration-300 ${
                  hoveredFeature === index ? 'shadow-xl -translate-y-1' : 'shadow-sm'
                }`}
              >
                {feature.comingSoon && (
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                      Demnächst
                    </span>
                  </div>
                )}
                <div className="mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                    hoveredFeature === index ? 'bg-[#7099A3]' : 'bg-[#7099A3]/10'
                  }`}>
                    <feature.icon className={`h-6 w-6 transition-colors ${
                      hoveredFeature === index ? 'text-white' : 'text-[#7099A3]'
                    }`} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Präzise Berechnungen für fundierte Entscheidungen
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Unser Rechner berücksichtigt alle wichtigen Faktoren deiner Immobilieninvestition:
              </p>
              <div className="space-y-4">
                {[
                  'Kaufpreis und Nebenkosten',
                  'Eigenkapital und Finanzierung',
                  'Mieteinnahmen und Hausgeld',
                  'Mieterhöhungen über Zeit',
                  'Wertsteigerung der Immobilie',
                  'IRR (Internal Rate of Return)',
                  'Monatlicher Cashflow',
                  'Vermögenszuwachs über 10-30 Jahre'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#7099A3]/5 to-[#5d7e87]/5 rounded-2xl p-8 border border-[#7099A3]/20">
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="text-sm text-gray-600 mb-2">Interner Zinsfuß (IRR)</div>
                  <div className="text-3xl font-bold text-[#7099A3]">8.42%</div>
                  <div className="text-xs text-gray-500 mt-1">Über 30 Jahre</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="text-sm text-gray-600 mb-2">Monatlicher Cashflow</div>
                  <div className="text-3xl font-bold text-green-600">+€342</div>
                  <div className="text-xs text-gray-500 mt-1">Nach allen Kosten</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="text-sm text-gray-600 mb-2">Vermögenszuwachs</div>
                  <div className="text-3xl font-bold text-[#7099A3]">€243,500</div>
                  <div className="text-xs text-gray-500 mt-1">Nach 30 Jahren</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#7099A3] to-[#5d7e87]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            Noch Plätze verfügbar
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Werde einer der ersten 20 Beta-Tester
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Erhalte exklusiven Zugang und hilf uns, das beste Tool für Immobilieninvestoren zu bauen.
          </p>
          <button
            onClick={onGetStarted}
            className="group px-8 py-4 bg-white text-[#7099A3] rounded-lg hover:bg-gray-50 transition-all text-lg font-medium inline-flex items-center gap-2 shadow-xl"
          >
            Beta-Zugang anfordern
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <div className="mt-6 flex items-center justify-center gap-2 text-white/80 text-sm">
            <CheckCircle2 className="h-4 w-4" />
            <span>Kostenlos • Exklusiv • Früher Zugang zu neuen Features</span>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Noch kein Einladungscode?
            </h2>
            <p className="text-xl text-gray-600">
              Trage dich in die Warteliste ein und wir benachrichtigen dich, sobald neue Plätze verfügbar sind.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            {waitlistSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Erfolgreich eingetragen!
                </h3>
                <p className="text-gray-600 mb-6">
                  Wir haben deine Anfrage erhalten und melden uns, sobald ein Platz frei wird.
                </p>
                <button
                  onClick={() => setWaitlistSuccess(false)}
                  className="text-[#7199a2] hover:underline text-sm font-medium"
                >
                  Weitere Person eintragen
                </button>
              </div>
            ) : (
              <form onSubmit={handleWaitlistSubmit} className="space-y-6">
                {waitlistError && (
                  <div className="rounded-lg bg-red-50 border border-red-200 p-4">
                    <p className="text-sm text-red-800 font-medium">{waitlistError}</p>
                  </div>
                )}

                {/* Email Field */}
                <div>
                  <label htmlFor="waitlist-email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-Mail-Adresse *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="waitlist-email"
                      type="email"
                      required
                      value={waitlistEmail}
                      onChange={(e) => setWaitlistEmail(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 text-sm border-2 border-gray-200 rounded-lg focus:border-[#7199a2] focus:ring-0 transition-colors bg-white text-gray-900"
                      placeholder="deine@email.de"
                    />
                  </div>
                </div>

                {/* Name Field (Optional) */}
                <div>
                  <label htmlFor="waitlist-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name (optional)
                  </label>
                  <input
                    id="waitlist-name"
                    type="text"
                    value={waitlistName}
                    onChange={(e) => setWaitlistName(e.target.value)}
                    className="w-full px-4 py-3 text-sm border-2 border-gray-200 rounded-lg focus:border-[#7199a2] focus:ring-0 transition-colors bg-white text-gray-900"
                    placeholder="Max Mustermann"
                  />
                </div>

                {/* Message Field (Optional) */}
                <div>
                  <label htmlFor="waitlist-message" className="block text-sm font-medium text-gray-700 mb-2">
                    Nachricht (optional)
                  </label>
                  <textarea
                    id="waitlist-message"
                    rows={3}
                    value={waitlistMessage}
                    onChange={(e) => setWaitlistMessage(e.target.value)}
                    className="w-full px-4 py-3 text-sm border-2 border-gray-200 rounded-lg focus:border-[#7199a2] focus:ring-0 transition-colors bg-white text-gray-900 resize-none"
                    placeholder="Erzähl uns kurz, warum du am Beta-Test interessiert bist..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={waitlistLoading}
                  className="w-full py-4 bg-[#7199a2] text-white rounded-lg hover:bg-[#5d7e87] transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium text-lg flex items-center justify-center gap-2"
                >
                  {waitlistLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Auf Warteliste eintragen
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </button>

                <p className="text-xs text-center text-gray-500">
                  Wir respektieren deine Privatsphäre. Keine Spam-Mails, versprochen!
                </p>
              </form>
            )}
          </div>

          {/* Alternative: Already have a code */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Du hast bereits einen Einladungscode?
            </p>
            <button
              onClick={onGetStarted}
              className="text-[#7199a2] hover:text-[#5d7e87] font-medium transition-colors inline-flex items-center gap-2"
            >
              Direkt anmelden
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#7099A3] to-[#5d7e87] rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">IR</span>
                </div>
                <span className="text-lg font-semibold">Immobilien Rechner</span>
              </div>
              <p className="text-gray-400 text-sm">
                Der intelligente Rechner für deine Immobilieninvestition.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Produkt</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Funktionen</li>
                <li>Preise</li>
                <li>Dokumentation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Rechtliches</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Datenschutz</li>
                <li>Impressum</li>
                <li>AGB</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            © 2024 Immobilien Rechner. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  );
}
