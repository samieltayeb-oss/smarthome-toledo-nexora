'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X } from 'lucide-react';
import FadeIn from '../../components/FadeIn';
import { motion } from 'framer-motion';

const PARTNERS = [
  {
    name: "Legrand",
    logo: "https://smarthometoledo.com/wp-content/uploads/2024/03/Legrand-Logo.png1_.png",
    description: "Legrand, a global leader in electrical and digital building infrastructures, is a valued partner of ours. Through this collaboration, we integrate Legrand's cutting-edge products and solutions into our home automation systems, enabling us to deliver advanced functionalities, energy efficiency, and user-friendly experiences to our clients. Together, we strive to create homes that seamlessly blend technology and design."
  },
  {
    name: "2N",
    logo: "https://smarthometoledo.com/wp-content/uploads/2024/03/2n-logo.png",
    description: "Partnering with 2N, a leading manufacturer of IP intercoms and access control systems, allows us to enhance the communication and security aspects of our home automation systems. By integrating 2N's top-of-the-line intercom and access control solutions, we provide our clients with reliable and convenient ways to monitor and manage access to their properties, ensuring a secure and connected living environment."
  },
  {
    name: "Golmar",
    logo: "https://smarthometoledo.com/wp-content/uploads/2024/03/Golmar-logo.png",
    description: "Golmar specializes in audio and video intercom systems, offering innovative solutions for residential and commercial environments. Our partnership with Golmar enables us to incorporate their advanced intercom technologies into our home automation systems. By integrating Golmar's products, we enhance the communication capabilities of our solutions, providing seamless and secure interactions between residents and visitors."
  },
  {
    name: "Commax",
    logo: "https://smarthometoledo.com/wp-content/uploads/2024/03/Commax-logo.png",
    description: "Commax is a trusted provider of home communication solutions, including video door phones and smart home devices. Through our partnership with Commax, we integrate their cutting-edge communication technologies into our home automation systems, delivering enhanced convenience and control to our clients. With Commax's reliable and intuitive solutions, we ensure that residents can effortlessly communicate and manage their homes."
  },
  {
    name: "Yeelight",
    logo: "https://smarthometoledo.com/wp-content/uploads/2024/03/Yeelight-logo.png",
    description: "Yeelight, the best smart lighting brand in the world, has successfully shipped over 50 million products to over 200 countries and regions globally. The brand is widely integrated with major IoT platforms, such as Google Assistant, Amazon Alexa, Samsung SmartThings, Apple HomeKit, Razer Chroma, IFTTT, etc. We endeavor to bring you the best lighting experience you may imagine!"
  },
  {
    name: "Smartwing",
    logo: "https://smarthometoledo.com/wp-content/uploads/2024/03/Smartwing-logo.png",
    description: "Smartwing over 13 years in the smart blinds and home automation industry, the idea for SmartWings took shape, embodying the passion, innovation, and energy of our larger family. The company was eventually founded."
  }
];

export default function PartnersPage() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-warm-charcoal text-ivory font-sans pb-24">
      
      {/* Lightbox Overlay */}
      {expandedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setExpandedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-champagne transition-colors"
            onClick={() => setExpandedImage(null)}
          >
            <X className="w-10 h-10" />
          </button>
          <div className="relative w-full max-w-5xl h-[80vh]">
            <Image 
              src={expandedImage} 
              alt="Expanded Certificate" 
              fill 
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-24">
        {/* Landmark Background */}
        <Image
          src="/images/hero_toledo_skyline.jpg"
          alt="Toledo Skyline - Ohio and Michigan Connection"
          fill
          className="object-cover scale-[1.05]"
          priority
          unoptimized
        />
        {/* Dark vignette gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-warm-charcoal z-0" />
        
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-12 flex flex-col items-center">
          
          <FadeIn delay={0.1} className="text-center mb-16">
            <p className="text-champagne font-bold tracking-[0.3em] uppercase text-sm mb-4 drop-shadow-md">
              Ohio & Michigan's Premier Integrator
            </p>
            <h1 className="text-4xl md:text-6xl font-sans font-light text-white drop-shadow-lg">
              The Connected Ecosystem
            </h1>
          </FadeIn>

          {/* Interactive Logo Ecosystem */}
          <div className="relative w-full max-w-4xl h-[400px] md:h-[500px] flex items-center justify-center">
            
            {/* Center: Smart Home Toledo Logo */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, type: "spring", bounce: 0.5 }}
              className="absolute z-20 bg-black/50 backdrop-blur-md p-6 rounded-full border border-champagne/30 shadow-[0_0_50px_rgba(212,175,55,0.2)] w-40 h-40 md:w-56 md:h-56 flex items-center justify-center"
            >
              <div className="relative w-full h-full">
                <Image 
                  src="/images/logo03.png" 
                  alt="Smart Home Toledo" 
                  fill 
                  className="object-contain drop-shadow-2xl filter brightness-110"
                  unoptimized 
                />
              </div>
            </motion.div>

            {/* Orbiting Partner Logos */}
            {PARTNERS.map((partner, index) => {
              // Calculate positioning in a circle
              const angle = (index / PARTNERS.length) * Math.PI * 2;
              // Radius is responsive
              const radiusMd = 220; 
              const radiusSm = 140;

              return (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, x: 0, y: 0 }}
                  animate={{ 
                    opacity: 1, 
                    x: `calc(cos(${angle}rad) * var(--radius))`, 
                    y: `calc(sin(${angle}rad) * var(--radius))`
                  }}
                  transition={{ duration: 1, delay: 0.5 + (index * 0.1), type: "spring" }}
                  className="absolute z-10 w-20 h-20 md:w-28 md:h-28 bg-white rounded-full p-4 md:p-6 shadow-2xl border-2 border-white/10 flex items-center justify-center group hover:scale-110 transition-transform cursor-default [--radius:140px] md:[--radius:220px]"
                >
                  {/* Connecting Line (CSS Hack via before pseudo-element pointing to center) */}
                  <div 
                    className="absolute top-1/2 left-1/2 h-[2px] bg-gradient-to-l from-champagne/50 to-transparent -z-10 origin-left"
                    style={{ 
                      width: 'var(--radius)', 
                      transform: `translate(-50%, -50%) rotate(${angle + Math.PI}rad)` 
                    }}
                  />
                  <div className="relative w-full h-full">
                    <Image 
                      src={partner.logo} 
                      alt={partner.name} 
                      fill 
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500" 
                      unoptimized 
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Intro Text */}
      <section className="py-20 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto text-center border-b border-white/10">
        <FadeIn delay={0.2}>
          <p className="text-xl md:text-2xl text-ivory/80 font-light leading-relaxed">
            At <strong className="text-white font-medium">SMART HOME TOLEDO</strong>, we are proud to have established strategic partnerships and strong relationships with industry-leading companies to provide our clients with the most innovative and comprehensive home automation solutions. Through these partnerships, we combine our expertise with the cutting-edge technologies and resources of our esteemed partners. Together, we strive to deliver exceptional experiences and exceed our clients' expectations.
          </p>
        </FadeIn>
      </section>

      {/* Partners List */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto space-y-24">
        {PARTNERS.map((partner, index) => (
          <FadeIn key={partner.name} delay={0.1} className="flex flex-col md:flex-row items-center gap-12 md:gap-24 group">
            
            {/* Logo Side */}
            <div className={`w-full md:w-1/3 flex justify-center bg-white p-12 rounded-lg shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
              <div className="relative w-full h-32 md:h-40">
                <Image 
                  src={partner.logo} 
                  alt={`${partner.name} Logo`} 
                  fill 
                  className="object-contain filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" 
                  unoptimized 
                />
              </div>
            </div>

            {/* Content Side */}
            <div className={`w-full md:w-2/3 ${index % 2 !== 0 ? 'md:order-1 text-right' : 'text-left'}`}>
              <h2 className="text-3xl md:text-4xl text-champagne font-light mb-6 border-b border-white/10 pb-4 inline-block">
                {partner.name}
              </h2>
              <p className="text-lg text-ivory/70 font-light leading-relaxed">
                {partner.description}
              </p>
            </div>

          </FadeIn>
        ))}
      </section>
      
      {/* Certificates Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-black/40 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto text-center">
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-sans font-light text-white mb-6">Official Authorized Dealer</h2>
            <p className="text-ivory/70 max-w-2xl mx-auto mb-16 font-light">
              We hold official, verified dealer authorizations from the world's leading smart home manufacturers, guaranteeing authentic hardware, full warranties, and priority support.
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            {/* Smartwings Certificate */}
            <FadeIn delay={0.2} className="relative group cursor-pointer" >
              <div 
                className="relative w-full aspect-[4/3] bg-white p-2 rounded-sm shadow-2xl overflow-hidden"
                onClick={() => setExpandedImage("https://smarthometoledo.com/wp-content/uploads/2024/03/Dealer-Certificate-Smart-home-toledo-scaled-e1710782537709.webp")}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium tracking-widest uppercase transition-opacity">Click to Expand</span>
                </div>
                <Image 
                  src="https://smarthometoledo.com/wp-content/uploads/2024/03/Dealer-Certificate-Smart-home-toledo-scaled-e1710782537709.webp" 
                  alt="Smartwings Authorized Dealer Certificate" 
                  fill 
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
              </div>
              <p className="mt-6 text-champagne tracking-[0.2em] uppercase text-sm font-bold">Smartwings Authorization</p>
            </FadeIn>

            {/* Yeelight Certificate */}
            <FadeIn delay={0.3} className="relative group cursor-pointer">
              <div 
                className="relative w-full aspect-[4/3] bg-white p-2 rounded-sm shadow-2xl overflow-hidden"
                onClick={() => setExpandedImage("https://smarthometoledo.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-14-at-9.48.44-AM.webp")}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium tracking-widest uppercase transition-opacity">Click to Expand</span>
                </div>
                <Image 
                  src="https://smarthometoledo.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-14-at-9.48.44-AM.webp" 
                  alt="Yeelight Authorized Dealer Certificate" 
                  fill 
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
              </div>
              <p className="mt-6 text-champagne tracking-[0.2em] uppercase text-sm font-bold">Yeelight Authorization</p>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 text-center">
        <FadeIn delay={0.3}>
          <Link href="/contact-us" className="inline-block border border-champagne text-champagne px-10 py-4 uppercase tracking-widest text-sm hover:bg-champagne hover:text-warm-charcoal transition-colors">
            Integrate With Us
          </Link>
        </FadeIn>
      </section>

    </main>
  );
}
