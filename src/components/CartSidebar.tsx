'use client';

import { Minus, Plus, Trash2, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import SimpleCheckoutFixed from './SimpleCheckoutFixed';

export default function CartSidebar() {
  const { state, dispatch } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const closeCart = () => {
    dispatch({ type: 'CLOSE_CART' });
  };

  if (!state.isOpen) {
    return null;
  }

  return (
    <>
      {/* Overlay */}
      <div className='fixed inset-0 bg-black bg-opacity-50 z-40' onClick={closeCart} />

      {/* Sidebar */}
      <div className='fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col'>
        {/* Header */}
        <div className='flex items-center justify-between p-6 border-b border-gray-200'>
          <h2 className='text-xl font-display font-bold text-accent-dark'>🛒 Votre Panier</h2>
          <button
            onClick={closeCart}
            className='p-2 hover:bg-gray-100 rounded-lg transition-colors'
          >
            <X className='w-5 h-5' />
          </button>
        </div>

        {/* Content */}
        <div className='flex-1 overflow-y-auto p-6'>
          {state.items.length === 0 ? (
            <div className='text-center py-12'>
              <div className='text-6xl mb-4'>🛒</div>
              <h3 className='text-lg font-semibold text-gray-600 mb-2'>Votre panier est vide</h3>
              <p className='text-gray-500'>Ajoutez des produits pour commencer vos achats</p>
            </div>
          ) : (
            <div className='space-y-4'>
              {state.items.map(item => (
                <div key={item.id} className='bg-gray-50 rounded-lg p-4'>
                  <div className='flex items-start justify-between mb-3'>
                    <div className='flex-1'>
                      <h3 className='font-semibold text-accent-dark mb-1'>{item.name}</h3>
                      <p className='text-sm text-gray-600'>
                        {item.price.toFixed(2)}€{' '}
                        {item.unit === 'kg' ? 'le kg' : item.unit === 'unité' ? "l'unité" : 'pièce'}
                      </p>
                      {item.isNew && (
                        <span className='inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded mt-1'>
                          Nouveauté
                        </span>
                      )}
                      {item.isPromotion && (
                        <span className='inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded mt-1 ml-1'>
                          Promotion
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className='p-1 hover:bg-red-100 rounded transition-colors'
                    >
                      <Trash2 className='w-4 h-4 text-red-500' />
                    </button>
                  </div>

                  <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-2'>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className='p-1 hover:bg-gray-200 rounded transition-colors'
                        disabled={item.quantity <= 1}
                      >
                        <Minus className='w-4 h-4' />
                      </button>
                      <span className='w-12 text-center font-semibold'>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className='p-1 hover:bg-gray-200 rounded transition-colors'
                      >
                        <Plus className='w-4 h-4' />
                      </button>
                    </div>
                    <span className='font-bold text-primary-600'>
                      {item.totalPrice.toFixed(2)}€
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className='border-t border-gray-200 p-6'>
            <div className='flex justify-between items-center mb-4'>
              <span className='text-lg font-semibold text-accent-dark'>
                Total ({state.totalItems} article{state.totalItems > 1 ? 's' : ''})
              </span>
              <span className='text-2xl font-bold text-primary-600'>
                {state.totalPrice.toFixed(2)}€
              </span>
            </div>

            <div className='space-y-3'>
              <button
                onClick={() => setShowCheckout(true)}
                className='w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-lg font-semibold transition-colors'
              >
                Commander maintenant
              </button>
              <button
                onClick={clearCart}
                className='w-full bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-lg font-semibold transition-colors'
              >
                Vider le panier
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Simple Checkout Modal */}
      {showCheckout && <SimpleCheckoutFixed onClose={() => setShowCheckout(false)} />}
    </>
  );
}
