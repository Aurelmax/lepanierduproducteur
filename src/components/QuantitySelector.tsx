'use client';

import { useState } from 'react';

interface QuantitySelectorProps {
  product: {
    id: string;
    name: string;
    price: number;
    unit: 'kg' | 'piece';
    minQuantity: number;
    maxQuantity: number;
    step: number;
  };
  onQuantityChange: (quantity: number) => void;
}

export default function QuantitySelector({ product, onQuantityChange }: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState(product.minQuantity);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= product.minQuantity && newQuantity <= product.maxQuantity) {
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  const generateQuantityOptions = () => {
    const options: number[] = [];

    if (product.unit === 'piece') {
      // Pour les pièces : 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
      for (let i = product.minQuantity; i <= product.maxQuantity; i += product.step) {
        options.push(i);
      }
    } else {
      // Pour les kg : options prédéfinies comme sur le site
      const kgOptions = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.5, 2.0, 2.5, 3.0];
      options.push(
        ...kgOptions.filter(opt => opt >= product.minQuantity && opt <= product.maxQuantity),
      );
    }

    return options;
  };

  const options = generateQuantityOptions();

  return (
    <div className='space-y-4'>
      <div>
        <label className='block text-sm font-semibold text-accent-dark mb-2'>
          Quantité disponible :
        </label>
        <div className='grid grid-cols-5 gap-2'>
          {options.map(option => (
            <button
              key={option}
              onClick={() => handleQuantityChange(option)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                quantity === option
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {option} {product.unit === 'kg' ? 'kg' : 'pièce' + (option > 1 ? 's' : '')}
            </button>
          ))}
        </div>
      </div>

      <div className='flex items-center space-x-4'>
        <label className='text-sm font-semibold text-accent-dark'>Quantité sélectionnée :</label>
        <input
          type='number'
          min={product.minQuantity}
          max={product.maxQuantity}
          step={product.step}
          value={quantity}
          onChange={e => handleQuantityChange(parseFloat(e.target.value))}
          className='w-20 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent'
        />
        <span className='text-sm text-gray-600'>
          {product.unit === 'kg' ? 'kg' : 'pièce' + (quantity > 1 ? 's' : '')}
        </span>
      </div>

      <div className='bg-primary-50 border border-primary-200 rounded-lg p-4'>
        <div className='flex justify-between items-center'>
          <span className='font-semibold text-accent-dark'>Prix total :</span>
          <span className='text-2xl font-bold text-primary-600'>
            {(quantity * product.price).toFixed(2)}€
          </span>
        </div>
        <p className='text-sm text-gray-600 mt-1'>
          {quantity} {product.unit === 'kg' ? 'kg' : 'pièce' + (quantity > 1 ? 's' : '')} ×{' '}
          {product.price.toFixed(2)}€
        </p>
      </div>
    </div>
  );
}
