const fs = require('fs');

const pages = [
  {
    id: 'consultancy',
    title: 'Consultancy',
    desc: 'Expert advice on smart home and IT solutions to inform decisions.',
    img: 'why_consultancy.jpg'
  },
  {
    id: 'design',
    title: 'Design',
    desc: 'Customized designs tailored to specific needs and preferences.',
    img: 'why_design.jpg'
  },
  {
    id: 'installation',
    title: 'Installation',
    desc: 'Professional installation services for safe and efficient device integration.',
    img: 'why_installation.jpg'
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    desc: 'Ongoing maintenance services to ensure optimal system performance.',
    img: 'why_maintenance.jpg'
  },
  {
    id: 'after-sales',
    title: 'After-Sales Services',
    desc: 'Comprehensive technical support and troubleshooting for unparalleled customer satisfaction.',
    img: 'why_aftersales.jpg'
  }
];

pages.forEach(p => {
  const content = `import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="min-h-screen bg-warm-charcoal text-ivory">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/${p.img}"
          alt="${p.title}"
          fill
          className="object-cover scale-[1.10]"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 drop-shadow-lg">
            ${p.title}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto">
        <div className="prose prose-lg prose-invert mx-auto">
          <p className="text-2xl text-champagne font-light leading-relaxed mb-12 text-center">
            ${p.desc}
          </p>
          
          <div className="space-y-8 text-ivory/80 font-light text-lg text-center md:text-left">
            <p>
              At Smart Home Toledo, our ${p.title.toLowerCase()} process is built on a foundation of uncompromising quality and meticulous attention to detail. We understand that true luxury lies not just in the technology itself, but in how seamlessly it integrates into your daily life.
            </p>
            <p>
              Our team of dedicated professionals approaches every project with a commitment to excellence, ensuring that your expectations are not just met, but consistently exceeded. From the initial concept to the final execution, we are with you every step of the way.
            </p>
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/why-us" className="inline-block border border-champagne text-champagne px-8 py-3 uppercase tracking-widest text-sm hover:bg-champagne hover:text-warm-charcoal transition-colors">
              ? Back to The Process
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
console.log('Pages generated.');
