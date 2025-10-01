'use client';

import { useState } from 'react';
import { getPlaceholderImageUrl, getVegetableImageUrl } from '../utils/imageUtils';

interface VegetableCardProps {
  vegetable: {
    id: string;
    name: string;
    price: number;
    unit: string;
    image: string;
    category: string;
    isNew?: boolean;
    isPromotion?: boolean;
    minQuantity: number;
    maxQuantity: number;
    step: number;
  };
  onAddToCart: (vegetableId: string, quantity: number) => void;
}

export default function VegetableCard({ vegetable, onAddToCart }: VegetableCardProps) {
  const [selectedQuantity, setSelectedQuantity] = useState(0);

  const generateQuantityOptions = () => {
    const options = [];
    for (let qty = vegetable.minQuantity; qty <= vegetable.maxQuantity; qty += vegetable.step) {
      options.push(qty);
    }
    return options;
  };

  const handleQuantityChange = (quantity: number) => {
    setSelectedQuantity(quantity);
    if (quantity > 0) {
      onAddToCart(vegetable.id, quantity);
    }
  };

  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
      {/* Image avec badges */}
      <div className='relative h-48 bg-gray-100'>
        <img
          src={vegetable.image || getVegetableImageUrl(vegetable.name)}
          alt={vegetable.name}
          className='w-full h-full object-cover'
          onError={e => {
            // Fallback vers une image placeholder si l'image ne charge pas
            e.currentTarget.src = getPlaceholderImageUrl(vegetable.name);
          }}
        />

        {/* Badges */}
        <div className='absolute top-2 left-2 flex flex-col space-y-1'>
          {vegetable.isNew && (
            <span className='bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center'>
              🛒 Nouveauté
            </span>
          )}
          {vegetable.isPromotion && (
            <span className='bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center'>
              🛒 Promotion
            </span>
          )}
        </div>
      </div>

      {/* Contenu */}
      <div className='p-4'>
        <h3 className='text-lg font-semibold text-accent-dark mb-2'>{vegetable.name}</h3>
        <p className='text-2xl font-bold text-primary-600 mb-4'>
          {vegetable.price.toFixed(2)}€ {vegetable.unit === 'kg' ? 'le kg' : 'pièce'}
        </p>

        {/* Sélecteur de quantité */}
        <div className='flex items-center space-x-3 mb-4'>
          <label className='text-sm font-medium text-gray-700'>QU</label>
          <select
            className='border border-gray-300 rounded px-2 py-1 text-sm flex-1'
            value={selectedQuantity}
            onChange={e => handleQuantityChange(parseFloat(e.target.value))}
          >
            <option value='0'>Sélectionner</option>
            {generateQuantityOptions().map(qty => (
              <option key={qty} value={qty}>
                {qty}
                {vegetable.unit === 'kg' ? 'gr' : 'pièce'}
              </option>
            ))}
          </select>
        </div>

        {/* Bouton ajouter */}
        <button
          onClick={() => {
            const defaultQty = vegetable.minQuantity;
            handleQuantityChange(defaultQty);
          }}
          className='w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2'
        >
          <span>🛒</span>
          <span>Ajouter</span>
        </button>
      </div>
    </div>
  );
}
