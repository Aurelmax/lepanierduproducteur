'use client';

import { Calendar, MapPin, Pause, Play, Settings, Trash2, Zap } from 'lucide-react';

interface Subscription {
  id: string;
  type: 'solo' | 'duo' | 'familial' | 'fruits' | 'degustation';
  startDate: string;
  endDate: string;
  price: number;
  discount: number;
  status: 'active' | 'paused' | 'cancelled';
  deliveryLocation: string;
  deliveryDay: string;
}

export default function SubscriptionManager() {
  const subscriptions: Subscription[] = [
    {
      id: 'sub-001',
      type: 'solo',
      startDate: '2025-10-01',
      endDate: '2025-10-29',
      price: 43.2,
      discount: 10,
      status: 'active',
      deliveryLocation: 'DIRECTEMENT À LA PRODUCTION',
      deliveryDay: 'Vendredi',
    },
  ];

  const handlePauseSubscription = (id: string) => {
    console.log(`Pause subscription ${id}`);
    // Logique pour mettre en pause
  };

  const handleCancelSubscription = (id: string) => {
    console.log(`Cancel subscription ${id}`);
    // Logique pour annuler
  };

  const handleModifySubscription = (id: string) => {
    console.log(`Modify subscription ${id}`);
    // Logique pour modifier
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'solo':
        return '👤';
      case 'duo':
        return '👥';
      case 'familial':
        return '👨‍👩‍👧‍👦';
      case 'fruits':
        return '🍎';
      case 'degustation':
        return '🍇';
      default:
        return '📦';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'paused':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'cancelled':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Actif';
      case 'paused':
        return 'En pause';
      case 'cancelled':
        return 'Annulé';
      default:
        return 'Inconnu';
    }
  };

  return (
    <div className='max-w-4xl mx-auto'>
      <div className='bg-white rounded-2xl shadow-lg overflow-hidden'>
        <div className='bg-gradient-to-r from-primary-500 to-primary-600 p-6 text-white'>
          <h3 className='text-2xl font-display font-bold mb-2'>Mes Abonnements</h3>
          <p className='text-primary-100'>
            Gérez vos abonnements et bénéficiez de 10% de réduction
          </p>
        </div>

        <div className='p-6'>
          {subscriptions.length === 0 ? (
            <div className='text-center py-12'>
              <div className='w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                <Zap className='w-12 h-12 text-primary-600' />
              </div>
              <h4 className='text-xl font-semibold text-accent-dark mb-3'>
                Aucun abonnement actif
              </h4>
              <p className='text-gray-600 mb-6 max-w-md mx-auto'>
                Créez votre premier abonnement pour bénéficier de 10% de réduction et recevoir vos
                légumes automatiquement chaque semaine
              </p>
              <button
                onClick={() => (window.location.href = '/abonnements')}
                className='bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg'
              >
                Créer un abonnement
              </button>
            </div>
          ) : (
            <div className='space-y-6'>
              {subscriptions.map(subscription => (
                <div
                  key={subscription.id}
                  className='bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow duration-200'
                >
                  {/* Header de la carte */}
                  <div className='flex items-start justify-between mb-6'>
                    <div className='flex items-center space-x-4'>
                      <div className='w-16 h-16 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm'>
                        {getTypeIcon(subscription.type)}
                      </div>
                      <div>
                        <h4 className='text-xl font-bold text-accent-dark'>
                          Panier {subscription.type.toUpperCase()}
                        </h4>
                        <p className='text-gray-600'>
                          Du {new Date(subscription.startDate).toLocaleDateString('fr-FR')} au{' '}
                          {new Date(subscription.endDate).toLocaleDateString('fr-FR')}
                        </p>
                      </div>
                    </div>

                    <div className='text-right'>
                      <div className='text-3xl font-bold text-primary-600 mb-1'>
                        {subscription.price.toFixed(2)}€
                      </div>
                      <div className='text-sm text-green-600 font-semibold'>
                        -{subscription.discount}% de réduction
                      </div>
                    </div>
                  </div>

                  {/* Informations de livraison */}
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
                    <div className='flex items-center space-x-3 p-3 bg-white rounded-lg'>
                      <MapPin className='w-5 h-5 text-primary-500' />
                      <div>
                        <div className='text-sm font-medium text-gray-700'>Lieu de livraison</div>
                        <div className='text-sm text-gray-600'>{subscription.deliveryLocation}</div>
                      </div>
                    </div>
                    <div className='flex items-center space-x-3 p-3 bg-white rounded-lg'>
                      <Calendar className='w-5 h-5 text-primary-500' />
                      <div>
                        <div className='text-sm font-medium text-gray-700'>Jour de livraison</div>
                        <div className='text-sm text-gray-600'>{subscription.deliveryDay}</div>
                      </div>
                    </div>
                  </div>

                  {/* Statut et actions */}
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-3'>
                      <div
                        className={`px-3 py-1 rounded-full text-sm font-semibold border ${getStatusColor(subscription.status)}`}
                      >
                        {getStatusText(subscription.status)}
                      </div>
                    </div>

                    <div className='flex space-x-2'>
                      <button
                        onClick={() => handleModifySubscription(subscription.id)}
                        className='flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200'
                      >
                        <Settings className='w-4 h-4' />
                        <span>Modifier</span>
                      </button>

                      {subscription.status === 'active' ? (
                        <button
                          onClick={() => handlePauseSubscription(subscription.id)}
                          className='flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200'
                        >
                          <Pause className='w-4 h-4' />
                          <span>Pause</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => handlePauseSubscription(subscription.id)}
                          className='flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200'
                        >
                          <Play className='w-4 h-4' />
                          <span>Reprendre</span>
                        </button>
                      )}

                      <button
                        onClick={() => handleCancelSubscription(subscription.id)}
                        className='flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200'
                      >
                        <Trash2 className='w-4 h-4' />
                        <span>Annuler</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Avantages */}
          <div className='mt-8 bg-gradient-to-r from-primary-50 to-harvest-50 rounded-xl p-6 border border-primary-100'>
            <h4 className='font-bold text-accent-dark mb-4 flex items-center'>
              <Zap className='w-5 h-5 text-primary-500 mr-2' />
              Avantages de l'abonnement
            </h4>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='flex items-center space-x-3'>
                <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                <span className='text-sm text-gray-700'>10% de réduction sur chaque panier</span>
              </div>
              <div className='flex items-center space-x-3'>
                <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                <span className='text-sm text-gray-700'>
                  Réservation automatique chaque semaine
                </span>
              </div>
              <div className='flex items-center space-x-3'>
                <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                <span className='text-sm text-gray-700'>Même lieu et horaire de livraison</span>
              </div>
              <div className='flex items-center space-x-3'>
                <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                <span className='text-sm text-gray-700'>
                  Possibilité de mettre en pause ou modifier
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
