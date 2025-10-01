'use client';

import { useState } from 'react';
import { getCurrentWeekPeriod, getNextWeekPeriod } from '../utils/dateUtils';

interface BasketComposition {
  id: string;
  name: string;
  price: string;
  items: Array<{
    quantity: string;
    name: string;
  }>;
}

export default function AdminPanel() {
  const [compositions, setCompositions] = useState<BasketComposition[]>([
    {
      id: 'solo',
      name: 'Panier Fraîcheur SOLO',
      price: '12,00€',
      items: [
        { quantity: '500gr', name: 'Tomate "Ancienne"' },
        { quantity: '500gr', name: 'Courgette' },
        { quantity: '500gr', name: 'Carotte "vrac"' },
        { quantity: '1 x', name: 'Betterave "crue"' },
        { quantity: '500gr', name: 'Pomme de Terre "mona lisa"' },
        { quantity: '200gr', name: 'Oignon "Paille"' },
        { quantity: '1 x Bt 6', name: 'Oeufs extra frais "plein air"' },
        { quantity: '700gr', name: 'Raisin "Blanc"' },
      ],
    },
    {
      id: 'duo',
      name: 'Panier Fraîcheur DUO',
      price: '16,00€',
      items: [
        { quantity: '800gr', name: 'Tomate "Ancienne"' },
        { quantity: '800gr', name: 'Courgette' },
        { quantity: '800gr', name: 'Carotte "vrac"' },
        { quantity: '1 x', name: 'Betterave "crue"' },
        { quantity: '800gr', name: 'Pomme de Terre "mona lisa"' },
        { quantity: '300gr', name: 'Oignon "Paille"' },
        { quantity: '1 x Bt 6', name: 'Oeufs extra frais "plein air"' },
        { quantity: '1,1 Kg', name: 'Raisin "Blanc"' },
      ],
    },
    {
      id: 'familial',
      name: 'Panier Fraîcheur FAMILIAL',
      price: '24,00€',
      items: [
        { quantity: '1,1 Kg', name: 'Tomate "Ancienne"' },
        { quantity: '1,1 Kg', name: 'Courgette' },
        { quantity: '1,1 Kg', name: 'Carotte "vrac"' },
        { quantity: '2 x', name: 'Betterave "crue"' },
        { quantity: '1,1 Kg', name: 'Pomme de Terre "mona lisa"' },
        { quantity: '500gr', name: 'Oignon "Paille"' },
        { quantity: '2 x Bt 6', name: 'Oeufs extra frais "plein air"' },
        { quantity: '1,5 Kg', name: 'Raisin "Blanc"' },
      ],
    },
  ]);

  const currentWeek = getCurrentWeekPeriod();
  const nextWeek = getNextWeekPeriod();

  const handleUpdateComposition = (
    id: string,
    newItems: Array<{ quantity: string; name: string }>,
  ) => {
    setCompositions(prev =>
      prev.map(comp => (comp.id === id ? { ...comp, items: newItems } : comp)),
    );
  };

  const handlePublishWeek = () => {
    // Logique pour publier la nouvelle semaine
    console.log('Publication de la nouvelle semaine:', nextWeek);
    alert('Nouvelle semaine publiée !');
  };

  return (
    <div className='bg-white rounded-xl shadow-lg p-8'>
      <h2 className='text-3xl font-display font-bold text-accent-dark text-center mb-8'>
        🛠️ Administration - Gestion des Paniers
      </h2>

      {/* Informations sur les semaines */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
        <div className='bg-blue-50 border border-blue-200 rounded-lg p-4'>
          <h3 className='text-lg font-semibold text-blue-800 mb-2'>Semaine Actuelle</h3>
          <p className='text-blue-700'>
            {currentWeek.startDate} au {currentWeek.endDate}
          </p>
          <p className='text-sm text-blue-600'>Semaine {currentWeek.weekNumber}</p>
        </div>

        <div className='bg-green-50 border border-green-200 rounded-lg p-4'>
          <h3 className='text-lg font-semibold text-green-800 mb-2'>Semaine Suivante</h3>
          <p className='text-green-700'>
            {nextWeek.startDate} au {nextWeek.endDate}
          </p>
          <p className='text-sm text-green-600'>Semaine {nextWeek.weekNumber}</p>
        </div>
      </div>

      {/* Actions rapides */}
      <div className='flex flex-wrap gap-4 mb-8'>
        <button
          onClick={handlePublishWeek}
          className='bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors'
        >
          📅 Publier la nouvelle semaine
        </button>
        <button className='bg-harvest-500 hover:bg-harvest-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors'>
          📊 Voir les statistiques
        </button>
        <button className='bg-earth-500 hover:bg-earth-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors'>
          📧 Envoyer newsletter
        </button>
      </div>

      {/* Gestion des compositions */}
      <div className='space-y-6'>
        <h3 className='text-xl font-semibold text-accent-dark'>Compositions des Paniers</h3>

        {compositions.map(composition => (
          <div key={composition.id} className='border border-gray-200 rounded-lg p-6'>
            <div className='flex items-center justify-between mb-4'>
              <h4 className='text-lg font-semibold text-accent-dark'>{composition.name}</h4>
              <span className='text-xl font-bold text-primary-600'>{composition.price}</span>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {composition.items.map((item, index) => (
                <div key={index} className='flex items-center space-x-3 p-3 bg-gray-50 rounded-lg'>
                  <span className='font-semibold text-primary-600'>{item.quantity}</span>
                  <span className='text-gray-700'>{item.name}</span>
                </div>
              ))}
            </div>

            <div className='mt-4 flex gap-2'>
              <button className='bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors'>
                ✏️ Modifier
              </button>
              <button className='bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors'>
                📋 Dupliquer
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Instructions */}
      <div className='mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6'>
        <h4 className='text-lg font-semibold text-yellow-800 mb-2'>📋 Instructions</h4>
        <ul className='text-yellow-700 space-y-1'>
          <li>• Les paniers sont automatiquement mis à jour tous les mercredis</li>
          <li>• Modifiez les compositions avant le mardi soir</li>
          <li>• Les clients reçoivent une notification automatique</li>
          <li>• Les abonnements sont renouvelés automatiquement</li>
        </ul>
      </div>
    </div>
  );
}
