'use client';

import { CheckCircle, Clock, Heart, Shield, Truck } from 'lucide-react';

export default function SubscriptionBenefits() {
  const benefits = [
    {
      icon: <CheckCircle className='w-8 h-8 text-primary-500' />,
      title: 'Économies garanties',
      description: "10% de réduction sur chaque panier, soit jusqu'à 14€ d'économie par mois",
      highlight: "Jusqu'à 168€/an",
    },
    {
      icon: <Clock className='w-8 h-8 text-earth-500' />,
      title: 'Gain de temps',
      description: 'Plus besoin de penser à commander, vos légumes arrivent automatiquement',
      highlight: 'Zéro stress',
    },
    {
      icon: <Heart className='w-8 h-8 text-harvest-500' />,
      title: 'Fruits et légumes frais',
      description: 'Récoltés le matin même, livrés directement du producteur',
      highlight: '100% fraîcheur',
    },
    {
      icon: <Shield className='w-8 h-8 text-denim-500' />,
      title: 'Flexibilité totale',
      description: 'Annulez ou mettez en pause votre abonnement quand vous voulez',
      highlight: 'Sans engagement',
    },
    {
      icon: <Truck className='w-8 h-8 text-primary-600' />,
      title: 'Livraison gratuite',
      description: 'Livraison à domicile ou retrait au point de votre choix',
      highlight: 'Partout sur la région',
    },
  ];

  return (
    <div className='bg-gradient-to-br from-primary-50 to-harvest-50 rounded-2xl p-8 mb-12'>
      <div className='text-center mb-8'>
        <h2 className='text-3xl font-display font-bold text-accent-dark mb-4'>
          Pourquoi choisir un abonnement ?
        </h2>
        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
          Rejoignez des milliers de familles qui font confiance à nos abonnements pour des légumes
          frais chaque semaine
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className='bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100'
          >
            <div className='flex items-start space-x-4'>
              <div className='flex-shrink-0'>{benefit.icon}</div>
              <div className='flex-1'>
                <h3 className='text-lg font-semibold text-accent-dark mb-2'>{benefit.title}</h3>
                <p className='text-gray-600 text-sm mb-3'>{benefit.description}</p>
                <div className='inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-semibold'>
                  {benefit.highlight}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Statistiques */}
      <div className='mt-8 bg-white rounded-xl p-6 shadow-md'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center'>
          <div>
            <div className='text-3xl font-bold text-primary-600 mb-2'>500+</div>
            <div className='text-sm text-gray-600'>Familles abonnées</div>
          </div>
          <div>
            <div className='text-3xl font-bold text-primary-600 mb-2'>10%</div>
            <div className='text-sm text-gray-600'>D'économie garantie</div>
          </div>
          <div>
            <div className='text-3xl font-bold text-primary-600 mb-2'>100%</div>
            <div className='text-sm text-gray-600'>Satisfaction client</div>
          </div>
        </div>
      </div>
    </div>
  );
}
