import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Lighting & Shade Control | Smart Home Toledo",
  description: "Explore lighting and shade controls designed around how you use your space.",
};

export default function LightingControl() {
  return (
    <div className="bg-warm-charcoal">
      {/* Detail Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden pt-24">
        <Image 
          src="/images/PILOT_04_FamilyRoom_Evening.jpg" 
          alt="Evening Architectural Lighting" 
          fill 
          className="object-cover opacity-60"
          priority
          unoptimized={true}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-charcoal via-transparent to-black/50"></div>
        
        <div className="relative z-10 p-6 md:p-12 lg:p-20 w-full max-w-[1400px] mx-auto">
          <span className="text-xs tracking-[0.2em] uppercase text-champagne mb-4 block">Solutions</span>
          <h1 className="font-serif text-5xl md:text-7xl text-ivory mb-6 drop-shadow-lg leading-tight">
            Light shapes <br className="hidden md:block" />
            <span className="italic text-champagne">the room.</span>
          </h1>
          <p className="text-lg md:text-xl text-ivory/80 max-w-2xl font-light tracking-wide leading-relaxed">
            True architectural lighting isn't simply about fixtures turning on and off; it's about the orchestration of natural and artificial light to create an environment that feels effortless.
          </p>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="py-24 md:py-32 px-6 md:px-10 max-w-[1200px] mx-auto grid md:grid-cols-12 gap-12 md:gap-24">
        <div className="md:col-span-5 md:col-start-2 pt-8">
          <h2 className="font-serif text-3xl md:text-4xl text-ivory mb-8 leading-tight">Designed around how you use your space.</h2>
          <div className="text-ivory/70 font-light leading-relaxed space-y-6 text-lg">
            <p>
              Our approach integrates discreet motorized shades with tunable LED layers, mapping directly to your daily rhythm. Whether managing solar heat gain during the day or establishing a warm, inviting atmosphere in the evening, the transition is seamless.
            </p>
            <p>
              We work closely with your design team to ensure that whether you are entertaining guests or winding down for the evening, the room responds intuitively to your needs without drawing attention to the technology itself.
            </p>
          </div>
        </div>

        <div className="md:col-span-6 relative aspect-square md:aspect-[4/5] bg-deep-surface overflow-hidden rounded-sm shadow-xl">
          <Image 
            src="/images/PILOT_02_Keypad.jpg" 
            alt="Tactile Keypad Detail showing premium finishes" 
            fill 
            className="object-cover"
            unoptimized={true}
          />
        </div>
      </section>

      {/* Planning Content */}
      <section className="py-24 px-6 md:px-10 bg-deep-surface text-ivory border-t border-white/5">
        <div className="max-w-[800px] mx-auto">
          <span className="text-xs tracking-[0.2em] uppercase text-champagne mb-6 block text-center">Implementation</span>
          <h3 className="font-serif text-3xl md:text-4xl mb-12 text-center">Planning Your System</h3>
          
          <div className="space-y-12">
            <div className="border-l border-champagne/30 pl-6 md:pl-8">
              <h4 className="text-xl font-serif mb-3 text-ivory">Natural Light Management</h4>
              <p className="text-ivory/70 font-light leading-relaxed">Motorized window treatments precisely control solar heat gain, glare, and UV exposure to protect your furnishings, all without sacrificing your architectural views.</p>
            </div>
            
            <div className="border-l border-champagne/30 pl-6 md:pl-8">
              <h4 className="text-xl font-serif mb-3 text-ivory">Architectural Integration</h4>
              <p className="text-ivory/70 font-light leading-relaxed">Fixtures and keypads are selected to complement your interior finishes, not compete with them. We minimize wall clutter by consolidating controls.</p>
            </div>

            <div className="border-l border-champagne/30 pl-6 md:pl-8">
              <h4 className="text-xl font-serif mb-3 text-ivory">Rhythmic Tuning</h4>
              <p className="text-ivory/70 font-light leading-relaxed">Intelligent color temperature adjustments parallel the natural progression of the sun, promoting well-being and supporting a natural circadian rhythm.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Transition */}
      <section className="py-24 px-6 md:px-10 bg-warm-stone text-warm-charcoal text-center">
        <h3 className="font-serif text-3xl md:text-4xl mb-6">Ready to discuss your project?</h3>
        <p className="mb-10 text-warm-charcoal/80 max-w-xl mx-auto font-light leading-relaxed">Coordinate with us early in your design phase to ensure optimal wiring, structural blocking, and fixture placement.</p>
        <Link 
          href="/#contact" 
          className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-ivory bg-warm-charcoal border border-transparent rounded-sm hover:bg-black transition-all"
        >
          Start Your Project
        </Link>
      </section>
    </div>
  );
}
