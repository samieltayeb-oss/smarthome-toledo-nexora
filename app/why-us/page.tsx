import Image from 'next/image';
import Link from 'next/link';
import { Users, PenTool, Wrench, Settings, PhoneCall } from 'lucide-react';
import FadeIn from '../../components/FadeIn';

const SERVICES = [
  {
    id: "consultancy",
    title: "Consultancy",
    description: "Expert advice on smart home and IT solutions to inform decisions.",
    image: "/images/why_consultancy.jpg",
    icon: Users
  },
  {
    id: "design",
    title: "Design",
    description: "Customized designs tailored to specific needs and preferences.",
    image: "/images/why_design.jpg",
    icon: PenTool
  },
  {
    id: "installation",
    title: "Installation",
    description: "Professional installation services for safe and efficient device integration.",
    image: "/images/why_installation.jpg",
    icon: Wrench
  },
  {
    id: "maintenance",
    title: "Maintenance",
    description: "Ongoing maintenance services to ensure optimal system performance.",
    image: "/images/why_maintenance.jpg",
    icon: Settings
  },
  {
    id: "after-sales",
    title: "After-Sales Services",
    description: "Comprehensive technical support and troubleshooting for unparalleled customer satisfaction.",
    image: "/images/why_aftersales.jpg",
    icon: PhoneCall
  }
];

export default function WhyUsPage() {
  return (
    <main className="min-h-screen bg-warm-charcoal text-ivory">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero_why_us.jpg"
          alt="Services Exceed Your Expectations"
          fill
          className="object-cover scale-[1.10]"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-light text-white mb-6 leading-tight drop-shadow-lg">
            Services Exceed Your Expectations
          </h1>
          <p className="text-lg md:text-xl text-ivory/80 font-light max-w-2xl mx-auto drop-shadow">
            Transforming ordinary houses into intelligent, connected spaces that offer convenience, comfort, and enhanced security.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto bg-warm-charcoal">
        
        <div className="text-center mb-16">
          <h2 className="text-sm tracking-[0.3em] uppercase text-champagne mb-4 font-bold">The Smart Home Toledo Process</h2>
          <h3 className="text-3xl md:text-5xl font-sans font-light text-white">Why Choose Us</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.slice(0, 4).map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.1}>
              <Link href={`/why-us/${service.id}`} className="relative group h-80 md:h-96 rounded-xl overflow-hidden cursor-pointer shadow-2xl bg-black block">
                <Image 
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500" />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 transition-transform duration-500 group-hover:-translate-y-4">
                  <service.icon className="w-16 h-16 text-white mb-4 drop-shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:text-champagne" strokeWidth={1.5} />
                  <h3 className="text-2xl md:text-3xl font-sans text-white font-medium drop-shadow-md">{service.title}</h3>
                  <p className="mt-4 text-ivory/90 text-sm md:text-base font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-xs">
                    {service.description}
                  </p>
                  <span className="mt-6 uppercase tracking-widest text-xs text-champagne font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    Explore {service.title} &rarr;
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Bottom Centered Item */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 md:mx-auto lg:w-2/3">
          <FadeIn delay={0.4}>
            <Link href="/why-us/after-sales" className="relative group h-80 md:h-96 rounded-xl overflow-hidden cursor-pointer shadow-2xl bg-black md:col-span-2 block">
              <Image 
                src={SERVICES[4].image}
                alt={SERVICES[4].title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 transition-transform duration-500 group-hover:-translate-y-4">
                <PhoneCall className="w-16 h-16 text-white mb-4 drop-shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:text-champagne" strokeWidth={1.5} />
                <h3 className="text-2xl md:text-3xl font-sans text-white font-medium drop-shadow-md">{SERVICES[4].title}</h3>
                <p className="mt-4 text-ivory/90 text-sm md:text-base font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-md">
                  {SERVICES[4].description}
                </p>
                <span className="mt-6 uppercase tracking-widest text-xs text-champagne font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    Explore {SERVICES[4].title} &rarr;
                </span>
              </div>
            </Link>
          </FadeIn>
        </div>

      </section>
    </main>
  );
}
