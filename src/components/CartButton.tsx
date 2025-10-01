'use client';

import { useCart } from '../contexts/CartContext';
import { ShoppingCart } from 'lucide-react';

export default function CartButton() {
  const { state, dispatch } = useCart();

  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' });
  };

  return (
    <button
      onClick={toggleCart}
      className='relative p-2 text-accent-dark hover:text-primary-600 transition-colors'
    >
      <ShoppingCart className='w-6 h-6' />
      {state.totalItems > 0 && (
        <span className='absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold'>
          {state.totalItems}
        </span>
      )}
    </button>
  );
}
