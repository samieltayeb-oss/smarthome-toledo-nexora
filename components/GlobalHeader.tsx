'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from './CartProvider';

export default function GlobalHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openCart, items } = useCart();
  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === '/';
  const showLogo = !isHome || scrolled;

  return (
    <header className={`fixed top-0 w-full px-6 py-6 md:px-10 flex justify-between items-center z-50 transition-all duration-700 ${scrolled || mobileMenuOpen ? 'bg-deep-surface/95 backdrop-blur-md py-4 border-b border-champagne/10' : 'bg-gradient-to-b from-warm-charcoal/40 to-transparent'}`}>
      
      {/* Top Left Logo Area */}
      <div className="flex-shrink-0 w-48 md:w-72 relative h-12 md:h-20 overflow-hidden">
        <Link href="/" className={`absolute inset-0 flex items-center transition-all duration-700 transform ${showLogo || mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <Image 
            src="/images/logo03.png" 
            alt="Smart Home Toledo" 
            fill 
            className="object-contain object-left drop-shadow-xl"
            priority
            unoptimized={true}
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className={`hidden md:flex flex-wrap justify-end gap-8 text-[0.8rem] tracking-[0.2em] uppercase items-center transition-colors duration-700 ${scrolled ? 'text-ivory' : 'text-ivory/90'}`}>
        <Link href="/about" className="hover:text-champagne transition-colors">About</Link>
        <Link href="/why-us" className="hover:text-champagne transition-colors">Why Us</Link>
        <Link href="/services" className="hover:text-champagne transition-colors">Solutions</Link>
        <Link href="/partners" className="hover:text-champagne transition-colors">Partners</Link>
        <Link href="/shop" className="hover:text-champagne transition-colors">Shop</Link>
        
        {/* Cart Icon */}
        <button onClick={openCart} className="relative hover:text-champagne transition-colors flex items-center gap-1 group">
          <ShoppingBag className="w-5 h-5" />
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-champagne text-warm-charcoal text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {cartItemCount}
            </span>
          )}
        </button>

        <Link 
          href="/contact-us" 
          className={`border px-5 py-2 transition-all duration-300 ${scrolled ? 'border-champagne text-champagne hover:bg-champagne hover:text-warm-charcoal' : 'border-ivory/50 text-ivory hover:bg-ivory hover:text-warm-charcoal'}`}
        >
          Contact
        </Link>
      </nav>

      {/* Mobile Controls (Cart & Hamburger) */}
      <div className="flex md:hidden items-center gap-4 text-ivory">
        <button onClick={openCart} className="relative hover:text-champagne transition-colors flex items-center group">
          <ShoppingBag className="w-6 h-6" />
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-champagne text-warm-charcoal text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {cartItemCount}
            </span>
          )}
        </button>
        
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 -mr-2 focus:outline-none hover:text-champagne transition-colors">
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-deep-surface/95 backdrop-blur-md border-b border-champagne/10 shadow-2xl flex flex-col px-6 py-8 gap-6 md:hidden text-sm tracking-[0.2em] uppercase text-ivory">
          <Link href="/about" className="hover:text-champagne transition-colors block border-b border-white/5 pb-4">About</Link>
          <Link href="/why-us" className="hover:text-champagne transition-colors block border-b border-white/5 pb-4">Why Us</Link>
          <Link href="/services" className="hover:text-champagne transition-colors block border-b border-white/5 pb-4">Solutions</Link>
          <Link href="/partners" className="hover:text-champagne transition-colors block border-b border-white/5 pb-4">Partners</Link>
          <Link href="/shop" className="hover:text-champagne transition-colors block border-b border-white/5 pb-4">Shop</Link>
          <Link href="/contact-us" className="text-champagne font-bold mt-2">Contact Us</Link>
        </div>
      )}
      
    </header>
  );
}
