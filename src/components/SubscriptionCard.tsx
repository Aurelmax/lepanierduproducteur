'use client';

import { Check, Star, Zap } from 'lucide-react';

interface SubscriptionCardProps {
  type: 'solo' | 'duo' | 'familial' | 'fruits' | 'degustation';
  unitPrice: number;
  monthlyPrice: number;
  savings: number;
  isPopular?: boolean;
  onSubscribe: () => void;
}

export default function SubscriptionCard({
  type,
  unitPrice,
  monthlyPrice,
  savings,
  isPopular = false,
  onSubscribe,
}: SubscriptionCardProps) {
  const getTypeInfo = () => {
    switch (type) {
      case 'solo':
        return {
          name: 'SOLO',
          description: 'Parfait pour 1-2 personnes',
          icon: '👤',
          color: 'from-blue-500 to-blue-600',
          bgColor: 'bg-blue-50',
          borderColor: 'border-blue-200',
        };
      case 'duo':
        return {
          name: 'DUO',
          description: 'Idéal pour 2-3 personnes',
          icon: '👥',
          color: 'from-green-500 to-green-600',
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200',
        };
      case 'familial':
        return {
          name: 'FAMILIAL',
          description: 'Pour toute la famille (4+ personnes)',
          icon: '👨‍👩‍👧‍👦',
          color: 'from-purple-500 to-purple-600',
          bgColor: 'bg-purple-50',
          borderColor: 'border-purple-200',
        };
      case 'fruits':
        return {
          name: 'FRUITS',
          description: 'Sélection de fruits de saison',
          icon: '🍎',
          color: 'from-orange-500 to-orange-600',
          bgColor: 'bg-orange-50',
          borderColor: 'border-orange-200',
        };
      case 'degustation':
        return {
          name: 'DÉGUSTATION',
          description: 'Fruits premium pour gourmets',
          icon: '🍇',
          color: 'from-pink-500 to-pink-600',
          bgColor: 'bg-pink-50',
          borderColor: 'border-pink-200',
        };
    }
  };

  const typeInfo = getTypeInfo();
  const weeklyPrice = unitPrice;
  const monthlyPriceWithoutDiscount = weeklyPrice * 4;

  return (
    <div
      className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-2 ${typeInfo.borderColor} ${
        isPopular ? 'ring-4 ring-primary-500 ring-opacity-50' : ''
      }`}
    >
      {/* Badge Populaire */}
      {isPopular && (
        <div className='absolute -top-3 left-1/2 transform -translate-x-1/2 z-20'>
          <div className='bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-1 shadow-lg'>
            <Star className='w-4 h-4 fill-current' />
            <span>POPULAIRE</span>
          </div>
        </div>
      )}

      {/* Header avec gradient */}
      <div className={`bg-gradient-to-r ${typeInfo.color} p-6 text-white relative overflow-hidden`}>
        <div className='absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -translate-y-16 translate-x-16'></div>
        <div className='absolute bottom-0 left-0 w-24 h-24 bg-white bg-opacity-10 rounded-full translate-y-12 -translate-x-12'></div>

        <div className='relative z-10'>
          <div className='flex items-center justify-between mb-4'>
            <div className='text-4xl'>{typeInfo.icon}</div>
            <div className='text-right'>
              <div className='text-sm opacity-90'>Économisez</div>
              <div className='text-2xl font-bold'>{savings.toFixed(2)}€/mois</div>
            </div>
          </div>

          <h3 className='text-2xl font-bold mb-2'>Panier {typeInfo.name}</h3>
          <p className='text-sm opacity-90'>{typeInfo.description}</p>
        </div>
      </div>

      {/* Contenu principal */}
      <div className='p-6'>
        {/* Prix */}
        <div className='text-center mb-6'>
          <div className='flex items-center justify-center space-x-4 mb-2'>
            <div className='text-gray-500 line-through text-lg'>
              {monthlyPriceWithoutDiscount.toFixed(2)}€/mois
            </div>
            <div className='text-3xl font-bold text-primary-600'>
              {monthlyPrice.toFixed(2)}€/mois
            </div>
          </div>
          <div className='text-sm text-gray-600'>
            Soit {weeklyPrice.toFixed(2)}€ par semaine (4 livraisons)
          </div>
        </div>

        {/* Avantages */}
        <div className='space-y-3 mb-6'>
          <div className='flex items-center space-x-3'>
            <div className='w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0'>
              <Check className='w-4 h-4 text-green-600' />
            </div>
            <span className='text-sm text-gray-700'>Livraison automatique chaque semaine</span>
          </div>
          <div className='flex items-center space-x-3'>
            <div className='w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0'>
              <Check className='w-4 h-4 text-green-600' />
            </div>
            <span className='text-sm text-gray-700'>10% de réduction sur chaque panier</span>
          </div>
          <div className='flex items-center space-x-3'>
            <div className='w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0'>
              <Check className='w-4 h-4 text-green-600' />
            </div>
            <span className='text-sm text-gray-700'>Annulation possible à tout moment</span>
          </div>
          <div className='flex items-center space-x-3'>
            <div className='w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0'>
              <Check className='w-4 h-4 text-green-600' />
            </div>
            <span className='text-sm text-gray-700'>Pause possible pendant les vacances</span>
          </div>
        </div>

        {/* Bouton d'abonnement */}
        <button
          onClick={onSubscribe}
          className={`w-full bg-gradient-to-r ${typeInfo.color} hover:shadow-lg text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2`}
        >
          <Zap className='w-5 h-5' />
          <span>S'abonner maintenant</span>
        </button>

        {/* Note */}
        <div className='text-center mt-4'>
          <p className='text-xs text-gray-500'>Premier paiement aujourd'hui, puis mensuel</p>
        </div>
      </div>
    </div>
  );
}
