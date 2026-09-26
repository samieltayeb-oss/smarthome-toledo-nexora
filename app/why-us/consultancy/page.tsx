import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F5F2EA] text-[#142522] font-sans pb-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero_inner_consultancy.jpg"
          alt="Consultancy"
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
            Consultancy
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 md:px-12 lg:px-24 max-w-4xl mx-auto -mt-16 relative z-20">
        <div className="bg-white p-10 md:p-16 shadow-2xl rounded-sm">
          
          <h2 className="text-3xl text-[#142522] font-light leading-snug mb-10 text-center border-b border-black/10 pb-10">
            Strategic Guidance for Your Smart Home Vision
          </h2>
          
          <div className="space-y-8 text-[#142522]/80 font-light text-lg leading-relaxed">
            <p>At Smart Home Toledo, our consultancy phase is the critical foundation of every successful project. We believe that technology should adapt to your lifestyle, not the other way around. During this initial stage, our seasoned technology architects sit down with you to deeply understand your daily routines, aesthetic preferences, and ultimate vision for your property.</p>
            <p>We conduct a comprehensive assessment of your property, analyzing architectural blueprints, existing infrastructure, and potential integration points. Whether you are building a new luxury estate from the ground up or retrofitting a historic home, our experts provide invaluable insights on the latest advancements in automation, security, and energy management.</p>
            <p>The result is a strategic technology roadmap tailored specifically to you. We demystify complex systems, providing clear, transparent advice that empowers you to make informed decisions. With Smart Home Toledo, you are not just buying hardware; you are investing in a thoughtfully engineered digital lifestyle.</p>
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
