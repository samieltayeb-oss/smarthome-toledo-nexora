'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS } from './productsData';
import { useCart } from '../../components/CartProvider';

export default function ShopPage() {
  const [selectedProduct, setSelectedProduct] = useState<typeof PRODUCTS[0] | null>(null);
  const { addToCart } = useCart();

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProduct(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProduct]);

  return (
    <div className="bg-warm-charcoal min-h-screen text-ivory">
      
      {/* Massive Hero Section for the Shop */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-end pb-24 px-6 md:px-10">
        <Image 
          src="/images/hero_shop.jpg" 
          alt="High-end smart home hardware" 
          fill 
          className="object-cover" 
          priority
          unoptimized={true}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-charcoal via-warm-charcoal/50 to-transparent"></div>
        
        <div className="relative z-10 max-w-[1400px] w-full mx-auto">
          <span className="text-xs tracking-[0.3em] uppercase text-champagne mb-6 block font-bold">Hardware Shop</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
            Curated <br /> Engineering.
          </h1>
          <p className="text-xl text-ivory/70 font-light max-w-2xl leading-relaxed">
            Direct access to the same architectural-grade components we specify in our $90K+ custom integrations.
          </p>
        </div>
      </section>

      {/* Main Shop Interface */}
      <section className="py-24 px-6 md:px-10 max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Sidebar / Filters */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <h3 className="uppercase tracking-widest text-sm mb-8 font-bold border-b border-white/10 pb-4">Product Categories</h3>
            <ul className="space-y-2 text-ivory/60 font-light text-sm">
              {/* Top Level: Smart Lighting */}
              <li className="flex justify-between hover:text-champagne cursor-pointer transition-colors"><span>Smart Lighting</span> <span>(48)</span></li>
              <li className="flex justify-between hover:text-champagne cursor-pointer transition-colors pl-4 text-ivory/40"><span>Ambient Lighting</span> <span>(9)</span></li>
              <li className="flex justify-between hover:text-champagne cursor-pointer transition-colors pl-4 text-ivory/40"><span>Light Strip</span> <span>(3)</span></li>
              <li className="flex justify-between hover:text-champagne cursor-pointer transition-colors pl-4 text-ivory/40"><span>Smart Bulb</span> <span>(3)</span></li>
              <li className="flex justify-between hover:text-champagne cursor-pointer transition-colors pl-4 text-ivory/40"><span>Smart Dimmer</span> <span>(1)</span></li>
              <li className="flex justify-between hover:text-champagne cursor-pointer transition-colors pl-4 text-ivory/40"><span>Smart Outlet</span> <span>(4)</span></li>
              <li className="flex justify-between hover:text-champagne cursor-pointer transition-colors pl-4 text-ivory/40"><span>Smart Switches</span> <span>(4)</span></li>
              
              {/* Top Level: Security System */}
              <li className="flex justify-between hover:text-champagne cursor-pointer transition-colors pt-2"><span>Security System</span> <span>(15)</span></li>
              <li className="flex justify-between hover:text-champagne cursor-pointer transition-colors pl-4 text-ivory/40"><span>Cameras</span> <span>(5)</span></li>
              <li className="flex justify-between hover:text-champagne cursor-pointer transition-colors pl-4 text-ivory/40"><span>Life Safety Detection</span> <span>(3)</span></li>
              <li className="flex justify-between hover:text-champagne cursor-pointer transition-colors pl-4 text-ivory/40"><span>Smart Home Security</span> <span>(4)</span></li>
              <li className="flex justify-between hover:text-champagne cursor-pointer transition-colors pl-4 text-ivory/40"><span>Smart Lock</span> <span>(2)</span></li>
              <li className="flex justify-between hover:text-champagne cursor-pointer transition-colors pl-4 text-ivory/40"><span>Video Door</span> <span>(1)</span></li>
              
              {/* Top Level: Motorized Curtain */}
              <li className="flex justify-between hover:text-champagne cursor-pointer transition-colors pt-2"><span>Motorized Curtain</span> <span>(37)</span></li>
              <li className="flex justify-between hover:text-champagne cursor-pointer transition-colors pl-4 text-ivory/40"><span>Blinds</span> <span>(35)</span></li>
              <li className="flex justify-between hover:text-champagne cursor-pointer transition-colors pl-4 text-ivory/40"><span>Motorized Drapery</span> <span>(35)</span></li>
              <li className="flex justify-between hover:text-champagne cursor-pointer transition-colors pl-4 text-ivory/40"><span>Outdoor Shades</span> <span>(37)</span></li>
              
              {/* Top Level: Hubs */}
              <li className="flex justify-between hover:text-champagne cursor-pointer transition-colors pt-2"><span>Hubs</span> <span>(6)</span></li>
              <li className="flex justify-between hover:text-champagne cursor-pointer transition-colors pl-4 text-ivory/40"><span>Ezlo Plus Smarthome Hub</span> <span>(1)</span></li>
              <li className="flex justify-between hover:text-champagne cursor-pointer transition-colors pl-4 text-ivory/40"><span>Google Nest Hub</span> <span>(5)</span></li>
              
              {/* Top Level: Robots and innovations */}
              <li className="flex justify-between hover:text-champagne cursor-pointer transition-colors pt-2"><span>Robots and innovations</span> <span>(5)</span></li>
              <li className="flex justify-between hover:text-champagne cursor-pointer transition-colors pl-4 text-ivory/40"><span>Innovations</span> <span>(2)</span></li>
              <li className="flex justify-between hover:text-champagne cursor-pointer transition-colors pl-4 text-ivory/40"><span>Robots</span> <span>(3)</span></li>
              
              {/* Top Level: Sound System */}
              <li className="flex justify-between hover:text-champagne cursor-pointer transition-colors pt-2"><span>Sound System</span> <span>(25)</span></li>
            </ul>

            <h3 className="uppercase tracking-widest text-sm mt-16 mb-8 font-bold border-b border-white/10 pb-4">Filter by Price</h3>
            <div className="h-1 w-full bg-white/10 mt-6 relative rounded-full">
              <div className="absolute left-0 w-full h-full bg-champagne rounded-full"></div>
            </div>
            <div className="flex justify-between text-xs text-ivory/40 mt-4">
              <span>$0</span>
              <span>$500+</span>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            <div className="flex justify-between items-center mb-12">
              <p className="text-ivory/50 text-sm font-light">Showing {PRODUCTS.length} curated products</p>
              <select className="bg-transparent border-b border-white/20 text-ivory text-sm pb-1 outline-none">
                <option className="bg-warm-charcoal">Sort by Featured</option>
                <option className="bg-warm-charcoal">Price: Low to High</option>
                <option className="bg-warm-charcoal">Price: High to Low</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {PRODUCTS.map((product, idx) => (
                <div key={idx} className="group cursor-pointer" onClick={() => setSelectedProduct(product)}>
                  {/* Product Image Container */}
                  <div className="relative aspect-square bg-white mb-6 rounded-sm overflow-hidden flex items-center justify-center p-8 transition-colors duration-500 group-hover:bg-ivory">
                    <Image 
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-8 transition-transform duration-700 group-hover:scale-110 drop-shadow-md"
                      unoptimized={true}
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="bg-black text-white px-6 py-3 uppercase tracking-widest text-xs translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        Quick View
                      </div>
                    </div>
                  </div>

                  {/* Product Metadata */}
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs text-ivory/30 tracking-widest uppercase block mb-2">{product.sku}</span>
                      <h3 className="font-medium text-lg leading-snug mb-2 pr-4 text-white group-hover:text-champagne transition-colors">{product.name}</h3>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="text-champagne font-serif text-xl">${product.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </section>

      {/* Modal / Popup Window */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 lg:p-12">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer transition-opacity"
            onClick={() => setSelectedProduct(null)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-sm flex flex-col md:flex-row shadow-2xl animate-in fade-in zoom-in-95 duration-300">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProduct(null)} 
              className="absolute top-4 right-4 md:top-6 md:right-6 text-warm-charcoal/50 hover:text-black z-10 bg-white/50 rounded-full p-2 backdrop-blur-sm transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            {/* Left: Image Viewer */}
            <div className="w-full md:w-1/2 min-h-[40vh] md:min-h-full p-12 flex items-center justify-center bg-gray-50 border-r border-gray-200">
              <div className="relative w-full aspect-square">
                <Image 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  fill 
                  className="object-contain drop-shadow-xl" 
                  unoptimized={true} 
                />
              </div>
            </div>

            {/* Right: Product Details (mimicking their screenshot) */}
            <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white text-warm-charcoal">
              <div className="text-xs text-warm-charcoal/50 tracking-widest uppercase mb-4">
                Home / Hardware Shop / {selectedProduct.name}
              </div>
              
              <h2 className="text-3xl md:text-5xl font-serif text-black mb-6 leading-tight">
                {selectedProduct.name}
              </h2>

              {/* Accordion mockup like screenshot */}
              <div 
                className="border-t border-b border-gray-200 py-4 mt-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => {
                  const el = document.getElementById('overview-content');
                  const arrow = document.getElementById('overview-arrow');
                  if (el && arrow) {
                    el.classList.toggle('hidden');
                    arrow.classList.toggle('rotate-90');
                  }
                }}
              >
                 <span className="text-xs tracking-widest uppercase font-bold text-gray-600">Overview</span>
                 <span id="overview-arrow" className="text-gray-400 transition-transform duration-300">▶</span>
              </div>
              
              {/* Feature Bullets from Description (Hidden by default, toggled by accordion) */}
              <div id="overview-content" className="hidden py-6 text-warm-charcoal/80 font-light text-sm space-y-3 leading-relaxed">
                {selectedProduct.description && selectedProduct.description.trim().length > 0 ? (
                  <>
                    {selectedProduct.description.split(/[●•;]/).filter(s => s.trim().length > 3).map((sentence, i) => (
                      <p key={i} className="flex items-start">
                        <span className="mr-3 text-champagne font-bold text-lg leading-none mt-0.5">•</span> 
                        <span>{sentence.trim()}</span>
                      </p>
                    ))}
                    {/* Fallback if splitting fails but there is text */}
                    {selectedProduct.description.split(/[●•;]/).filter(s => s.trim().length > 3).length === 0 && (
                       <p>{selectedProduct.description}</p>
                    )}
                  </>
                ) : (
                  <p className="italic text-gray-500">
                    A premium smart home solution by Smart Home Toledo. Contact our integration specialists for detailed specifications, dimensions, and system compatibility.
                  </p>
                )}
              </div>

              <div className="text-4xl font-serif text-black mt-10 mb-8">
                ${selectedProduct.price.toFixed(2)}
              </div>

              <div className="flex gap-4 items-stretch">
                <input 
                  type="number" 
                  defaultValue={1} 
                  min={1} 
                  className="w-20 border border-gray-300 text-center text-black outline-none focus:border-black font-medium" 
                />
                <button 
                  onClick={() => {
                    addToCart(selectedProduct);
                    setSelectedProduct(null);
                  }}
                  className="flex-1 bg-black text-white py-4 uppercase tracking-widest text-sm font-bold hover:bg-champagne hover:text-black transition-colors"
                >
                  Add to cart
                </button>
              </div>
              
              <div className="mt-8 text-xs text-gray-400 font-light text-center">
                 SKU: {selectedProduct.sku}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
