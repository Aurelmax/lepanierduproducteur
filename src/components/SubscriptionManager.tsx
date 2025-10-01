'use client';

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

  return (
    <div className='bg-white rounded-xl p-8 shadow-lg'>
      <h3 className='text-2xl font-display font-bold text-accent-dark mb-6'>Mes Abonnements</h3>

      {subscriptions.length === 0 ? (
        <div className='text-center py-8'>
          <div className='text-6xl mb-4'>📦</div>
          <h4 className='text-xl font-semibold text-accent-dark mb-2'>Aucun abonnement actif</h4>
          <p className='text-gray-600 mb-4'>
            Créez votre premier abonnement pour bénéficier de 10% de réduction
          </p>
          <button className='bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200'>
            Créer un abonnement
          </button>
        </div>
      ) : (
        <div className='space-y-6'>
          {subscriptions.map(subscription => (
            <div key={subscription.id} className='border border-gray-200 rounded-lg p-6'>
              <div className='flex justify-between items-start mb-4'>
                <div>
                  <h4 className='text-lg font-semibold text-accent-dark'>
                    Panier Fraîcheur {subscription.type.toUpperCase()}
                  </h4>
                  <p className='text-sm text-gray-600'>
                    Du {new Date(subscription.startDate).toLocaleDateString('fr-FR')} au{' '}
                    {new Date(subscription.endDate).toLocaleDateString('fr-FR')}
                  </p>
                </div>
                <div className='text-right'>
                  <div className='text-2xl font-bold text-primary-600'>{subscription.price}€</div>
                  <div className='text-sm text-green-600'>
                    -{subscription.discount}% de réduction
                  </div>
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                <div>
                  <span className='text-sm font-medium text-gray-700'>Lieu de livraison :</span>
                  <p className='text-sm text-gray-600'>{subscription.deliveryLocation}</p>
                </div>
                <div>
                  <span className='text-sm font-medium text-gray-700'>Jour de livraison :</span>
                  <p className='text-sm text-gray-600'>{subscription.deliveryDay}</p>
                </div>
              </div>

              <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-2'>
                  <div
                    className={`w-3 h-3 rounded-full ${
                      subscription.status === 'active'
                        ? 'bg-green-500'
                        : subscription.status === 'paused'
                          ? 'bg-yellow-500'
                          : 'bg-red-500'
                    }`}
                  ></div>
                  <span className='text-sm font-medium text-gray-700 capitalize'>
                    {subscription.status === 'active'
                      ? 'Actif'
                      : subscription.status === 'paused'
                        ? 'En pause'
                        : 'Annulé'}
                  </span>
                </div>

                <div className='flex space-x-2'>
                  <button
                    onClick={() => handleModifySubscription(subscription.id)}
                    className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200'
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => handlePauseSubscription(subscription.id)}
                    className='bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200'
                  >
                    Mettre en pause
                  </button>
                  <button
                    onClick={() => handleCancelSubscription(subscription.id)}
                    className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200'
                  >
                    Annuler
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className='mt-8 bg-primary-50 rounded-lg p-6'>
        <h4 className='font-semibold text-accent-dark mb-2'>💡 Avantages de l'abonnement</h4>
        <ul className='text-sm text-gray-700 space-y-1'>
          <li>• 10% de réduction sur chaque panier</li>
          <li>• Réservation automatique chaque semaine</li>
          <li>• Même lieu et horaire de livraison</li>
          <li>• Possibilité de mettre en pause ou modifier</li>
          <li>• Annulation possible à tout moment</li>
        </ul>
      </div>
    </div>
  );
}
