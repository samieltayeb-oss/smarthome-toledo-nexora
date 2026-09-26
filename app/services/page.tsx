import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      title: "Home Automation",
      description: "Total control, seamlessly integrated. Command your climate, lighting, and security through centralized, personalized automation scenarios tailored to how you actually live.",
      image: "/images/service_automation.jpg",
      partners: "Control4, SmartThings",
      href: "/services/home-automation"
    },
    {
      title: "Smart Lighting",
      description: "Light that responds to your life. From daylight harvesting to personalized evening scenes, our intelligent lighting systems integrate flawlessly with your daily rhythms.",
      image: "/images/service_lighting.jpg",
      partners: "Legrand, Yeelight",
      href: "/services/lighting"
    },
    {
      title: "Motorized Shades",
      description: "Architectural shading, quietly orchestrated. Operate bespoke window treatments with a single touch or voice command, combining elegant design with advanced energy efficiency.",
      image: "/images/service_blinds.jpg",
      partners: "SmartWings, Lutron",
      href: "/services/shades"
    },
    {
      title: "Home Cinema",
      description: "Immersive cinematic environments. Precision-calibrated projection systems, acoustic treatments, and concealed audio that rival commercial cinemas without compromising your design.",
      image: "/images/detail_theater.jpg",
      partners: "Sony, Dolby",
      href: "/services/cinema"
    },
    {
      title: "Sound Systems",
      description: "Studio-grade audio, seamlessly concealed. High-fidelity indoor and outdoor sound zones linked intelligently across your entire property for a flawless listening experience.",
      image: "/images/service_audio.jpg",
      partners: "Sonos, Bowers & Wilkins",
      href: "/services/audio"
    },
    {
      title: "Security & Alarms",
      description: "Robust deterrence and uncompromising 24/7 protection. Advanced intrusion detection and remote monitoring, fully integrated into your home's central nervous system.",
      image: "/images/service_security.jpg",
      partners: "Alarm.com",
      href: "/services/security"
    },
    {
      title: "Smart CCTV",
      description: "Intelligent overwatch. Advanced surveillance featuring perimeter motion detection and encrypted cloud storage, prioritizing your absolute privacy and data security.",
      image: "/images/service_cctv.jpg",
      partners: "Axis, Hikvision",
      href: "/services/cctv"
    },
    {
      title: "IP Intercoms",
      description: "Secure, seamless communication. High-definition video intercoms and integrated access control systems granting you complete authority over who enters your property.",
      image: "/images/service_intercom.jpg",
      partners: "2N, Commax, Golmar",
      href: "/services/intercom"
    },
    {
      title: "Energy Management",
      description: "Intelligent efficiency. Utilizing advanced SMT technology and infrared detection, our systems proactively manage your property's footprint without sacrificing comfort.",
      image: "/images/service_energy.jpg",
      partners: "EcoBee, Nest",
      href: "/services/energy"
    }
  ];

  return (
    <div className="bg-warm-charcoal min-h-screen pt-32 pb-24 text-ivory">
      {/* Header */}
      <section className="px-6 md:px-10 max-w-[1600px] mx-auto mb-24">
        <span className="text-xs tracking-[0.3em] uppercase text-champagne mb-6 block">Our Solutions</span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
          Comprehensive<br />intelligence.
        </h1>
        <p className="text-xl md:text-2xl text-ivory/70 font-light max-w-3xl leading-relaxed">
          We transform ordinary houses into highly connected, intuitive spaces. From architectural lighting to robust security, explore our meticulously engineered solutions.
        </p>
      </section>

      {/* Services Grid */}
      <section className="px-6 md:px-10 max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => (
            <Link href={service.href} key={index} className="group block relative">
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden mb-8 bg-deep-surface">
                <Image 
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover scale-[1.10] transition-transform duration-[2s] group-hover:scale-[1.18]"
                  unoptimized={true}
                />
                {/* Gradient overlay for text legibility if we want text on image, but we are putting it below */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700"></div>
              </div>
              
              <div className="border-t border-white/10 pt-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-serif text-2xl md:text-3xl text-ivory">{service.title}</h3>
                  <span className="text-champagne transition-transform duration-500 group-hover:translate-x-2">
                    →
                  </span>
                </div>
                <p className="text-ivory/60 font-light leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="text-xs tracking-widest uppercase text-ivory/40">
                  Featuring: {service.partners}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      
      {/* Bottom CTA */}
      <section className="mt-32 px-6 md:px-10 text-center border-t border-white/5 pt-32 max-w-[1200px] mx-auto">
        <h2 className="font-serif text-4xl md:text-6xl mb-8">Ready to architect your system?</h2>
        <Link href="/contact-us" className="inline-block bg-champagne text-warm-charcoal px-10 py-4 font-medium hover:bg-white transition-colors rounded-sm uppercase tracking-wider text-sm">
          Schedule Consultation
        </Link>
      </section>
    </div>
  );
}
