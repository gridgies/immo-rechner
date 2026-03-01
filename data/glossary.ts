export interface GlossaryTerm {
  slug: string;
  term: string;
  shortDefinition: string; // 1-2 sentences for meta description + featured snippet
  definition: string; // Full definition paragraph
  formula?: {
    equation: string;
    variables: Array<{ symbol: string; description: string }>;
  };
  example?: {
    scenario: string;
    result: string;
  };
  content: string; // Additional explanatory content (HTML-free, plain text)
  relevanceForInvestors: string; // Why this matters for Kapitalanleger
  relatedTerms: Array<{ slug: string; label: string }>;
  relatedCalculators: Array<{ href: string; label: string }>;
  relatedGuides: Array<{ href: string; label: string }>;
}

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    slug: "bruttomietrendite",
    term: "Bruttomietrendite",
    shortDefinition:
      "Die Bruttomietrendite gibt an, wie viel Prozent der Jahresmieteinnahmen im Verhältnis zum Kaufpreis einer Immobilie stehen — ohne Abzug von Kosten.",
    definition:
      "Die Bruttomietrendite ist eine einfache Kennzahl für Immobilieninvestoren, um schnell die Rentabilität einer Immobilie einzuschätzen. Sie berechnet sich aus den jährlichen Kaltmieteinnahmen geteilt durch den Kaufpreis, multipliziert mit 100. Da Betriebskosten, Hausgeld und Finanzierungskosten nicht berücksichtigt werden, ist sie nur ein erster Anhaltspunkt.",
    formula: {
      equation: "Bruttomietrendite (%) = (Jahreskaltmiete / Kaufpreis) × 100",
      variables: [
        { symbol: "Jahreskaltmiete", description: "Monatliche Kaltmiete × 12" },
        { symbol: "Kaufpreis", description: "Gesamtkaufpreis der Immobilie (ohne Nebenkosten)" },
      ],
    },
    example: {
      scenario:
        "Wohnung für 200.000 €, monatliche Kaltmiete 800 €. Jahreskaltmiete: 9.600 €.",
      result: "Bruttomietrendite = (9.600 / 200.000) × 100 = 4,8 %",
    },
    content:
      "Die Bruttomietrendite eignet sich für einen schnellen Vergleich mehrerer Objekte. Experten empfehlen als Faustregel: Unter 4 % ist eine Kapitalanlage in den meisten deutschen Märkten schwierig zu rechtfertigen; ab 5 % lohnt sich eine genauere Prüfung; ab 6–7 % in guten Lagen ist die Immobilie potenziell sehr rentabel. In A-Lagen wie München oder Frankfurt liegen Bruttomietrenditen typischerweise nur bei 2–3 %, weshalb viele Investoren auf B- und C-Lagen ausweichen.",
    relevanceForInvestors:
      "Mit der Bruttomietrendite kannst du innerhalb von Sekunden einschätzen, ob ein Angebot grundsätzlich interessant ist. Sie ersetzt keine vollständige Cashflow-Analyse, ist aber der richtige erste Schritt.",
    relatedTerms: [
      { slug: "nettomietrendite", label: "Nettomietrendite" },
      { slug: "kaufpreisfaktor", label: "Kaufpreisfaktor" },
      { slug: "cashflow", label: "Cashflow" },
    ],
    relatedCalculators: [
      { href: "/rechner/bruttomietrendite-rechner", label: "Bruttomietrendite Rechner" },
      { href: "/rendite-rechner", label: "Rendite Rechner" },
    ],
    relatedGuides: [
      { href: "/ratgeber/mietrendite-berechnen", label: "Mietrendite berechnen" },
    ],
  },
  {
    slug: "nettomietrendite",
    term: "Nettomietrendite",
    shortDefinition:
      "Die Nettomietrendite berücksichtigt alle laufenden Kosten einer Immobilie und liefert damit ein realistischeres Bild der tatsächlichen Rendite als die Bruttomietrendite.",
    definition:
      "Die Nettomietrendite zieht von den Jahresmieteinnahmen alle nicht umlagefähigen Bewirtschaftungskosten ab — Hausgeld, Verwaltungskosten, Instandhaltungsrücklage und Mietausfall-Risiko. Das Ergebnis wird durch den Gesamtkaufpreis inklusive Kaufnebenkosten geteilt. Sie ist aussagekräftiger als die Bruttomietrendite, weil sie die tatsächliche Belastung des Investors widerspiegelt.",
    formula: {
      equation:
        "Nettomietrendite (%) = ((Jahreskaltmiete − Bewirtschaftungskosten) / (Kaufpreis + Nebenkosten)) × 100",
      variables: [
        { symbol: "Bewirtschaftungskosten", description: "Hausgeld, Verwaltung, Instandhaltung, Mietausfall ca. 20–30 % der Bruttomiete" },
        { symbol: "Nebenkosten", description: "Grunderwerbsteuer, Notar, Makler — typisch 10–15 % des Kaufpreises" },
      ],
    },
    example: {
      scenario:
        "Kaufpreis 200.000 €, Nebenkosten 24.000 € (12 %), Jahreskaltmiete 9.600 €, Bewirtschaftungskosten 2.000 €/Jahr.",
      result:
        "Nettomietrendite = ((9.600 − 2.000) / (200.000 + 24.000)) × 100 = 7.600 / 224.000 × 100 ≈ 3,4 %",
    },
    content:
      "Die Nettomietrendite liegt typischerweise 1–2 Prozentpunkte unter der Bruttomietrendite. Eine Nettomietrendite von 3,5 % kann bei günstiger Finanzierung und Wertsteigerungspotenzial noch attraktiv sein. Als Faustregel: Wenn die Nettomietrendite die Finanzierungskosten (Zinssatz) übersteigt, ist der Cashflow positiv.",
    relevanceForInvestors:
      "Verwende die Nettomietrendite für den detaillierten Objektvergleich. Sie zeigt dir, ob das Investment nach laufenden Kosten noch rentabel ist — bevor du dich mit Finanzierung und Steuern beschäftigst.",
    relatedTerms: [
      { slug: "bruttomietrendite", label: "Bruttomietrendite" },
      { slug: "cashflow", label: "Cashflow" },
      { slug: "hausgeld", label: "Hausgeld" },
      { slug: "instandhaltungsruecklage", label: "Instandhaltungsrücklage" },
    ],
    relatedCalculators: [
      { href: "/rechner/nettomietrendite-rechner", label: "Nettomietrendite Rechner" },
      { href: "/rendite-rechner", label: "Rendite Rechner" },
    ],
    relatedGuides: [
      { href: "/ratgeber/mietrendite-berechnen", label: "Mietrendite berechnen" },
    ],
  },
  {
    slug: "cashflow",
    term: "Cashflow",
    shortDefinition:
      "Der Cashflow bei Immobilien ist der monatliche Überschuss oder das Defizit nach Abzug aller Ausgaben (Finanzierung, Kosten) von den Mieteinnahmen.",
    definition:
      "Der Cashflow ist die zentrale Steuerungsgröße für Immobilieninvestoren: Er zeigt, ob eine Immobilie monatlich Geld einbringt (positiver Cashflow) oder Kapital verbraucht (negativer Cashflow). Er berechnet sich aus Kaltmiete minus Hausgeld minus Finanzierungsrate minus nicht umlagefähige Kosten. Ein positiver Cashflow bedeutet, dass die Immobilie sich selbst trägt.",
    formula: {
      equation:
        "Cashflow = Kaltmiete − Hausgeld − Kreditrate − sonstige Kosten",
      variables: [
        { symbol: "Kaltmiete", description: "Monatliche Kaltmiete vom Mieter" },
        { symbol: "Hausgeld", description: "Monatlicher WEG-Beitrag (bei Eigentumswohnung)" },
        { symbol: "Kreditrate", description: "Monatliche Annuität (Zins + Tilgung)" },
        { symbol: "sonstige Kosten", description: "Verwaltung, Steuerberater, Mietausfall-Reserve" },
      ],
    },
    example: {
      scenario:
        "Kaltmiete 900 €, Hausgeld 300 € (davon 200 € umlagefähig), Kreditrate 700 €, Verwaltung 30 €.",
      result:
        "Cashflow = 900 − 100 (nicht umlagef. Hausgeld) − 700 − 30 = +70 € / Monat (positiv)",
    },
    content:
      "In der aktuellen Zinsumgebung (2024–2026) sind positive Cashflows bei fremdfinanzierten Immobilien in deutschen A-Lagen kaum noch realisierbar. Viele Investoren akzeptieren leicht negative Cashflows, wenn sie auf Wertsteigerung und Tilgungseffekt setzen. Bei B- und C-Lagen sind positive Cashflows häufiger. Wichtig: Tilgungsanteile sind kein Verlust — sie bauen Eigenkapital auf.",
    relevanceForInvestors:
      "Der Cashflow entscheidet über deine Liquidität: Ein dauerhaft stark negativer Cashflow belastet dein monatliches Budget und kann zum Zwangsverkauf führen. Plane immer eine Liquiditätsreserve von 3–6 Monatskaltmieten ein.",
    relatedTerms: [
      { slug: "nettomietrendite", label: "Nettomietrendite" },
      { slug: "annuitaet", label: "Annuität" },
      { slug: "hausgeld", label: "Hausgeld" },
      { slug: "mietausfall", label: "Mietausfall" },
    ],
    relatedCalculators: [
      { href: "/cashflow-rechner", label: "Cashflow Rechner" },
      { href: "/rechner/cashflow-rechner-immobilien", label: "Cashflow Rechner Immobilien" },
    ],
    relatedGuides: [
      { href: "/ratgeber/cashflow-immobilien", label: "Cashflow bei Immobilien" },
    ],
  },
  {
    slug: "irr",
    term: "IRR (Interner Zinsfuß)",
    shortDefinition:
      "Der IRR (Internal Rate of Return / Interner Zinsfuß) ist die effektive Jahresrendite eines Immobilieninvestments über den gesamten Haltezeitraum — inklusive Wertsteigerung und Steuereffekten.",
    definition:
      "Der IRR ist der Zinssatz, bei dem der Barwert aller zukünftigen Cashflows (Mieteinnahmen, Steuerersparnisse, Verkaufserlös) gleich dem heutigen Investitionseinsatz (Eigenkapital) ist. Er ist die umfassendste Renditekennzahl für Immobilien, weil er den gesamten Lebenszyklus der Investition abbildet — von Kauf über laufende Erträge bis zum Verkauf.",
    formula: {
      equation: "0 = −EK + Σ (CFₜ / (1 + IRR)ᵗ) + (Verkaufserlös / (1 + IRR)ⁿ)",
      variables: [
        { symbol: "EK", description: "Eigenkapitaleinsatz beim Kauf" },
        { symbol: "CFₜ", description: "Cashflow in Periode t (nach Steuern)" },
        { symbol: "n", description: "Haltedauer in Jahren" },
        { symbol: "IRR", description: "Gesuchter Zinssatz (Interner Zinsfuß)" },
      ],
    },
    example: {
      scenario:
        "EK-Einsatz 50.000 €, jährlicher Cashflow −2.000 € (neg.), Verkauf nach 10 Jahren für 280.000 € (Kaufpreis 200.000 €, Restschuld 170.000 €).",
      result: "IRR ≈ 8–10 % p.a. — trotz negativem Cashflow attraktiv durch Wertsteigerung",
    },
    content:
      "Der IRR ermöglicht den Vergleich mit anderen Investments (ETFs, Anleihen) auf gleicher Basis. Ein IRR von 5 % entspricht einer Aktienrendite von 5 % p.a. nach Steuern. Für deutsche Immobilien-Kapitalanlagen gelten 6–10 % IRR als realistisch und attraktiv. Wichtig: Der IRR hängt stark von der angenommenen Wertsteigerung und dem Verkaufspreis ab.",
    relevanceForInvestors:
      "Verwende den IRR, um Immobilien mit anderen Anlageformen zu vergleichen. Er ist komplexer zu berechnen als die Mietrendite, aber deutlich aussagekräftiger — besonders bei geplanter Wertsteigerung.",
    relatedTerms: [
      { slug: "eigenkapitalrendite", label: "Eigenkapitalrendite" },
      { slug: "cashflow", label: "Cashflow" },
      { slug: "spekulationsfrist", label: "Spekulationsfrist" },
      { slug: "leverage-effekt", label: "Leverage-Effekt" },
    ],
    relatedCalculators: [
      { href: "/irr-rechner", label: "IRR Rechner" },
      { href: "/rechner/irr-rechner-immobilien", label: "IRR Rechner Immobilien" },
    ],
    relatedGuides: [
      { href: "/ratgeber/irr-erklaert", label: "IRR erklärt" },
    ],
  },
  {
    slug: "kaufpreisfaktor",
    term: "Kaufpreisfaktor",
    shortDefinition:
      "Der Kaufpreisfaktor (auch Mietpreismultiplikator) gibt an, wie viele Jahreskaltmieten eine Immobilie kostet — je niedriger, desto günstiger die Bewertung.",
    definition:
      "Der Kaufpreisfaktor ist der Kehrwert der Bruttomietrendite und zeigt in einer intuitiven Zahl, wie 'teuer' eine Immobilie im Verhältnis zu ihrer Miete ist. Ein Faktor von 25 bedeutet: Der Kaufpreis entspricht 25 Jahreskaltmieten. Er wird auch als Mietpreismultiplikator bezeichnet und ist in Deutschland die gebräuchlichste Bewertungskennzahl für Wohnimmobilien.",
    formula: {
      equation: "Kaufpreisfaktor = Kaufpreis / Jahreskaltmiete",
      variables: [
        { symbol: "Kaufpreis", description: "Kaufpreis der Immobilie (ohne Nebenkosten)" },
        { symbol: "Jahreskaltmiete", description: "Monatliche Kaltmiete × 12" },
      ],
    },
    example: {
      scenario: "Kaufpreis 250.000 €, monatliche Kaltmiete 900 €, Jahreskaltmiete 10.800 €.",
      result: "Kaufpreisfaktor = 250.000 / 10.800 ≈ 23,1",
    },
    content:
      "Historisch galten Kaufpreisfaktoren von 15–20 als gut; in den Niedrigzinsjahren 2015–2022 stiegen Faktoren in A-Lagen auf 35–50. Seit dem Zinsanstieg 2022 sind Faktoren in B/C-Lagen wieder auf 18–25 gefallen. Als Faustregel: Faktor < 20 = potenziell rentabel; 20–25 = marktüblich in guten B-Lagen; > 30 = Rendite schwierig ohne Wertsteigerung.",
    relevanceForInvestors:
      "Der Kaufpreisfaktor ist das schnellste Tool, um Objekte zu screenen. Wenn du 50 Angebote vergleichst, sortierst du zuerst nach Kaufpreisfaktor — erst dann lohnt sich die detaillierte Analyse.",
    relatedTerms: [
      { slug: "bruttomietrendite", label: "Bruttomietrendite" },
      { slug: "mietpreismultiplikator", label: "Mietpreismultiplikator" },
    ],
    relatedCalculators: [
      { href: "/rechner/kaufpreisfaktor-rechner", label: "Kaufpreisfaktor Rechner" },
      { href: "/rendite-rechner", label: "Rendite Rechner" },
    ],
    relatedGuides: [
      { href: "/ratgeber/mietrendite-berechnen", label: "Mietrendite berechnen" },
    ],
  },
  {
    slug: "mietpreismultiplikator",
    term: "Mietpreismultiplikator",
    shortDefinition:
      "Der Mietpreismultiplikator ist identisch mit dem Kaufpreisfaktor: Er zeigt, wie viele Jahreskaltmieten der Kaufpreis einer Immobilie entspricht.",
    definition:
      "Mietpreismultiplikator und Kaufpreisfaktor sind Synonyme. Der Begriff Mietpreismultiplikator wird häufiger in der Investoren-Community verwendet, während Kaufpreisfaktor eher im professionellen Bewertungskontext auftaucht. Beide Kennzahlen berechnen sich identisch: Kaufpreis geteilt durch Jahreskaltmiete.",
    formula: {
      equation: "Mietpreismultiplikator = Kaufpreis / Jahreskaltmiete",
      variables: [
        { symbol: "Kaufpreis", description: "Gesamtkaufpreis (ohne Nebenkosten)" },
        { symbol: "Jahreskaltmiete", description: "Monatliche Kaltmiete × 12" },
      ],
    },
    example: {
      scenario: "Kaufpreis 180.000 €, Kaltmiete 750 €/Monat = 9.000 €/Jahr.",
      result: "Mietpreismultiplikator = 180.000 / 9.000 = 20",
    },
    content:
      "Regionale Unterschiede sind enorm: München hat Multiplikatoren von 35–45, Leipzig 18–25. Ein Multiplikator von 20 entspricht einer Bruttomietrendite von 5 % — eine einfache Umrechnung: Rendite (%) = 100 / Multiplikator.",
    relevanceForInvestors:
      "Nutze den Mietpreismultiplikator für schnelle Angebots-Screenings und um dich mit anderen Investoren zu unterhalten — er ist die Standardsprache in der Immobilien-Community.",
    relatedTerms: [
      { slug: "kaufpreisfaktor", label: "Kaufpreisfaktor" },
      { slug: "bruttomietrendite", label: "Bruttomietrendite" },
    ],
    relatedCalculators: [
      { href: "/rechner/mietpreismultiplikator-rechner", label: "Mietpreismultiplikator Rechner" },
    ],
    relatedGuides: [
      { href: "/ratgeber/mietrendite-berechnen", label: "Mietrendite berechnen" },
    ],
  },
  {
    slug: "afa-abschreibung",
    term: "AfA (Abschreibung für Abnutzung)",
    shortDefinition:
      "Die AfA erlaubt Immobilieninvestoren, den Gebäudeanteil ihrer Immobilie jährlich steuerlich abzuschreiben — und damit die Steuerlast auf Mieteinnahmen erheblich zu senken.",
    definition:
      "Die Absetzung für Abnutzung (AfA) ist ein steuerliches Instrument, das die wirtschaftliche Wertminderung eines Gebäudes berücksichtigt. Für Immobilien, die nach 1924 gebaut wurden, beträgt die lineare AfA 2 % pro Jahr über 50 Jahre (bei Neubauten ab 2023: 3 % über 33 Jahre). Der Grundstücksanteil ist nicht abschreibungsfähig — nur der Gebäudeanteil.",
    formula: {
      equation: "AfA pro Jahr = Gebäudeanteil × AfA-Satz (2 % oder 3 %)",
      variables: [
        { symbol: "Gebäudeanteil", description: "Kaufpreis minus Grundstückswert (oft 70–80 % des Kaufpreises in B/C-Lagen)" },
        { symbol: "AfA-Satz", description: "2 % für Altbauten; 3 % für Neubauten ab 2023" },
      ],
    },
    example: {
      scenario:
        "Kaufpreis 200.000 €, Grundstücksanteil 40.000 € (20 %), Gebäudeanteil 160.000 €, AfA-Satz 2 %.",
      result: "AfA = 160.000 × 0,02 = 3.200 € / Jahr steuerlich absetzbar",
    },
    content:
      "Die AfA ist der größte Steuervorteil für Vermieter. Bei einem Grenzsteuersatz von 42 % spart ein Investor mit 3.200 € AfA jährlich 1.344 € Steuern — ohne realen Geldabfluss. Über 10 Jahre sind das 13.440 € Steuerersparnis. Wichtig: Bei Verkauf nach Ablauf der Spekulationsfrist (10 Jahre) wird die AfA nicht rückwirkend besteuert.",
    relevanceForInvestors:
      "Kalkuliere die AfA immer in deinen Cashflow ein — sie verbessert die Steuerlast auf Mieteinnahmen und kann aus einem knapp negativen Cashflow (vor Steuern) einen positiven machen (nach Steuern).",
    relatedTerms: [
      { slug: "werbungskosten", label: "Werbungskosten" },
      { slug: "spekulationsfrist", label: "Spekulationsfrist" },
      { slug: "cashflow", label: "Cashflow" },
    ],
    relatedCalculators: [
      { href: "/rechner/afa-rechner-immobilien", label: "AfA Rechner Immobilien" },
    ],
    relatedGuides: [
      { href: "/ratgeber/steuervorteile-vermietung", label: "Steuervorteile bei Vermietung" },
    ],
  },
  {
    slug: "grunderwerbsteuer",
    term: "Grunderwerbsteuer",
    shortDefinition:
      "Die Grunderwerbsteuer ist eine einmalige Steuer beim Immobilienkauf, die je nach Bundesland zwischen 3,5 % und 6,5 % des Kaufpreises beträgt.",
    definition:
      "Die Grunderwerbsteuer (GrESt) fällt beim Kauf eines Grundstücks oder einer Immobilie in Deutschland an. Sie wird auf den Kaufpreis erhoben und muss vom Käufer bezahlt werden. Die Sätze variieren je nach Bundesland erheblich — von 3,5 % in Bayern bis 6,5 % in Nordrhein-Westfalen, Saarland, Schleswig-Holstein, Brandenburg und Thüringen.",
    formula: {
      equation: "Grunderwerbsteuer = Kaufpreis × Steuersatz des Bundeslandes",
      variables: [
        { symbol: "Kaufpreis", description: "Vertraglich vereinbarter Kaufpreis" },
        { symbol: "Steuersatz", description: "3,5 % bis 6,5 % je nach Bundesland (Stand 2026)" },
      ],
    },
    example: {
      scenario: "Kauf einer Wohnung für 300.000 € in NRW (Steuersatz 6,5 %).",
      result: "Grunderwerbsteuer = 300.000 × 0,065 = 19.500 €",
    },
    content:
      "Aktuelle Steuersätze 2026: Bayern & Sachsen 3,5 %; Hamburg 5,5 %; Berlin, Bremen, Mecklenburg-Vorpommern, Sachsen-Anhalt 6,0 %; NRW, Saarland, Schleswig-Holstein, Brandenburg, Thüringen 6,5 %. Baden-Württemberg, Niedersachsen, Rheinland-Pfalz, Hessen, Bayern 5,0–6,5 % (variiert). Die Grunderwerbsteuer ist als Kaufnebenkosten zu behandeln und erhöht die Anschaffungskosten. Sie ist nicht steuerlich absetzbar als Werbungskosten, kann aber als Teil der Anschaffungskosten in die AfA-Bemessungsgrundlage einfließen.",
    relevanceForInvestors:
      "Die Grunderwerbsteuer ist eine der größten Einzelpositionen der Kaufnebenkosten. Bei 300.000 € Kaufpreis kann der Unterschied zwischen Bayern (3,5 %) und NRW (6,5 %) 9.000 € betragen — das entspricht fast einem Jahr Kaltmiete.",
    relatedTerms: [
      { slug: "kaufnebenkosten", label: "Kaufnebenkosten" },
      { slug: "nettomietrendite", label: "Nettomietrendite" },
    ],
    relatedCalculators: [
      { href: "/rechner/grunderwerbsteuer-rechner", label: "Grunderwerbsteuer Rechner" },
      { href: "/kaufnebenkosten-rechner", label: "Kaufnebenkosten Rechner" },
    ],
    relatedGuides: [
      { href: "/ratgeber/kaufnebenkosten-uebersicht", label: "Kaufnebenkosten Übersicht" },
    ],
  },
  {
    slug: "hausgeld",
    term: "Hausgeld",
    shortDefinition:
      "Das Hausgeld ist der monatliche Beitrag, den Wohnungseigentümer an die Wohnungseigentümergemeinschaft (WEG) zahlen — für Betriebskosten und Instandhaltungsrücklage.",
    definition:
      "Das Hausgeld deckt alle gemeinschaftlichen Kosten einer Eigentumswohnung ab: Versicherungen, Hausmeister, Treppenhausreinigung, Wasser/Abwasser der Gemeinschaftsflächen, Heizung/Aufzug sowie die Zuführung zur Instandhaltungsrücklage. Ein Teil des Hausgelds ist auf Mieter umlagefähig (Betriebskosten), ein Teil nicht (Verwaltungskosten, Instandhaltungsrücklage).",
    example: {
      scenario:
        "Monatliches Hausgeld 400 €: davon 250 € umlagefähig (Betriebskosten), 150 € nicht umlagefähig (Verwaltung 60 € + Rücklage 90 €).",
      result:
        "Effektive Kostenbelastung für Vermieter: 150 €/Monat — reduziert den Cashflow entsprechend.",
    },
    content:
      "Typisches Hausgeld liegt bei 2,50–4,00 €/m² pro Monat. Bei einer 60-m²-Wohnung wären das 150–240 €. Ältere Gebäude mit Aufzug, Tiefgarage oder großem Garten haben oft höhere Hausgelder. Wichtig beim Kauf: Prüfe das Hausgeld und die Höhe der Instandhaltungsrücklage. Ein zu niedriges Hausgeld kann auf unzureichende Rücklagen hinweisen und zukünftige Sonderumlagen ankündigen.",
    relevanceForInvestors:
      "Das Hausgeld ist eine der häufigsten Überraschungen für neue Immobilien-Investoren. Plane den nicht umlagefähigen Anteil (ca. 30–40 % des Hausgelds) als fixe monatliche Kostenposition ein.",
    relatedTerms: [
      { slug: "instandhaltungsruecklage", label: "Instandhaltungsrücklage" },
      { slug: "cashflow", label: "Cashflow" },
      { slug: "nettomietrendite", label: "Nettomietrendite" },
    ],
    relatedCalculators: [
      { href: "/cashflow-rechner", label: "Cashflow Rechner" },
    ],
    relatedGuides: [
      { href: "/ratgeber/cashflow-immobilien", label: "Cashflow bei Immobilien" },
    ],
  },
  {
    slug: "leverage-effekt",
    term: "Leverage-Effekt",
    shortDefinition:
      "Der Leverage-Effekt (Hebeleffekt) beschreibt, wie Fremdkapital die Eigenkapitalrendite einer Immobilieninvestition steigern kann — vorausgesetzt, die Immobilienrendite übersteigt den Zinssatz.",
    definition:
      "Der Leverage-Effekt tritt auf, wenn die Gesamtkapitalrendite einer Immobilie höher ist als der Fremdkapitalzinssatz. In diesem Fall steigert jeder Prozentsatz Fremdfinanzierung die Eigenkapitalrendite. Übersteigt der Zinssatz die Immobilienrendite, wirkt der Hebel negativ — das Fremdkapital verschlechtert die Eigenkapitalrendite.",
    formula: {
      equation: "EK-Rendite = GK-Rendite + (GK-Rendite − Zinssatz) × (FK / EK)",
      variables: [
        { symbol: "EK-Rendite", description: "Eigenkapitalrendite" },
        { symbol: "GK-Rendite", description: "Gesamtkapitalrendite (Nettomietrendite)" },
        { symbol: "FK / EK", description: "Verschuldungsgrad (Fremdkapital / Eigenkapital)" },
      ],
    },
    example: {
      scenario:
        "Nettomietrendite 5 %, Zinssatz 3,5 %, Kaufpreis 200.000 €, EK 50.000 € (25 %), FK 150.000 € (75 %).",
      result:
        "EK-Rendite = 5 % + (5 % − 3,5 %) × (150.000 / 50.000) = 5 % + 4,5 % = 9,5 %",
    },
    content:
      "In der Niedrigzinsphase (2015–2021) war der Leverage-Effekt extrem positiv: Zinsen von 1–2 % bei Renditen von 4–5 % ergaben EK-Renditen von 10–15 %. Seit 2022 mit Zinsen von 4–5 % ist der Effekt deutlich schwächer oder bei niedrig rentierlichen Objekten sogar negativ. Das unterstreicht, warum die aktuelle Zinssituation die Immobilienbewertung so stark verändert hat.",
    relevanceForInvestors:
      "Der Leverage-Effekt ist der Hauptgrund, warum Immobilien-Investoren Fremdkapital nutzen. Prüfe immer: Übersteigt die Nettomietrendite deinen Zinssatz? Nur dann arbeitet der Hebel für dich.",
    relatedTerms: [
      { slug: "eigenkapitalrendite", label: "Eigenkapitalrendite" },
      { slug: "irr", label: "IRR" },
      { slug: "cashflow", label: "Cashflow" },
    ],
    relatedCalculators: [
      { href: "/rechner/leverage-effekt-rechner", label: "Leverage-Effekt Rechner" },
      { href: "/rechner/eigenkapitalrendite-rechner", label: "Eigenkapitalrendite Rechner" },
    ],
    relatedGuides: [
      { href: "/ratgeber/leverage-effekt-immobilien", label: "Leverage-Effekt erklärt" },
    ],
  },
  {
    slug: "eigenkapitalrendite",
    term: "Eigenkapitalrendite",
    shortDefinition:
      "Die Eigenkapitalrendite zeigt, wie viel Prozent Rendite ein Immobilieninvestor auf sein eingesetztes Eigenkapital erzielt — inklusive Fremdfinanzierungseffekt.",
    definition:
      "Die Eigenkapitalrendite misst die Verzinsung des tatsächlich eingesetzten Eigenkapitals (Anzahlung + Kaufnebenkosten). Sie unterscheidet sich von der Objektrendite (Gesamtkapitalrendite), weil sie den Hebeleffekt durch Fremdfinanzierung einbezieht. Eine hohe Eigenkapitalrendite kann durch günstiges Fremdkapital oder durch hohe Mietrendite des Objekts entstehen.",
    formula: {
      equation: "EK-Rendite (%) = Jahresüberschuss nach Kosten / eingesetztes EK × 100",
      variables: [
        { symbol: "Jahresüberschuss", description: "Jahreskaltmiete minus alle Kosten und Finanzierung" },
        { symbol: "Eingesetztes EK", description: "Eigenkapital + Kaufnebenkosten" },
      ],
    },
    example: {
      scenario:
        "EK-Einsatz 60.000 €, Jahreskaltmiete 9.600 €, Jahreskosten (Hausgeld + Zinsen) 7.600 €.",
      result: "EK-Rendite = (9.600 − 7.600) / 60.000 × 100 = 3,3 %",
    },
    content:
      "Die Eigenkapitalrendite ist vor dem IRR die wichtigste Renditekennzahl für fremdfinanzierte Immobilien. Sie berücksichtigt jedoch keine Wertsteigerung und Tilgungseffekte. Für eine vollständige Betrachtung ist der IRR besser geeignet. Als Mindestanforderung sollte die EK-Rendite die Inflationsrate und Opportunitätskosten des EK übersteigen.",
    relevanceForInvestors:
      "Vergleiche deine EK-Rendite mit alternativen Investments: ETFs bringen historisch 7–9 % p.a. Wenn deine Immobilien-EK-Rendite darunter liegt, musst du Wertsteigerungs-Potenzial oder steuerliche Vorteile als Kompensation einkalkulieren.",
    relatedTerms: [
      { slug: "leverage-effekt", label: "Leverage-Effekt" },
      { slug: "irr", label: "IRR" },
      { slug: "cashflow", label: "Cashflow" },
    ],
    relatedCalculators: [
      { href: "/rechner/eigenkapitalrendite-rechner", label: "Eigenkapitalrendite Rechner" },
      { href: "/irr-rechner", label: "IRR Rechner" },
    ],
    relatedGuides: [
      { href: "/ratgeber/eigenkapitalrendite-immobilien", label: "Eigenkapitalrendite bei Immobilien" },
    ],
  },
  {
    slug: "annuitaet",
    term: "Annuität",
    shortDefinition:
      "Eine Annuität ist die gleichbleibende monatliche Rate aus Zins und Tilgung, die ein Immobilienkäufer an die Bank zahlt — die monatliche Belastung bleibt konstant, der Zinsanteil sinkt.",
    definition:
      "Bei einem Annuitätendarlehen — der Standardform der Immobilienfinanzierung in Deutschland — bleibt die monatliche Rate (Annuität) über die gesamte Zinsbindungsdauer konstant. Zu Beginn ist der Zinsanteil hoch und der Tilgungsanteil niedrig. Im Laufe der Zeit sinkt die Restschuld, wodurch die Zinsen abnehmen und der Tilgungsanteil steigt. Das Darlehen tilgt sich damit am Ende der Laufzeit automatisch.",
    formula: {
      equation: "Annuität = Darlehensbetrag × (Zinssatz × (1 + Zinssatz)ⁿ) / ((1 + Zinssatz)ⁿ − 1)",
      variables: [
        { symbol: "Darlehensbetrag", description: "Kreditbetrag" },
        { symbol: "Zinssatz", description: "Monatlicher Zinssatz (Jahreszinssatz / 12)" },
        { symbol: "n", description: "Anzahl der Monatsraten" },
      ],
    },
    example: {
      scenario: "Darlehen 200.000 €, Zinssatz 3,5 % p.a., Tilgung 2 % Anfangstilgung.",
      result: "Monatliche Annuität ≈ 916 € (Zinsen 583 € + Tilgung 333 €)",
    },
    content:
      "Anfangstilgungen von 1–2 % sind in Deutschland üblich. Bei 1 % Tilgung dauert es 50+ Jahre bis zur vollständigen Rückzahlung — bei 2 % ca. 30 Jahre. Für Kapitalanleger gilt: Hohe Tilgung erhöht den Cashflow-Druck, baut aber schneller Eigenkapital auf. Niedrige Tilgung verbessert den Cashflow, aber die Restschuld bleibt lange hoch.",
    relevanceForInvestors:
      "Deine Annuität ist dein größter Fixkostenblock. Wähle eine Tilgungsrate, die deinen Cashflow schont, aber dennoch innerhalb der Zinsbindung signifikant Eigenkapital aufbaut. 2 % Anfangstilgung ist für die meisten Kapitalanleger ein guter Ausgangspunkt.",
    relatedTerms: [
      { slug: "tilgung", label: "Tilgung" },
      { slug: "zinsbindung", label: "Zinsbindung" },
      { slug: "cashflow", label: "Cashflow" },
      { slug: "restschuld", label: "Restschuld" },
    ],
    relatedCalculators: [
      { href: "/rechner/tilgungsrechner-kapitalanlage", label: "Tilgungsrechner" },
      { href: "/cashflow-rechner", label: "Cashflow Rechner" },
    ],
    relatedGuides: [
      { href: "/ratgeber/finanzierung", label: "Immobilien Finanzierung" },
    ],
  },
  {
    slug: "tilgung",
    term: "Tilgung",
    shortDefinition:
      "Die Tilgung ist der Rückzahlungsanteil der monatlichen Kreditrate, mit dem die Restschuld schrittweise abgebaut wird — im Gegensatz zum Zinsanteil, der an die Bank geht.",
    definition:
      "Bei einem Annuitätendarlehen setzt sich jede Monatsrate aus Zins und Tilgung zusammen. Die Tilgung reduziert die Restschuld des Darlehens. Da die Zinsen auf die sinkende Restschuld berechnet werden, steigt der Tilgungsanteil mit der Zeit automatisch an — die Annuität bleibt aber konstant. Für Immobilieninvestoren ist Tilgung zwangsweises Sparen: Sie baut Eigenkapital auf.",
    example: {
      scenario: "Darlehen 150.000 €, Zinssatz 4 % p.a., Anfangstilgung 2 %. Monatliche Rate: 750 €.",
      result:
        "Jahr 1: Zinsen 500 €/Monat + Tilgung 250 €/Monat. Jahr 10: Zinsen ca. 430 €/Monat + Tilgung ca. 320 €/Monat.",
    },
    content:
      "Für Kapitalanleger (im Unterschied zu Selbstnutzern) ist Tilgung steuerlich nicht absetzbar. Nur der Zinsanteil der Rate kann als Werbungskosten geltend gemacht werden. Das macht niedrige Tilgung steuerlich attraktiv, birgt aber das Risiko einer hohen Restschuld bei der Anschlussfinanzierung.",
    relevanceForInvestors:
      "Überlege sorgfältig: Hohe Tilgung = mehr EK-Aufbau, aber schlechterer Cashflow und weniger steuerlich absetzbare Zinsen. Niedrige Tilgung = besserer Cashflow, mehr Steuerersparnis, aber höheres Refinanzierungsrisiko. Die optimale Tilgung hängt von deiner persönlichen Steuersituation ab.",
    relatedTerms: [
      { slug: "annuitaet", label: "Annuität" },
      { slug: "restschuld", label: "Restschuld" },
      { slug: "zinsbindung", label: "Zinsbindung" },
      { slug: "sondertilgung", label: "Sondertilgung" },
    ],
    relatedCalculators: [
      { href: "/rechner/tilgungsrechner-kapitalanlage", label: "Tilgungsrechner" },
    ],
    relatedGuides: [
      { href: "/ratgeber/finanzierung", label: "Immobilien Finanzierung" },
    ],
  },
  {
    slug: "zinsbindung",
    term: "Zinsbindung",
    shortDefinition:
      "Die Zinsbindung ist der Zeitraum, für den der Zinssatz eines Immobiliendarlehens festgeschrieben ist — typischerweise 5, 10, 15 oder 20 Jahre.",
    definition:
      "Bei deutschen Immobilienkrediten wird der Zinssatz für eine vereinbarte Laufzeit festgeschrieben. Während der Zinsbindung ändert sich die monatliche Rate nicht, unabhängig von der Marktentwicklung. Nach Ablauf muss das Darlehen entweder vollständig zurückgezahlt oder neu finanziert werden (Anschlussfinanzierung). Die Zinsbindung ist eine der wichtigsten Entscheidungen bei der Immobilienfinanzierung.",
    content:
      "Längere Zinsbindungen bieten Planungssicherheit, sind aber teurer (höherer Zinssatz). Kürzere Zinsbindungen sind günstiger, bergen aber das Risiko steigender Zinsen bei der Anschlussfinanzierung. Für Kapitalanleger empfehlen Experten: Bei steigendem Zinsumfeld lieber 15–20 Jahre Zinsbindung wählen. Bei fallendem Zinsumfeld können kürzere Laufzeiten sinnvoll sein.",
    relevanceForInvestors:
      "Die Zinsbindung bestimmt, wann du mit einem Refinanzierungsrisiko konfrontiert wirst. Bei einem Kauf heute mit 4–5 % Zinsen und einer 10-jährigen Zinsbindung hängt viel davon ab, ob die Zinsen 2034–2036 höher oder niedriger sind als heute.",
    relatedTerms: [
      { slug: "annuitaet", label: "Annuität" },
      { slug: "anschlussfinanzierung", label: "Anschlussfinanzierung" },
      { slug: "restschuld", label: "Restschuld" },
    ],
    relatedCalculators: [
      { href: "/rechner/tilgungsrechner-kapitalanlage", label: "Tilgungsrechner" },
    ],
    relatedGuides: [
      { href: "/ratgeber/finanzierung", label: "Immobilien Finanzierung" },
    ],
  },
  {
    slug: "sondertilgung",
    term: "Sondertilgung",
    shortDefinition:
      "Eine Sondertilgung ist eine außerplanmäßige Rückzahlung des Darlehens — zusätzlich zur regulären Monatsrate — und reduziert die Restschuld direkt.",
    definition:
      "Sondertilgungen ermöglichen es Kreditnehmern, das Darlehen schneller zurückzuzahlen als im ursprünglichen Tilgungsplan vorgesehen. Die meisten deutschen Baufinanzierungen erlauben jährliche Sondertilgungen von 5–10 % des Ursprungsdarlehens. Ob und wie viel Sondertilgung erlaubt ist, muss vertraglich vereinbart werden.",
    example: {
      scenario:
        "Darlehen 200.000 €, 5 % Sondertilgung erlaubt = 10.000 € pro Jahr. Nach einer Sondertilgung von 10.000 € sinkt die Restschuld auf 190.000 €.",
      result:
        "Die jährlichen Zinsen sinken um ca. 400 € (bei 4 % Zinssatz) — dauerhaft.",
    },
    content:
      "Für Kapitalanleger ist Sondertilgung oft nicht die beste Strategie, weil: (1) Hypothekenzinsen steuerlich absetzbar sind, (2) das Kapital alternativ in weitere Immobilien oder ETFs investiert werden könnte. Für Selbstnutzer ist die Sondertilgung dagegen oft sinnvoll, da keine steuerliche Absetzung möglich ist. Prüfe immer die Opportunitätskosten.",
    relevanceForInvestors:
      "Verhandle trotzdem eine Sondertilgungsoption in deinen Kreditvertrag — sie gibt dir Flexibilität. Ob du sie nutzt, entscheidest du später je nach Zinsniveau und Investitionsmöglichkeiten.",
    relatedTerms: [
      { slug: "tilgung", label: "Tilgung" },
      { slug: "restschuld", label: "Restschuld" },
      { slug: "annuitaet", label: "Annuität" },
    ],
    relatedCalculators: [
      { href: "/rechner/tilgungsrechner-kapitalanlage", label: "Tilgungsrechner" },
    ],
    relatedGuides: [
      { href: "/ratgeber/finanzierung", label: "Immobilien Finanzierung" },
    ],
  },
  {
    slug: "werbungskosten",
    term: "Werbungskosten (bei Vermietung)",
    shortDefinition:
      "Werbungskosten bei Vermietung sind alle Ausgaben, die mit der Erzielung von Mieteinnahmen zusammenhängen — und damit steuerlich von den Mieteinnahmen abziehbar sind.",
    definition:
      "Nach § 9 EStG können Vermieter alle Ausgaben, die im Zusammenhang mit der Erzielung von Mieteinnahmen stehen, als Werbungskosten steuerlich geltend machen. Dazu gehören: Hypothekenzinsen (nicht Tilgung), AfA, Hausgeld (nicht umlagefähiger Anteil), Reparaturen und Erhaltungsaufwand, Verwaltungskosten, Maklerkosten für Neuvermietung, Fahrten zur Immobilie, Steuerberatung, Rechtsanwaltskosten bei Mietstreitigkeiten.",
    content:
      "Wichtige Abgrenzung: Herstellungsaufwand (grundlegende Modernisierungen) muss über die Nutzungsdauer abgeschrieben werden, während Erhaltungsaufwand (Reparaturen) sofort absetzbar ist. Die Grenze liegt bei § 6 Abs. 1a EStG — Modernisierungsmaßnahmen in den ersten 3 Jahren nach Kauf über 15 % des Gebäudewerts sind Herstellungsaufwand (anschaffungsnahe Herstellungskosten).",
    relevanceForInvestors:
      "Eine vollständige Werbungskosten-Dokumentation ist Pflicht: Sammle alle Belege. Bei einem Grenzsteuersatz von 42 % sparst du auf 1.000 € Werbungskosten 420 € Steuern. Nutze einen Steuerberater, der auf Vermieter spezialisiert ist.",
    relatedTerms: [
      { slug: "afa-abschreibung", label: "AfA" },
      { slug: "hausgeld", label: "Hausgeld" },
      { slug: "cashflow", label: "Cashflow" },
    ],
    relatedCalculators: [
      { href: "/cashflow-rechner", label: "Cashflow Rechner" },
    ],
    relatedGuides: [
      { href: "/ratgeber/steuervorteile-vermietung", label: "Steuervorteile bei Vermietung" },
    ],
  },
  {
    slug: "instandhaltungsruecklage",
    term: "Instandhaltungsrücklage",
    shortDefinition:
      "Die Instandhaltungsrücklage ist eine Gemeinschaftsreserve der WEG für künftige Reparaturen und Sanierungen — Eigentümer zahlen monatlich in diesen Topf ein.",
    definition:
      "Die Instandhaltungsrücklage (auch: Erhaltungsrücklage) ist ein Pflichtbestandteil jeder Wohnungseigentümergemeinschaft (WEG). Sie wird von allen Eigentümern nach Miteigentumsanteil eingezahlt und für gemeinschaftliche Reparaturen genutzt (Dach, Fassade, Aufzug, Heizungsanlage). Die Höhe wird auf der WEG-Versammlung beschlossen.",
    example: {
      scenario:
        "Empfehlung der II. Berechnungsverordnung: Ca. 1 % des Gebäudewerts pro Jahr. Bei einem Gebäudewert von 2 Mio. € und 20 Wohnungen = 20.000 € / Jahr = 1.000 € / Wohnung / Jahr = 83 € / Monat.",
      result: "Deine WEG-Rücklage sollte mindestens diese Größenordnung haben.",
    },
    content:
      "Eine niedrige Instandhaltungsrücklage ist ein Warnsignal beim Immobilienkauf. Sie deutet auf jahrelange Unterfinanzierung hin und erhöht das Risiko von Sonderumlagen — hohe Einmalzahlungen für dringende Reparaturen, die du als Miteigentümer mittragen musst. Prüfe beim Kauf: Aktueller Rücklagenstand, geplante Großreparaturen laut Protokollen der letzten WEG-Versammlungen.",
    relevanceForInvestors:
      "Kaufe niemals eine Wohnung, ohne die WEG-Protokolle der letzten 3 Jahre gelesen zu haben. Sie zeigen geplante Sanierungen, Streitigkeiten und die finanzielle Gesundheit der WEG — entscheidend für deine Kostenkalkulation.",
    relatedTerms: [
      { slug: "hausgeld", label: "Hausgeld" },
      { slug: "cashflow", label: "Cashflow" },
      { slug: "werbungskosten", label: "Werbungskosten" },
    ],
    relatedCalculators: [
      { href: "/cashflow-rechner", label: "Cashflow Rechner" },
    ],
    relatedGuides: [
      { href: "/ratgeber/cashflow-immobilien", label: "Cashflow bei Immobilien" },
    ],
  },
  {
    slug: "mietausfall",
    term: "Mietausfall",
    shortDefinition:
      "Mietausfall bezeichnet den Einnahmenverlust durch Leerstand oder zahlungsunfähige Mieter — ein Risiko, das Investoren in der Renditeberechnung einplanen müssen.",
    definition:
      "Mietausfall entsteht durch Leerstand zwischen Mietverhältnissen, Mieter-Zahlungsausfall oder Schäden, die die Vermietung unmöglich machen. In der professionellen Immobilienbewertung wird ein Mietausfallwagnis von 2–5 % der Jahresmieteinnahmen als Puffer einkalkuliert. In guten Lagen mit niedrigem Leerstand reichen 2 %, in C-Lagen oder bei älterem Gebäudebestand 5 %.",
    formula: {
      equation: "Mietausfallwagnis = Jahreskaltmiete × Mietausfallquote (2–5 %)",
      variables: [
        { symbol: "Mietausfallquote", description: "2 % in A-Lagen / guter Nachfrage; 5 % in C-Lagen / risikoreichen Objekten" },
      ],
    },
    example: {
      scenario: "Jahreskaltmiete 10.800 €, Mietausfallwagnis 3 %.",
      result: "Mietausfall-Reserve: 324 € / Jahr = 27 € / Monat",
    },
    content:
      "Mietausfall ist besonders schmerzhaft, weil die Fixkosten (Hausgeld, Zinsen) weiterlaufen. Eine Liquiditätsreserve von 3–6 Monatskaltmieten schützt dich vor kurzfristigen Engpässen. Bei Zahlungsausfall des Mieters kann eine Rechtsschutzversicherung mit Mietrechtsbaustein die Kosten eines Räumungsverfahrens abdecken.",
    relevanceForInvestors:
      "Leerstand von nur 2 Monaten entspricht einer Mietausfallquote von 16 % — das kann eine rechnerisch gute Rendite schnell aushebeln. Wähle Objekte in Lagen mit niedrigem Leerstand und plane immer eine Liquiditätsreserve ein.",
    relatedTerms: [
      { slug: "cashflow", label: "Cashflow" },
      { slug: "nettomietrendite", label: "Nettomietrendite" },
    ],
    relatedCalculators: [
      { href: "/cashflow-rechner", label: "Cashflow Rechner" },
    ],
    relatedGuides: [
      { href: "/ratgeber/cashflow-immobilien", label: "Cashflow bei Immobilien" },
    ],
  },
  {
    slug: "spekulationsfrist",
    term: "Spekulationsfrist",
    shortDefinition:
      "Die Spekulationsfrist beträgt für Immobilien 10 Jahre: Wer seine Mietimmobilie erst nach 10 Jahren verkauft, zahlt keine Einkommensteuer auf den Veräußerungsgewinn.",
    definition:
      "Nach § 23 EStG sind Gewinne aus dem Verkauf von Immobilien steuerpflichtig, wenn zwischen Kauf und Verkauf weniger als 10 Jahre liegen. Bei Überschreiten der 10-Jahres-Frist ist der Gewinn komplett steuerfrei — unabhängig von der Höhe. Ausnahme: Selbstgenutzte Immobilien sind bereits nach 2 Jahren Eigennutzung im Verkaufsjahr steuerfrei.",
    example: {
      scenario:
        "Kauf Januar 2014 für 200.000 €, Verkauf Februar 2024 für 350.000 €. Spekulationsfrist abgelaufen (10 Jahre).",
      result: "Gewinn von 150.000 € ist komplett steuerfrei. Verkauf im Januar 2024 (vor Ablauf) wäre mit bis zu 42 % Einkommensteuer belastet.",
    },
    content:
      "Die Spekulationsfrist ist der wichtigste steuerliche Faktor für die Exit-Strategie. Plane von Anfang an: Wann endet die Spekulationsfrist? Manche Investoren kaufen bewusst nur mit langem Zeithorizont (10+ Jahre), um den steuerfreien Verkauf zu ermöglichen. Die AfA-Rückforderung (früher üblich) gilt seit 2021 nicht mehr — Wertsteigerungen sind nach der Spekulationsfrist vollständig steuerfrei.",
    relevanceForInvestors:
      "Kalkuliere die Spekulationsfrist in deinen IRR ein: Ein Verkauf nach 9 Jahren und 11 Monaten kann bedeutend weniger rentieren als einer nach 10 Jahren und 1 Monat — allein durch den Steuereffekt.",
    relatedTerms: [
      { slug: "irr", label: "IRR" },
      { slug: "afa-abschreibung", label: "AfA" },
      { slug: "werbungskosten", label: "Werbungskosten" },
    ],
    relatedCalculators: [
      { href: "/irr-rechner", label: "IRR Rechner" },
    ],
    relatedGuides: [
      { href: "/ratgeber/steuervorteile-vermietung", label: "Steuervorteile bei Vermietung" },
    ],
  },
  {
    slug: "kaufnebenkosten",
    term: "Kaufnebenkosten",
    shortDefinition:
      "Kaufnebenkosten sind alle Kosten beim Immobilienkauf zusätzlich zum Kaufpreis — Grunderwerbsteuer, Notar, Grundbuch und ggf. Maklerprovision. Zusammen meist 10–15 % des Kaufpreises.",
    definition:
      "Kaufnebenkosten entstehen obligatorisch bei jedem Immobilienkauf und können nicht verhandelt werden (außer der Maklerprovision). Sie bestehen aus: Grunderwerbsteuer (3,5–6,5 %), Notarkosten (~1–1,5 %), Grundbuchgebühren (~0,5 %), Maklerprovision (0–3,57 %, seit 2020 hälftig zwischen Käufer und Verkäufer geteilt). In Summe kommen typischerweise 10–15 % des Kaufpreises zusammen.",
    example: {
      scenario: "Kaufpreis 250.000 €, Bayern (GrESt 3,5 %), mit Makler (3,57 % = 1,785 % für Käufer).",
      result:
        "GrESt: 8.750 € + Notar/Grundbuch: 3.750 € + Makler: 4.463 € = Nebenkosten gesamt: ca. 16.963 € (6,8 %)",
    },
    content:
      "Kaufnebenkosten müssen in der Regel aus Eigenkapital bezahlt werden — Banken finanzieren sie selten. Sie erhöhen den Einsatz und senken damit die EK-Rendite. Tipp: Kaufe ohne Makler (direkt vom Eigentümer) und spare 1,785–3,57 % des Kaufpreises. Das sind bei 300.000 € immerhin 5.355–10.710 €.",
    relevanceForInvestors:
      "Kalkuliere die Kaufnebenkosten immer als Teil deines EK-Bedarfs. Bei 20 % Eigenkapital auf den Kaufpreis plus 12 % Nebenkosten brauchst du insgesamt 32 % des Kaufpreises als Eigenkapital — erheblich mehr als viele Einsteiger einplanen.",
    relatedTerms: [
      { slug: "grunderwerbsteuer", label: "Grunderwerbsteuer" },
      { slug: "nettomietrendite", label: "Nettomietrendite" },
    ],
    relatedCalculators: [
      { href: "/kaufnebenkosten-rechner", label: "Kaufnebenkosten Rechner" },
      { href: "/rechner/nebenkosten-rechner", label: "Nebenkosten Rechner" },
    ],
    relatedGuides: [
      { href: "/ratgeber/kaufnebenkosten-uebersicht", label: "Kaufnebenkosten im Überblick" },
    ],
  },
  {
    slug: "restschuld",
    term: "Restschuld",
    shortDefinition:
      "Die Restschuld ist der noch ausstehende Kreditbetrag nach einer bestimmten Laufzeit — entscheidend für die Anschlussfinanzierung nach Ablauf der Zinsbindung.",
    definition:
      "Die Restschuld ergibt sich aus dem ursprünglichen Darlehensbetrag minus der bisher getilgten Summe. Am Ende der Zinsbindung ist die Restschuld die Grundlage für die Anschlussfinanzierung. Bei niedrigen Anfangstilgungen (1 %) ist die Restschuld nach 10 Jahren noch sehr hoch — ein Refinanzierungsrisiko, wenn die Zinsen bis dahin gestiegen sind.",
    example: {
      scenario:
        "Darlehen 200.000 €, Anfangstilgung 2 %, Zinssatz 3,5 %, Laufzeit 10 Jahre.",
      result:
        "Restschuld nach 10 Jahren ≈ 168.000 € (ca. 84 % des Ursprungsdarlehens tilgt sich nicht durch die niedrige Tilgung)",
    },
    content:
      "Das Refinanzierungsrisiko ist real: Wer 2013 mit 2 % Zinsen finanziert hat und 2023 refinanzieren musste, zahlte plötzlich 4–5 % auf die Restschuld. Das kann die monatliche Rate erheblich erhöhen. Gegenmaßnahmen: Longer Zinsbindung wählen, höhere Tilgung, Sondertilgungen oder Verkauf vor Ablauf der Zinsbindung.",
    relevanceForInvestors:
      "Simuliere bei der Investitionsplanung immer das Szenario: Wie hoch ist meine Restschuld nach Ablauf der Zinsbindung? Und was kostet mich die Anschlussfinanzierung bei verschiedenen Zinsniveaus (3 %, 5 %, 7 %)? Nur dann kennst du dein echtes Risiko.",
    relatedTerms: [
      { slug: "tilgung", label: "Tilgung" },
      { slug: "zinsbindung", label: "Zinsbindung" },
      { slug: "anschlussfinanzierung", label: "Anschlussfinanzierung" },
      { slug: "annuitaet", label: "Annuität" },
    ],
    relatedCalculators: [
      { href: "/rechner/tilgungsrechner-kapitalanlage", label: "Tilgungsrechner" },
    ],
    relatedGuides: [
      { href: "/ratgeber/finanzierung", label: "Immobilien Finanzierung" },
    ],
  },
  {
    slug: "anschlussfinanzierung",
    term: "Anschlussfinanzierung",
    shortDefinition:
      "Die Anschlussfinanzierung ist die Refinanzierung einer Immobilie nach Ablauf der Zinsbindung — oft mit einem neuen Zinssatz und ggf. einer anderen Bank.",
    definition:
      "Nach Ablauf der Zinsbindung muss das Darlehen (soweit noch eine Restschuld besteht) neu finanziert werden. Das ist die Anschlussfinanzierung. Sie kann bei der bestehenden Bank (Prolongation) oder bei einer anderen Bank (Umschuldung) erfolgen. Die Konditionen hängen dann vom aktuellen Zinsniveau ab — das bedeutet Risiko, aber auch Chance.",
    content:
      "Banken bieten ab 12 Monate vor Ablauf der Zinsbindung neue Konditionen an — das ist der früheste Zeitpunkt, ein Forward-Darlehen abzuschließen (Zinssicherung für die Zukunft, mit geringem Aufschlag). Vergleiche immer mehrere Angebote — die Prolongation der Hausbank ist selten das günstigste Angebot. Moderne Vergleichsportale (Dr. Klein, Interhyp) bieten schnell einen Marktüberblick.",
    relevanceForInvestors:
      "Die Anschlussfinanzierung ist einer der kritischsten Momente in der Immobilieninvestition. Bereite dich 12–18 Monate vorher vor, vergleiche Angebote und erwäge Forward-Darlehen in Phasen steigender Zinsen.",
    relatedTerms: [
      { slug: "zinsbindung", label: "Zinsbindung" },
      { slug: "restschuld", label: "Restschuld" },
      { slug: "annuitaet", label: "Annuität" },
    ],
    relatedCalculators: [
      { href: "/rechner/tilgungsrechner-kapitalanlage", label: "Tilgungsrechner" },
    ],
    relatedGuides: [
      { href: "/ratgeber/finanzierung", label: "Immobilien Finanzierung" },
    ],
  },
  {
    slug: "beleihungsauslauf",
    term: "Beleihungsauslauf (LTV)",
    shortDefinition:
      "Der Beleihungsauslauf (Loan-to-Value, LTV) gibt an, wie viel Prozent des Immobilienwerts durch Fremdkapital finanziert ist — ein wichtiger Risikoindikator für Banken.",
    definition:
      "Der Beleihungsauslauf (auch Loan-to-Value, LTV) berechnet sich aus dem Darlehensbetrag dividiert durch den Beleihungswert der Immobilie (80–90 % des Kaufpreises). Ein LTV von 80 % bedeutet, dass die Bank 80 % des Beleihungswerts finanziert. Banken unterscheiden zwischen Beleihungsgrenze (meist 60 % für günstigste Konditionen) und Beleihungsauslauf.",
    formula: {
      equation: "Beleihungsauslauf (%) = Darlehen / Beleihungswert × 100",
      variables: [
        { symbol: "Darlehen", description: "Darlehensbetrag" },
        { symbol: "Beleihungswert", description: "Bankinterner Wert der Immobilie (ca. 80–90 % des Kaufpreises)" },
      ],
    },
    example: {
      scenario: "Kaufpreis 300.000 €, Beleihungswert 270.000 € (90 %), Darlehen 210.000 €.",
      result: "Beleihungsauslauf = 210.000 / 270.000 × 100 = 77,8 %",
    },
    content:
      "Banken berechnen Zinsen nach dem Beleihungsauslauf: Unter 60 % LTV gibt es die günstigsten Zinsen; 60–80 % LTV kostet etwas mehr; über 80 % LTV wird deutlich teurer oder schwer finanzierbar. Als Kapitalanleger ohne Eigennutzungspläne finanzieren Banken oft maximal 80 % des Kaufpreises.",
    relevanceForInvestors:
      "Plane deinen Eigenkapitaleinsatz so, dass du unter 80 % LTV bleibst — das spart Zinsen und verbessert die Finanzierbarkeit. Bei 300.000 € Kaufpreis und Beleihungswert 270.000 € brauchst du mindestens 60.000 € EK für 80 % LTV plus Kaufnebenkosten.",
    relatedTerms: [
      { slug: "leverage-effekt", label: "Leverage-Effekt" },
      { slug: "eigenkapitalrendite", label: "Eigenkapitalrendite" },
      { slug: "annuitaet", label: "Annuität" },
    ],
    relatedCalculators: [
      { href: "/rechner/eigenkapitalrendite-rechner", label: "Eigenkapitalrendite Rechner" },
    ],
    relatedGuides: [
      { href: "/ratgeber/finanzierung", label: "Immobilien Finanzierung" },
      { href: "/ratgeber/eigenkapital-immobilie", label: "Eigenkapital Immobilien" },
    ],
  },
];

export function getTermBySlug(slug: string): GlossaryTerm | undefined {
  return GLOSSARY_TERMS.find((t) => t.slug === slug);
}

export const GLOSSARY_SLUGS = GLOSSARY_TERMS.map((t) => t.slug);
