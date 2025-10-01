'use client';

import { useCart } from '../../contexts/CartContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import CheckoutPage from '../../components/CheckoutPage';

export default function CheckoutPage() {
  const { state } = useCart();
  const router = useRouter();

  useEffect(() => {
    if (state.items.length === 0) {
      router.push('/');
    }
  }, [state.items.length, router]);

  if (state.items.length === 0) {
    return (
      <div className='min-h-screen bg-accent-light flex items-center justify-center'>
        <div className='text-center'>
          <div className='text-6xl mb-4'>🛒</div>
          <h1 className='text-2xl font-display font-bold text-accent-dark mb-4'>
            Votre panier est vide
          </h1>
          <p className='text-gray-600 mb-6'>Ajoutez des produits avant de passer commande</p>
          <button
            onClick={() => router.push('/')}
            className='bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors'
          >
            Continuer mes achats
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-accent-light'>
      <div className='container mx-auto px-4 py-8'>
        <div className='max-w-4xl mx-auto'>
          <CheckoutPage onClose={() => router.push('/')} />
        </div>
      </div>
    </div>
  );
}
