// lib/mikrolage.ts
// Free micro-location analysis using OpenStreetMap data (Nominatim + Overpass API)

// ============ TYPES ============

export interface GeocodingResult {
  lat: number;
  lng: number;
  displayName: string;
}

export interface POIResult {
  category: string;
  categoryKey: string;
  count: number;
  weight: number;
  idealCount: number;
  radius: number;
  icon: string;
  items: POIItem[];
}

export interface POIItem {
  name: string;
  lat: number;
  lng: number;
  distance: number; // meters from target
  type: string;
}

export interface CategoryScore {
  category: string;
  categoryKey: string;
  score: number;
  maxScore: number;
  count: number;
  assessment: 'Sehr gut' | 'Gut' | 'Ausbaufähig' | 'Mangelhaft' | 'Nachteil';
  icon: string;
  radius: number;
  items: POIItem[];
}

export interface MikrolageResult {
  overallScore: number;
  overallAssessment: string;
  details: CategoryScore[];
  totalPOIs: number;
  address: string;
  lat: number;
  lng: number;
}

// ============ CONFIG ============

interface POICategory {
  name: string;
  key: string;
  query: string;
  weight: number;
  idealCount: number;
  radius: number;
  icon: string;
}

const POI_CATEGORIES: POICategory[] = [
  {
    name: 'ÖPNV-Haltestellen',
    key: 'oepnv',
    query: 'node["public_transport"="stop_position"]',
    weight: 20, radius: 1000, idealCount: 5, icon: '🚌',
  },
  {
    name: 'Supermärkte & Nahversorgung',
    key: 'supermarkt',
    query: 'nwr["shop"~"supermarket|convenience|grocery"]',
    weight: 15, radius: 1000, idealCount: 3, icon: '🛒',
  },
  {
    name: 'Schulen & Kitas',
    key: 'bildung',
    query: 'nwr["amenity"~"school|kindergarten"]',
    weight: 15, radius: 1500, idealCount: 3, icon: '🏫',
  },
  {
    name: 'Ärzte & Apotheken',
    key: 'gesundheit',
    query: 'nwr["amenity"~"pharmacy|doctors|clinic|hospital"]',
    weight: 10, radius: 1500, idealCount: 3, icon: '🏥',
  },
  {
    name: 'Restaurants & Cafés',
    key: 'gastronomie',
    query: 'nwr["amenity"~"restaurant|cafe"]',
    weight: 5, radius: 500, idealCount: 5, icon: '☕',
  },
  {
    name: 'Parks & Grünflächen',
    key: 'gruen',
    query: 'nwr["leisure"~"park|garden|playground"]',
    weight: 10, radius: 1000, idealCount: 2, icon: '🌳',
  },
  {
    name: 'Bahnhöfe',
    key: 'bahn',
    query: 'nwr["railway"~"station|halt"]',
    weight: 15, radius: 2000, idealCount: 1, icon: '🚆',
  },
  {
    name: 'Hauptstraßen (Lärm)',
    key: 'laerm',
    query: 'way["highway"~"motorway|trunk|primary"]',
    weight: -10, radius: 200, idealCount: 0, icon: '🔊',
  },
];

// ============ GEOCODING ============

export async function geocodeAddress(address: string): Promise<GeocodingResult | null> {
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&countrycodes=de&limit=1&addressdetails=1`;
  
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'ImmoRechner/1.0 (https://immo-rechner.net)',
      'Accept': 'application/json',
    },
  });

  if (!response.ok) return null;

  const data = await response.json();
  if (!data || data.length === 0) return null;

  return {
    lat: parseFloat(data[0].lat),
    lng: parseFloat(data[0].lon),
    displayName: data[0].display_name,
  };
}

// ============ POI FETCHING ============

function haversineDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371000;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export async function fetchAllPOIs(lat: number, lng: number): Promise<POIResult[]> {
  const results: POIResult[] = [];

  // Build one combined Overpass query for efficiency (fewer API calls)
  for (const category of POI_CATEGORIES) {
    try {
      const query = `[out:json][timeout:10];(${category.query}(around:${category.radius},${lat},${lng}););out center body 20;`;
      
      const response = await fetch('https://overpass-api.de/api/interpreter', {
        method: 'POST',
        body: `data=${encodeURIComponent(query)}`,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });

      if (!response.ok) {
        results.push({
          category: category.name,
          categoryKey: category.key,
          count: 0,
          weight: category.weight,
          idealCount: category.idealCount,
          radius: category.radius,
          icon: category.icon,
          items: [],
        });
        continue;
      }

      const data = await response.json();
      const elements = data.elements || [];

      const items: POIItem[] = elements
        .map((el: any) => {
          const elLat = el.lat || el.center?.lat;
          const elLng = el.lon || el.center?.lon;
          if (!elLat || !elLng) return null;
          return {
            name: el.tags?.name || category.name,
            lat: elLat,
            lng: elLng,
            distance: Math.round(haversineDistance(lat, lng, elLat, elLng)),
            type: el.tags?.amenity || el.tags?.shop || el.tags?.leisure || el.tags?.railway || el.tags?.highway || '',
          };
        })
        .filter(Boolean)
        .sort((a: POIItem, b: POIItem) => a.distance - b.distance)
        .slice(0, 10); // max 10 items per category

      results.push({
        category: category.name,
        categoryKey: category.key,
        count: elements.length,
        weight: category.weight,
        idealCount: category.idealCount,
        radius: category.radius,
        icon: category.icon,
        items,
      });

      // Rate limit: wait 200ms between requests
      await new Promise(resolve => setTimeout(resolve, 200));
    } catch (err) {
      results.push({
        category: category.name,
        categoryKey: category.key,
        count: 0,
        weight: category.weight,
        idealCount: category.idealCount,
        radius: category.radius,
        icon: category.icon,
        items: [],
      });
    }
  }

  return results;
}

// ============ SCORING ============

export function calculateMikrolageScore(pois: POIResult[], address: string, lat: number, lng: number): MikrolageResult {
  let totalScore = 0;
  let maxScore = 0;
  const details: CategoryScore[] = [];

  for (const poi of pois) {
    const isNegative = poi.weight < 0;

    if (isNegative) {
      const penalty = Math.min(poi.count, 3) * Math.abs(poi.weight);
      totalScore -= penalty;
      details.push({
        category: poi.category,
        categoryKey: poi.categoryKey,
        score: -penalty,
        maxScore: 0,
        count: poi.count,
        assessment: poi.count === 0 ? 'Sehr gut' : poi.count <= 1 ? 'Gut' : 'Nachteil',
        icon: poi.icon,
        radius: poi.radius,
        items: poi.items,
      });
    } else {
      const fulfillment = Math.min(poi.count / Math.max(poi.idealCount, 1), 1.5);
      const score = Math.round(fulfillment * poi.weight);
      totalScore += score;
      maxScore += Math.round(poi.weight * 1.5);
      details.push({
        category: poi.category,
        categoryKey: poi.categoryKey,
        score,
        maxScore: Math.round(poi.weight * 1.5),
        count: poi.count,
        assessment:
          fulfillment >= 1 ? 'Sehr gut' :
          fulfillment >= 0.5 ? 'Gut' :
          fulfillment > 0 ? 'Ausbaufähig' : 'Mangelhaft',
        icon: poi.icon,
        radius: poi.radius,
        items: poi.items,
      });
    }
  }

  const normalizedScore = maxScore > 0
    ? Math.max(1, Math.min(10, Math.round((totalScore / maxScore) * 10)))
    : 5;

  return {
    overallScore: normalizedScore,
    overallAssessment: getAssessmentText(normalizedScore),
    details,
    totalPOIs: pois.reduce((sum, p) => sum + Math.max(0, p.count), 0),
    address,
    lat,
    lng,
  };
}

function getAssessmentText(score: number): string {
  if (score >= 9) return 'Exzellente Mikrolage';
  if (score >= 7) return 'Sehr gute Mikrolage';
  if (score >= 5) return 'Gute Mikrolage';
  if (score >= 3) return 'Durchschnittliche Mikrolage';
  return 'Verbesserungswürdige Mikrolage';
}

// ============ TEXT GENERATION (template-based, no API cost) ============

export function generateAnalysisText(result: MikrolageResult): string {
  const strengths = result.details.filter(d => d.assessment === 'Sehr gut' && d.score > 0);
  const weaknesses = result.details.filter(d => d.assessment === 'Mangelhaft' || d.assessment === 'Nachteil');
  const good = result.details.filter(d => d.assessment === 'Gut');

  let text = `Die Mikrolage erhält einen Score von ${result.overallScore}/10 (${result.overallAssessment}). `;
  text += `Im Umkreis wurden insgesamt ${result.totalPOIs} relevante Einrichtungen identifiziert. `;

  if (strengths.length > 0) {
    text += `Besonders positiv: ${strengths.map(s => s.category).join(', ')}. `;
  }
  if (good.length > 0) {
    text += `Gut aufgestellt: ${good.map(g => g.category).join(', ')}. `;
  }
  if (weaknesses.length > 0) {
    text += `Verbesserungspotenzial bei: ${weaknesses.map(w => w.category).join(', ')}. `;
  }

  // Noise assessment
  const laerm = result.details.find(d => d.categoryKey === 'laerm');
  if (laerm && laerm.count > 0) {
    text += `Hinweis: ${laerm.count} Hauptverkehrsstraße(n) im Radius von ${laerm.radius}m – dies kann die Wohnqualität und Vermietbarkeit beeinflussen. `;
  } else if (laerm) {
    text += `Positiv: Keine Hauptverkehrsstraßen in unmittelbarer Nähe – ruhige Lage. `;
  }

  return text;
}
