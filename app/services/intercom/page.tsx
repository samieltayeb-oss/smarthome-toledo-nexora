import Image from 'next/image';
import Link from 'next/link';

export default function IntercomPage() {
  return (
    <div className="bg-warm-charcoal min-h-screen text-ivory">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] md:h-[90vh] flex items-end pb-24 px-6 md:px-10">
        <Image 
          src="/images/hero_intercom.jpg" 
          alt="Brushed steel smart video intercom at estate gate" 
          fill 
          className="object-cover" 
          priority
          unoptimized={true}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-charcoal via-warm-charcoal/40 to-transparent"></div>
        
        <div className="relative z-10 max-w-[1400px] w-full mx-auto">
          <span className="text-xs tracking-[0.3em] uppercase text-champagne mb-6 block font-bold">Service / 08</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
            Secure <br /> Communication.
          </h1>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 px-6 md:px-10 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-24">
          <div className="md:col-span-5">
            <h2 className="font-serif text-3xl md:text-5xl text-ivory mb-6 leading-tight">Total authority over who enters your property.</h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-lg md:text-xl text-ivory/70 font-light mb-8 leading-relaxed">
              We deploy high-definition video intercoms and integrated access control systems that grant you complete, remote authority over your perimeter. Whether you are in the kitchen or across the world, you can visually verify and communicate with visitors instantly.
            </p>
            <p className="text-lg text-ivory/70 font-light leading-relaxed">
              Our intercom panels are crafted from luxury materials like brushed steel and tempered glass, ensuring the first point of contact at your estate perfectly reflects its architectural caliber.
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
              <h3 className="text-2xl font-serif mb-4">Remote Unlocking</h3>
              <p className="text-ivory/60 font-light leading-relaxed">Securely unlatch pedestrian gates, roll back driveway barriers, or unlock the front door directly from your smartphone or interior touch panels.</p>
            </div>
            <div className="border-t border-champagne/20 pt-8">
              <span className="text-champagne mb-4 block">02</span>
              <h3 className="text-2xl font-serif mb-4">Biometric Access</h3>
              <p className="text-ivory/60 font-light leading-relaxed">Eliminate keys entirely. Authorize family and staff through encrypted fingerprint scanners, facial recognition, or secure Bluetooth proximity.</p>
            </div>
            <div className="border-t border-champagne/20 pt-8">
              <span className="text-champagne mb-4 block">03</span>
              <h3 className="text-2xl font-serif mb-4">Missed Call Logs</h3>
              <p className="text-ivory/60 font-light leading-relaxed">If a visitor arrives while you are unavailable, the system automatically captures a high-resolution snapshot and logs a timestamped video voicemail.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Partners */}
      <section className="py-32 px-6 md:px-10 max-w-[1400px] mx-auto text-center border-b border-white/5">
        <h4 className="text-xs tracking-[0.2em] uppercase text-ivory/40 mb-12">Engineered in partnership with</h4>
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="text-2xl font-serif">2N</span>
          <span className="text-2xl font-serif">Commax</span>
          <span className="text-2xl font-serif">Golmar</span>
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
