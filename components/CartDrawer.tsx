'use client';

import { useCart } from './CartProvider';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import Image from 'next/image';

export default function CartDrawer() {
  const { isCartOpen, closeCart, items, updateQuantity, removeFromCart, cartTotal } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]"
          />

          {/* Drawer */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-warm-charcoal border-l border-white/10 z-[100] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-xl font-sans font-light text-white flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-champagne" />
                Your Cart
              </h2>
              <button onClick={closeCart} className="text-ivory/50 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-ivory/50">
                  <ShoppingBag className="w-12 h-12 mb-4 opacity-20" />
                  <p className="font-light">Your cart is elegantly empty.</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-black/20 p-3 rounded-lg border border-white/5">
                    <div className="relative w-20 h-20 rounded-md overflow-hidden bg-white">
                      <Image src={item.image} alt={item.name} fill className="object-contain p-2" unoptimized />
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="text-sm text-white font-medium line-clamp-2 mb-1">{item.name}</h3>
                      <p className="text-champagne text-sm mb-3">${item.price.toFixed(2)}</p>
                      
                      <div className="flex items-center gap-3 text-white">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 hover:bg-white/10 rounded">
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-medium w-4 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 hover:bg-white/10 rounded">
                          <Plus className="w-3 h-3" />
                        </button>
                        <button onClick={() => removeFromCart(item.id)} className="text-[10px] uppercase tracking-wider text-red-400 ml-auto hover:text-red-300">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-white/10 bg-black/40">
                <div className="flex justify-between items-center mb-6 text-white">
                  <span className="font-light">Subtotal</span>
                  <span className="text-xl font-medium">${cartTotal.toFixed(2)}</span>
                </div>
                <button className="w-full py-4 bg-champagne text-warm-charcoal uppercase tracking-widest text-sm font-bold hover:bg-white transition-colors">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
