'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sunrise, Sun, Sunset, MonitorPlay, Lightbulb, Blinds, Shield } from 'lucide-react';

const states = [
  { id: 'evening', label: 'Evening', src: '/images/PILOT_04_FamilyRoom_Evening.jpg' },
  { id: 'cinema', label: 'Cinema', src: '/images/PILOT_04_FamilyRoom_Cinema.jpg' },
  { id: 'morning', label: 'Morning', src: '/images/PILOT_04_FamilyRoom.jpg' },
  { id: 'day', label: 'Day', src: '/images/PILOT_04_FamilyRoom_Day.jpg' },
];

export default function HeroSequence() {
  const [activeState, setActiveState] = useState('day');
  const [previousState, setPreviousState] = useState('day');

  const handleStateChange = (newStateId: string) => {
    if (newStateId === activeState) return;
    setPreviousState(activeState);
    setActiveState(newStateId);
  };

  return (
    <div className="relative flex flex-col min-h-screen w-full items-center justify-center overflow-hidden bg-warm-charcoal text-ivory">
      {/* Background Crossfade */}
      <div className="absolute inset-0 z-0">
        {states.map((state) => {
          let zIndexClass = 'z-0';
          let opacityClass = 'opacity-0';
          let transitionClass = 'transition-none';

          if (state.id === activeState) {
            zIndexClass = 'z-20';
            opacityClass = 'opacity-100';
            transitionClass = 'transition-opacity duration-[1200ms] ease-in-out motion-reduce:transition-none';
          } else if (state.id === previousState) {
            zIndexClass = 'z-10';
            opacityClass = 'opacity-100';
            transitionClass = 'transition-none';
          }

          return (
            <div
              key={state.id}
              className={`absolute inset-0 bg-black ${zIndexClass} ${opacityClass} ${transitionClass}`}
            >
              <Image
                src={state.src}
                alt={`Living Room ${state.label}`}
                fill
                className="object-cover"
                priority
                unoptimized={true}
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-warm-charcoal/80 via-transparent to-warm-charcoal/90"></div>
            </div>
          );
        })}
      </div>

      {/* Main Content (Centered) */}
      <div className="relative z-30 flex flex-col items-center text-center w-full max-w-5xl px-6 pt-32">
        <div className="mb-12 relative w-[250px] h-[100px] md:w-[350px] md:h-[150px]">
          <Image src="/images/logo03.png" alt="Smart Home Toledo" fill className="object-contain" priority />
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-ivory leading-[1.1] mb-6 drop-shadow-2xl">
          A Home That <br/>
          <span className="italic text-champagne">Moves With You.</span>
        </h1>
        <p className="text-lg md:text-xl text-ivory/80 max-w-2xl font-sans font-light tracking-wide mb-10 drop-shadow-md">
          Lighting, shades, entertainment, and security, thoughtfully connected.
        </p>

        {/* Scene Controls (Distinct from Services) */}
        <div className="flex bg-black/40 backdrop-blur-md rounded-full border border-white/10 p-1 mb-16">
          {states.map(state => (
            <button
              key={state.id}
              onClick={() => handleStateChange(state.id)}
              className={`px-6 py-2 text-xs md:text-sm tracking-widest uppercase transition-colors rounded-full ${activeState === state.id ? 'bg-champagne text-warm-charcoal font-medium' : 'text-ivory/60 hover:text-ivory'}`}
            >
              {state.label}
            </button>
          ))}
        </div>
      </div>

      {/* Side Edge Typography */}
      <div className="hidden xl:flex absolute left-10 top-1/2 -translate-y-1/2 flex-col gap-6 text-[0.65rem] tracking-[0.3em] text-ivory/40 z-30 uppercase">
        <span className="border-l border-white/20 pl-4">People</span>
        <span className="border-l border-white/20 pl-4">Spaces</span>
        <span className="border-l border-white/20 pl-4">Technology</span>
      </div>
      <div className="hidden xl:flex absolute right-10 top-1/2 -translate-y-1/2 flex-col gap-6 text-[0.65rem] tracking-[0.3em] text-ivory/40 z-30 uppercase text-right">
        <span className="border-r border-white/20 pr-4">Comfort</span>
        <span className="border-r border-white/20 pr-4">Control</span>
        <span className="border-r border-white/20 pr-4">Harmony</span>
      </div>

      {/* Bottom Interface */}
      <div className="relative z-30 w-full flex flex-col items-center mt-auto pb-12 px-6">
        
        {/* Service Pillars Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 w-full max-w-4xl gap-8 border-b border-white/10 pb-8 mb-8">
          <Link href="/lighting-control" className="flex flex-col items-center gap-4 text-ivory/70 hover:text-champagne transition-colors border-r border-white/10 last:border-0">
            <Lightbulb strokeWidth={1} size={28} />
            <span className="text-sm font-sans tracking-wide">Lighting Control</span>
          </Link>
          <div className="flex flex-col items-center gap-4 text-ivory/70 border-r border-white/10 last:border-0">
            <Blinds strokeWidth={1} size={28} />
            <span className="text-sm font-sans tracking-wide">Motorized Shades</span>
          </div>
          <div className="flex flex-col items-center gap-4 text-ivory/70 border-r border-white/10 last:border-0">
            <MonitorPlay strokeWidth={1} size={28} />
            <span className="text-sm font-sans tracking-wide">Home Theater</span>
          </div>
          <div className="flex flex-col items-center gap-4 text-ivory/70 border-r border-white/10 last:border-0">
            <Shield strokeWidth={1} size={28} />
            <span className="text-sm font-sans tracking-wide">Security</span>
          </div>
        </div>

        {/* Refined Champagne CTA */}
        <div className="flex gap-4">
          <Link 
            href="/#contact" 
            className="group relative inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-warm-charcoal bg-gradient-to-b from-[#E5CFA0] to-[#CBA36D] border border-[#AA7C11]/50 rounded-sm shadow-inner hover:brightness-110 transition-all focus:outline-none focus:ring-2 focus:ring-champagne focus:ring-offset-2 focus:ring-offset-warm-charcoal"
          >
            Start Your Project
          </Link>
          <Link 
            href="/lighting-control" 
            className="group relative inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-ivory border border-ivory/40 rounded-sm hover:bg-ivory hover:text-warm-charcoal transition-all"
          >
            Explore Solutions
          </Link>
        </div>
      </div>
    </div>
  );
}
