'use client';

import { useState } from 'react';
import Image from 'next/image';

const MODES = [
  { 
    id: 'morning', 
    name: 'Morning Awakening', 
    image: '/images/showcase_morning.jpg', 
    desc: 'Motorized shades rise silently to greet the dawn. Natural light floods the space while the climate system intelligently adjusts to your preferred waking temperature.', 
    metrics: { light: '100% Natural', climate: '72°', shades: 'Open', security: 'Disarmed' } 
  },
  { 
    id: 'cinema', 
    name: 'Director Mode', 
    image: '/images/showcase_cinema.jpg', 
    desc: 'The room transforms instantly. Acoustic treatments engage, 4K projection lowers from the ceiling, and architectural lighting dims to a perfect 5% ambient glow.', 
    metrics: { light: '5% Ambient', climate: '68°', shades: 'Closed', audio: 'Dolby Atmos' } 
  },
  { 
    id: 'evening', 
    name: 'Evening Entertainment', 
    image: '/images/showcase_evening.jpg', 
    desc: 'Warm, architectural lighting highlights your artwork. High-fidelity multi-room audio syncs perfectly across the estate to set the evening mood.', 
    metrics: { light: '40% Warm', climate: '70°', shades: 'Lowered', audio: 'Multi-Zone Active' } 
  },
  { 
    id: 'away', 
    name: 'Fortress Mode', 
    image: '/images/showcase_away.jpg', 
    desc: 'The perimeter is secured. AI-driven cameras monitor all access points while interior lighting mimics your occupancy patterns to deter unwanted attention.', 
    metrics: { light: 'Mimic Logic', climate: 'Eco-Mode', shades: 'Closed', security: 'Armed' } 
  },
];

export default function InteractiveShowcase() {
  const [activeMode, setActiveMode] = useState(MODES[0]);

  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">
      {/* Background Image Crossfade */}
      <div className="absolute inset-0 z-0">
        {MODES.map((mode) => (
          <Image 
            key={mode.id}
            src={mode.image}
            fill
            className={`object-cover transition-opacity duration-1000 ${activeMode.id === mode.id ? 'opacity-40 scale-105' : 'opacity-0 scale-100'}`}
            alt={mode.name}
            unoptimized={true}
          />
        ))}
        {/* Gradient Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center min-h-[700px]">
        
        {/* Left Control Panel */}
        <div>
          <span className="text-champagne tracking-[0.3em] text-xs uppercase mb-6 block font-bold">Experience the System</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-12 leading-tight">
            Total <br /> Orchestration.
          </h2>
          
          <div className="flex flex-col gap-4 max-w-sm">
            {MODES.map((mode) => (
              <button 
                key={mode.id}
                onClick={() => setActiveMode(mode)}
                className={`text-left px-8 py-5 border transition-all duration-500 rounded-sm relative overflow-hidden group ${activeMode.id === mode.id ? 'border-champagne bg-champagne/10 text-champagne translate-x-4 shadow-[0_0_20px_rgba(212,175,55,0.15)]' : 'border-white/20 text-white/50 hover:border-white/50 hover:text-white'}`}
              >
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-champagne transition-transform duration-500 ${activeMode.id === mode.id ? 'scale-y-100' : 'scale-y-0'}`}></div>
                <h3 className="uppercase tracking-[0.2em] text-xs font-bold">{mode.name}</h3>
              </button>
            ))}
          </div>
        </div>

        {/* Right Details Panel */}
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-sm shadow-2xl transform transition-all duration-700">
          <h3 className="text-3xl font-serif mb-4 text-white drop-shadow-md">{activeMode.name}</h3>
          <p className="text-white/70 font-light mb-12 leading-relaxed h-20">{activeMode.desc}</p>
          
          <div className="grid grid-cols-2 gap-y-10 gap-x-8 border-t border-white/10 pt-10">
            {Object.entries(activeMode.metrics).map(([key, val]) => (
              <div key={key} className="relative">
                <p className="text-champagne/70 text-xs uppercase tracking-[0.2em] mb-2">{key}</p>
                <p className="text-white font-medium tracking-wide text-lg">{val as string}</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
