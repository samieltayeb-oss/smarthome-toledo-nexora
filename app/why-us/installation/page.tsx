import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F5F2EA] text-[#142522] font-sans pb-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero_inner_installation.jpg"
          alt="Installation"
          fill
          className="object-cover scale-[1.05]"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <p className="text-champagne font-bold tracking-[0.4em] uppercase text-xs mb-6 drop-shadow-md">
            The Process
          </p>
          <h1 className="text-3xl md:text-5xl font-sans font-light text-white mb-6 drop-shadow-lg tracking-wide">
            Installation
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 md:px-12 lg:px-24 max-w-4xl mx-auto -mt-16 relative z-20">
        <div className="bg-white p-10 md:p-16 shadow-2xl rounded-sm">
          
          <h2 className="text-3xl text-[#142522] font-light leading-snug mb-10 text-center border-b border-black/10 pb-10">
            Flawless Execution by Master Technicians
          </h2>
          
          <div className="space-y-8 text-[#142522]/80 font-light text-lg leading-relaxed">
            <p>The installation phase is where our meticulous planning comes to life. Our team of certified, master technicians approaches every job site with the utmost respect for your property. We employ industry-leading installation practices, ensuring that all cabling is perfectly dressed, terminated, and labeled within military-grade equipment racks.</p>
            <p>Smart Home Toledo stands apart in our commitment to clean, unobtrusive workmanship. We coordinate our schedules tightly with other trades to ensure a smooth, delay-free construction process. Whether installing a massive home cinema or deploying a complex enterprise-grade network throughout your estate, our execution is flawless.</p>
            <p>Beyond the physical installation, our programmers write custom code tailored to your exact specifications. We calibrate audio systems to the acoustic properties of your rooms, tune lighting scenes to enhance your artwork, and rigorously test every single subsystem to ensure absolute reliability before handover.</p>
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
