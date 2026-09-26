import HeroSequence from '../components/HeroSequence';
import Image from 'next/image';
import Link from 'next/link';
import InteractiveShowcase from '../components/InteractiveShowcase';

export default function Home() {
  return (
    <div className="bg-deep-surface">
      <HeroSequence />

      {/* Narrative Section: Thoughtfully Connected Living & Keypad Detail */}
      <section className="py-24 md:py-36 px-6 md:px-10 max-w-[1400px] mx-auto bg-deep-surface text-ivory">
        <div className="grid md:grid-cols-12 gap-12 md:gap-24 items-center">
          <div className="md:col-span-5 md:col-start-2">
            <span className="text-xs tracking-[0.2em] uppercase text-champagne mb-6 block">Our Philosophy</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 text-ivory leading-tight">
              Technology in service of architecture.
            </h2>
            <p className="text-lg md:text-xl text-ivory/70 font-light mb-8 leading-relaxed">
              Our approach to smart home technology is rooted in the belief that complexity should remain hidden. We integrate systems directly into the fabric of your home, ensuring that lighting, shades, climate, and security respond intuitively to how you actually live.
            </p>
            <p className="text-lg md:text-xl text-ivory/70 font-light mb-10 leading-relaxed">
              We guide you through a verified consultation, design, and installation process—coordinating directly with your architects, interior designers, and build teams to guarantee a flawless finish.
            </p>
            <Link href="/lighting-control" className="inline-block border border-champagne text-champagne px-8 py-3 font-medium hover:bg-champagne hover:text-warm-charcoal transition-colors rounded-sm">
              Explore Our Process
            </Link>
          </div>
          <div className="md:col-span-5 relative min-h-[500px] md:h-full flex items-center justify-center pt-8 md:pt-0">
            <div className="w-full h-[500px] md:h-[650px] relative">
              {/* Top Left Image: Shades Detail */}
              <div className="absolute top-0 left-0 w-[55%] h-[50%] rounded-sm overflow-hidden shadow-2xl z-10 translate-y-4 md:translate-y-12">
                <Image 
                  src="/images/detail_shades.jpg" 
                  alt="Luxury linen motorized shades detail" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-[1.5s]"
                  unoptimized={true}
                />
              </div>
              
              {/* Middle Right Image: Keypad */}
              <div className="absolute top-[20%] right-0 w-[55%] h-[55%] rounded-sm overflow-hidden shadow-2xl z-20 -translate-x-2 md:-translate-x-4 border-4 border-deep-surface">
                <Image 
                  src="/images/detail_keypad.jpg" 
                  alt="Architectural Keypad Detail showing premium material finish" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-[1.5s]"
                  unoptimized={true}
                />
              </div>

              {/* Bottom Left Image: Lighting */}
              <div className="absolute bottom-0 left-[10%] w-[50%] h-[40%] rounded-sm overflow-hidden shadow-2xl z-30 -translate-y-4 border-4 border-deep-surface">
                <Image 
                  src="/images/detail_lighting.jpg" 
                  alt="Trimless recessed lighting detail" 
                  fill 
                  className="object-cover scale-[1.10] hover:scale-[1.18] transition-transform duration-[1.5s]"
                  unoptimized={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Chapter: The Home Theater */}
      <section className="py-32 bg-black text-ivory relative overflow-hidden border-t border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 mb-16 text-center relative z-10">
          <span className="text-xs tracking-[0.3em] uppercase text-champagne mb-6 block">Entertainment</span>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-8 text-white">Immersive cinematic environments.</h2>
          <p className="text-lg md:text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
            True entertainment escapes the screen and transforms the room. We design acoustic treatments, concealed audio, and precision-calibrated projection systems that rival commercial cinemas—without compromising your interior design.
          </p>
        </div>
        
        <div className="w-full max-w-[1800px] mx-auto px-4 md:px-12 relative">
          {/* Ambient Glow / Ambilight effect behind the screen */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/10 ring-1 ring-white/5">
            <Image 
              src="/images/detail_theater.jpg" 
              alt="Immersive Home Theater with Acoustic Treatments" 
              fill 
              className="object-cover" 
              unoptimized={true} 
            />
            {/* Inner vignette for theater feel */}
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.9)] pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Interactive $90K Experience Showcase */}
      <InteractiveShowcase />

      {/* Process & Footer Transition */}
      <section className="py-32 px-6 md:px-10 bg-warm-stone text-warm-charcoal">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">A disciplined process.</h2>
          <p className="text-lg text-warm-charcoal/80 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
            From the initial consultation to final calibration, our workflow is rigorous and transparent. We eliminate guesswork through detailed engineering documentation and proactive project management.
          </p>
          
          <div className="grid md:grid-cols-3 gap-12 text-left mb-16">
            <div className="border-t border-warm-charcoal/20 pt-6">
              <span className="text-sm font-serif mb-2 block font-medium">01. Discovery</span>
              <p className="text-warm-charcoal/70 text-sm leading-relaxed">We audit your architectural plans and lifestyle requirements to scope an appropriate technology foundation.</p>
            </div>
            <div className="border-t border-warm-charcoal/20 pt-6">
              <span className="text-sm font-serif mb-2 block font-medium">02. Engineering</span>
              <p className="text-warm-charcoal/70 text-sm leading-relaxed">Our team produces detailed wiring schematics, elevations, and lighting load schedules for your trades.</p>
            </div>
            <div className="border-t border-warm-charcoal/20 pt-6">
              <span className="text-sm font-serif mb-2 block font-medium">03. Calibration</span>
              <p className="text-warm-charcoal/70 text-sm leading-relaxed">Following hardware installation, we perform rigorous audio, video, and network tuning to guarantee performance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
