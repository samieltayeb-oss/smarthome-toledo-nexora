const fs = require('fs');

const pages = [
  {
    id: 'consultancy',
    title: 'Consultancy',
    subtitle: 'Strategic Guidance for Your Smart Home Vision',
    img: 'hero_inner_consultancy.jpg',
    p1: 'At Smart Home Toledo, our consultancy phase is the critical foundation of every successful project. We believe that technology should adapt to your lifestyle, not the other way around. During this initial stage, our seasoned technology architects sit down with you to deeply understand your daily routines, aesthetic preferences, and ultimate vision for your property.',
    p2: 'We conduct a comprehensive assessment of your property, analyzing architectural blueprints, existing infrastructure, and potential integration points. Whether you are building a new luxury estate from the ground up or retrofitting a historic home, our experts provide invaluable insights on the latest advancements in automation, security, and energy management.',
    p3: 'The result is a strategic technology roadmap tailored specifically to you. We demystify complex systems, providing clear, transparent advice that empowers you to make informed decisions. With Smart Home Toledo, you are not just buying hardware; you are investing in a thoughtfully engineered digital lifestyle.'
  },
  {
    id: 'design',
    title: 'Design',
    subtitle: 'Architectural Intelligence meets Bespoke Engineering',
    img: 'hero_inner_design.jpg',
    p1: 'Design at Smart Home Toledo goes far beyond selecting components; it is an exercise in architectural intelligence. Our in-house engineering and design team works meticulously to translate your requirements into precise, customized technical blueprints. We ensure that every wire, every sensor, and every control panel is placed with absolute intention.',
    p2: 'We collaborate seamlessly with your architects, interior designers, and general contractors to ensure that our technology enhances the aesthetic of your home rather than detracting from it. From invisible architectural speakers to custom-finished keypads that match your hardware, our designs prioritize invisible integration.',
    p3: 'Before a single cable is pulled, you will receive comprehensive documentation, including wiring schematics, rack elevations, and user interface mockups. This rigorous design process guarantees that the final installation will perform flawlessly and look spectacular, leaving no room for guesswork or compromise.'
  },
  {
    id: 'installation',
    title: 'Installation',
    subtitle: 'Flawless Execution by Master Technicians',
    img: 'hero_inner_installation.jpg',
    p1: 'The installation phase is where our meticulous planning comes to life. Our team of certified, master technicians approaches every job site with the utmost respect for your property. We employ industry-leading installation practices, ensuring that all cabling is perfectly dressed, terminated, and labeled within military-grade equipment racks.',
    p2: 'Smart Home Toledo stands apart in our commitment to clean, unobtrusive workmanship. We coordinate our schedules tightly with other trades to ensure a smooth, delay-free construction process. Whether installing a massive home cinema or deploying a complex enterprise-grade network throughout your estate, our execution is flawless.',
    p3: 'Beyond the physical installation, our programmers write custom code tailored to your exact specifications. We calibrate audio systems to the acoustic properties of your rooms, tune lighting scenes to enhance your artwork, and rigorously test every single subsystem to ensure absolute reliability before handover.'
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    subtitle: 'Proactive Care for Uninterrupted Performance',
    img: 'hero_inner_maintenance.jpg',
    p1: 'A high-performance smart home requires ongoing care to operate at peak efficiency. Smart Home Toledo offers comprehensive, proactive maintenance programs designed to identify and resolve potential issues before you ever notice them. We treat your smart home ecosystem with the same care as a high-performance vehicle.',
    p2: 'Through secure, encrypted remote monitoring, our operations center can track the health of your network, security systems, and automation controllers in real-time. We regularly deploy firmware updates, optimize network traffic, and ensure that your system remains protected against the latest cybersecurity threats.',
    p3: 'Regular preventative maintenance visits allow our technicians to physically inspect hardware, clean critical components, and recalibrate sensors. By maintaining your system proactively, we extend the lifespan of your investment and guarantee that your home is always ready to respond flawlessly to your commands.'
  },
  {
    id: 'after-sales',
    title: 'After-Sales Services',
    subtitle: 'White-Glove Support, Available When You Need It',
    img: 'hero_inner_aftersales.jpg',
    p1: 'Our relationship does not end when the installation is complete; in fact, it is just beginning. Smart Home Toledo is renowned for our unparalleled white-glove after-sales support. We understand that our clients demand perfection, and our dedicated support team is always on standby to provide it.',
    p2: 'Whether you need assistance adjusting a lighting scene for a special event, adding a new user to your security system, or troubleshooting an unexpected issue, our concierge support team is just a phone call away. We offer guaranteed rapid response times and prioritize your comfort and security above all else.',
    p3: 'We provide comprehensive, hands-on training for you and your family, ensuring that you are completely comfortable operating your new system. As your lifestyle evolves, our after-sales team is here to adapt and upgrade your technology, ensuring your Smart Home Toledo experience remains state-of-the-art for years to come.'
  }
];

pages.forEach(p => {
  const content = `import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F5F2EA] text-[#142522] font-sans pb-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/${p.img}"
          alt="${p.title}"
          fill
          className="object-cover scale-[1.05]"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <p className="text-champagne font-bold tracking-[0.3em] uppercase text-sm mb-4 drop-shadow-md">
            The Process
          </p>
          <h1 className="text-5xl md:text-7xl font-sans font-light text-white mb-6 drop-shadow-lg">
            ${p.title}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 md:px-12 lg:px-24 max-w-4xl mx-auto -mt-16 relative z-20">
        <div className="bg-white p-10 md:p-16 shadow-2xl rounded-sm">
          
          <h2 className="text-3xl text-[#142522] font-light leading-snug mb-10 text-center border-b border-black/10 pb-10">
            ${p.subtitle}
          </h2>
          
          <div className="space-y-8 text-[#142522]/80 font-light text-lg leading-relaxed">
            <p>${p.p1}</p>
            <p>${p.p2}</p>
            <p>${p.p3}</p>
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
`;
  fs.writeFileSync(`app/why-us/${p.id}/page.tsx`, content);
});
console.log('V2 Pages generated successfully.');
