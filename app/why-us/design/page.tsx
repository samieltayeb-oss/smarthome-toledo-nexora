import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F5F2EA] text-[#142522] font-sans pb-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero_inner_design_elegant.jpg"
          alt="Design"
          fill
          className="object-cover scale-[1.05]"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <p className="text-champagne font-bold tracking-[0.4em] uppercase text-xs mb-6 drop-shadow-md">
            The Process
          </p>
          <h1 className="text-3xl md:text-5xl font-sans font-light text-white mb-6 drop-shadow-lg tracking-wide">
            Design
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 md:px-12 lg:px-24 max-w-4xl mx-auto -mt-16 relative z-20">
        <div className="bg-white p-10 md:p-16 shadow-2xl rounded-sm">
          
          <h2 className="text-3xl text-[#142522] font-light leading-snug mb-10 text-center border-b border-black/10 pb-10">
            Architectural Intelligence meets Bespoke Engineering
          </h2>
          
          <div className="space-y-8 text-[#142522]/80 font-light text-lg leading-relaxed">
            <p>Design at Smart Home Toledo goes far beyond selecting components; it is an exercise in architectural intelligence. Our in-house engineering and design team works meticulously to translate your requirements into precise, customized technical blueprints. We ensure that every wire, every sensor, and every control panel is placed with absolute intention.</p>
            <p>We collaborate seamlessly with your architects, interior designers, and general contractors to ensure that our technology enhances the aesthetic of your home rather than detracting from it. From invisible architectural speakers to custom-finished keypads that match your hardware, our designs prioritize invisible integration.</p>
            <p>Before a single cable is pulled, you will receive comprehensive documentation, including wiring schematics, rack elevations, and user interface mockups. This rigorous design process guarantees that the final installation will perform flawlessly and look spectacular, leaving no room for guesswork or compromise.</p>
          </div>
          
          <div className="mt-16 text-center pt-10 border-t border-black/10">
            <Link href="/why-us" className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold text-[#142522] hover:text-champagne transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Return to Process Overview
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
