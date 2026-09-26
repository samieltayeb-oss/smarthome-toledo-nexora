import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-warm-charcoal min-h-screen text-ivory">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[80vh] flex items-end pb-24 px-6 md:px-10">
        <Image 
          src="/images/hero_about.jpg" 
          alt="Luxury modern estate at twilight" 
          fill 
          className="object-cover" 
          priority
          unoptimized={true}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-charcoal via-warm-charcoal/50 to-transparent"></div>
        
        <div className="relative z-10 max-w-[1400px] w-full mx-auto">
          <span className="text-xs tracking-[0.3em] uppercase text-champagne mb-6 block font-bold">The Pedigree</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
            Design meets <br /> intelligence.
          </h1>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 md:px-10 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-24">
          <div className="md:col-span-5">
            <h2 className="font-serif text-3xl md:text-5xl text-ivory mb-6 leading-tight">About Smart Home Toledo</h2>
            <div className="w-12 h-[1px] bg-champagne mb-8"></div>
          </div>
          <div className="md:col-span-7">
            <p className="text-lg md:text-xl text-ivory/80 font-light mb-8 leading-relaxed">
              Smart Home Toledo is the premier provider of Extra Low Voltage (ELV) and architectural home automation solutions for luxury estates and commercial spaces. We specialize in engineering bespoke environments that precisely meet the unique demands of each client, backed by years of elite industry experience.
            </p>
            <p className="text-lg text-ivory/70 font-light mb-8 leading-relaxed">
              Our commitment to excellence drives us to continuously explore new possibilities in intelligent automation, ensuring you have the tools to control and enhance your surroundings effortlessly. By combining cutting-edge technology with thoughtful, invisible design, our solutions seamlessly integrate into your lifestyle, creating a synergy between innovation and absolute comfort.
            </p>
            <p className="text-lg text-ivory/70 font-light leading-relaxed">
              What sets us apart is our unwavering commitment to client satisfaction. From the initial architectural consultation to the final installation and beyond, we guide you through every step, delivering high-quality results that exceed expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-deep-surface px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-center font-serif text-3xl md:text-5xl mb-20 text-ivory">Our Core Values</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="border-t border-champagne/20 pt-8">
              <span className="text-champagne mb-4 block text-xs tracking-widest uppercase">01</span>
              <h3 className="text-2xl font-serif mb-4 text-ivory">Innovation</h3>
              <p className="text-ivory/60 font-light leading-relaxed">
                Continuously exploring new and emerging technologies to offer the most advanced, reliable, and invisible solutions to our clientele.
              </p>
            </div>
            
            <div className="border-t border-champagne/20 pt-8">
              <span className="text-champagne mb-4 block text-xs tracking-widest uppercase">02</span>
              <h3 className="text-2xl font-serif mb-4 text-ivory">Customer Focus</h3>
              <p className="text-ivory/60 font-light leading-relaxed">
                Prioritizing the exact needs and architectural preferences of our clients to deliver bespoke, highly intuitive automation solutions.
              </p>
            </div>
            
            <div className="border-t border-champagne/20 pt-8">
              <span className="text-champagne mb-4 block text-xs tracking-widest uppercase">03</span>
              <h3 className="text-2xl font-serif mb-4 text-ivory">Quality</h3>
              <p className="text-ivory/60 font-light leading-relaxed">
                Delivering enterprise-grade hardware, meticulous wiring, and services that are built to last and engineered to exceed expectations.
              </p>
            </div>
            
            <div className="border-t border-champagne/20 pt-8">
              <span className="text-champagne mb-4 block text-xs tracking-widest uppercase">04</span>
              <h3 className="text-2xl font-serif mb-4 text-ivory">Integrity</h3>
              <p className="text-ivory/60 font-light leading-relaxed">
                Conducting business with absolute transparency, professionalism, and maintaining strong, trusted relationships with our clients and partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Recognition / Award Section */}
      <section className="py-32 relative overflow-hidden bg-black text-ivory border-t border-white/5 border-b">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-champagne/5 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left: The Certificate Display */}
            <div className="relative group perspective-[1000px] w-full max-w-lg mx-auto lg:mx-0">
              {/* Dynamic Glow */}
              <div className="absolute inset-0 bg-champagne/20 blur-[80px] rounded-full group-hover:bg-champagne/40 transition-colors duration-1000"></div>
              
              {/* Certificate Frame */}
              <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden border border-champagne/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-700 transform group-hover:-translate-y-4 group-hover:rotate-y-2 group-hover:shadow-[0_30px_60px_rgba(212,175,55,0.15)] bg-white p-2">
                <div className="relative w-full h-full border border-warm-charcoal/10">
                  <Image 
                    src="/images/award-2017.png" 
                    alt="International Quality Crown Award London 2017" 
                    fill 
                    className="object-contain"
                    unoptimized={true}
                  />
                </div>
              </div>
            </div>

            {/* Right: The Epic Copy */}
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-champagne mb-6 block font-bold">Global Recognition</span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
                An uncompromising <br /> commitment to quality.
              </h2>
              
              <div className="w-12 h-[1px] bg-champagne mb-8"></div>
              
              <p className="text-lg md:text-xl text-ivory/80 font-light mb-8 leading-relaxed">
                In 2017, Smart Home was summoned to London, United Kingdom, to receive the prestigious <strong className="text-ivory font-medium">International Quality Crown Award</strong> at the B.I.D. QC100 Convention.
              </p>
              
              <p className="text-lg text-ivory/70 font-light mb-8 leading-relaxed">
                This elite accolade is strictly awarded to organizations demonstrating an outstanding commitment to Quality and Excellence. We were recognized globally in the realm of <span className="text-champagne/90 italic">Customer Satisfaction, Leadership, Innovation, and Efficiency</span>.
              </p>

              <div className="bg-deep-surface p-6 border-l-2 border-champagne">
                <p className="text-sm tracking-wide text-ivory/60 uppercase mb-2">Award Details</p>
                <p className="font-serif text-xl text-ivory">Gold Category</p>
                <p className="text-sm text-ivory/50 mt-1">Presented in London by Business Initiative Directions (B.I.D.)</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Specialty Section */}
      <section className="py-32 px-6 md:px-10 max-w-[1000px] mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-5xl mb-8">Our Specialty</h2>
        <p className="text-xl md:text-2xl text-ivory/70 font-light leading-relaxed mb-12">
          Our reputation is built on architectural-grade installations, precise project completion, and total satisfaction based on comprehensive after-sales support. We provide complete contracting and integration services for all your smart home and ELV needs.
        </p>
        <Link href="/services" className="text-champagne uppercase tracking-widest text-sm hover:text-white transition-colors border-b border-champagne pb-1">
          Explore Our Solutions
        </Link>
      </section>

    </div>
  );
}
