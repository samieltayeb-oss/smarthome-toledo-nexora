import type { Metadata } from "next";
import { Instrument_Sans, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import Image from 'next/image';
import Link from 'next/link';
import GlobalHeader from '../components/GlobalHeader';
import ClientWrapper from '../components/ClientWrapper';

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument",
});

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bodoni",
});

export const metadata: Metadata = {
  title: "Smart Home Toledo",
  description: "Lighting, shades, entertainment and security, thoughtfully connected.",
  icons: {
    icon: '/images/smart-home-logo-new.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${bodoniModa.variable} scroll-smooth`}>
      <body className="font-sans bg-[#F5F2EA] text-[#142522] antialiased">
        <ClientWrapper>
          <GlobalHeader />

          <main className="min-h-screen">
            {children}
          </main>

        {/* Minimalist Editorial Footer */}
        <footer className="bg-[#0a0a0a] text-ivory/70 pt-24 pb-8 px-6 md:px-10 border-t border-white/5 text-sm font-light" id="contact">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-12 mb-20">
            
            {/* Col 1: Large Static Logo & Brand */}
            <div className="md:col-span-1 flex flex-col items-start">
               
               <div className="relative w-64 h-24 md:w-80 md:h-32 mb-6">
                  <Image src="/images/logo03.png" alt="Smart Home Toledo" fill className="object-contain object-left" unoptimized={true} />
               </div>
               
               <p className="text-ivory/50 leading-relaxed max-w-xs text-sm mt-4">
                 Elevating environments through architectural intelligence and uncompromising technical design.
               </p>
            </div>

            {/* Col 2: Offices */}
            <div>
               <h4 className="uppercase tracking-[0.2em] text-xs text-white mb-8 font-medium">Offices</h4>
               <div className="mb-8">
                 <p className="text-white mb-2 font-medium">Michigan</p>
                 <p className="text-ivory/50 leading-relaxed">
                   755 W Big Beaver Rd<br />
                   Suite 2020<br />
                   Troy, MI 48084
                 </p>
               </div>
               <div>
                 <p className="text-white mb-2 font-medium">Ohio</p>
                 <p className="text-ivory/50 leading-relaxed">
                   4156 Indian Road<br />
                   Ottawa Hills, OH 43606
                 </p>
               </div>
            </div>

            {/* Col 3: Contact */}
            <div>
               <h4 className="uppercase tracking-[0.2em] text-xs text-white mb-8 font-medium">Inquiries</h4>
               <ul className="space-y-4 text-ivory/50">
                 <li><a href="tel:+19173485548" className="hover:text-champagne transition-colors">+1 (917) 348-5548</a></li>
                 <li><a href="mailto:info@smarthometoledo.com" className="hover:text-champagne transition-colors">info@smarthometoledo.com</a></li>
                 <li><a href="mailto:Sales@smarthometoledo.com" className="hover:text-champagne transition-colors">Sales@smarthometoledo.com</a></li>
               </ul>
            </div>

            {/* Col 4: Links */}
            <div>
               <h4 className="uppercase tracking-[0.2em] text-xs text-white mb-8 font-medium">Directory</h4>
               <ul className="space-y-4 text-ivory/50">
                 <li><Link href="/services" className="hover:text-champagne transition-colors">Solutions</Link></li>
                 <li><Link href="/about" className="hover:text-champagne transition-colors">The Pedigree</Link></li>
                 <li><Link href="/shop" className="hover:text-champagne transition-colors">Hardware Shop</Link></li>
                 <li><Link href="/contact-us" className="hover:text-champagne transition-colors">Consultation</Link></li>
               </ul>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Credit */}
          <div className="max-w-[1400px] mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[0.65rem] uppercase tracking-widest text-ivory/40">
            <p>© 2026 Smart Home Toledo LLC. All Rights Reserved.</p>
            <p>Built by <a href="https://nexorayyc.io" target="_blank" rel="noopener noreferrer" className="text-champagne hover:text-white transition-colors">NEXORA</a></p>
          </div>
        </footer>
      </ClientWrapper></body>
    </html>
  );
}
