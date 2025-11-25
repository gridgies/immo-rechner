# 🏠 Immobilien Rechner

Ein professioneller Immobilien-Investment-Rechner mit umfassender Cashflow-Analyse, IRR-Berechnung und Szenarien-Verwaltung.

## ✨ Features

- 📊 **Cashflow-Analyse** über 10-30 Jahre
- 💰 **IRR-Berechnung** (Internal Rate of Return)
- 📈 **Mieterhöhungen** individuell planbar
- 💾 **Szenarien speichern** und vergleichen
- 🔐 **User Authentication** mit Supabase
- 📱 **Responsive Design** für Desktop & Mobile
- 🎨 **Modernes Design** mit grüner Farbpalette

## 🚀 Quick Start

### 1. Repository klonen
```bash
git clone <your-repo-url>
cd immobilien-rechner
```

### 2. Dependencies installieren
```bash
npm install
```

### 3. Supabase Setup

#### a) Supabase Projekt erstellen
1. Gehe zu [supabase.com](https://supabase.com)
2. Erstelle ein neues Projekt
3. Warte, bis das Projekt fertig ist

#### b) Database Schema erstellen
1. Gehe zu SQL Editor in deinem Supabase Dashboard
2. Öffne `supabase-schema.sql`
3. Kopiere den gesamten Inhalt
4. Führe das SQL aus

#### c) Environment Variables
Erstelle `.env.local` im Root:
```env
NEXT_PUBLIC_SUPABASE_URL=deine-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=dein-anon-key
```

Diese findest du in: Supabase Dashboard → Settings → API

### 4. Development Server starten
```bash
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000)

## 📁 Projekt-Struktur

```
immobilien-rechner/
├── app/
│   ├── page.tsx              # Hauptseite
│   └── globals.css           # Globale Styles
├── components/
│   ├── AppWithAuth.tsx       # App-Wrapper mit Auth
│   ├── Auth.tsx              # Login/Register
│   ├── InvestmentFormWithSave.tsx  # Haupt-Formular
│   ├── ResultsDisplay.tsx    # Ergebnisse
│   └── SavedScenarios.tsx    # Gespeicherte Szenarien
├── lib/
│   ├── calculator.ts         # Berechnungs-Logik
│   ├── types.ts             # TypeScript Types
│   └── supabase/
│       └── client.ts        # Supabase Client
├── supabase-schema.sql      # Database Schema
└── package.json
```

## 🎨 Design (Step 4)

Das Projekt ist vorbereitet für ein modernes Design-Update:

### Farbschema
- **Primary**: #4B644A (Dunkelgrün)
- **Secondary**: #9FB8AD (Hellgrün)
- **Accent**: #7A9B8E

### Design-Guides
1. **STEP4-DESIGN-GUIDE.md** - Vollständiger Style-Guide
2. **DESIGN-UPDATE-README.md** - Quick Start Guide

## 🧮 Berechnungen

### Was wird berechnet?
- **Monat 0**: Initiale Kosten (Eigenkapital + Nebenkosten)
- **Monatlicher Cashflow**: Einnahmen - Ausgaben
- **IRR**: Interner Zinsfuß (berücksichtigt alle Cashflows + Verkaufserlös)
- **Vermögenszuwachs**: Kumulierte Cashflows + Immobilienwert
- **Kaufkraft**: Inflation-adjustierte Werte

### Features
- ✅ Korrekte IRR-Berechnung (Newton-Raphson)
- ✅ Monat 0 mit initialen Kosten
- ✅ Flexible Mieterhöhungen
- ✅ Automatische Wertsteigerung (45%/90%/150%)
- ✅ 30% Auto-Berechnung für nicht umlegbares Hausgeld

## 📊 Verwendung

### 1. Registrieren/Anmelden
- Erstelle einen Account oder melde dich an

### 2. Parameter eingeben
- **Immobiliendetails**: Kaufpreis, Wohnfläche, Nebenkosten, Eigenkapital
- **Finanzierung**: Zinssatz, Tilgung, Miete, Hausgeld
- **Haltedauer**: 10, 20 oder 30 Jahre
- **Mieterhöhungen**: Individuell hinzufügen

### 3. Ergebnisse ansehen
- IRR (Interne Verzinsung)
- Vermögenszuwachs
- Cashflow-Tabelle
- Monatliche/Jährliche Ansicht

### 4. Szenario speichern
- Gib einen Namen ein
- Speichere zur späteren Verwendung
- Vergleiche verschiedene Szenarien

### 5. Szenario bearbeiten
- Lade gespeichertes Szenario
- Klicke "Bearbeiten" (nicht "Laden")
- Ändere Parameter
- Aktualisiere das Szenario

## 🔧 Development

### Technologie-Stack
- **Framework**: Next.js 14 (App Router)
- **Sprache**: TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Supabase (Auth + Database)
- **Icons**: Lucide React

### Scripts
```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Testing
```bash
node verify-calculations.js    # Verify calculations match Excel
node test-irr.js              # Test IRR calculation
```

## 🌐 Deployment

### Vercel (Empfohlen)
1. Push zu GitHub
2. Gehe zu [vercel.com](https://vercel.com)
3. Import dein Repository
4. Füge Environment Variables hinzu:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Deploy!

### Alternative: Netlify, Railway, etc.
Funktioniert genauso - füge einfach die Environment Variables hinzu.

## 📝 Environment Variables

Benötigte Variables in `.env.local`:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=dein-anon-key
```

## 🤝 Contributing

Contributions sind willkommen! 

1. Fork das Projekt
2. Erstelle einen Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit deine Änderungen (`git commit -m 'Add some AmazingFeature'`)
4. Push zum Branch (`git push origin feature/AmazingFeature`)
5. Öffne einen Pull Request

## 📄 License

MIT License - siehe LICENSE file für Details

## 🆘 Hilfe & Support

### Häufige Probleme

**Problem**: "Invalid API key"
- **Lösung**: Überprüfe `.env.local` und starte Server neu

**Problem**: Database-Fehler
- **Lösung**: Stelle sicher, dass `supabase-schema.sql` ausgeführt wurde

**Problem**: Build-Fehler
- **Lösung**: Lösche `.next` und `node_modules`, dann `npm install && npm run dev`

**Problem**: IRR-Berechnung falsch
- **Lösung**: Teste mit `node test-irr.js` - sollte ~6.98% ergeben

## 🎯 Roadmap

- [ ] **Step 4**: Design-Update (vorbereitet in STEP4-DESIGN-GUIDE.md)
- [ ] Export als PDF
- [ ] Vergleichs-Ansicht für Szenarien
- [ ] Erweiterte Charts (Recharts)
- [ ] Englische Version
- [ ] Mobile App
- [ ] API für externe Tools

## 👥 Credits

- **Design-Inspiration**: Lovable.dev
- **Icons**: Lucide React
- **Backend**: Supabase
- **Framework**: Next.js by Vercel

## 📧 Kontakt

Bei Fragen oder Feedback: [Dein Kontakt]

---

**Made with ❤️ for real estate investors**
