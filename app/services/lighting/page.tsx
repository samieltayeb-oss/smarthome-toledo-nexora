import Image from 'next/image';
import Link from 'next/link';

export default function SmartLightingPage() {
  return (
    <div className="bg-warm-charcoal min-h-screen text-ivory">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] md:h-[90vh] flex items-end pb-24 px-6 md:px-10">
        <Image 
          src="/images/hero_lighting.jpg" 
          alt="Luxury dining room smart lighting" 
          fill 
          className="object-cover scale-[1.10]" 
          priority
          unoptimized={true}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-charcoal via-warm-charcoal/40 to-transparent"></div>
        
        <div className="relative z-10 max-w-[1400px] w-full mx-auto">
          <span className="text-xs tracking-[0.3em] uppercase text-champagne mb-6 block font-bold">Service / 02</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
            Architectural <br /> Illumination.
          </h1>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 px-6 md:px-10 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-24">
          <div className="md:col-span-5">
            <h2 className="font-serif text-3xl md:text-5xl text-ivory mb-6 leading-tight">Light that responds to your life.</h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-lg md:text-xl text-ivory/70 font-light mb-8 leading-relaxed">
              We design and implement intelligent lighting systems that integrate flawlessly with your daily rhythms. From energy-efficient daylight harvesting to dramatic, personalized evening scenes, our lighting solutions elevate the architecture of your home.
            </p>
            <p className="text-lg text-ivory/70 font-light leading-relaxed">
              Eliminate wall clutter. By replacing banks of switches with elegant, singular keypads, we return the focus to your interior design while granting you infinite control over color temperature, intensity, and ambiance.
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
              <h3 className="text-2xl font-serif mb-4">Voice & App Integration</h3>
              <p className="text-ivory/60 font-light leading-relaxed">Command your entire home's lighting environment using intuitive voice commands or our secure mobile application, whether you're in the next room or another country.</p>
            </div>
            <div className="border-t border-champagne/20 pt-8">
              <span className="text-champagne mb-4 block">02</span>
              <h3 className="text-2xl font-serif mb-4">Daylight Harvesting</h3>
              <p className="text-ivory/60 font-light leading-relaxed">Advanced sensors monitor ambient natural light and automatically adjust interior fixtures to maintain perfect illumination while minimizing energy consumption.</p>
            </div>
            <div className="border-t border-champagne/20 pt-8">
              <span className="text-champagne mb-4 block">03</span>
              <h3 className="text-2xl font-serif mb-4">Dynamic Scenes</h3>
              <p className="text-ivory/60 font-light leading-relaxed">Program "Entertain", "Relax", or "Goodnight" scenes that orchestrate hundreds of fixtures simultaneously to perfectly match your desired mood.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Partners */}
      <section className="py-32 px-6 md:px-10 max-w-[1400px] mx-auto text-center border-b border-white/5">
        <h4 className="text-xs tracking-[0.2em] uppercase text-ivory/40 mb-12">Engineered in partnership with</h4>
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="text-2xl font-serif">Legrand</span>
          <span className="text-2xl font-serif">Yeelight</span>
          <span className="text-2xl font-serif">Lutron</span>
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
