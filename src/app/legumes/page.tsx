'use client';

import { useState } from 'react';
import PageHero from '../../components/PageHero';
import VegetableCard from '../../components/VegetableCard';

interface Vegetable {
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

export default function Legumes() {
  const [selectedCategory, setSelectedCategory] = useState('tous');
  const [cart, setCart] = useState<{ [key: string]: number }>({});

  const categories = [
    { id: 'tous', name: 'Tous les légumes', icon: '🥬' },
    { id: 'choux', name: 'Choux', icon: '🥬' },
    { id: 'tomates', name: 'Tomates', icon: '🍅' },
    { id: 'courgettes', name: 'Courgettes', icon: '🥒' },
    { id: 'carottes', name: 'Carottes', icon: '🥕' },
    { id: 'pommes_terre', name: 'Pommes de terre', icon: '🥔' },
    { id: 'salades', name: 'Salades', icon: '🥗' },
    { id: 'autres', name: 'Autres', icon: '🌶️' },
  ];

  // Données réelles du site lepanierduproducteur.com
  const vegetables: Vegetable[] = [
    {
      id: 'chou-fleur',
      name: 'Chou fleur (Taille Grosse)',
      price: 4.9,
      unit: 'piece',
      image: '',
      category: 'choux',
      isNew: true,
      minQuantity: 1,
      maxQuantity: 10,
      step: 1,
    },
    {
      id: 'echalote',
      name: 'Echalote',
      price: 4.9,
      unit: 'kg',
      image: '',
      category: 'autres',
      isNew: true,
      minQuantity: 0.1,
      maxQuantity: 3,
      step: 0.1,
    },
    {
      id: 'celeri',
      name: 'Celeri',
      price: 3.8,
      unit: 'kg',
      image: '',
      category: 'autres',
      isNew: true,
      minQuantity: 0.1,
      maxQuantity: 5,
      step: 0.1,
    },
    {
      id: 'haricot-vert',
      name: 'Haricot vert',
      price: 12.9,
      unit: 'kg',
      image: '',
      category: 'autres',
      isNew: true,
      minQuantity: 0.1,
      maxQuantity: 5,
      step: 0.1,
    },
    {
      id: 'courge-butternut',
      name: 'Courge Butternut',
      price: 3.2,
      unit: 'kg',
      image: '',
      category: 'courgettes',
      isNew: true,
      minQuantity: 0.5,
      maxQuantity: 10,
      step: 0.5,
    },
    {
      id: 'courge-nice',
      name: 'Courge de Nice',
      price: 2.9,
      unit: 'kg',
      image: '',
      category: 'courgettes',
      isNew: true,
      minQuantity: 0.5,
      maxQuantity: 10,
      step: 0.5,
    },
    {
      id: 'poivron-vert',
      name: 'Poivron vert',
      price: 3.9,
      unit: 'kg',
      image: '',
      category: 'autres',
      isPromotion: true,
      minQuantity: 0.5,
      maxQuantity: 5,
      step: 0.5,
    },
    {
      id: 'tomate-noir-crimee',
      name: "Tomate 'Noir de crimée'",
      price: 4.9,
      unit: 'kg',
      image: '',
      category: 'tomates',
      minQuantity: 0.1,
      maxQuantity: 5,
      step: 0.1,
    },
    {
      id: 'oignon-paille',
      name: "Oignon 'Paille'",
      price: 2.9,
      unit: 'kg',
      image: '',
      category: 'autres',
      minQuantity: 0.5,
      maxQuantity: 10,
      step: 0.5,
    },
    {
      id: 'tomates-roma',
      name: "Tomates 'Roma'",
      price: 3.6,
      unit: 'kg',
      image: '',
      category: 'tomates',
      minQuantity: 0.1,
      maxQuantity: 6,
      step: 0.1,
    },
    {
      id: 'courgettes-blanche',
      name: 'Courgettes Blanche - à la Coupe',
      price: 2.9,
      unit: 'kg',
      image: '',
      category: 'courgettes',
      minQuantity: 0.1,
      maxQuantity: 5,
      step: 0.1,
    },
    {
      id: 'salade',
      name: 'Salade',
      price: 1.8,
      unit: 'piece',
      image: '',
      category: 'salades',
      minQuantity: 1,
      maxQuantity: 10,
      step: 1,
    },
    {
      id: 'tomate-ancienne',
      name: "Tomate 'Ancienne'",
      price: 4.8,
      unit: 'kg',
      image: '',
      category: 'tomates',
      minQuantity: 0.1,
      maxQuantity: 10,
      step: 0.1,
    },
    {
      id: 'oeufs-plein-air',
      name: "Bt 6 Oeufs extra frais 'plein air'",
      price: 4.2,
      unit: 'piece',
      image: '',
      category: 'autres',
      minQuantity: 1,
      maxQuantity: 10,
      step: 1,
    },
    {
      id: 'courgette',
      name: 'Courgette',
      price: 3.8,
      unit: 'kg',
      image: '',
      category: 'courgettes',
      minQuantity: 0.5,
      maxQuantity: 5,
      step: 0.5,
    },
    {
      id: 'fleurs-courgette',
      name: "Fleurs de Courgette 'bouquet de 6 fleurs'",
      price: 3.9,
      unit: 'piece',
      image: '',
      category: 'courgettes',
      minQuantity: 1,
      maxQuantity: 20,
      step: 1,
    },
    {
      id: 'pomme-terre-mona-lisa',
      name: "Pomme de Terre 'mona lisa'",
      price: 2.4,
      unit: 'kg',
      image: '',
      category: 'pommes_terre',
      minQuantity: 0.5,
      maxQuantity: 10,
      step: 0.5,
    },
    {
      id: 'concombre-noa',
      name: 'Concombre Noa',
      price: 1.2,
      unit: 'piece',
      image: '',
      category: 'autres',
      minQuantity: 1,
      maxQuantity: 15,
      step: 1,
    },
    {
      id: 'carotte-vrac',
      name: "Carotte 'vrac'",
      price: 2.6,
      unit: 'kg',
      image: '',
      category: 'carottes',
      minQuantity: 0.1,
      maxQuantity: 10,
      step: 0.1,
    },
    {
      id: 'pomme-terre-grenailles',
      name: "Pomme de Terre 'Grenailles'",
      price: 4.2,
      unit: 'kg',
      image: '',
      category: 'pommes_terre',
      minQuantity: 0.1,
      maxQuantity: 5,
      step: 0.1,
    },
    {
      id: 'pousse-epinard',
      name: 'Pousse Epinard',
      price: 13.9,
      unit: 'kg',
      image: '',
      category: 'salades',
      minQuantity: 0.1,
      maxQuantity: 0.7,
      step: 0.1,
    },
    {
      id: 'botte-carottes-fane',
      name: "Botte de Carottes 'fane'",
      price: 3.2,
      unit: 'piece',
      image: '',
      category: 'carottes',
      minQuantity: 1,
      maxQuantity: 10,
      step: 1,
    },
    {
      id: 'fenouil',
      name: 'Fenouil',
      price: 3.8,
      unit: 'kg',
      image: '',
      category: 'autres',
      minQuantity: 0.1,
      maxQuantity: 5,
      step: 0.1,
    },
    {
      id: 'potiron',
      name: 'Potiron',
      price: 2.9,
      unit: 'kg',
      image: '',
      category: 'courgettes',
      minQuantity: 0.5,
      maxQuantity: 10,
      step: 0.5,
    },
    {
      id: 'betterave-crue',
      name: "Betterave 'crue'",
      price: 1.6,
      unit: 'piece',
      image: '',
      category: 'autres',
      minQuantity: 1,
      maxQuantity: 15,
      step: 1,
    },
    {
      id: 'poivron-rouge',
      name: 'Poivron rouge',
      price: 4.4,
      unit: 'kg',
      image: '',
      category: 'autres',
      minQuantity: 0.5,
      maxQuantity: 5,
      step: 0.5,
    },
    {
      id: 'chou-blanc',
      name: 'Chou blanc',
      price: 3.4,
      unit: 'kg',
      image: '',
      category: 'choux',
      minQuantity: 0.5,
      maxQuantity: 5,
      step: 0.5,
    },
    {
      id: 'chou-rouge',
      name: 'Chou Rouge',
      price: 3.4,
      unit: 'kg',
      image: '',
      category: 'choux',
      minQuantity: 0.5,
      maxQuantity: 5,
      step: 0.5,
    },
    {
      id: 'botte-cebettes',
      name: 'Botte de cebettes',
      price: 2.2,
      unit: 'piece',
      image: '',
      category: 'autres',
      minQuantity: 1,
      maxQuantity: 9,
      step: 1,
    },
    {
      id: 'ail',
      name: 'Ail',
      price: 13.9,
      unit: 'kg',
      image: '',
      category: 'autres',
      minQuantity: 0.1,
      maxQuantity: 3,
      step: 0.1,
    },
    {
      id: 'celeri-rave',
      name: 'Céleri Rave',
      price: 4.2,
      unit: 'kg',
      image: '',
      category: 'autres',
      minQuantity: 0.5,
      maxQuantity: 5,
      step: 0.5,
    },
    {
      id: 'mesclun',
      name: 'Mesclun',
      price: 12.9,
      unit: 'kg',
      image: '',
      category: 'salades',
      minQuantity: 0.1,
      maxQuantity: 0.7,
      step: 0.1,
    },
    {
      id: 'roquette',
      name: 'Roquette',
      price: 13.9,
      unit: 'kg',
      image: '',
      category: 'salades',
      minQuantity: 0.1,
      maxQuantity: 0.2,
      step: 0.1,
    },
  ];

  const filteredVegetables =
    selectedCategory === 'tous'
      ? vegetables
      : vegetables.filter(vegetable => vegetable.category === selectedCategory);

  const addToCart = (vegetableId: string, quantity: number) => {
    setCart(prev => ({
      ...prev,
      [vegetableId]: (prev[vegetableId] || 0) + quantity,
    }));
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  };

  return (
    <div className='min-h-screen bg-accent-light'>
      <PageHero
        title='Nos Légumes'
        subtitle='Dégustez nos légumes de saisons. Savourez la différence.'
      />

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
              {filteredVegetables.map(vegetable => (
                <VegetableCard key={vegetable.id} vegetable={vegetable} onAddToCart={addToCart} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
