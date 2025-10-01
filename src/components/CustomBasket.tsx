'use client';

import { useState } from 'react';
import { useCart } from '../contexts/CartContext';

interface Product {
  id: string;
  name: string;
  price: number;
  unit: 'kg' | 'piece';
  minQuantity: number;
  maxQuantity: number;
  step: number;
  isNew?: boolean;
  isPromotion?: boolean;
  icon?: string;
  description?: string;
}

interface CartItem {
  product: Product;
  quantity: number;
  totalPrice: number;
}

export default function CustomBasket() {
  const { dispatch } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('legumes');

  const products: Product[] = [
    // Légumes
    {
      id: 'chou-fleur',
      name: 'Chou fleur (Taille Grosse)',
      price: 4.9,
      unit: 'piece',
      minQuantity: 1,
      maxQuantity: 10,
      step: 1,
      isNew: true,
      icon: '🥬',
      description: 'Frais et croquant, parfait pour vos plats',
    },
    {
      id: 'echalote',
      name: 'Échalote',
      price: 4.9,
      unit: 'kg',
      minQuantity: 0.1,
      maxQuantity: 3,
      step: 0.1,
      isNew: true,
      icon: '🧅',
      description: 'Saveur douce et délicate',
    },
    {
      id: 'celeri',
      name: 'Céleri',
      price: 3.8,
      unit: 'kg',
      minQuantity: 0.1,
      maxQuantity: 5,
      step: 0.1,
      isNew: true,
      icon: '🥬',
      description: 'Croustillant et parfumé',
    },
    {
      id: 'haricot-vert',
      name: 'Haricot vert',
      price: 12.9,
      unit: 'kg',
      minQuantity: 0.1,
      maxQuantity: 5,
      step: 0.1,
      isNew: true,
      icon: '🫘',
      description: 'Tendres et savoureux',
    },
    {
      id: 'courge-butternut',
      name: 'Courge Butternut',
      price: 3.2,
      unit: 'kg',
      minQuantity: 0.5,
      maxQuantity: 10,
      step: 0.5,
      isNew: true,
      icon: '🎃',
      description: 'Douce et crémeuse, idéale pour les soupes',
    },
    {
      id: 'poivron-vert',
      name: 'Poivron vert',
      price: 3.9,
      unit: 'kg',
      minQuantity: 0.5,
      maxQuantity: 5,
      step: 0.5,
      isPromotion: true,
      icon: '🫑',
      description: 'Croustillant et vitaminé',
    },
    {
      id: 'tomate-noir-crimee',
      name: "Tomate 'Noir de crimée'",
      price: 4.9,
      unit: 'kg',
      minQuantity: 0.1,
      maxQuantity: 5,
      step: 0.1,
      icon: '🍅',
      description: 'Saveur intense et juteuse',
    },
    {
      id: 'oignon-paille',
      name: "Oignon 'Paille'",
      price: 2.9,
      unit: 'kg',
      minQuantity: 0.5,
      maxQuantity: 10,
      step: 0.5,
      icon: '🧅',
      description: 'Doux et parfumé',
    },
    {
      id: 'tomates-roma',
      name: "Tomates 'Roma'",
      price: 3.6,
      unit: 'kg',
      minQuantity: 0.1,
      maxQuantity: 6,
      step: 0.1,
      icon: '🍅',
      description: 'Parfaites pour les sauces',
    },
    {
      id: 'courgette-blanche',
      name: 'Courgettes Blanche - à la Coupe',
      price: 2.9,
      unit: 'kg',
      minQuantity: 0.1,
      maxQuantity: 5,
      step: 0.1,
      icon: '🥒',
      description: 'Tendres et délicates',
    },
    {
      id: 'salade',
      name: 'Salade',
      price: 1.8,
      unit: 'piece',
      minQuantity: 1,
      maxQuantity: 10,
      step: 1,
      icon: '🥬',
      description: 'Fraîche et croquante',
    },
    {
      id: 'tomate-ancienne',
      name: "Tomate 'Ancienne'",
      price: 4.8,
      unit: 'kg',
      minQuantity: 0.1,
      maxQuantity: 10,
      step: 0.1,
      icon: '🍅',
      description: "Goût authentique d'antan",
    },
    {
      id: 'oeufs',
      name: "Bt 6 Œufs extra frais 'plein air'",
      price: 4.2,
      unit: 'piece',
      minQuantity: 1,
      maxQuantity: 10,
      step: 1,
      icon: '🥚',
      description: 'Poules élevées en plein air',
    },
    {
      id: 'courgette',
      name: 'Courgette',
      price: 3.8,
      unit: 'kg',
      minQuantity: 0.5,
      maxQuantity: 5,
      step: 0.5,
      icon: '🥒',
      description: 'Jeunes et tendres',
    },
    {
      id: 'fleurs-courgette',
      name: "Fleurs de Courgette 'bouquet de 6 fleurs'",
      price: 3.9,
      unit: 'piece',
      minQuantity: 1,
      maxQuantity: 20,
      step: 1,
      icon: '🌸',
      description: 'Délicates et parfumées',
    },
    {
      id: 'pomme-terre-mona-lisa',
      name: "Pomme de Terre 'mona lisa'",
      price: 2.4,
      unit: 'kg',
      minQuantity: 0.5,
      maxQuantity: 10,
      step: 0.5,
      icon: '🥔',
      description: 'Polyvalentes et savoureuses',
    },
    {
      id: 'concombre-noa',
      name: 'Concombre Noa',
      price: 1.2,
      unit: 'piece',
      minQuantity: 1,
      maxQuantity: 15,
      step: 1,
      icon: '🥒',
      description: 'Croustillant et rafraîchissant',
    },
    {
      id: 'carotte-vrac',
      name: "Carotte 'vrac'",
      price: 2.6,
      unit: 'kg',
      minQuantity: 0.1,
      maxQuantity: 10,
      step: 0.1,
      icon: '🥕',
      description: 'Sucrées et croquantes',
    },
    {
      id: 'pomme-terre-grenailles',
      name: "Pomme de Terre 'Grenailles'",
      price: 4.2,
      unit: 'kg',
      minQuantity: 0.1,
      maxQuantity: 5,
      step: 0.1,
      icon: '🥔',
      description: 'Petites et savoureuses',
    },
    {
      id: 'pousse-epinard',
      name: 'Pousse Épinard',
      price: 13.9,
      unit: 'kg',
      minQuantity: 0.1,
      maxQuantity: 0.7,
      step: 0.1,
      icon: '🌱',
      description: 'Tendres et délicates',
    },
    {
      id: 'botte-carottes-fane',
      name: "Botte de Carottes 'fane'",
      price: 3.2,
      unit: 'piece',
      minQuantity: 1,
      maxQuantity: 10,
      step: 1,
      icon: '🥕',
      description: 'Avec leurs fanes fraîches',
    },
    {
      id: 'fenouil',
      name: 'Fenouil',
      price: 3.8,
      unit: 'kg',
      minQuantity: 0.1,
      maxQuantity: 5,
      step: 0.1,
      icon: '🌿',
      description: 'Parfumé et croquant',
    },
    {
      id: 'potiron',
      name: 'Potiron',
      price: 2.9,
      unit: 'kg',
      minQuantity: 0.5,
      maxQuantity: 10,
      step: 0.5,
      icon: '🎃',
      description: 'Doux et crémeux',
    },
    {
      id: 'betterave-crue',
      name: "Betterave 'crue'",
      price: 1.6,
      unit: 'piece',
      minQuantity: 1,
      maxQuantity: 15,
      step: 1,
      icon: '🥕',
      description: 'Sucrée et vitaminée',
    },
    {
      id: 'poivron-rouge',
      name: 'Poivron rouge',
      price: 4.4,
      unit: 'kg',
      minQuantity: 0.5,
      maxQuantity: 5,
      step: 0.5,
      icon: '🫑',
      description: 'Doux et coloré',
    },
    {
      id: 'chou-blanc',
      name: 'Chou blanc',
      price: 3.4,
      unit: 'kg',
      minQuantity: 0.5,
      maxQuantity: 5,
      step: 0.5,
      icon: '🥬',
      description: 'Croustillant et frais',
    },
    {
      id: 'chou-rouge',
      name: 'Chou Rouge',
      price: 3.4,
      unit: 'kg',
      minQuantity: 0.5,
      maxQuantity: 5,
      step: 0.5,
      icon: '🥬',
      description: 'Coloré et savoureux',
    },
    {
      id: 'botte-cebettes',
      name: 'Botte de cebettes',
      price: 2.2,
      unit: 'piece',
      minQuantity: 1,
      maxQuantity: 9,
      step: 1,
      icon: '🌱',
      description: 'Fines et parfumées',
    },
    {
      id: 'ail',
      name: 'Ail',
      price: 13.9,
      unit: 'kg',
      minQuantity: 0.1,
      maxQuantity: 3,
      step: 0.1,
      icon: '🧄',
      description: 'Aromatique et puissant',
    },
    {
      id: 'celeri-rave',
      name: 'Céleri Rave',
      price: 4.2,
      unit: 'kg',
      minQuantity: 0.5,
      maxQuantity: 5,
      step: 0.5,
      icon: '🥬',
      description: 'Croustillant et parfumé',
    },
    {
      id: 'mesclun',
      name: 'Mesclun',
      price: 12.9,
      unit: 'kg',
      minQuantity: 0.1,
      maxQuantity: 0.7,
      step: 0.1,
      icon: '🥬',
      description: 'Mélange de jeunes pousses',
    },
    {
      id: 'roquette',
      name: 'Roquette',
      price: 13.9,
      unit: 'kg',
      minQuantity: 0.1,
      maxQuantity: 0.2,
      step: 0.1,
      icon: '🌿',
      description: 'Piquante et parfumée',
    },
  ];

  const addToCart = (product: Product, quantity: number) => {
    if (quantity <= 0) {
      return;
    }

    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        unit: product.unit,
        quantity,
        isNew: product.isNew,
        isPromotion: product.isPromotion,
      },
    });
  };

  return (
    <div className='min-h-screen bg-accent-light'>
      <div className='container mx-auto px-4 py-8'>
        <div className='text-center mb-8'>
          <h1 className='text-4xl font-display font-bold text-accent-dark mb-4'>Nos Légumes</h1>
          <p className='text-xl text-gray-600 mb-6'>
            Dégustez nos légumes de saisons. Savourez la différence.
          </p>
          <p className='text-gray-700'>
            Soyez surpris par la qualité gustative.
            <br />
            Nos légumes ne rentrent pas dans un calibrage parfait mais le goût, lui, est bien
            présent.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {products.map(product => (
            <div
              key={product.id}
              className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 relative overflow-hidden'
            >
              {/* Logo en arrière-plan */}
              <div className='absolute top-2 right-2 opacity-10'>
                <img
                  src='/logo.png'
                  alt='Le Panier du Producteur'
                  className='w-16 h-16 object-contain'
                />
              </div>

              {/* Header avec icône et badges */}
              <div className='flex items-start justify-between mb-4 relative z-10'>
                <div className='flex items-center space-x-3'>
                  <div className='text-4xl'>{product.icon}</div>
                  <div>
                    <h3 className='text-lg font-semibold text-accent-dark'>{product.name}</h3>
                    {product.description && (
                      <p className='text-sm text-gray-600 mt-1'>{product.description}</p>
                    )}
                  </div>
                </div>
                <div className='flex flex-col items-end space-y-1'>
                  {product.isNew && (
                    <span className='bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full'>
                      ✨ Nouveauté
                    </span>
                  )}
                  {product.isPromotion && (
                    <span className='bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-full'>
                      🔥 Promotion
                    </span>
                  )}
                </div>
              </div>

              {/* Prix */}
              <div className='text-2xl font-bold text-primary-600 mb-4 text-center'>
                {product.price.toFixed(2)}€ {product.unit === 'kg' ? 'le kg' : 'pièce'}
              </div>

              {/* Contrôles */}
              <div className='flex items-center space-x-4'>
                <input
                  type='number'
                  min={product.minQuantity}
                  max={product.maxQuantity}
                  step={product.step}
                  defaultValue={product.minQuantity}
                  className='w-20 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-center'
                  id={`quantity-${product.id}`}
                />
                <button
                  onClick={() => {
                    const quantity = parseFloat(
                      (document.getElementById(`quantity-${product.id}`) as HTMLInputElement)
                        ?.value || '0',
                    );
                    addToCart(product, quantity);
                  }}
                  className='flex-1 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2'
                >
                  <span>🛒</span>
                  <span>Ajouter</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
