import { distributionPoints } from '../data/distributionPoints';
import { DistributionFilter, DistributionPoint } from '../types/distribution';

/**
 * Filtre les points de distribution selon les critères donnés
 */
export function filterDistributionPoints(filters: DistributionFilter): DistributionPoint[] {
  return distributionPoints.filter(point => {
    // Filtre par type
    if (filters.type && point.type !== filters.type) {
      return false;
    }

    // Filtre par catégorie
    if (filters.category && point.category !== filters.category) {
      return false;
    }

    // Filtre par ville
    if (filters.city && !point.city.toLowerCase().includes(filters.city.toLowerCase())) {
      return false;
    }

    // Filtre par jour
    if (filters.day && !point.days.some(day => day.day === filters.day)) {
      return false;
    }

    // Filtre par montant minimum de commande
    if (filters.minOrderAmount && point.deliveryInfo?.minOrderAmount) {
      if (point.deliveryInfo.minOrderAmount > filters.minOrderAmount) {
        return false;
      }
    }

    // Filtre par coût maximum de livraison
    if (filters.maxDeliveryCost && point.deliveryInfo?.deliveryCost) {
      if (point.deliveryInfo.deliveryCost > filters.maxDeliveryCost) {
        return false;
      }
    }

    return true;
  });
}

/**
 * Récupère un point de distribution par son ID
 */
export function getDistributionPointById(id: number): DistributionPoint | undefined {
  return distributionPoints.find(point => point.id === id);
}

/**
 * Récupère tous les points de distribution d'une ville
 */
export function getDistributionPointsByCity(city: string): DistributionPoint[] {
  return distributionPoints.filter(point => point.city.toLowerCase().includes(city.toLowerCase()));
}

/**
 * Récupère tous les points de distribution d'un type donné
 */
export function getDistributionPointsByType(
  type: 'retrait' | 'livraison_gratuite' | 'livraison_payante'
): DistributionPoint[] {
  return distributionPoints.filter(point => point.type === type);
}

/**
 * Récupère tous les points de distribution d'une catégorie donnée
 */
export function getDistributionPointsByCategory(
  category: 'public' | 'production' | 'entreprise' | 'sophia_antipolis'
): DistributionPoint[] {
  return distributionPoints.filter(point => point.category === category);
}

/**
 * Récupère tous les points de distribution disponibles un jour donné
 */
export function getDistributionPointsByDay(day: string): DistributionPoint[] {
  return distributionPoints.filter(point => point.days.some(d => d.day === day));
}

/**
 * Récupère tous les points de distribution avec livraison gratuite
 */
export function getFreeDeliveryPoints(): DistributionPoint[] {
  return distributionPoints.filter(point => point.type === 'livraison_gratuite');
}

/**
 * Récupère tous les points de distribution avec livraison payante
 */
export function getPaidDeliveryPoints(): DistributionPoint[] {
  return distributionPoints.filter(point => point.type === 'livraison_payante');
}

/**
 * Récupère tous les points de retrait (non livraison)
 */
export function getPickupPoints(): DistributionPoint[] {
  return distributionPoints.filter(point => point.type === 'retrait');
}

/**
 * Récupère tous les points de distribution publics (sans restriction)
 */
export function getPublicPoints(): DistributionPoint[] {
  return distributionPoints.filter(
    point => point.category === 'public' || point.category === 'production'
  );
}

/**
 * Récupère tous les points de distribution d'entreprise (avec restriction)
 */
export function getEnterprisePoints(): DistributionPoint[] {
  return distributionPoints.filter(
    point => point.category === 'entreprise' || point.category === 'sophia_antipolis'
  );
}

/**
 * Calcule le coût total de livraison pour un point donné
 */
export function calculateDeliveryCost(point: DistributionPoint, orderAmount: number): number {
  if (point.type === 'livraison_gratuite') {
    return 0;
  }

  if (point.type === 'livraison_payante' && point.deliveryInfo?.deliveryCost) {
    return point.deliveryInfo.deliveryCost;
  }

  return 0;
}

/**
 * Vérifie si une commande respecte le montant minimum pour un point donné
 */
export function checkMinimumOrderAmount(point: DistributionPoint, orderAmount: number): boolean {
  if (!point.deliveryInfo?.minOrderAmount) {
    return true;
  }

  return orderAmount >= point.deliveryInfo.minOrderAmount;
}

/**
 * Formate l'adresse complète d'un point de distribution
 */
export function formatFullAddress(point: DistributionPoint): string {
  return `${point.address}, ${point.postalCode} - ${point.city}`;
}

/**
 * Formate les jours de distribution d'un point
 */
export function formatDistributionDays(point: DistributionPoint): string {
  const dayNames = {
    lundi: 'Lundi',
    mardi: 'Mardi',
    mercredi: 'Mercredi',
    jeudi: 'Jeudi',
    vendredi: 'Vendredi',
    samedi: 'Samedi',
  };

  return point.days.map(day => dayNames[day.day]).join(', ');
}

/**
 * Récupère les informations de contact d'un point
 */
export function getContactInfo(point: DistributionPoint): string[] {
  const info: string[] = [];

  if (point.contactInfo?.phoneCall) {
    const minutes = point.contactInfo.callMinutesBefore || 5;
    info.push(`Appel téléphonique ${minutes} minutes avant`);
  }

  if (point.contactInfo?.email) {
    info.push(`Email: ${point.contactInfo.email}`);
  }

  if (point.contactInfo?.procedure) {
    info.push(point.contactInfo.procedure);
  }

  return info;
}

/**
 * Récupère les instructions de localisation d'un point
 */
export function getLocationInstructions(point: DistributionPoint): string[] {
  const instructions: string[] = [];

  if (point.locationInfo?.building) {
    instructions.push(`Bâtiment: ${point.locationInfo.building}`);
  }

  if (point.locationInfo?.room) {
    instructions.push(`Local: ${point.locationInfo.room}`);
  }

  if (point.locationInfo?.landmark) {
    instructions.push(`Repère: ${point.locationInfo.landmark}`);
  }

  if (point.locationInfo?.parking) {
    instructions.push(`Parking: ${point.locationInfo.parking}`);
  }

  if (point.locationInfo?.entrance) {
    instructions.push(`Entrée: ${point.locationInfo.entrance}`);
  }

  if (point.locationInfo?.specificInstructions) {
    instructions.push(point.locationInfo.specificInstructions);
  }

  return instructions;
}

/**
 * Trie les points de distribution par nom
 */
export function sortDistributionPointsByName(points: DistributionPoint[]): DistributionPoint[] {
  return [...points].sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Trie les points de distribution par ville puis par nom
 */
export function sortDistributionPointsByCityAndName(
  points: DistributionPoint[]
): DistributionPoint[] {
  return [...points].sort((a, b) => {
    const cityComparison = a.city.localeCompare(b.city);
    if (cityComparison !== 0) {
      return cityComparison;
    }
    return a.name.localeCompare(b.name);
  });
}

/**
 * Récupère les statistiques des points de distribution
 */
export function getDistributionStats() {
  const stats = {
    total: distributionPoints.length,
    byType: {
      retrait: distributionPoints.filter(p => p.type === 'retrait').length,
      livraison_gratuite: distributionPoints.filter(p => p.type === 'livraison_gratuite').length,
      livraison_payante: distributionPoints.filter(p => p.type === 'livraison_payante').length,
    },
    byCategory: {
      public: distributionPoints.filter(p => p.category === 'public').length,
      production: distributionPoints.filter(p => p.category === 'production').length,
      entreprise: distributionPoints.filter(p => p.category === 'entreprise').length,
      sophia_antipolis: distributionPoints.filter(p => p.category === 'sophia_antipolis').length,
    },
    byCity: {} as Record<string, number>,
  };

  // Compter par ville
  distributionPoints.forEach(point => {
    stats.byCity[point.city] = (stats.byCity[point.city] || 0) + 1;
  });

  return stats;
}
