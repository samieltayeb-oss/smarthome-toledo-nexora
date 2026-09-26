import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F5F2EA] text-[#142522] font-sans pb-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero_inner_maintenance.jpg"
          alt="Maintenance"
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
            Maintenance
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 md:px-12 lg:px-24 max-w-4xl mx-auto -mt-16 relative z-20">
        <div className="bg-white p-10 md:p-16 shadow-2xl rounded-sm">
          
          <h2 className="text-3xl text-[#142522] font-light leading-snug mb-10 text-center border-b border-black/10 pb-10">
            Proactive Care for Uninterrupted Performance
          </h2>
          
          <div className="space-y-8 text-[#142522]/80 font-light text-lg leading-relaxed">
            <p>A high-performance smart home requires ongoing care to operate at peak efficiency. Smart Home Toledo offers comprehensive, proactive maintenance programs designed to identify and resolve potential issues before you ever notice them. We treat your smart home ecosystem with the same care as a high-performance vehicle.</p>
            <p>Through secure, encrypted remote monitoring, our operations center can track the health of your network, security systems, and automation controllers in real-time. We regularly deploy firmware updates, optimize network traffic, and ensure that your system remains protected against the latest cybersecurity threats.</p>
            <p>Regular preventative maintenance visits allow our technicians to physically inspect hardware, clean critical components, and recalibrate sensors. By maintaining your system proactively, we extend the lifespan of your investment and guarantee that your home is always ready to respond flawlessly to your commands.</p>
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
