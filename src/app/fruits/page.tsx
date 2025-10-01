'use client';

import { useState } from 'react';
import PageHero from '../../components/PageHero';
import FruitCard from '../../components/FruitCard';

interface Fruit {
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
}

export default function Fruits() {
  const [selectedCategory, setSelectedCategory] = useState('tous');
  const [cart, setCart] = useState<{ [key: string]: number }>({});

  const categories = [
    { id: 'tous', name: 'Tous les fruits', icon: '🍎' },
    { id: 'pommes', name: 'Pommes', icon: '🍎' },
    { id: 'poires', name: 'Poires', icon: '🍐' },
    { id: 'raisins', name: 'Raisins', icon: '🍇' },
    { id: 'prunes', name: 'Prunes', icon: '🟣' },
    { id: 'figues', name: 'Figues', icon: '🟫' },
    { id: 'brugnons', name: 'Brugnons', icon: '🍑' },
  ];

  // Données réelles du site lepanierduproducteur.com
  const fruits: Fruit[] = [
    {
      id: 'raisin-noir',
      name: "Raisin 'Noir'",
      price: 4.9,
      unit: 'kg',
      image: 'https://images.unsplash.com/photo-1615485925534-598c5a0b0b4b?w=300&h=200&fit=crop',
      category: 'raisins',
      isNew: true,
      minQuantity: 0.1,
      maxQuantity: 5,
      step: 0.1,
    },
    {
      id: 'pomme-gala',
      name: "Pomme 'Gala'",
      price: 3.2,
      unit: 'kg',
      image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&h=200&fit=crop',
      category: 'pommes',
      isNew: true,
      minQuantity: 0.5,
      maxQuantity: 10,
      step: 0.5,
    },
    {
      id: 'pomme-golden',
      name: "Pomme 'Golden'",
      price: 3.1,
      unit: 'kg',
      image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&h=200&fit=crop',
      category: 'pommes',
      isNew: true,
      minQuantity: 0.5,
      maxQuantity: 10,
      step: 0.5,
    },
    {
      id: 'raisin-blanc',
      name: "Raisin 'Blanc'",
      price: 4.3,
      unit: 'kg',
      image: 'https://images.unsplash.com/photo-1615485925534-598c5a0b0b4b?w=300&h=200&fit=crop',
      category: 'raisins',
      isNew: true,
      minQuantity: 0.1,
      maxQuantity: 5,
      step: 0.1,
    },
    {
      id: 'prune-quetsche',
      name: "Prune 'Quetsche'",
      price: 4.5,
      unit: 'kg',
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=200&fit=crop',
      category: 'prunes',
      minQuantity: 0.1,
      maxQuantity: 5,
      step: 0.1,
    },
    {
      id: 'figue',
      name: 'Figue',
      price: 14.9,
      unit: 'kg',
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=200&fit=crop',
      category: 'figues',
      minQuantity: 0.5,
      maxQuantity: 3.5,
      step: 0.5,
    },
    {
      id: 'brugnon',
      name: 'Brugnon',
      price: 4.5,
      unit: 'kg',
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=200&fit=crop',
      category: 'brugnons',
      minQuantity: 0.5,
      maxQuantity: 5,
      step: 0.5,
    },
    {
      id: 'poire-guyot',
      name: "Poire 'Guyot'",
      price: 3.4,
      unit: 'kg',
      image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&h=200&fit=crop',
      category: 'poires',
      minQuantity: 0.5,
      maxQuantity: 10,
      step: 0.5,
    },
    {
      id: 'prune-jaune',
      name: "Prune 'Jaune'",
      price: 4.4,
      unit: 'kg',
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=200&fit=crop',
      category: 'prunes',
      minQuantity: 0.1,
      maxQuantity: 5,
      step: 0.1,
    },
  ];

  const filteredFruits =
    selectedCategory === 'tous'
      ? fruits
      : fruits.filter(fruit => fruit.category === selectedCategory);

  const addToCart = (fruitId: string, quantity: number) => {
    setCart(prev => ({
      ...prev,
      [fruitId]: (prev[fruitId] || 0) + quantity,
    }));
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  };

  return (
    <div className='min-h-screen bg-accent-light'>
      <PageHero title='Nos Fruits' subtitle='Fruits de saison cueillis à maturité' />

      <div className='container mx-auto px-4 py-8'>
        <div className='flex gap-8'>
          {/* Sidebar */}
          <div className='w-80 bg-white rounded-lg shadow-lg p-6 h-fit'>
            {/* Panier */}
            <div className='mb-6'>
              <h3 className='text-lg font-semibold text-accent-dark mb-4'>
                PRODUIT(S) DE VOTRE PANIER PERSONNALISÉ
              </h3>
              <button className='w-full bg-primary-500 hover:bg-primary-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors'>
                VOIR CADDIE ({getTotalItems()})
              </button>
            </div>

            {/* Catégories */}
            <div>
              <h3 className='text-lg font-semibold text-accent-dark mb-4'>AJOUTER</h3>
              <ul className='space-y-2'>
                {categories.map(category => (
                  <li key={category.id}>
                    <button
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-primary-100 text-primary-700 border-l-4 border-primary-500'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <span className='text-lg'>{category.icon}</span>
                      <span className='font-medium'>{category.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Grille de produits */}
          <div className='flex-1'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {filteredFruits.map(fruit => (
                <FruitCard key={fruit.id} fruit={fruit} onAddToCart={addToCart} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
