'use client';

import { useEffect, useState } from 'react';

export default function AnimatedHero() {
  const [mounted, setMounted] = useState(false);
  const [kaufpreis, setKaufpreis] = useState(0);
  const [cashflow, setCashflow] = useState(0);
  const [irr, setIrr] = useState(0);
  const [rendite, setRendite] = useState(0);
  const [vermoegen, setVermoegen] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    // Animate numbers
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    const targetKaufpreis = 285000;
    const targetCashflow = 247;
    const targetIrr = 8.4;
    const targetRendite = 5.2;
    const targetVermoegen = 156000;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setKaufpreis(Math.round(targetKaufpreis * easeOut));
      setCashflow(Math.round(targetCashflow * easeOut));
      setIrr(Number((targetIrr * easeOut).toFixed(1)));
      setRendite(Number((targetRendite * easeOut).toFixed(1)));
      setVermoegen(Math.round(targetVermoegen * easeOut));
      
      if (step >= steps) clearInterval(timer);
    }, interval);
    
    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="relative w-full max-w-4xl mx-auto aspect-[16/10] bg-gray-100 rounded-2xl" />
    );
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#7099A3]/20 via-[#5d7e87]/10 to-[#7099A3]/20 blur-3xl transform scale-110" />
      
      {/* Main Container */}
      <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Browser Chrome */}
        <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-white rounded-lg px-4 py-1.5 text-sm text-gray-500 border border-gray-200 flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              immo-rechner.net
            </div>
          </div>
        </div>
        
        {/* App Content */}
        <div className="p-6 md:p-8 bg-gradient-to-br from-gray-50 to-white">
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Left: Input Form Mock */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#7099A3] to-[#5d7e87] rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                  </svg>
                </div>
                <span className="font-semibold text-gray-800">Immobilie</span>
              </div>
              
              {/* Animated Input Fields */}
              <div className="space-y-3">
                <div className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm">
                  <div className="text-xs text-gray-500 mb-1">Kaufpreis</div>
                  <div className="text-xl font-bold text-gray-900">
                    {kaufpreis.toLocaleString('de-DE')} €
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm">
                    <div className="text-xs text-gray-500 mb-1">Kaltmiete</div>
                    <div className="text-lg font-semibold text-gray-900">1.050 €</div>
                  </div>
                  <div className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm">
                    <div className="text-xs text-gray-500 mb-1">Eigenkapital</div>
                    <div className="text-lg font-semibold text-gray-900">20%</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm">
                    <div className="text-xs text-gray-500 mb-1">Zinssatz</div>
                    <div className="text-lg font-semibold text-gray-900">3,5%</div>
                  </div>
                  <div className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm">
                    <div className="text-xs text-gray-500 mb-1">Tilgung</div>
                    <div className="text-lg font-semibold text-gray-900">2,0%</div>
                  </div>
                </div>
              </div>
              
              {/* Progress indicator */}
              <div className="flex items-center gap-2 pt-2">
                {[1, 2, 3, 4, 5].map((step) => (
                  <div
                    key={step}
                    className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                      step <= 3 ? 'bg-[#7099A3]' : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Right: Results */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <span className="font-semibold text-gray-800">Ergebnis</span>
              </div>
              
              {/* Key Metrics */}
              <div className="bg-gradient-to-br from-[#7099A3] to-[#5d7e87] rounded-xl p-4 text-white shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-white/70 text-xs mb-1">Monatl. Cashflow</div>
                    <div className="text-2xl font-bold">+{cashflow} €</div>
                  </div>
                  <div>
                    <div className="text-white/70 text-xs mb-1">IRR (20 Jahre)</div>
                    <div className="text-2xl font-bold">{irr}%</div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm">
                  <div className="text-xs text-gray-500 mb-1">Mietrendite</div>
                  <div className="text-xl font-bold text-[#7099A3]">{rendite}%</div>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm">
                  <div className="text-xs text-gray-500 mb-1">Vermögenszuwachs</div>
                  <div className="text-xl font-bold text-green-600">+{vermoegen.toLocaleString('de-DE')} €</div>
                </div>
              </div>
              
              {/* Mini Chart */}
              <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                <div className="text-xs text-gray-500 mb-3">Cashflow-Entwicklung</div>
                <div className="flex items-end gap-1 h-16">
                  {[40, 45, 50, 55, 58, 62, 68, 72, 78, 85, 90, 95].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-[#7099A3] to-[#7099A3]/60 rounded-t transition-all duration-500"
                      style={{ 
                        height: `${height}%`,
                        animationDelay: `${i * 100}ms`,
                        opacity: mounted ? 1 : 0,
                        transform: mounted ? 'scaleY(1)' : 'scaleY(0)',
                        transformOrigin: 'bottom',
                        transition: `all 0.5s ease-out ${i * 0.1}s`
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>Jahr 1</span>
                  <span>Jahr 20</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl shadow-lg flex items-center justify-center transform rotate-12 animate-float">
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      
      <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-gradient-to-br from-[#7099A3] to-[#5d7e87] rounded-xl shadow-lg flex items-center justify-center transform -rotate-12 animate-float-delayed">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </div>
      
      {/* Subtle Particles */}
      <div className="absolute top-1/4 left-0 w-2 h-2 bg-[#7099A3]/40 rounded-full animate-ping" />
      <div className="absolute top-1/2 right-0 w-3 h-3 bg-green-400/40 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-[#5d7e87]/40 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
    </div>
  );
}
