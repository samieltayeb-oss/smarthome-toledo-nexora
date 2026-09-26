'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Check, ArrowRight } from 'lucide-react';

const PROJECT_TYPES = ['New Build', 'Retrofit / Renovation', 'Commercial', 'Service & Maintenance'];
const BUDGETS = ['Under $10k', '$10k - $50k', '$50k - $100k', '$100k+'];

export default function ContactPage() {
  const [selectedType, setSelectedType] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#F5F2EA] text-[#142522] font-sans pb-24">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero_contact_luxury.jpg"
          alt="Contact Smart Home Toledo"
          fill
          className="object-cover scale-[1.05]"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <p className="text-champagne font-bold tracking-[0.3em] uppercase text-sm mb-4 drop-shadow-md">
            Private Consultation
          </p>
          <h1 className="text-5xl md:text-7xl font-sans font-light text-white mb-6 drop-shadow-lg">
            Let's Discuss Your Vision
          </h1>
        </div>
      </section>

      {/* Form Section */}
      <section className="px-6 md:px-12 lg:px-24 max-w-5xl mx-auto -mt-16 relative z-20">
        <div className="bg-white p-8 md:p-16 shadow-2xl rounded-sm">
          
          {isSubmitted ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-champagne rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-warm-charcoal" />
              </div>
              <h2 className="text-3xl font-light mb-4">Request Received</h2>
              <p className="text-[#142522]/70 max-w-md mx-auto">
                Thank you for your interest in Smart Home Toledo. A senior integration specialist will contact you within 24 hours to schedule your private consultation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-12">
              
              {/* Step 1: Info */}
              <div>
                <h3 className="text-xl font-medium mb-6 uppercase tracking-widest text-sm text-[#142522]/50 border-b border-black/10 pb-4">1. Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <input required type="text" className="w-full border-b border-black/20 pb-2 pt-1 outline-none focus:border-champagne transition-colors bg-transparent" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <input required type="text" className="w-full border-b border-black/20 pb-2 pt-1 outline-none focus:border-champagne transition-colors bg-transparent" placeholder="Doe" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <input required type="email" className="w-full border-b border-black/20 pb-2 pt-1 outline-none focus:border-champagne transition-colors bg-transparent" placeholder="john@example.com" />
                  </div>
                </div>
              </div>

              {/* Step 2: Project Type */}
              <div>
                <h3 className="text-xl font-medium mb-6 uppercase tracking-widest text-sm text-[#142522]/50 border-b border-black/10 pb-4">2. Project Scope</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {PROJECT_TYPES.map(type => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSelectedType(type)}
                      className={`py-3 px-4 text-xs tracking-widest uppercase border transition-all ${selectedType === type ? 'border-champagne bg-champagne text-warm-charcoal font-bold' : 'border-black/20 text-[#142522]/70 hover:border-black'}`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Budget */}
              <div>
                <h3 className="text-xl font-medium mb-6 uppercase tracking-widest text-sm text-[#142522]/50 border-b border-black/10 pb-4">3. Estimated Budget</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {BUDGETS.map(b => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setSelectedBudget(b)}
                      className={`py-3 px-4 text-xs tracking-widest uppercase border transition-all ${selectedBudget === b ? 'border-champagne bg-champagne text-warm-charcoal font-bold' : 'border-black/20 text-[#142522]/70 hover:border-black'}`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Details */}
              <div>
                <h3 className="text-xl font-medium mb-6 uppercase tracking-widest text-sm text-[#142522]/50 border-b border-black/10 pb-4">4. Project Details</h3>
                <textarea 
                  className="w-full border border-black/20 p-4 outline-none focus:border-champagne transition-colors bg-transparent h-32" 
                  placeholder="Tell us about your property and your specific goals..."
                ></textarea>
              </div>

              <div className="pt-8 text-right">
                <button type="submit" className="inline-flex items-center gap-3 bg-warm-charcoal text-white px-10 py-5 uppercase tracking-[0.2em] text-sm font-bold hover:bg-champagne hover:text-warm-charcoal transition-colors">
                  Request Consultation
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

            </form>
          )}

        </div>
      </section>
    </main>
  );
}
