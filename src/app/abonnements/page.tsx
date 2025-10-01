'use client';

import PageHero from '../../components/PageHero';
import SubscriptionManager from '../../components/SubscriptionManager';

export default function Abonnements() {
  return (
    <div className='min-h-screen bg-accent-light'>
      <PageHero
        title='Mes Abonnements'
        subtitle='Gérez vos abonnements mensuels et bénéficiez de 10% de réduction'
      />

      <div className='container mx-auto px-4 py-8'>
        <SubscriptionManager />
      </div>
    </div>
  );
}
