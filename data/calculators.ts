export type CalculatorComponent = 'rendite' | 'nebenkosten' | null;

export interface CalculatorFAQ {
  q: string;
  a: string;
}

export interface CalculatorExample {
  title: string;
  inputs: Array<{ label: string; value: string }>;
  result: { label: string; value: string; highlight?: boolean };
  note?: string;
}

export interface CalculatorFormula {
  equation: string;
  variables: Array<{ symbol: string; description: string }>;
}

export interface CalculatorRelated {
  href: string;
  label: string;
  description: string;
}

export interface CalculatorPage {
  slug: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  primaryCalculator: {
    path: string;
    label: string;
    component: CalculatorComponent;
  };
  formula?: CalculatorFormula;
  sections: Array<{ h2: string; content: string }>;
  example: CalculatorExample;
  faqs: CalculatorFAQ[];
  related: CalculatorRelated[];
}

export const CALCULATORS: CalculatorPage[] = [
  {
    slug: 'mietrendite-rechner',
    h1: 'Mietrendite Rechner – Rendite deiner Immobilie kostenlos berechnen',
    metaTitle: 'Mietrendite Rechner 2026 – Brutto & Netto kostenlos berechnen | Immo-Rechner',
    metaDescription: 'Mietrendite deiner Immobilie kostenlos berechnen: Bruttomietrendite, Nettomietrendite und Mietmultiplikator. Einfache Formel mit Beispielrechnung.',
    intro: 'Mit dem Mietrendite Rechner berechnest du in Sekunden, wie profitabel deine Immobilieninvestition ist. Gib Kaufpreis und Kaltmiete ein – der Rechner ermittelt automatisch Brutto- und Nettomietrendite sowie den Mietmultiplikator.',
    primaryCalculator: {
      path: '/rendite-rechner',
      label: 'Zum Mietrendite Rechner →',
      component: 'rendite',
    },
    formula: {
      equation: 'Bruttomietrendite (%) = (Jahreskaltmiete ÷ Kaufpreis) × 100',
      variables: [
        { symbol: 'Jahreskaltmiete', description: 'Monatliche Kaltmiete × 12' },
        { symbol: 'Kaufpreis', description: 'Kaufpreis ohne Nebenkosten' },
      ],
    },
    sections: [
      {
        h2: 'Was ist die Mietrendite?',
        content: 'Die Mietrendite ist die wichtigste Kennzahl für die erste Einschätzung einer Immobilie als Kapitalanlage. Sie gibt an, wie viel Prozent des Kaufpreises du jährlich als Mieteinnahmen zurückbekommst. Eine Mietrendite von 5% bedeutet: Bei einem Kaufpreis von 200.000 € nimmst du jährlich 10.000 € Kaltmiete ein.\n\nMan unterscheidet zwischen Bruttomietrendite (einfach, ohne Kosten) und Nettomietrendite (realistischer, mit Kosten). Für eine schnelle Vorauswahl von Immobilien eignet sich die Bruttomietrendite, für die Investitionsentscheidung sollte immer die Nettomietrendite berechnet werden.',
      },
      {
        h2: 'Welche Mietrendite ist gut?',
        content: 'Die erzielbare Mietrendite variiert stark nach Lage:\n\n**A-Lagen** (München, Hamburg, Frankfurt): Bruttomietrendite typischerweise 2,5–3,5%. Positiver Cashflow kaum erreichbar – Investoren setzen auf Wertsteigerung.\n\n**B-Lagen** (Leipzig, Dresden, Hannover, Nürnberg): 4–5% Bruttomietrendite, positiver Cashflow bei guter Finanzierung möglich.\n\n**C/D-Lagen** (Chemnitz, Halle, Magdeburg): 6–8% Bruttomietrendite, guter Cashflow, aber höheres Leerstandsrisiko.\n\nFaustregel: Unter 3% Bruttomietrendite ist ein positiver Cashflow nach Finanzierungskosten kaum möglich. Ab 4,5–5% wird es realistisch.',
      },
      {
        h2: 'Bruttomietrendite vs. Nettomietrendite – der Unterschied',
        content: 'Die Bruttomietrendite ist der schnelle Überblick: Jahreskaltmiete geteilt durch Kaufpreis. Keine Kosten einbezogen.\n\nDie Nettomietrendite ist realistischer: Sie zieht nicht umlegbare Betriebskosten ab (Verwaltung, Instandhaltungsrücklage, Leerstandsrisiko) und addiert die Kaufnebenkosten zum Kaufpreis. Typisch liegt die Nettomietrendite 0,5–1,5 Prozentpunkte unter der Bruttomietrendite.\n\nBeispiel: 5% Bruttomietrendite → ~3,5–4,5% Nettomietrendite nach realistischen Abzügen.',
      },
    ],
    example: {
      title: '2-Zimmer-Wohnung in Leipzig',
      inputs: [
        { label: 'Kaufpreis', value: '180.000 €' },
        { label: 'Kaltmiete (monatlich)', value: '720 €' },
        { label: 'Jahreskaltmiete', value: '8.640 €' },
      ],
      result: { label: 'Bruttomietrendite', value: '4,8%', highlight: true },
      note: 'Für die Nettomietrendite würden noch Kaufnebenkosten (~11,5% = 20.700 €) und nicht umlegbare Kosten (~80 €/Monat) abgezogen → Nettomietrendite ca. 3,7%.',
    },
    faqs: [
      {
        q: 'Wie berechnet man die Mietrendite?',
        a: 'Bruttomietrendite = (Jahreskaltmiete ÷ Kaufpreis) × 100. Beispiel: 8.640 € Jahreskaltmiete ÷ 180.000 € Kaufpreis × 100 = 4,8%. Für die Nettomietrendite werden Kaufnebenkosten addiert und nicht umlegbare Kosten abgezogen.',
      },
      {
        q: 'Ab welcher Mietrendite lohnt sich eine Immobilie?',
        a: 'Als Faustregel gilt: Ab ~3,5% Bruttomietrendite beginnt eine Immobilie interessant zu werden. Ab 4,5–5% sind positive Cashflows nach Finanzierungskosten in B-Lagen realistisch. Unter 3% ist ein positiver Cashflow in der Regel nicht möglich.',
      },
      {
        q: 'Was ist der Unterschied zwischen Mietrendite und IRR?',
        a: 'Die Mietrendite ist eine Momentaufnahme des Einnahmeverhältnisses. Der IRR (Internal Rate of Return) berechnet die Gesamtrendite über die gesamte Haltedauer – inkl. Mieterhöhungen, Kostensteigerungen, Wertsteigerung und Verkaufserlös. Der IRR ist die aussagekräftigere Kennzahl für die finale Investitionsentscheidung.',
      },
      {
        q: 'Wie hoch ist eine realistische Mietrendite in Deutschland 2026?',
        a: 'In den Top-7-Städten liegen Bruttomietrenditen bei 2,5–3,5%. In B-Städten (Leipzig, Dresden, Hannover) bei 4–5,5%. In C/D-Städten (Halle, Chemnitz, Magdeburg) bei 6–9%. Bundesweit liegt der Durchschnitt für Kapitalanleger bei ca. 4–5% Bruttomietrendite.',
      },
    ],
    related: [
      { href: '/rendite-rechner', label: 'Rendite Rechner', description: 'Brutto- und Nettomietrendite + Mietmultiplikator' },
      { href: '/rechner/nettomietrendite-rechner', label: 'Nettomietrendite Rechner', description: 'Realistischere Kennzahl mit Kosten' },
      { href: '/rechner/kaufpreisfaktor-rechner', label: 'Kaufpreisfaktor Rechner', description: 'Mietmultiplikator berechnen' },
      { href: '/ratgeber/cashflow-immobilien', label: 'Cashflow Ratgeber', description: 'Monatlichen Geldfluss verstehen' },
    ],
  },

  {
    slug: 'bruttomietrendite-rechner',
    h1: 'Bruttomietrendite berechnen – Formel, Beispiel & kostenloser Rechner',
    metaTitle: 'Bruttomietrendite berechnen 2026 – Formel, Rechner & Richtwerte | Immo-Rechner',
    metaDescription: 'Bruttomietrendite einer Immobilie berechnen: einfache Formel, Beispielrechnung und kostenloser Rechner. Was ist eine gute Bruttomietrendite?',
    intro: 'Die Bruttomietrendite ist der schnellste Weg, um den Wert einer Immobilie als Kapitalanlage einzuschätzen. Sie setzt Jahreskaltmiete und Kaufpreis ins Verhältnis – ohne Kosten. Ideal für die erste Selektion bei der Immobiliensuche.',
    primaryCalculator: {
      path: '/rendite-rechner',
      label: 'Bruttomietrendite jetzt berechnen →',
      component: 'rendite',
    },
    formula: {
      equation: 'Bruttomietrendite (%) = (Jahreskaltmiete ÷ Kaufpreis) × 100',
      variables: [
        { symbol: 'Jahreskaltmiete', description: 'Monatliche Kaltmiete × 12' },
        { symbol: 'Kaufpreis', description: 'Kaufpreis ohne Nebenkosten und ohne Grundstücksanteil' },
      ],
    },
    sections: [
      {
        h2: 'Was ist die Bruttomietrendite?',
        content: 'Die Bruttomietrendite (auch: Bruttomietrendite oder Rohmietrendite) ist die einfachste Kennzahl zur Bewertung einer Immobilieninvestition. Sie zeigt, welchen Anteil des Kaufpreises du jährlich durch Mieteinnahmen zurückbekommst – ohne Kosten zu berücksichtigen.\n\nIhr größter Vorteil: Die Berechnung braucht nur zwei Zahlen (Kaufpreis + Jahreskaltmiete) und ist in Sekunden erledigt. Dadurch eignet sie sich hervorragend, um schnell zu entscheiden, ob eine Immobilie überhaupt das erste Kriterium erfüllt.\n\nIhr größter Nachteil: Sie ignoriert Kaufnebenkosten (10–15% des Kaufpreises) und laufende Kosten (Verwaltung, Instandhaltung). Deshalb ist sie nur als erster Filter sinnvoll.',
      },
      {
        h2: 'Bruttomietrendite – Richtwerte nach Lagetyp',
        content: 'Die Faustregel bei der Bruttomietrendite:\n\n**Unter 3%**: Positiver Cashflow nach Finanzierung sehr schwierig. Nur bei starker Wertsteigerungserwartung (A-Lage) sinnvoll.\n\n**3–4%**: Grenzwertig. In hochpreisigen Städten Standard (München, Hamburg).\n\n**4–5%**: Marktgerecht für B-Lagen. Positiver Cashflow bei niedriger Tilgung möglich.\n\n**5–7%**: Gut. B/C-Lagen mit soliden Cashflow-Perspektiven.\n\n**Über 7%**: Sehr hoch – prüfe genau, warum. Oft höheres Leerstandsrisiko oder Sanierungsbedarf.',
      },
    ],
    example: {
      title: 'Eigentumswohnung in Hannover',
      inputs: [
        { label: 'Kaufpreis', value: '220.000 €' },
        { label: 'Kaltmiete monatlich', value: '980 €' },
        { label: 'Jahreskaltmiete', value: '11.760 €' },
      ],
      result: { label: 'Bruttomietrendite', value: '5,3%', highlight: true },
      note: 'Diese Immobilie liegt über dem 4%-Schwellenwert – die detaillierte Nettomietrendite-Berechnung lohnt sich.',
    },
    faqs: [
      {
        q: 'Was ist eine gute Bruttomietrendite?',
        a: 'Als Faustregel: Unter 4% ist positiver Cashflow nach Finanzierung schwierig. 4–5% ist für B-Lagen marktgerecht. Über 5% ist gut. Die Höhe hängt stark vom Standort ab: In München sind 2,5% Standard, in Chemnitz 7% erreichbar.',
      },
      {
        q: 'Warum reicht die Bruttomietrendite nicht für die Investitionsentscheidung?',
        a: 'Die Bruttomietrendite ignoriert Kaufnebenkosten (10–15%), nicht umlegbare Bewirtschaftungskosten (ca. 2–3% des Kaufpreises jährlich) und die Finanzierungskosten. Für die finale Entscheidung sollte die Nettomietrendite und besser noch der IRR (Gesamtrendite über Haltedauer) berechnet werden.',
      },
      {
        q: 'Wie unterscheidet sich Bruttomietrendite von Nettomietrendite?',
        a: 'Bruttomietrendite = Jahreskaltmiete / Kaufpreis. Nettomietrendite = (Jahreskaltmiete - nicht umlegbare Kosten) / (Kaufpreis + Kaufnebenkosten). Die Nettomietrendite liegt typischerweise 1–1,5 Prozentpunkte unter der Bruttomietrendite.',
      },
    ],
    related: [
      { href: '/rechner/nettomietrendite-rechner', label: 'Nettomietrendite Rechner', description: 'Die realistischere Kennzahl' },
      { href: '/rechner/mietrendite-rechner', label: 'Mietrendite Rechner', description: 'Alle Renditekennzahlen im Überblick' },
      { href: '/rendite-rechner', label: 'Vollständiger Rendite Rechner', description: 'Brutto, Netto und Mietmultiplikator' },
    ],
  },

  {
    slug: 'nettomietrendite-rechner',
    h1: 'Nettomietrendite berechnen – Realistischere Rendite für Immobilien',
    metaTitle: 'Nettomietrendite berechnen 2026 – Formel, Rechner & Beispiel | Immo-Rechner',
    metaDescription: 'Nettomietrendite einer Immobilie kostenlos berechnen: Formel mit Kaufnebenkosten und Bewirtschaftungskosten. Realistischere Alternative zur Bruttomietrendite.',
    intro: 'Die Nettomietrendite ist die ehrlichere Kennzahl für Immobilieninvestoren: Sie berücksichtigt sowohl die Kaufnebenkosten als auch die laufenden nicht umlegbaren Kosten. Damit gibt sie ein realistisches Bild der Rendite – im Gegensatz zur Bruttomietrendite.',
    primaryCalculator: {
      path: '/rendite-rechner',
      label: 'Nettomietrendite berechnen →',
      component: 'rendite',
    },
    formula: {
      equation: 'Nettomietrendite (%) = ((Jahreskaltmiete − nicht umlegbare Kosten) ÷ (Kaufpreis + Kaufnebenkosten)) × 100',
      variables: [
        { symbol: 'Jahreskaltmiete', description: 'Monatliche Kaltmiete × 12' },
        { symbol: 'Nicht umlegbare Kosten', description: 'Verwaltung + Instandhaltungsrücklage (ca. 2–3% des Kaufpreises p.a.)' },
        { symbol: 'Kaufnebenkosten', description: 'Grunderwerbsteuer + Notar + Makler (8,5–15% je nach Bundesland)' },
      ],
    },
    sections: [
      {
        h2: 'Was ist die Nettomietrendite?',
        content: 'Die Nettomietrendite zeigt, was nach Abzug aller laufenden Kosten und unter Berücksichtigung der Kaufnebenkosten tatsächlich von der Mietrendite übrigbleibt. Sie ist die realistischere Kennzahl für Kapitalanleger.\n\nVon der Jahreskaltmiete werden abgezogen: nicht umlegbare Verwaltungskosten (ca. 150–250 €/Monat bei einer ETW), Instandhaltungsrücklage (ca. 8–12 €/m² Wohnfläche pro Jahr) und ein Puffer für Leerstand (1–2 Monatsmieten pro Jahr).\n\nZum Kaufpreis werden die Kaufnebenkosten addiert: Grunderwerbsteuer (3,5–6,5%), Notarkosten (~1,5%) und Maklercourtage (0–3,57%).',
      },
      {
        h2: 'Typischer Abstand zur Bruttomietrendite',
        content: 'Als Faustregel liegt die Nettomietrendite typischerweise 1,0–1,5 Prozentpunkte unter der Bruttomietrendite:\n\n- Bruttomietrendite 5% → Nettomietrendite ca. 3,5–4,0%\n- Bruttomietrendite 4% → Nettomietrendite ca. 2,5–3,0%\n- Bruttomietrendite 6% → Nettomietrendite ca. 4,5–5,0%\n\nDer genaue Abstand hängt von: Bundesland (Grunderwerbsteuer), Hausgeld (WEG-Gemeinschaft), Objektzustand (Instandhaltungsbedarf) und lokalen Verwaltungskosten ab.',
      },
    ],
    example: {
      title: 'Wohnung in Nürnberg (Bayern)',
      inputs: [
        { label: 'Kaufpreis', value: '250.000 €' },
        { label: 'Kaufnebenkosten (Bayern, ohne Makler ~6%)', value: '15.000 €' },
        { label: 'Gesamtinvestition', value: '265.000 €' },
        { label: 'Jahreskaltmiete', value: '12.000 €' },
        { label: 'Nicht umlegbare Kosten (jährlich)', value: '1.800 €' },
      ],
      result: { label: 'Nettomietrendite', value: '3,85%', highlight: true },
      note: 'Bruttomietrendite wäre 4,8% – die Nettomietrendite zeigt das realistischere Bild.',
    },
    faqs: [
      {
        q: 'Was ist eine gute Nettomietrendite?',
        a: 'Unter 2,5% Nettomietrendite ist positiver Cashflow nach Finanzierung in der Regel nicht möglich. 3–4% gilt als marktgerecht für B-Lagen. Über 4,5% ist gut. Zum Vergleich: 10-jährige Bundesanleihen rentieren ~2–3%, sodass Immobilien ab ~3,5–4% Nettomietrendite attraktiv sind.',
      },
      {
        q: 'Welche Kosten fließen in die Nettomietrendite ein?',
        a: 'Kaufseitig: Grunderwerbsteuer, Notarkosten, Grundbuchkosten, Maklercourtage. Laufend (nicht umlegbar): Hausverwaltungsgebühr, Instandhaltungsrücklage (Anteil Eigentümer), Leerstandsrisiko. Nicht enthalten: Finanzierungskosten (Zinsen/Tilgung) – diese fließen in den Cashflow ein.',
      },
    ],
    related: [
      { href: '/rechner/bruttomietrendite-rechner', label: 'Bruttomietrendite Rechner', description: 'Schneller erster Überblick' },
      { href: '/rendite-rechner', label: 'Rendite Rechner (vollständig)', description: 'Brutto, Netto, Mietmultiplikator' },
      { href: '/kaufnebenkosten-rechner', label: 'Kaufnebenkosten Rechner', description: 'Nebenkosten für alle 16 Bundesländer' },
    ],
  },

  {
    slug: 'kaufpreisfaktor-rechner',
    h1: 'Kaufpreisfaktor Rechner – Mietmultiplikator für Immobilien berechnen',
    metaTitle: 'Kaufpreisfaktor Rechner 2026 – Mietmultiplikator berechnen | Immo-Rechner',
    metaDescription: 'Kaufpreisfaktor und Mietmultiplikator einer Immobilie kostenlos berechnen. Was ist ein guter Kaufpreisfaktor? Formel, Richtwerte und Beispiel.',
    intro: 'Der Kaufpreisfaktor (auch Mietmultiplikator) gibt an, nach wie vielen Jahren sich der Kaufpreis durch die Mieteinnahmen amortisiert. Je niedriger der Wert, desto günstiger die Immobilie im Verhältnis zur Miete.',
    primaryCalculator: {
      path: '/rendite-rechner',
      label: 'Kaufpreisfaktor berechnen →',
      component: 'rendite',
    },
    formula: {
      equation: 'Kaufpreisfaktor = Kaufpreis ÷ Jahreskaltmiete',
      variables: [
        { symbol: 'Kaufpreis', description: 'Kaufpreis ohne Nebenkosten' },
        { symbol: 'Jahreskaltmiete', description: 'Monatliche Kaltmiete × 12' },
      ],
    },
    sections: [
      {
        h2: 'Was sagt der Kaufpreisfaktor aus?',
        content: 'Der Kaufpreisfaktor ist der Kehrwert der Bruttomietrendite. Ein Kaufpreisfaktor von 25 bedeutet: Bei konstantem Mietpreis würde es 25 Jahre dauern, bis die Mieteinnahmen den Kaufpreis amortisiert haben. Faktisch ist dies natürlich vereinfacht – Mieten steigen, Kosten entstehen, Verkaufserlöse kommen hinzu.\n\nDer Vorteil des Kaufpreisfaktors: Er ist besonders intuitiv und wird im deutschen Immobilienmarkt häufig als erste Orientierungsgröße verwendet. Bei der Immobiliensuche auf Portalen wie ImmoScout können Investoren schnell den Kaufpreisfaktor im Kopf ausrechnen.',
      },
      {
        h2: 'Kaufpreisfaktor Richtwerte nach Lagetyp 2026',
        content: '**Unter 15**: Sehr günstig – prüfe Lage und Substanz genau. Solche Angebote gibt es meist in strukturschwachen Regionen.\n\n**15–20**: Günstig für C/D-Lagen. Gute Cashflows möglich.\n\n**20–25**: Marktgerecht für B-Lagen (Leipzig, Dresden, Hannover).\n\n**25–30**: Teuer, aber in dynamischen B+-Städten oder guten A-Lagen normal.\n\n**Über 30**: Nur mit starker Wertsteigerungserwartung sinnvoll. In München und Hamburg derzeit Standard (Faktor 35–40).',
      },
    ],
    example: {
      title: 'Mehrfamilienhaus in Dresden',
      inputs: [
        { label: 'Kaufpreis', value: '450.000 €' },
        { label: 'Jahreskaltmiete (5 Einheiten)', value: '24.000 €' },
      ],
      result: { label: 'Kaufpreisfaktor', value: '18,75', highlight: true },
      note: 'Entspricht einer Bruttomietrendite von 5,3%. Für Dresden ein guter Wert.',
    },
    faqs: [
      {
        q: 'Was ist ein guter Kaufpreisfaktor?',
        a: 'Als Faustregel: Unter 20 ist günstig, 20–25 marktgerecht für B-Lagen, über 25 teuer. In A-Lagen (München, Hamburg) sind Faktoren von 30–40 aktuell normal. Für positive Cashflows nach Finanzierung sollte der Faktor unter 25 liegen.',
      },
      {
        q: 'Was ist der Unterschied zwischen Kaufpreisfaktor und Mietmultiplikator?',
        a: 'Kaufpreisfaktor und Mietmultiplikator bezeichnen dasselbe: Kaufpreis geteilt durch Jahreskaltmiete. Beide Begriffe werden synonym verwendet. Der Kehrwert ist die Bruttomietrendite in Prozent.',
      },
      {
        q: 'Ist der Kaufpreisfaktor oder die Mietrendite wichtiger?',
        a: 'Beide zeigen dasselbe – nur aus unterschiedlicher Perspektive. Kaufpreisfaktor = Jahre zur Amortisation. Mietrendite = jährliche Rendite in Prozent. Für die finale Investitionsentscheidung ist der IRR (unter Einbezug aller Faktoren über die Haltedauer) am aussagekräftigsten.',
      },
    ],
    related: [
      { href: '/rechner/bruttomietrendite-rechner', label: 'Bruttomietrendite Rechner', description: 'Kehrwert des Kaufpreisfaktors' },
      { href: '/rechner/mietpreismultiplikator-rechner', label: 'Mietpreismultiplikator Rechner', description: 'Gleiche Kennzahl, andere Perspektive' },
      { href: '/rendite-rechner', label: 'Rendite Rechner', description: 'Vollständige Renditeberechnung' },
    ],
  },

  {
    slug: 'mietpreismultiplikator-rechner',
    h1: 'Mietpreismultiplikator Rechner – Immobilien fair bewertet?',
    metaTitle: 'Mietpreismultiplikator Rechner – Immobilie gut bewertet? | Immo-Rechner',
    metaDescription: 'Mietpreismultiplikator einer Immobilie berechnen und einordnen. Was bedeutet Faktor 25, 30 oder 35? Aktuelle Richtwerte für alle deutschen Städtetypen.',
    intro: 'Der Mietpreismultiplikator zeigt, ob eine Immobilie im Vergleich zur Miete fair bewertet ist. Er entspricht dem Kaufpreisfaktor – also Kaufpreis geteilt durch Jahreskaltmiete. Je niedriger, desto besser für den Investor.',
    primaryCalculator: {
      path: '/rendite-rechner',
      label: 'Mietpreismultiplikator berechnen →',
      component: 'rendite',
    },
    formula: {
      equation: 'Mietpreismultiplikator = Kaufpreis ÷ Jahreskaltmiete',
      variables: [
        { symbol: 'Kaufpreis', description: 'Kaufpreis der Immobilie ohne Nebenkosten' },
        { symbol: 'Jahreskaltmiete', description: '12 × monatliche Kaltmiete' },
      ],
    },
    sections: [
      {
        h2: 'Mietpreismultiplikatoren in deutschen Städten 2026',
        content: 'Die aktuellen Mietpreismultiplikatoren variieren erheblich nach Standort:\n\n**A-Lagen** (München, Hamburg, Frankfurt): Faktor 30–40. Hohe Wertsteigerungserwartung, aber kaum Cashflow.\n\n**B+-Lagen** (Berlin, Stuttgart, Düsseldorf): Faktor 25–35. Gemischt – Cashflow schwierig, Substanz gut.\n\n**B-Lagen** (Leipzig, Hannover, Dresden): Faktor 18–25. Gutes Verhältnis für Cashflow-Investoren.\n\n**C/D-Lagen** (Chemnitz, Halle, Magdeburg): Faktor 12–18. Hohe Cashflow-Renditen, höheres Risiko.',
      },
    ],
    example: {
      title: 'Vergleich: München vs. Leipzig',
      inputs: [
        { label: 'München: Kaufpreis', value: '540.000 €' },
        { label: 'München: Jahreskaltmiete', value: '15.600 €' },
        { label: 'Leipzig: Kaufpreis', value: '180.000 €' },
        { label: 'Leipzig: Jahreskaltmiete', value: '8.640 €' },
      ],
      result: { label: 'Multiplikator München / Leipzig', value: '34,6 / 20,8', highlight: true },
      note: 'München: Bruttomietrendite 2,9% – kaum Cashflow. Leipzig: 4,8% – positiver Cashflow möglich.',
    },
    faqs: [
      {
        q: 'Was ist ein normaler Mietpreismultiplikator in Deutschland?',
        a: 'Bundesweit variiert der Multiplikator stark: A-Lagen 30–40, B-Lagen 18–27, C-Lagen 12–18. Als grobe Faustregel gilt: Unter 20 ist günstig für Cashflow-Investoren, über 30 nur mit Wertsteigerungsfokus sinnvoll.',
      },
      {
        q: 'Ist der Mietpreismultiplikator dasselbe wie der Kaufpreisfaktor?',
        a: 'Ja, beide Begriffe beschreiben dieselbe Kennzahl: Kaufpreis geteilt durch Jahreskaltmiete. Der Kehrwert (×100) ergibt die Bruttomietrendite in Prozent.',
      },
    ],
    related: [
      { href: '/rechner/kaufpreisfaktor-rechner', label: 'Kaufpreisfaktor Rechner', description: 'Synonyme Kennzahl detailliert erklärt' },
      { href: '/rendite-rechner', label: 'Rendite Rechner', description: 'Alle Renditekennzahlen auf einen Blick' },
    ],
  },

  {
    slug: 'nebenkosten-rechner',
    h1: 'Kaufnebenkosten Rechner – Alle Kosten beim Immobilienkauf berechnen',
    metaTitle: 'Kaufnebenkosten Rechner 2026 – Grunderwerbsteuer, Notar & Makler | Immo-Rechner',
    metaDescription: 'Kaufnebenkosten beim Immobilienkauf kostenlos berechnen: Grunderwerbsteuer für alle 16 Bundesländer, Notar, Grundbuch und Makler. Wie hoch sind die Nebenkosten?',
    intro: 'Beim Immobilienkauf kommen neben dem Kaufpreis erhebliche Nebenkosten hinzu. Je nach Bundesland und Makler summieren sich Grunderwerbsteuer, Notar, Grundbuch und Maklercourtage auf 8,5 bis 15 Prozent des Kaufpreises.',
    primaryCalculator: {
      path: '/kaufnebenkosten-rechner',
      label: 'Nebenkosten berechnen →',
      component: 'nebenkosten',
    },
    formula: {
      equation: 'Kaufnebenkosten = Grunderwerbsteuer + Notarkosten + Grundbuchkosten [+ Maklercourtage]',
      variables: [
        { symbol: 'Grunderwerbsteuer', description: '3,5–6,5% des Kaufpreises je nach Bundesland' },
        { symbol: 'Notarkosten', description: 'Ca. 1,5% des Kaufpreises (gesetzlich geregelt)' },
        { symbol: 'Grundbuchkosten', description: 'Ca. 0,5% des Kaufpreises' },
        { symbol: 'Maklercourtage', description: '0–3,57% (Käuferanteil, wenn Makler beteiligt)' },
      ],
    },
    sections: [
      {
        h2: 'Welche Kaufnebenkosten gibt es?',
        content: '**Grunderwerbsteuer**: Der größte Posten. Je nach Bundesland zwischen 3,5% (Bayern, Sachsen) und 6,5% (NRW, Schleswig-Holstein, Brandenburg, Saarland). Bei einem Kaufpreis von 300.000 € macht das zwischen 10.500 € und 19.500 € Unterschied.\n\n**Notarkosten**: Für die Beurkundung des Kaufvertrags werden ca. 1–1,5% des Kaufpreises fällig. Der Notar ist gesetzlich vorgeschrieben und die Kosten sind geregelt (GNotKG).\n\n**Grundbuchkosten**: Für die Eintragung des neuen Eigentümers und der Grundschuld ca. 0,3–0,5% des Kaufpreises.\n\n**Maklercourtage**: Seit 2020 teilen sich Käufer und Verkäufer die Provision – der Käuferanteil beträgt maximal 50% der Gesamtprovision (üblicherweise 3–3,57% inkl. MwSt.).',
      },
      {
        h2: 'Warum Kaufnebenkosten aus Eigenkapital finanzieren?',
        content: 'Kaufnebenkosten stellen keinen Sachwert dar – sie erhöhen weder den Marktwert der Immobilie noch werden sie steuerlich (bei Selbstnutzung) direkt berücksichtigt. Bei vermieteten Immobilien werden sie über die AfA über 50 Jahre abgeschrieben.\n\nFür die Rendite bedeutet das: Die Nebenkosten müssen erst erwirtschaftet werden, bevor der erste Cent Gewinn entsteht. Bei 300.000 € Kaufpreis und 12% Nebenkosten (36.000 €) – bei einer Nettomietrendite von 4% dauert das allein durch Mieteinnahmen über 3 Jahre. Deshalb empfehlen erfahrene Investoren: Kaufnebenkosten immer aus Eigenkapital finanzieren.',
      },
    ],
    example: {
      title: 'ETW in Köln (NRW)',
      inputs: [
        { label: 'Kaufpreis', value: '350.000 €' },
        { label: 'Grunderwerbsteuer NRW (6,5%)', value: '22.750 €' },
        { label: 'Notarkosten (~1,5%)', value: '5.250 €' },
        { label: 'Grundbuchkosten (~0,5%)', value: '1.750 €' },
        { label: 'Maklercourtage (3,57% Käuferanteil)', value: '12.495 €' },
      ],
      result: { label: 'Gesamte Kaufnebenkosten', value: '42.245 € (12,1%)', highlight: true },
      note: 'Ohne Makler: 29.750 € (8,5%) – der Makler macht fast ein Drittel der Nebenkosten aus.',
    },
    faqs: [
      {
        q: 'Wie hoch sind die Kaufnebenkosten beim Immobilienkauf?',
        a: 'Je nach Bundesland und ob ein Makler involviert ist: 8,5% (Bayern ohne Makler) bis ca. 15% (NRW/Schleswig-Holstein mit Makler) des Kaufpreises. Bei 300.000 € Kaufpreis sind das 25.500 € bis 45.000 € an Nebenkosten.',
      },
      {
        q: 'Welches Bundesland hat die höchste Grunderwerbsteuer?',
        a: 'Brandenburg, NRW, Saarland und Schleswig-Holstein erheben mit 6,5% die höchste Grunderwerbsteuer. Bayern und Sachsen haben mit 3,5% die niedrigste. Der Unterschied bei 400.000 € Kaufpreis: 14.000 € (Bayern) vs. 26.000 € (NRW) – ein Unterschied von 12.000 €.',
      },
      {
        q: 'Sind Kaufnebenkosten steuerlich absetzbar?',
        a: 'Bei vermieteten Immobilien werden die Nebenkosten dem Anschaffungswert zugerechnet und über die AfA (2% p.a. über 50 Jahre) abgeschrieben. Bei selbstgenutzten Immobilien sind Kaufnebenkosten grundsätzlich nicht von der Steuer absetzbar.',
      },
    ],
    related: [
      { href: '/kaufnebenkosten-rechner', label: 'Kaufnebenkosten Rechner (vollständig)', description: 'Alle 16 Bundesländer im Vergleich' },
      { href: '/rechner/grunderwerbsteuer-rechner', label: 'Grunderwerbsteuer Rechner', description: 'Nur die Steuer berechnen' },
      { href: '/ratgeber/eigenkapital-immobilie', label: 'Eigenkapital Ratgeber', description: 'Wie viel EK brauchst du?' },
    ],
  },

  {
    slug: 'grunderwerbsteuer-rechner',
    h1: 'Grunderwerbsteuer Rechner 2026 – Alle Bundesländer im Vergleich',
    metaTitle: 'Grunderwerbsteuer Rechner 2026 – Alle 16 Bundesländer | Immo-Rechner',
    metaDescription: 'Grunderwerbsteuer berechnen für alle 16 Bundesländer. Aktuelle Steuersätze 2026: Bayern 3,5% bis NRW 6,5%. Kostenloser Rechner mit Vergleichstabelle.',
    intro: 'Die Grunderwerbsteuer ist der größte Posten bei den Kaufnebenkosten. Je nach Bundesland zahlt du zwischen 3,5% (Bayern, Sachsen) und 6,5% (NRW, Schleswig-Holstein) des Kaufpreises. Berechne hier deine Grunderwerbsteuer kostenlos.',
    primaryCalculator: {
      path: '/kaufnebenkosten-rechner',
      label: 'Grunderwerbsteuer berechnen →',
      component: 'nebenkosten',
    },
    formula: {
      equation: 'Grunderwerbsteuer = Kaufpreis × Steuersatz',
      variables: [
        { symbol: 'Kaufpreis', description: 'Kaufpreis der Immobilie (Bemessungsgrundlage)' },
        { symbol: 'Steuersatz', description: '3,5% bis 6,5% je nach Bundesland' },
      ],
    },
    sections: [
      {
        h2: 'Grunderwerbsteuer-Sätze aller Bundesländer 2026',
        content: '**3,5%**: Bayern, Sachsen\n**5,0%**: Baden-Württemberg, Bremen, Niedersachsen, Rheinland-Pfalz, Sachsen-Anhalt, Thüringen\n**5,5%**: Hamburg, Sachsen (bleibt bei 5,5% – Sachsen erhebt 5,5%)\n**6,0%**: Berlin, Hessen, Mecklenburg-Vorpommern\n**6,5%**: Brandenburg, Nordrhein-Westfalen, Saarland, Schleswig-Holstein\n\nDer Unterschied zwischen Bayern und NRW bei einem Kaufpreis von 400.000 €: Bayern zahlt 14.000 €, NRW 26.000 €. Das ist eine Differenz von 12.000 € – allein durch den Standort.',
      },
      {
        h2: 'Wann und wie wird die Grunderwerbsteuer gezahlt?',
        content: 'Nach dem notariellen Kaufvertrag schickt das Finanzamt einen Grunderwerbsteuerbescheid. Die Steuer muss typischerweise innerhalb von 4 Wochen nach Bescheid bezahlt werden – dies ist Voraussetzung für die Ausstellung der Unbedenklichkeitsbescheinigung, ohne die kein Grundbucheintrag erfolgt.\n\nDie Steuer entsteht mit Abschluss des Kaufvertrags. Tritt man vom Kaufvertrag zurück, kann unter Umständen Erstattung beantragt werden – aber das Procedere ist aufwendig.',
      },
    ],
    example: {
      title: 'Grunderwerbsteuer-Vergleich bei 300.000 € Kaufpreis',
      inputs: [
        { label: 'Bayern (3,5%)', value: '10.500 €' },
        { label: 'Hamburg (5,5%)', value: '16.500 €' },
        { label: 'Berlin (6,0%)', value: '18.000 €' },
        { label: 'NRW (6,5%)', value: '19.500 €' },
      ],
      result: { label: 'Unterschied Bayern vs. NRW', value: '9.000 €', highlight: true },
      note: 'Nur die Grunderwerbsteuer – der Gesamtunterschied bei den Kaufnebenkosten ist noch größer.',
    },
    faqs: [
      {
        q: 'Wo ist die Grunderwerbsteuer am niedrigsten?',
        a: 'In Bayern und Sachsen mit jeweils 3,5%. Diese Bundesländer haben die einzigen verbleibenden Steuersätze unter 5% in Deutschland.',
      },
      {
        q: 'Gibt es Ausnahmen von der Grunderwerbsteuer?',
        a: 'Ja: Übertragungen zwischen nahen Verwandten (Ehepartner, Kinder, Eltern, Geschwister) sind grunderwerbsteuerfrei. Auch der Erwerb durch Erbschaft oder Schenkung ist befreit. Bei GmbH-Anteilen gelten besondere Regelungen (share deal).',
      },
      {
        q: 'Kann man die Grunderwerbsteuer reduzieren?',
        a: 'Zum Teil: Durch Aufteilung von Kaufpreis und Inventar kann die Steuerbemessungsgrundlage reduziert werden (Inventar unterliegt nicht der Grunderwerbsteuer). Dies muss aber realistisch und nachvollziehbar sein. Beim share deal gelten andere Regelungen, die jedoch für private Käufer meist nicht relevant sind.',
      },
    ],
    related: [
      { href: '/kaufnebenkosten-rechner', label: 'Kaufnebenkosten Rechner', description: 'Alle Nebenkosten inkl. Notar und Makler' },
      { href: '/grunderwerbsteuer/bayern', label: 'Grunderwerbsteuer Bayern', description: '3,5% – günstigstes Bundesland' },
      { href: '/grunderwerbsteuer/nordrhein-westfalen', label: 'Grunderwerbsteuer NRW', description: '6,5% – höchster Steuersatz' },
    ],
  },

  {
    slug: 'cashflow-rechner-immobilien',
    h1: 'Cashflow Rechner Immobilien – Monatlichen Geldfluss berechnen',
    metaTitle: 'Cashflow Rechner Immobilien 2026 – Monatlichen Cashflow berechnen | Immo-Rechner',
    metaDescription: 'Monatlichen Cashflow deiner Immobilie kostenlos berechnen. Was bleibt nach Annuität und Nebenkosten übrig? Formel, Beispiel und kostenloser Rechner inkl. IRR.',
    intro: 'Der monatliche Cashflow ist die wichtigste Kennzahl für die laufende Wirtschaftlichkeit einer Immobilie. Er zeigt, ob du jeden Monat Geld zuschießen musst oder Überschüsse erwirtschaftest. Unser Cashflow-Rechner berechnet Cashflow, IRR und Eigenkapitalrendite automatisch.',
    primaryCalculator: {
      path: '/cashflow-rechner',
      label: 'Zum vollständigen Cashflow-Rechner →',
      component: null,
    },
    formula: {
      equation: 'Monatlicher Cashflow = Kaltmiete − Annuität − nicht umlegbares Hausgeld',
      variables: [
        { symbol: 'Kaltmiete', description: 'Monatliche Mieteinnahmen (ohne Nebenkosten)' },
        { symbol: 'Annuität', description: 'Monatliche Kreditrate (Zins + Tilgung)' },
        { symbol: 'Nicht umlegbares Hausgeld', description: 'Verwaltungskosten + Instandhaltungsrücklage (ca. 25–35% des Gesamt-Hausgeldes)' },
      ],
    },
    sections: [
      {
        h2: 'Was ist der Cashflow bei einer Immobilie?',
        content: 'Der Cashflow beschreibt den tatsächlichen monatlichen Geldfluss durch deine Immobilieninvestition. Er beantwortet die Frage: Muss ich monatlich Geld zuschießen, oder erwirtschaftet die Immobilie Überschüsse?\n\nEin **positiver Cashflow** bedeutet: Die Mieteinnahmen übersteigen alle laufenden Kosten. Die Immobilie trägt sich selbst und wirft sogar etwas ab.\n\nEin **negativer Cashflow** bedeutet: Du musst monatlich Geld zuschießen. Das ist nicht automatisch schlecht – viele Investoren akzeptieren negativen Cashflow bei starker Wertsteigerungserwartung. Aber du brauchst ausreichend Liquiditätsreserve.',
      },
      {
        h2: 'Cashflow verbessern: Die fünf Hebel',
        content: '1. **Kaufpreis verhandeln**: Jeder Prozent weniger Kaufpreis senkt die Kreditrate und verbessert den Cashflow direkt.\n\n2. **Tilgung optimieren**: Niedrigere Tilgung (z.B. 2% statt 3%) verbessert den monatlichen Cashflow erheblich.\n\n3. **Zinssatz vergleichen**: 0,3% weniger Zins können den Cashflow um 50–100 € pro Monat verbessern.\n\n4. **Hausgeld prüfen**: Hohe WEG-Rücklagen oder Verwaltungskosten drücken den Cashflow.\n\n5. **Marktgerechte Miete**: Den Mietspiegel kennen und ausschöpfen – aber fair bleiben.',
      },
    ],
    example: {
      title: 'ETW in Hannover',
      inputs: [
        { label: 'Kaufpreis', value: '200.000 €' },
        { label: 'Eigenkapital (25% + NK)', value: '70.000 €' },
        { label: 'Darlehen (3,5% Zins, 2% Tilgung)', value: '130.000 €' },
        { label: 'Monatliche Annuität', value: '596 €' },
        { label: 'Kaltmiete', value: '750 €' },
        { label: 'Nicht umlegbares Hausgeld', value: '80 €' },
      ],
      result: { label: 'Monatlicher Cashflow', value: '+74 €', highlight: true },
      note: 'Der IRR über 20 Jahre (inkl. 40% Wertsteigerung) läge bei ca. 8,5%.',
    },
    faqs: [
      {
        q: 'Was ist ein guter Cashflow bei Immobilien?',
        a: 'Positiv ist besser als negativ. In B/C-Lagen (Leipzig, Dresden, Hannover) sind 50–200 € positiver Cashflow pro Monat realistisch. In A-Lagen (München, Hamburg) ist positiver Cashflow nach Finanzierung kaum erreichbar – hier setzt man auf Wertsteigerung.',
      },
      {
        q: 'Warum sind Cashflow und IRR verschiedene Kennzahlen?',
        a: 'Cashflow = monatlicher Geldfluss (Ist-Zustand). IRR = durchschnittliche jährliche Eigenkapitalrendite über die gesamte Haltedauer (inkl. Wertsteigerung und Verkaufserlös). Eine Immobilie kann negativen Cashflow haben, aber gute IRR (bei Wertsteigerung), oder positiven Cashflow mit schlechtem IRR (bei Überpreis).',
      },
    ],
    related: [
      { href: '/cashflow-rechner', label: 'Cashflow-Rechner (vollständig)', description: 'Mit IRR, AfA, Steuer, Wertsteigerung' },
      { href: '/ratgeber/cashflow-immobilien', label: 'Cashflow Ratgeber', description: 'Berechnung, Beispiele und Tipps' },
      { href: '/rechner/eigenkapitalrendite-rechner', label: 'Eigenkapitalrendite Rechner', description: 'Rendite auf eingesetztes Kapital' },
    ],
  },

  {
    slug: 'eigenkapitalrendite-rechner',
    h1: 'Eigenkapitalrendite Rechner Immobilien – EK-Rendite berechnen',
    metaTitle: 'Eigenkapitalrendite Immobilien berechnen 2026 – Rechner & Formel | Immo-Rechner',
    metaDescription: 'Eigenkapitalrendite deiner Immobilie kostenlos berechnen. Was ist eine gute Eigenkapitalrendite? Formel, Leverage-Effekt und Beispiel.',
    intro: 'Die Eigenkapitalrendite zeigt, wie effizient dein eingesetztes Eigenkapital arbeitet. Im Gegensatz zur Mietrendite bezieht sie sich nur auf das tatsächlich investierte Eigenkapital – nicht auf den Gesamtkaufpreis.',
    primaryCalculator: {
      path: '/cashflow-rechner',
      label: 'Eigenkapitalrendite berechnen (inkl. IRR) →',
      component: null,
    },
    formula: {
      equation: 'Eigenkapitalrendite (%) = (Jahres-Cashflow ÷ eingesetztes Eigenkapital) × 100',
      variables: [
        { symbol: 'Jahres-Cashflow', description: 'Monatlicher Cashflow × 12 (nach Finanzierungskosten)' },
        { symbol: 'Eingesetztes Eigenkapital', description: 'Eigenkapital + Kaufnebenkosten' },
      ],
    },
    sections: [
      {
        h2: 'Eigenkapitalrendite vs. Objektrendite',
        content: 'Die Objektrendite (oder Gesamtkapitalrendite) berechnet sich aus dem Nettomietertrag im Verhältnis zur Gesamtinvestition (Kaufpreis + Nebenkosten). Sie ignoriert die Finanzierungsstruktur.\n\nDie Eigenkapitalrendite hingegen misst die Rendite auf das tatsächlich eingesetzte Kapital. Da Immobilien meist fremdfinanziert werden, weicht sie erheblich von der Objektrendite ab – in beide Richtungen (Leverage-Effekt).\n\nBeispiel: Objektrendite 4%, Darlehenszins 3,5% → Eigenkapitalrendite bei 20% EK-Quote: ~6–8% (positiver Leverage). Bei Objektrendite 3%, Zins 3,5% → negativer Leverage: Eigenkapitalrendite sinkt unter Objektrendite.',
      },
      {
        h2: 'Der IRR als bessere Alternative',
        content: 'Die einfache Eigenkapitalrendite aus Cashflow / EK ist eine Momentaufnahme. Der IRR (Internal Rate of Return) ist die überlegene Kennzahl: Er berücksichtigt den Zeitwert des Geldes, Mieterhöhungen über die Haltedauer, Tilgung und steigende Cashflows sowie den Verkaufserlös am Ende der Haltedauer.\n\nUnser Cashflow-Rechner berechnet automatisch den IRR über 10–30 Jahre – die umfassendste Messgröße für die Eigenkapitalrendite.',
      },
    ],
    example: {
      title: 'Leverage-Effekt: 20% vs. 40% Eigenkapital',
      inputs: [
        { label: 'Kaufpreis', value: '300.000 €' },
        { label: 'Szenario A: 20% EK + NK', value: '90.000 €' },
        { label: 'Szenario B: 40% EK + NK', value: '150.000 €' },
        { label: 'Jährlicher Cashflow (A)', value: '2.400 €' },
        { label: 'Jährlicher Cashflow (B)', value: '4.800 €' },
      ],
      result: { label: 'Eigenkapitalrendite A / B', value: '2,7% / 3,2%', highlight: true },
      note: 'Der IRR über 20 Jahre (inkl. Wertsteigerung) ist bei A deutlich besser durch den Leverage-Effekt.',
    },
    faqs: [
      {
        q: 'Was ist eine gute Eigenkapitalrendite bei Immobilien?',
        a: 'Als laufende Cashflow-Rendite auf EK: 3–6% p.a. gilt als gut. Als IRR (Gesamtrendite über Haltedauer): 6–10% gilt als gut bis sehr gut. Der IRR ist die aussagekräftigere Kennzahl, da er alle Faktoren über die Haltedauer einbezieht.',
      },
      {
        q: 'Wie wirkt sich der Leverage-Effekt auf die Eigenkapitalrendite aus?',
        a: 'Wenn die Objektrendite über dem Darlehenszins liegt, erhöht jeder fremdfinanzierte Euro die Eigenkapitalrendite. Bei Objektrendite 5% und Zins 3,5%: Mit 20% EK ist die EK-Rendite höher als mit 40% EK. Der Effekt dreht sich um, wenn der Zins über der Objektrendite liegt.',
      },
    ],
    related: [
      { href: '/cashflow-rechner', label: 'Cashflow Rechner (inkl. IRR)', description: 'Vollständige EK-Rendite über die Haltedauer' },
      { href: '/rechner/leverage-effekt-rechner', label: 'Leverage Effekt Rechner', description: 'Hebelwirkung visualisieren' },
      { href: '/ratgeber/eigenkapital-immobilie', label: 'Eigenkapital Ratgeber', description: 'Wie viel EK brauchst du?' },
    ],
  },

  {
    slug: 'leverage-effekt-rechner',
    h1: 'Leverage Effekt Rechner Immobilien – Hebelwirkung des Fremdkapitals',
    metaTitle: 'Leverage Effekt Immobilien Rechner 2026 – Hebelwirkung berechnen | Immo-Rechner',
    metaDescription: 'Leverage Effekt bei Immobilien berechnen und verstehen. Wie wirkt sich Fremdkapital auf die Eigenkapitalrendite aus? Interaktives Beispiel mit Rechner.',
    intro: 'Der Leverage-Effekt (Hebelwirkung) ist eines der mächtigsten Konzepte für Immobilieninvestoren. Durch Fremdfinanzierung kann die Eigenkapitalrendite erheblich gesteigert werden – solange die Objektrendite über dem Zinssatz liegt.',
    primaryCalculator: {
      path: '/cashflow-rechner',
      label: 'Leverage-Effekt im Cashflow-Rechner simulieren →',
      component: null,
    },
    formula: {
      equation: 'EK-Rendite = Objektrendite + (Objektrendite − Fremdkapitalzins) × (FK ÷ EK)',
      variables: [
        { symbol: 'Objektrendite', description: 'Nettomietrendite auf Gesamtkapital' },
        { symbol: 'Fremdkapitalzins', description: 'Darlehenszinssatz p.a.' },
        { symbol: 'FK', description: 'Fremdkapital (Darlehen)' },
        { symbol: 'EK', description: 'Eigenkapital (inkl. Kaufnebenkosten)' },
      ],
    },
    sections: [
      {
        h2: 'Wie funktioniert der Leverage-Effekt?',
        content: 'Stell dir vor: Eine Immobilie erzielt 5% Nettomietrendite auf den Kaufpreis. Du finanzierst sie vollständig aus Eigenkapital – deine EK-Rendite beträgt 5%.\n\nJetzt finanzierst du 80% mit einem Bankdarlehen zu 3,5% Zins. Die Bank erhält 3,5% auf das geliehene Kapital, du kassierst die restliche Rendite (5% − 3,5% = 1,5% Differenz) auf ein deutlich kleineres EK-Einsatz. Deine EK-Rendite steigt auf 11–12%.\n\nDer Schlüssel: Die Differenz zwischen Objektrendite und Darlehenszins wird auf das EK "gehebelt" – je kleiner das EK im Verhältnis zum Gesamtkapital, desto stärker der Hebel.',
      },
      {
        h2: 'Wenn der Hebel nach hinten losgeht: Negativer Leverage',
        content: 'Der Leverage-Effekt wirkt auch umgekehrt. Wenn der Darlehenszins über der Objektrendite liegt, zerstört jeder fremdfinanzierte Euro Rendite.\n\nBeispiel (typisch 2023/2024): Objektrendite 3%, Darlehenszins 4%. Mit 80% Fremdfinanzierung sinkt deine EK-Rendite auf unter 3% – obwohl du die Immobilie "gehebelt" hast.\n\nFazit: Leverage ist kein Selbstläufer. Es kommt entscheidend auf die Zinsdifferenz an. Prüfe immer: Objektrendite > Darlehenszins?',
      },
    ],
    example: {
      title: 'Leverage-Effekt bei 5% Objektrendite und 3,5% Zins',
      inputs: [
        { label: 'Kaufpreis + NK', value: '330.000 €' },
        { label: 'Objektrendite (netto)', value: '5,0% (= 16.500 €/Jahr)' },
        { label: '100% EK → EK-Rendite', value: '5,0%' },
        { label: '20% EK (66.000 €), 80% FK zu 3,5% → EK-Rendite', value: '~11,5%' },
      ],
      result: { label: 'Hebel-Effekt', value: '+6,5 Prozentpunkte EK-Rendite', highlight: true },
      note: 'Dreht sich der Zins über die Objektrendite, wird der Effekt negativ.',
    },
    faqs: [
      {
        q: 'Wann macht Leverage bei Immobilien Sinn?',
        a: 'Immer dann, wenn Objektrendite > Darlehenszins. Dann erhöht Fremdkapital deine EK-Rendite. Aktuell (2026): Bei Zinsen von 3,5–4% sollte die Nettomietrendite mindestens bei 4,5–5% liegen, damit Leverage positiv wirkt.',
      },
      {
        q: 'Wie viel Fremdkapital ist bei Immobilien optimal?',
        a: 'Es gibt kein universales Optimum. Mehr FK = höhere EK-Rendite (bei positivem Leverage), aber auch höheres Risiko und schlechterer Cashflow. Die meisten erfahrenen Kapitalanleger finanzieren 70–80% und behalten 20–30% EK + NK als Grundlage.',
      },
    ],
    related: [
      { href: '/rechner/eigenkapitalrendite-rechner', label: 'Eigenkapitalrendite Rechner', description: 'EK-Rendite direkt berechnen' },
      { href: '/ratgeber/eigenkapital-immobilie', label: 'Eigenkapital Ratgeber', description: 'Leverage-Effekt mit konkreten Beispielen' },
      { href: '/cashflow-rechner', label: 'Cashflow Rechner', description: 'Verschiedene EK-Szenarien vergleichen' },
    ],
  },

  {
    slug: 'afa-rechner-immobilien',
    h1: 'AfA Rechner Immobilien – Abschreibung für Abnutzung berechnen',
    metaTitle: 'AfA Rechner Immobilien 2026 – Abschreibung berechnen & Steuer sparen | Immo-Rechner',
    metaDescription: 'AfA (Abschreibung für Abnutzung) bei Immobilien berechnen: 2% über 50 Jahre oder 3% Neubau. Wie viel Steuer sparst du durch die Immobilien-Abschreibung?',
    intro: 'Die AfA (Abschreibung für Abnutzung) ist der wichtigste Steuervorteil für Immobilieninvestoren. Sie ermöglicht es, den Wertverlust des Gebäudes (nicht des Grundstücks) als Werbungskosten von der Steuer abzusetzen – und damit die Steuerlast deutlich zu senken.',
    primaryCalculator: {
      path: '/cashflow-rechner',
      label: 'AfA und Steuereffekt im Rechner simulieren →',
      component: null,
    },
    formula: {
      equation: 'Jährliche AfA = Gebäudeanteil × AfA-Satz',
      variables: [
        { symbol: 'Gebäudeanteil', description: 'Kaufpreis + NK minus Grundstücksanteil (oft 20–30% Grundstück)' },
        { symbol: 'AfA-Satz', description: '2% p.a. für Gebäude gebaut ab 1925, 3% für Neubauten ab 01.01.2023' },
      ],
    },
    sections: [
      {
        h2: 'Wie funktioniert die AfA bei Immobilien?',
        content: 'Die AfA ist eine fiktive Ausgabe: Du hast zwar kein Geld ausgegeben, kannst aber trotzdem einen Betrag als Werbungskosten abziehen. Das reduziert deinen zu versteuernden Gewinn aus Vermietung und Verpachtung.\n\nDer AfA-Satz ist geregelt in §7 Abs. 4 EStG:\n- **Gebäude gebaut nach dem 31.12.1924**: 2% p.a. → Abschreibung über 50 Jahre\n- **Gebäude gebaut vor dem 01.01.1925**: 2,5% p.a. → Abschreibung über 40 Jahre\n- **Neubauten, Fertigstellung ab 01.01.2023**: 3% p.a. → Abschreibung über ~33 Jahre\n\nDie AfA-Bemessungsgrundlage ist der Gebäudewert ohne Grundstück. Bei einem Kauf gilt: Kaufpreis + anteilige Nebenkosten, minus Grundstücksanteil (üblicherweise 20–30% in B-Lagen, bis zu 50% in teuren A-Lagen).',
      },
      {
        h2: 'Wie viel Steuern sparst du durch die AfA?',
        content: 'Das hängt von deinem Grenzsteuersatz ab. Angenommen, du verdienst 80.000 € brutto und hast einen Grenzsteuersatz von 42%:\n\nImmobilie: Kaufpreis 300.000 €, Grundstücksanteil 25% = 75.000 €. Gebäudeanteil: 225.000 €.\nJährliche AfA (2%): 4.500 €.\nSteuerersparnis: 4.500 € × 42% = 1.890 € pro Jahr.\n\nDas klingt vielleicht nicht nach viel – aber über 10 Jahre sind das 18.900 €. Über 20 Jahre: 37.800 €. Und das ist allein der AfA-Effekt, ohne Zinsen und andere Werbungskosten.',
      },
    ],
    example: {
      title: 'AfA-Berechnung für eine Eigentumswohnung',
      inputs: [
        { label: 'Kaufpreis', value: '280.000 €' },
        { label: 'Kaufnebenkosten (Bayern, ~6%)', value: '16.800 €' },
        { label: 'Gesamt-Anschaffungskosten', value: '296.800 €' },
        { label: 'Grundstücksanteil (20%)', value: '59.360 €' },
        { label: 'AfA-Bemessungsgrundlage (Gebäude)', value: '237.440 €' },
        { label: 'AfA-Satz (Bj. 2005 → 2%)', value: '2%' },
      ],
      result: { label: 'Jährliche AfA', value: '4.749 €/Jahr', highlight: true },
      note: 'Bei 42% Grenzsteuersatz = 1.994 € Steuerersparnis pro Jahr.',
    },
    faqs: [
      {
        q: 'Was ist die AfA bei Immobilien?',
        a: 'AfA steht für "Abschreibung für Abnutzung". Bei Immobilien zur Vermietung kann der Wertverlust des Gebäudes (nicht des Grundstücks) jährlich als Werbungskosten abgesetzt werden. Der Standardsatz beträgt 2% p.a. über 50 Jahre.',
      },
      {
        q: 'Gilt die AfA auch beim Kauf von Gebrauchtwohnungen?',
        a: 'Ja. Auch beim Kauf einer Bestandsimmobilie kann der neue Eigentümer die volle AfA geltend machen – ab dem Jahr des Kaufs anteilig, ab dem Folgejahr vollständig. Die AfA-Bemessungsgrundlage sind die eigenen Anschaffungskosten (nicht der historische Kaufpreis des Vorbesitzers).',
      },
      {
        q: 'Was ist der Unterschied zwischen 2% und 3% AfA?',
        a: 'Der 3%-Satz gilt für Wohngebäude, deren Herstellung nach dem 31.12.2022 begonnen wurde (steuerlicher Zeitpunkt) – also Neubauten ab 2023. Für alle älteren Gebäude gilt der 2%-Satz. Der 3%-Satz ermöglicht höhere jährliche Abschreibungen und damit mehr Steuerersparnis in frühen Jahren.',
      },
    ],
    related: [
      { href: '/cashflow-rechner', label: 'Cashflow Rechner (mit AfA)', description: 'Steuereffekte automatisch berechnen' },
      { href: '/lexikon/afa-immobilien', label: 'AfA im Lexikon', description: 'Alle Details zur Immobilien-Abschreibung' },
      { href: '/ratgeber/finanzierung', label: 'Finanzierungsratgeber', description: 'Steuervorteile der Finanzierung' },
    ],
  },

  {
    slug: 'irr-rechner-immobilien',
    h1: 'IRR Rechner Immobilien – Internal Rate of Return kostenlos berechnen',
    metaTitle: 'IRR Rechner Immobilien 2026 – Internal Rate of Return berechnen | Immo-Rechner',
    metaDescription: 'IRR (Internal Rate of Return) deiner Immobilie kostenlos berechnen. Was ist ein guter IRR? Formel, Bedeutung und kostenloser Rechner inkl. Cashflow-Analyse.',
    intro: 'Der IRR (Internal Rate of Return, Interner Zinsfuß) ist die wichtigste Kennzahl für die Gesamtrentabilität einer Immobilieninvestition. Er berücksichtigt alle Cashflows über die Haltedauer und macht verschiedene Investitionen direkt vergleichbar.',
    primaryCalculator: {
      path: '/cashflow-rechner',
      label: 'IRR jetzt berechnen →',
      component: null,
    },
    formula: {
      equation: 'IRR: NPV = ∑ [CFₜ / (1+IRR)ᵗ] = 0',
      variables: [
        { symbol: 'NPV', description: 'Net Present Value (Kapitalwert) = 0 beim IRR' },
        { symbol: 'CFₜ', description: 'Cashflow im Jahr t (inkl. Anfangsinvestition als negativer CF)' },
        { symbol: 'IRR', description: 'Gesucht: Zinssatz, bei dem NPV = 0' },
      ],
    },
    sections: [
      {
        h2: 'Warum der IRR wichtiger ist als die Mietrendite',
        content: 'Die Mietrendite zeigt nur eine Momentaufnahme. Der IRR berücksichtigt:\n\n1. **Dein Eigenkapital** (nicht den Gesamtkaufpreis) als Ausgangsinvestition\n2. **Alle monatlichen Cashflows** über die gesamte Haltedauer\n3. **Mieterhöhungen** (typisch 1–2% p.a.)\n4. **Kostensteigerungen** (Instandhaltung, Verwaltung)\n5. **Den Zeitwert des Geldes** (100 € in 10 Jahren sind weniger wert als heute)\n6. **Verkaufserlös** abzüglich Restschuld und Kosten\n\nEin Investorenvergleich: Zwei Wohnungen, beide mit 5% Bruttomietrendite – aber unterschiedlichen Wertsteigerungserwartungen, Cashflows und Finanzierungskosten. Der IRR macht sie direkt vergleichbar.',
      },
    ],
    example: {
      title: 'IRR-Beispiel: ETW in Dresden über 20 Jahre',
      inputs: [
        { label: 'Kaufpreis', value: '200.000 €' },
        { label: 'Eigenkapital (EK + NK)', value: '62.000 €' },
        { label: 'Monatlicher Cashflow (Ø)', value: '+67 €' },
        { label: 'Haltedauer', value: '20 Jahre' },
        { label: 'Wertsteigerung gesamt (50%)', value: '100.000 €' },
      ],
      result: { label: 'IRR über 20 Jahre', value: '~9,0% p.a.', highlight: true },
      note: 'Das Eigenkapital von 62.000 € hat sich über 20 Jahre wie ein Konto mit 9% Jahreszins entwickelt.',
    },
    faqs: [
      {
        q: 'Was ist ein guter IRR bei Immobilien?',
        a: 'Unter 3%: Unattraktiv. 3–6%: Akzeptabel. 6–10%: Gut bis sehr gut. Über 10%: Exzellent – typischerweise nur bei günstigem Einkauf oder starker Wertsteigerung erreichbar.',
      },
      {
        q: 'Wie wird der IRR berechnet?',
        a: 'Der IRR lässt sich nicht direkt algebraisch lösen – er wird iterativ berechnet. Man sucht den Zinssatz, bei dem der Kapitalwert aller Zahlungsströme gleich null ist. Unser Cashflow-Rechner macht das automatisch.',
      },
    ],
    related: [
      { href: '/irr-rechner', label: 'IRR Rechner (Erklärungsseite)', description: 'IRR verstehen und Richtwerte' },
      { href: '/ratgeber/irr-erklaert', label: 'IRR Ratgeber', description: 'Ausführliche Erklärung mit Beispielen' },
      { href: '/cashflow-rechner', label: 'Cashflow Rechner', description: 'IRR automatisch berechnen lassen' },
    ],
  },

  {
    slug: 'tilgungsrechner-kapitalanlage',
    h1: 'Tilgungsrechner Kapitalanlage – Annuität und Restschuld berechnen',
    metaTitle: 'Tilgungsrechner Kapitalanlage 2026 – Annuität & Restschuld | Immo-Rechner',
    metaDescription: 'Tilgungsrechner für Kapitalanlage-Immobilien: Annuität, monatliche Rate und Restschuld nach Zinsbindungsende berechnen. Optimale Tilgung für Investoren.',
    intro: 'Der Tilgungsrechner hilft dir, die optimale Finanzierungsstruktur für deine Kapitalanlage zu finden. Wie hoch ist die monatliche Rate? Wie viel Restschuld bleibt nach 10 oder 15 Jahren? Und wie viel Tilgung macht für Investoren Sinn?',
    primaryCalculator: {
      path: '/cashflow-rechner',
      label: 'Tilgung im Cashflow-Rechner simulieren →',
      component: null,
    },
    formula: {
      equation: 'Monatliche Rate = Darlehen × (monatlicher Zins / (1 − (1 + monatl. Zins)^(−Laufzeit)))',
      variables: [
        { symbol: 'Darlehen', description: 'Kreditsumme in Euro' },
        { symbol: 'Monatlicher Zins', description: 'Jahreszins ÷ 12' },
        { symbol: 'Laufzeit', description: 'Anzahl der Monate (z.B. 10 Jahre = 120 Monate)' },
      ],
    },
    sections: [
      {
        h2: 'Wie viel Tilgung ist für Kapitalanleger optimal?',
        content: 'Anders als bei der Eigennutzung ist die optimale Tilgung für Kapitalanleger eine Abwägung:\n\n**Argumente für niedrige Tilgung (1–2%):**\n- Höherer Cashflow (mehr Geld jeden Monat)\n- Darlehenszinsen sind Werbungskosten → Steuerersparnis\n- Gesparte Tilgung kann in weitere Immobilien investiert werden\n\n**Argumente für höhere Tilgung (2–3%):**\n- Schnellerer Schuldenabbau\n- Geringeres Zinsänderungsrisiko bei Anschlussfinanzierung\n- Mehr Sicherheit bei Mietausfällen\n\nDie meisten erfahrenen Kapitalanleger wählen 2% Tilgung und sichern sich Sondertilgungsrechte von 5–10% p.a. für Flexibilität.',
      },
      {
        h2: 'Restschuld nach Zinsbindungsende – was bedeutet das?',
        content: 'Bei 10 Jahren Zinsbindung und 2% Tilgung (Standardfall) ist nach Ablauf die Restschuld noch erheblich. Beispiel: 200.000 € Darlehen, 3,5% Zins, 2% Tilgung → Restschuld nach 10 Jahren: ca. 170.000 €.\n\nDas ist das Anschlussfinanzierungsrisiko: Steigen die Zinsen bis dahin stark, wird die Anschlussrate deutlich höher. Deshalb: Bei günstigen Zinsen längere Zinsbindung (15–20 Jahre) wählen, auch wenn sie etwas mehr kostet.',
      },
    ],
    example: {
      title: 'Annuitätenrechnung: 200.000 € Darlehen',
      inputs: [
        { label: 'Darlehenssumme', value: '200.000 €' },
        { label: 'Zinssatz p.a.', value: '3,5%' },
        { label: 'Anfängliche Tilgung p.a.', value: '2,0%' },
        { label: 'Monatliche Rate', value: '916,67 €' },
        { label: 'Zinsen im ersten Monat', value: '583,33 €' },
        { label: 'Tilgung im ersten Monat', value: '333,33 €' },
      ],
      result: { label: 'Restschuld nach 10 Jahren', value: 'ca. 169.400 €', highlight: true },
      note: 'Tipp: Sondertilgungsrecht von 5% p.a. einbauen – gibt dir Flexibilität ohne höhere Pflichtrate.',
    },
    faqs: [
      {
        q: 'Wie viel Tilgung ist bei einer Kapitalanlage sinnvoll?',
        a: 'Typischerweise 1,5–2% anfängliche Tilgung für Kapitalanleger. Das hält die monatliche Rate niedrig (besserer Cashflow) und die Darlehenszinsen hoch – was steuerlich vorteilhaft ist. Dazu Sondertilgungsrechte vereinbaren.',
      },
      {
        q: 'Was ist die Annuität?',
        a: 'Die Annuität ist die konstante monatliche Kreditrate. Sie setzt sich aus einem sinkenden Zinsanteil und einem steigenden Tilgungsanteil zusammen. Mit jeder Rate sinkt die Restschuld, damit sinken die Zinsen – und der Tilgungsanteil steigt entsprechend.',
      },
    ],
    related: [
      { href: '/cashflow-rechner', label: 'Cashflow Rechner', description: 'Tilgung und Cashflow zusammen simulieren' },
      { href: '/ratgeber/finanzierung', label: 'Finanzierungsratgeber', description: 'Zinsbindung, Tilgung und Strategie' },
      { href: '/rechner/leverage-effekt-rechner', label: 'Leverage Effekt Rechner', description: 'EK-Rendite bei verschiedenen Tilgungen' },
    ],
  },

  {
    slug: 'wertentwicklung-rechner',
    h1: 'Immobilien Wertentwicklung Rechner – Wertsteigerung berechnen',
    metaTitle: 'Immobilien Wertentwicklung Rechner 2026 – Wertsteigerung berechnen | Immo-Rechner',
    metaDescription: 'Wertentwicklung deiner Immobilie über 10, 20 oder 30 Jahre kostenlos berechnen. Wie viel ist deine Immobilie in 20 Jahren wert? Rechner und Richtwerte.',
    intro: 'Die Wertsteigerung ist neben dem laufenden Cashflow der zweite große Renditetreiber bei Immobilien. Mit dem Wertentwicklungsrechner simulierst du, wie sich deine Immobilie bei verschiedenen Szenarien entwickelt.',
    primaryCalculator: {
      path: '/cashflow-rechner',
      label: 'Wertsteigerung im Cashflow-Rechner simulieren →',
      component: null,
    },
    formula: {
      equation: 'Zukünftiger Wert = Kaufpreis × (1 + jährliche Steigerungsrate)^Jahre',
      variables: [
        { symbol: 'Kaufpreis', description: 'Aktueller Kaufpreis der Immobilie' },
        { symbol: 'Steigerungsrate', description: 'Erwartete jährliche Wertsteigerung (z.B. 0,02 für 2%)' },
        { symbol: 'Jahre', description: 'Haltedauer in Jahren' },
      ],
    },
    sections: [
      {
        h2: 'Welche Wertsteigerung ist bei Immobilien realistisch?',
        content: 'Die historische Wertsteigerung von Wohnimmobilien in Deutschland lag langfristig bei 1,5–3% p.a. (in Realgröße, also nach Inflation). In den Boomjahren 2009–2022 waren es teils 5–8% p.a. in Ballungsgebieten.\n\nFür Planungszwecke empfehle ich folgende Szenarien:\n\n**Konservativ**: 1% p.a. (real, leicht unter Inflation)\n**Realistisch**: 2% p.a. (entspricht langfristigem Trend)\n**Optimistisch**: 3–4% p.a. (für gute B-Lagen mit Nachholbedarf)\n\nFür Kalkulationszwecke immer mehrere Szenarien durchrechnen – unser Cashflow-Rechner ermöglicht das.',
      },
      {
        h2: 'Wertsteigerung und Steuern: Die Spekulationsfrist',
        content: 'Beim Verkauf einer vermieteten Immobilie fällt Spekulationssteuer an, wenn du die Immobilie innerhalb von 10 Jahren verkaufst. Nach Ablauf der 10-Jahresfrist ist der Gewinn steuerfrei.\n\nFür die IRR-Berechnung ist das wichtig: Wer plant, nach 15 oder 20 Jahren zu verkaufen, kann den Verkaufsgewinn steuerfrei vereinnahmen. Das verbessert den IRR erheblich.',
      },
    ],
    example: {
      title: 'Wertsteigerung bei verschiedenen Szenarien (Kaufpreis 300.000 €)',
      inputs: [
        { label: 'Nach 10 Jahren (1% p.a.)', value: '331.358 €' },
        { label: 'Nach 10 Jahren (2% p.a.)', value: '365.698 €' },
        { label: 'Nach 20 Jahren (2% p.a.)', value: '445.846 €' },
        { label: 'Nach 20 Jahren (3% p.a.)', value: '541.834 €' },
      ],
      result: { label: 'Unterschied (2% vs. 3%, 20 Jahre)', value: '96.000 €', highlight: true },
      note: '1 Prozentpunkt mehr Wertsteigerung macht über 20 Jahre fast 100.000 € Unterschied.',
    },
    faqs: [
      {
        q: 'Wie viel Wertsteigerung kann ich bei Immobilien erwarten?',
        a: 'Langfristig realistisch sind 1,5–2,5% p.a. (nominal). In sehr guten Lagen (München, Hamburg) waren es historisch mehr. In strukturschwachen Regionen kann es auch 0% oder negativ sein. Plane immer mehrere Szenarien durch.',
      },
      {
        q: 'Ab wann ist Wertsteigerung bei Immobilien steuerfrei?',
        a: 'Nach 10 Jahren Haltedauer (Spekulationsfrist gemäß §23 EStG) ist der Veräußerungsgewinn bei vermieteten Immobilien steuerfrei. Selbst genutzte Immobilien sind auch vorher steuerfrei, wenn sie im Jahr des Verkaufs und den zwei Vorjahren selbst bewohnt wurden.',
      },
    ],
    related: [
      { href: '/cashflow-rechner', label: 'Cashflow Rechner', description: 'IRR unter Einbezug der Wertsteigerung' },
      { href: '/rechner/irr-rechner-immobilien', label: 'IRR Rechner', description: 'Gesamtrendite inkl. Wertsteigerung' },
      { href: '/lexikon/spekulationsfrist', label: 'Spekulationsfrist im Lexikon', description: 'Steuerfrei nach 10 Jahren' },
    ],
  },
];

export function getCalculatorBySlug(slug: string): CalculatorPage | undefined {
  return CALCULATORS.find((c) => c.slug === slug);
}

export const CALCULATOR_SLUGS = CALCULATORS.map((c) => c.slug);
