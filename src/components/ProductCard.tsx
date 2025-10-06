'use client';

import { ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  image?: string;
  category: 'legumes' | 'fruits' | 'autres';
  productId: string;
}

export default function ProductCard({
  title,
  description,
  price,
  image,
  category,
  productId,
}: ProductCardProps) {
  const { dispatch } = useCart();

  const categoryColors = {
    legumes: 'bg-primary-100 border-primary-300 text-primary-800',
    fruits: 'bg-harvest-100 border-harvest-300 text-harvest-800',
    autres: 'bg-earth-100 border-earth-300 text-earth-800',
  };

  const categoryIcons = {
    legumes: '🥬',
    fruits: '🍎',
    autres: '🍯',
  };

  const handleAddToCart = () => {
    // Ajouter le produit au panier (sans informations de livraison pour l'instant)
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: productId,
        name: title,
        price: price,
        quantity: 1,
        unit: 'unité',
        image: image || '/legumes.webp',
        isNew: false,
        isPromotion: false,
      },
    });

    // Ouvrir le panier
    dispatch({ type: 'OPEN_CART' });
  };

  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300'>
      {image && (
        <div className='h-48 bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center'>
          <span className='text-6xl'>{categoryIcons[category]}</span>
        </div>
      )}
      <div className='p-6'>
        <div
          className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${categoryColors[category]}`}
        >
          {category === 'legumes' ? 'Légumes' : category === 'fruits' ? 'Fruits' : 'Autres'}
        </div>
        <h3 className='text-xl font-display font-bold text-accent-dark mb-2'>{title}</h3>
        <p className='text-gray-600 mb-4'>{description}</p>

        <div className='flex items-center justify-between'>
          <span className='text-2xl font-bold text-primary-600'>{price.toFixed(2)}€</span>
          <button
            onClick={handleAddToCart}
            className='bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2'
          >
            <ShoppingCart className='w-4 h-4' />
            <span>Ajouter au panier</span>
          </button>
        </div>
      </div>
    </div>
  );
}
