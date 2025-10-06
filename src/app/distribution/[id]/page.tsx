'use client';

import { notFound, useRouter } from 'next/navigation';
import { use } from 'react';
import DistributionPointDetail from '../../../components/DistributionPointDetail';
import PageHero from '../../../components/PageHero';
import { getDistributionPointById } from '../../../utils/distributionUtils';

interface DistributionPointPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function DistributionPointPage({ params }: DistributionPointPageProps) {
  const router = useRouter();
  const resolvedParams = use(params);
  const pointId = parseInt(resolvedParams.id);

  if (isNaN(pointId)) {
    notFound();
  }

  const point = getDistributionPointById(pointId);

  if (!point) {
    notFound();
  }

  return (
    <div className='min-h-screen bg-accent-light'>
      <PageHero
        title={point.name}
        subtitle={`${point.address}, ${point.postalCode} - ${point.city}`}
      />

      <DistributionPointDetail
        point={point}
        showOrderButton={true}
        onOrderClick={() => {
          // Rediriger vers le checkout avec le point pré-sélectionné
          router.push('/checkout');
        }}
      />
    </div>
  );
}
