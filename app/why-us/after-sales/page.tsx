import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F5F2EA] text-[#142522] font-sans pb-24">
      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-center overflow-hidden">
        {/* Base Van Image */}
        <Image
          src="/images/hero_inner_aftersales_v2.jpg"
          alt="After-Sales Services"
          fill
          className="object-cover scale-[1.05]"
          priority
          unoptimized
        />

        {/* Gradient Overlay for Text Visibility (Darker on the right) */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/40 to-transparent" />
        
        {/* Text Container */}
        <div className="relative z-20 w-full px-6 md:px-12 lg:px-24 flex justify-end mt-20">
          <div className="max-w-2xl text-right">
            <p className="text-champagne font-bold tracking-[0.4em] uppercase text-xs mb-6 drop-shadow-md">
              The Process
            </p>
            <h1 className="text-3xl md:text-5xl font-sans font-light text-white mb-6 drop-shadow-lg tracking-wide">
              After-Sales Services
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 md:px-12 lg:px-24 max-w-4xl mx-auto -mt-16 relative z-20">
        <div className="bg-white p-10 md:p-16 shadow-2xl rounded-sm">
          
          <h2 className="text-3xl text-[#142522] font-light leading-snug mb-10 text-center border-b border-black/10 pb-10">
            White-Glove Support, Available When You Need It
          </h2>
          
          <div className="space-y-8 text-[#142522]/80 font-light text-lg leading-relaxed">
            <p>Our relationship does not end when the installation is complete; in fact, it is just beginning. Smart Home Toledo is renowned for our unparalleled white-glove after-sales support. We understand that our clients demand perfection, and our dedicated support team is always on standby to provide it.</p>
            <p>Whether you need assistance adjusting a lighting scene for a special event, adding a new user to your security system, or troubleshooting an unexpected issue, our concierge support team is just a phone call away. We offer guaranteed rapid response times and prioritize your comfort and security above all else.</p>
            <p>We provide comprehensive, hands-on training for you and your family, ensuring that you are completely comfortable operating your new system. As your lifestyle evolves, our after-sales team is here to adapt and upgrade your technology, ensuring your Smart Home Toledo experience remains state-of-the-art for years to come.</p>
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
