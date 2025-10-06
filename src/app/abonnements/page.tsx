'use client';

import { useState } from 'react';
import PageHero from '../../components/PageHero';
import SubscriptionBenefits from '../../components/SubscriptionBenefits';
import SubscriptionCard from '../../components/SubscriptionCard';
import SubscriptionManager from '../../components/SubscriptionManager';

export default function Abonnements() {
  const [activeTab, setActiveTab] = useState<'create' | 'manage'>('create');

  const subscriptionPlans = [
    {
      type: 'solo' as const,
      unitPrice: 12,
      monthlyPrice: 43.2,
      savings: 4.8,
    },
    {
      type: 'duo' as const,
      unitPrice: 16,
      monthlyPrice: 57.6,
      savings: 6.4,
      isPopular: true,
    },
    {
      type: 'familial' as const,
      unitPrice: 24,
      monthlyPrice: 86.4,
      savings: 9.6,
    },
    {
      type: 'fruits' as const,
      unitPrice: 15,
      monthlyPrice: 54,
      savings: 6,
    },
    {
      type: 'degustation' as const,
      unitPrice: 35,
      monthlyPrice: 126,
      savings: 14,
    },
  ];

  const handleSubscribe = (type: string) => {
    // Rediriger vers la page paniers avec le type sélectionné
    window.location.href = `/paniers?subscribe=${type}`;
  };

  return (
    <div className='min-h-screen bg-accent-light'>
      <PageHero
        title='Abonnements Mensuels'
        subtitle='Économisez 10% sur vos paniers avec nos abonnements automatiques'
      />

      <div className='container mx-auto px-4 py-8'>
        {/* Onglets */}
        <div className='flex justify-center mb-8'>
          <div className='bg-white rounded-xl p-2 shadow-md'>
            <button
              onClick={() => setActiveTab('create')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === 'create'
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              Créer un abonnement
            </button>
            <button
              onClick={() => setActiveTab('manage')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === 'manage'
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              Mes abonnements
            </button>
          </div>
        </div>

        {activeTab === 'create' ? (
          <>
            {/* Avantages des abonnements */}
            <SubscriptionBenefits />

            {/* Plans d'abonnement */}
            <div className='mb-12'>
              <div className='text-center mb-8'>
                <h2 className='text-3xl font-display font-bold text-accent-dark mb-4'>
                  Choisissez votre abonnement
                </h2>
                <p className='text-lg text-gray-600'>
                  Tous nos abonnements incluent 10% de réduction et une livraison automatique
                </p>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {subscriptionPlans.map(plan => (
                  <SubscriptionCard
                    key={plan.type}
                    type={plan.type}
                    unitPrice={plan.unitPrice}
                    monthlyPrice={plan.monthlyPrice}
                    savings={plan.savings}
                    isPopular={plan.isPopular}
                    onSubscribe={() => handleSubscribe(plan.type)}
                  />
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className='bg-white rounded-2xl p-8 shadow-lg'>
              <h3 className='text-2xl font-display font-bold text-accent-dark mb-6 text-center'>
                Questions fréquentes
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <h4 className='font-semibold text-accent-dark mb-2'>
                    Puis-je annuler mon abonnement ?
                  </h4>
                  <p className='text-gray-600 text-sm'>
                    Oui, vous pouvez annuler votre abonnement à tout moment sans frais.
                  </p>
                </div>
                <div>
                  <h4 className='font-semibold text-accent-dark mb-2'>
                    Puis-je mettre en pause mon abonnement ?
                  </h4>
                  <p className='text-gray-600 text-sm'>
                    Oui, vous pouvez mettre en pause votre abonnement pendant vos vacances.
                  </p>
                </div>
                <div>
                  <h4 className='font-semibold text-accent-dark mb-2'>Quand suis-je facturé ?</h4>
                  <p className='text-gray-600 text-sm'>
                    Vous êtes facturé mensuellement, le même jour que votre première commande.
                  </p>
                </div>
                <div>
                  <h4 className='font-semibold text-accent-dark mb-2'>
                    Puis-je changer de panier ?
                  </h4>
                  <p className='text-gray-600 text-sm'>
                    Oui, vous pouvez modifier le type de panier à tout moment.
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <SubscriptionManager />
        )}
      </div>
    </div>
  );
}
