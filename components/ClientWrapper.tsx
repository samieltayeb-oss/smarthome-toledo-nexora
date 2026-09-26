'use client';

import { CartProvider } from './CartProvider';
import CartDrawer from './CartDrawer';
import { ReactNode } from 'react';

export default function ClientWrapper({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      {children}
      <CartDrawer />
    </CartProvider>
  );
}
