import { notFound } from 'next/navigation';
import DistributionPointDetail from '../../../components/DistributionPointDetail';
import PageHero from '../../../components/PageHero';
import { getDistributionPointById } from '../../../utils/distributionUtils';

interface DistributionPointPageProps {
  params: {
    id: string;
  };
}

export default function DistributionPointPage({ params }: DistributionPointPageProps) {
  const pointId = parseInt(params.id);

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
          window.location.href = '/checkout';
        }}
      />
    </div>
  );
}

// Générer les métadonnées pour chaque page
export async function generateMetadata({ params }: DistributionPointPageProps) {
  const pointId = parseInt(params.id);
  const point = getDistributionPointById(pointId);

  if (!point) {
    return {
      title: 'Point de distribution non trouvé',
    };
  }

  return {
    title: `${point.name} - Points de distribution`,
    description: `Informations détaillées pour le point de distribution ${point.name} à ${point.city}. Horaires, adresse et conditions de retrait/livraison.`,
  };
}
