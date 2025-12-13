import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | Immobilien Rechner',
  robots: {
    index: false,
    follow: false,
  },
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          {/* Header */}
          <div className="mb-8 pb-6 border-b border-slate-200">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Datenschutzerklärung</h1>
            <p className="text-slate-600">
              Zuletzt aktualisiert: {new Date().toLocaleDateString('de-DE')}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-slate-700 leading-relaxed">
            
            {/* Einleitung */}
            <section>
              <p>
                Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
                personenbezogenen Daten vertraulich und entsprechend den gesetzlichen 
                Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
            </section>

            {/* 1. Verantwortlicher */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                1. Verantwortlicher für die Datenverarbeitung
              </h2>
              <div className="bg-slate-50 rounded-lg p-4 space-y-1">
                <p className="font-medium">Graciella Dharmawan</p>
                <p>Heidestr. 36</p>
                <p>60316 Frankfurt</p>
                <p className="mt-2">
                  E-Mail:{' '}
                  <a 
                    href="mailto:info@immo-rechner.net" 
                    className="text-[#7298a3] hover:underline"
                  >
                    info@immo-rechner.net
                  </a>
                </p>
              </div>
            </section>

            {/* 2. Erhebung und Speicherung */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                2. Erhebung und Speicherung personenbezogener Daten
              </h2>
              
              <h3 className="text-lg font-semibold text-slate-900 mt-4 mb-2">
                2.1 Registrierung und Nutzerkonto
              </h3>
              <p className="mb-2">
                Bei der Registrierung für unseren Dienst erheben wir folgende Daten:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>E-Mail-Adresse</li>
                <li>Selbst gewähltes Passwort (verschlüsselt gespeichert)</li>
                <li>Zeitpunkt der Registrierung</li>
              </ul>
              <p className="mt-2">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)
              </p>

              <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">
                2.2 Nutzungsdaten (Szenarien und Berechnungen)
              </h3>
              <p className="mb-2">
                Bei der Nutzung des Immobilien Rechners speichern wir:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Ihre eingegebenen Immobiliendaten</li>
                <li>Berechnungsergebnisse und Szenarien</li>
                <li>Zeitstempel der Erstellung und Änderung</li>
              </ul>
              <p className="mt-2">
                Diese Daten werden ausschließlich zur Bereitstellung unseres Dienstes verwendet und 
                sind nur für Sie zugänglich.
              </p>
              <p className="mt-2">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)
              </p>

              <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">
                2.3 Automatisch erfasste Daten
              </h3>
              <p className="mb-2">
                Beim Besuch unserer Website erfassen wir automatisch:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>IP-Adresse (anonymisiert)</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Browser-Typ und -Version</li>
                <li>Betriebssystem</li>
                <li>Referrer URL (zuvor besuchte Seite)</li>
              </ul>
              <p className="mt-2">
                Diese Daten werden für technische Zwecke und zur Fehleranalyse verwendet.
              </p>
              <p className="mt-2">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse 
                an der Sicherheit und Funktionsfähigkeit)
              </p>
            </section>

            {/* 3. Supabase */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                3. Hosting und Datenverarbeitung durch Dritte
              </h2>
              
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Supabase</h3>
              <p className="mb-2">
                Wir nutzen Supabase für die Authentifizierung und Datenspeicherung. Supabase ist ein 
                Dienst der Supabase Inc., USA.
              </p>
              <p className="mb-2">
                Dabei werden Ihre Daten auf Servern in der EU gespeichert. Supabase ist GDPR-konform 
                und hat entsprechende Datenschutzzertifizierungen.
              </p>
              <p>
                Weitere Informationen:{' '}
                <a 
                  href="https://supabase.com/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#7298a3] hover:underline"
                >
                  https://supabase.com/privacy
                </a>
              </p>
              <p className="mt-2">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) 
                und Art. 28 DSGVO (Auftragsverarbeitung)
              </p>
            </section>

            {/* 4. Cookies und Tracking */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                4. Cookies und Tracking-Technologien
              </h2>
              
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                4.1 Technisch notwendige Cookies
              </h3>
              <p className="mb-2">
                Wir verwenden Session-Cookies ausschließlich für:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Authentifizierung (Login-Status)</li>
                <li>Sicherheit (CSRF-Schutz)</li>
              </ul>
              <p className="mt-2">
                Diese Cookies sind für die Funktion der Website unbedingt erforderlich.
              </p>

              <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">
                4.2 Vercel Analytics & Speed Insights
              </h3>
              <p>
                Wir verwenden Vercel Analytics und Speed Insights zur Analyse der 
                Website-Performance. Diese Tools erfassen anonymisierte Nutzungsdaten 
                und speichern keine personenbezogenen Informationen.
              </p>
              <p className="mt-2">
                Weitere Informationen:{' '}
                <a 
                  href="https://vercel.com/docs/analytics/privacy-policy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#7298a3] hover:underline"
                >
                  Vercel Analytics Privacy Policy
                </a>
              </p>
            </section>

            {/* 5. Weitergabe von Daten */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                5. Weitergabe von Daten
              </h2>
              <p>
                Wir geben Ihre personenbezogenen Daten nicht an Dritte weiter, außer:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>Sie haben ausdrücklich eingewilligt (Art. 6 Abs. 1 lit. a DSGVO)</li>
                <li>Es besteht eine gesetzliche Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO)</li>
                <li>
                  Die Weitergabe ist zur Vertragserfüllung erforderlich (Art. 6 Abs. 1 lit. b DSGVO)
                </li>
                <li>
                  Die Weitergabe ist zur Wahrung berechtigter Interessen erforderlich 
                  (Art. 6 Abs. 1 lit. f DSGVO)
                </li>
              </ul>
            </section>

            {/* 6. Speicherdauer */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                6. Speicherdauer
              </h2>
              <p>
                Wir speichern Ihre personenbezogenen Daten nur so lange, wie es für die Erfüllung 
                der Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>
                  <strong>Nutzerkonto:</strong> Bis zur Löschung Ihres Kontos
                </li>
                <li>
                  <strong>Berechnungsdaten:</strong> Bis zur Löschung durch Sie oder Ihres Kontos
                </li>
                <li>
                  <strong>Protokolldaten:</strong> Maximal 30 Tage
                </li>
              </ul>
            </section>

            {/* 7. Ihre Rechte */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                7. Ihre Rechte
              </h2>
              <p className="mb-4">
                Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900">Recht auf Auskunft (Art. 15 DSGVO)</h3>
                  <p>Sie können Auskunft über Ihre gespeicherten Daten verlangen.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">Recht auf Berichtigung (Art. 16 DSGVO)</h3>
                  <p>Sie können die Korrektur unrichtiger Daten verlangen.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">Recht auf Löschung (Art. 17 DSGVO)</h3>
                  <p>
                    Sie können die Löschung Ihrer Daten verlangen. Dies können Sie jederzeit in 
                    Ihren Kontoeinstellungen selbst durchführen.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)
                  </h3>
                  <p>Sie können die Einschränkung der Verarbeitung Ihrer Daten verlangen.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Recht auf Datenübertragbarkeit (Art. 20 DSGVO)
                  </h3>
                  <p>Sie können Ihre Daten in einem strukturierten Format erhalten.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">Widerspruchsrecht (Art. 21 DSGVO)</h3>
                  <p>Sie können der Verarbeitung Ihrer Daten widersprechen.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">Beschwerderecht</h3>
                  <p>
                    Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
                  </p>
                </div>
              </div>

              <div className="bg-[#7298a3]/10 border border-[#7298a3]/30 rounded-lg p-4 mt-6">
                <p className="font-medium text-slate-900 mb-2">
                  Zur Ausübung Ihrer Rechte kontaktieren Sie uns bitte:
                </p>
                <p>
                  E-Mail:{' '}
                  <a 
                    href="mailto:info@immo-rechner.net" 
                    className="text-[#7298a3] hover:underline font-medium"
                  >
                    info@immo-rechner.net
                  </a>
                </p>
              </div>
            </section>

            {/* 8. Datensicherheit */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                8. Datensicherheit
              </h2>
              <p>
                Wir verwenden moderne Sicherheitsmaßnahmen zum Schutz Ihrer Daten:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>SSL/TLS-Verschlüsselung für alle Datenübertragungen</li>
                <li>Verschlüsselte Passwort-Speicherung</li>
                <li>Regelmäßige Sicherheitsupdates</li>
                <li>Zugriffsbeschränkungen auf Ihre Daten</li>
                <li>Sichere Server-Infrastruktur in der EU</li>
              </ul>
            </section>

            {/* 9. Änderungen */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                9. Änderungen dieser Datenschutzerklärung
              </h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte 
                Rechtslagen oder Änderungen des Dienstes anzupassen. Bei wesentlichen Änderungen 
                werden wir Sie per E-Mail informieren.
              </p>
            </section>

            {/* 10. Kontakt */}
            <section className="mt-8 pt-6 border-t border-slate-200">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                10. Kontakt zum Datenschutz
              </h2>
              <p className="mb-4">
                Bei Fragen zum Datenschutz können Sie uns jederzeit kontaktieren:
              </p>
              <div className="bg-slate-50 rounded-lg p-4">
                <p className="font-medium">Graciella Dharmawan</p>
                <p>
                  E-Mail:{' '}
                  <a 
                    href="mailto:info@immo-rechner.net" 
                    className="text-[#7298a3] hover:underline"
                  >
                    info@immo-rechner.net
                  </a>
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
