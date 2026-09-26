import Image from 'next/image';
import Link from 'next/link';

export default function SoundSystemsPage() {
  return (
    <div className="bg-warm-charcoal min-h-screen text-ivory">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] md:h-[90vh] flex items-end pb-24 px-6 md:px-10">
        <Image 
          src="/images/hero_audio.jpg" 
          alt="High-end floor speaker in luxury living room" 
          fill 
          className="object-cover object-right" 
          priority
          unoptimized={true}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-charcoal via-warm-charcoal/40 to-transparent"></div>
        
        <div className="relative z-10 max-w-[1400px] w-full mx-auto">
          <span className="text-xs tracking-[0.3em] uppercase text-champagne mb-6 block font-bold">Service / 05</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
            High-Fidelity <br /> Audio.
          </h1>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 px-6 md:px-10 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-24">
          <div className="md:col-span-5">
            <h2 className="font-serif text-3xl md:text-5xl text-ivory mb-6 leading-tight">Studio-grade sound, perfectly integrated.</h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-lg md:text-xl text-ivory/70 font-light mb-8 leading-relaxed">
              We deliver audiophile-grade sound reproduction across your entire estate. Whether it is a dedicated two-channel listening room with striking freestanding towers, or invisible architectural speakers plastered directly into your ceilings, we ensure flawless performance.
            </p>
            <p className="text-lg text-ivory/70 font-light leading-relaxed">
              Enjoy a seamless link between all entertainment devices. Group multiple rooms for a house-wide party, or play separate high-resolution streams in the kitchen, study, and patio simultaneously.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 bg-deep-surface px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            <div className="border-t border-champagne/20 pt-8">
              <span className="text-champagne mb-4 block">01</span>
              <h3 className="text-2xl font-serif mb-4">Multi-Zone Streaming</h3>
              <p className="text-ivory/60 font-light leading-relaxed">Route high-resolution audio sources effortlessly to any zone in your home, controlling volume and playlists from a central application.</p>
            </div>
            <div className="border-t border-champagne/20 pt-8">
              <span className="text-champagne mb-4 block">02</span>
              <h3 className="text-2xl font-serif mb-4">Architectural Integration</h3>
              <p className="text-ivory/60 font-light leading-relaxed">Experience uncompromising audio without visual clutter. We offer completely invisible speakers plastered directly into your drywall and finished to match.</p>
            </div>
            <div className="border-t border-champagne/20 pt-8">
              <span className="text-champagne mb-4 block">03</span>
              <h3 className="text-2xl font-serif mb-4">Landscape Audio</h3>
              <p className="text-ivory/60 font-light leading-relaxed">Expand your living space with weatherproof, high-powered subterranean subwoofers and satellite speakers disguised amongst your foliage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Partners */}
      <section className="py-32 px-6 md:px-10 max-w-[1400px] mx-auto text-center border-b border-white/5">
        <h4 className="text-xs tracking-[0.2em] uppercase text-ivory/40 mb-12">Engineered in partnership with</h4>
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="text-2xl font-serif">Sonos</span>
          <span className="text-2xl font-serif">Bowers & Wilkins</span>
          <span className="text-2xl font-serif">Sonance</span>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 px-6 md:px-10 text-center max-w-[1200px] mx-auto">
        <h2 className="font-serif text-4xl md:text-6xl mb-8">Ready to architect your system?</h2>
        <Link href="/contact-us" className="inline-block bg-champagne text-warm-charcoal px-10 py-4 font-medium hover:bg-white transition-colors rounded-sm uppercase tracking-wider text-sm">
          Schedule Consultation
        </Link>
      </section>
    </div>
  );
}
