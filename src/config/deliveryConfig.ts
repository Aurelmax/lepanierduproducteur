/**
 * Configuration des paramètres de livraison
 * Ce fichier centralise tous les paramètres configurables du système de livraison
 */

export const DELIVERY_CONFIG = {
  // Cycle hebdomadaire des paniers
  BASKET_CYCLE: {
    UPDATE_DAY: 'WEDNESDAY', // Mercredi
    AVAILABILITY_START: 'WEDNESDAY', // Du mercredi
    AVAILABILITY_END: 'TUESDAY', // Au mardi soir
    DESCRIPTION: 'Les paniers sont mis à jour tous les mercredis et disponibles du mercredi au mardi soir',
  },

  // Montants minimums pour les livraisons
  MINIMUM_ORDER_AMOUNTS: {
    FREE_DELIVERY: 15, // €
    PAID_DELIVERY: 20, // €
  },

  // Frais de livraison par défaut
  DEFAULT_DELIVERY_FEES: {
    CANNES_MOUGINS: 3, // €
    LE_CANNET: 3, // €
    NICE_CAGNES: 5, // €
  },

  // Zones de livraison gratuite
  FREE_DELIVERY_ZONES: ['Antibes', 'Juan-les-Pins', "Cap d'Antibes"],

  // Zones de livraison payante
  PAID_DELIVERY_ZONES: {
    'Cannes-Mougins-Vallauris-Golfe juan': {
      cost: 3,
      minOrder: 20,
      schedule: 'Lundi (10h - 16h)',
    },
    'Le Cannet': {
      cost: 3,
      minOrder: 20,
      schedule: 'Lundi (11h - 17h)',
    },
    'Nice - Cagnes/Mer - Villeneuve Loubet': {
      cost: 5,
      minOrder: 20,
      schedule: 'Mardi (12h - 16h)',
      neighborhoods: [
        'Arénas',
        'Baumettes',
        'Carabacel',
        'Caucade',
        'Cimiez',
        'Corniche Fleurie',
        'Fabron',
        'Ferber',
        'Le Piol',
        'Magnan',
        'Mont Boron',
        'Riquier',
        'Saint-Antoine',
        'Saint-Augustin',
        'Saint-Isidore',
        'Sainte-Marguerite',
        'Saint-Philippe',
        'Simone Veil',
      ],
    },
  },

  // Horaires de distribution par jour
  DISTRIBUTION_SCHEDULE: {
    MONDAY: {
      points: ['cannes-palm-beach', 'mouans-sartoux', 'delivery-antibes-lundi-pm'],
      timeSlots: ['9h-12h', '14h-17h'],
    },
    TUESDAY: {
      points: [
        'nice-riquie',
        'cagnes-hippodrome',
        'st-laurent-centre',
        'delivery-antibes-mardi-pm',
      ],
      timeSlots: ['9h-12h', '14h-17h', '17h-19h'],
    },
    WEDNESDAY: {
      points: ['delivery-antibes-mercredi-pm'],
      timeSlots: ['14h-17h', '17h-19h'],
    },
    THURSDAY: {
      points: ['nice-riquie'],
      timeSlots: ['16h-19h'],
    },
    FRIDAY: {
      points: ['nautipolis', 'mouratoglou', 'thales', 'delivery-antibes-vendredi-pm'],
      timeSlots: ['9h-12h', '14h-17h'],
    },
    SATURDAY: {
      points: ['delivery-antibes-samedi-am'],
      timeSlots: ['9h-12h'],
    },
    SUNDAY: {
      points: [],
      timeSlots: [],
    },
  },

  // Délais de commande par point (en heures avant la distribution)
  ORDER_DEADLINES: {
    DEFAULT: 2, // heures
    PRODUCTION: 4, // heures
    ENTERPRISE: 1, // heure
    DELIVERY: 3, // heures
  },

  // Messages d'erreur personnalisés
  ERROR_MESSAGES: {
    INSUFFICIENT_AMOUNT: 'Le montant minimum de {amount}€ est requis pour ce type de livraison.',
    POINT_CLOSED: "Ce point de distribution est fermé aujourd'hui.",
    DEADLINE_PASSED: 'Le délai de commande est dépassé pour ce créneau.',
    ACCESS_RESTRICTED: 'Ce point est réservé au personnel uniquement.',
    NO_DELIVERY_ZONE: "La livraison n'est pas disponible dans cette zone.",
    BASKET_CYCLE_INFO: 'Les paniers sont mis à jour tous les mercredis et disponibles du mercredi au mardi soir.',
    WEEK_TRANSITION: 'Commande pour la semaine suivante (nouveaux paniers disponibles le mercredi).',
  },

  // Messages de succès
  SUCCESS_MESSAGES: {
    ORDER_CONFIRMED: 'Votre commande a été confirmée !',
    DELIVERY_SCHEDULED: 'Livraison programmée pour {date} à {time}.',
    PICKUP_SCHEDULED: 'Retrait programmé pour {date} à {time}.',
  },

  // Configuration des notifications
  NOTIFICATIONS: {
    EMAIL_CONFIRMATION: true,
    SMS_REMINDER: false, // À implémenter
    PUSH_NOTIFICATION: false, // À implémenter
  },

  // Limites et contraintes
  LIMITS: {
    MAX_ITEMS_PER_ORDER: 50,
    MAX_ORDER_VALUE: 500, // €
    MAX_DELIVERY_DISTANCE: 30, // km
    MIN_DELIVERY_NOTICE: 2, // heures
  },

  // Configuration des créneaux horaires
  TIME_SLOTS: {
    MORNING: {
      start: '09:00',
      end: '12:00',
      label: 'Matin (9h-12h)',
    },
    AFTERNOON: {
      start: '14:00',
      end: '17:00',
      label: 'Après-midi (14h-17h)',
    },
    EVENING: {
      start: '17:00',
      end: '19:00',
      label: 'Soir (17h-19h)',
    },
  },

  // Configuration des catégories de points
  POINT_CATEGORIES: {
    PUBLIC: {
      name: 'Points Publics',
      description: 'Ouverts à tous les clients',
      icon: '🏛️',
      color: '#10B981', // green-500
    },
    ENTERPRISE: {
      name: 'Points Entreprise',
      description: 'Réservés au personnel',
      icon: '🏢',
      color: '#3B82F6', // blue-500
    },
    SOPHIA_ANTIPOLIS: {
      name: 'Sophia Antipolis',
      description: 'Zone technologique',
      icon: '🏭',
      color: '#8B5CF6', // violet-500
    },
    PRODUCTION: {
      name: 'Production',
      description: 'Retrait à la ferme',
      icon: '🌱',
      color: '#059669', // emerald-600
    },
  },

  // Configuration des types de livraison
  DELIVERY_TYPES: {
    RETRAIT: {
      name: 'Retrait sur place',
      description: 'Récupération au point de distribution',
      icon: '📍',
      color: '#6B7280', // gray-500
      fee: 0,
    },
    LIVRAISON_GRATUITE: {
      name: 'Livraison gratuite',
      description: 'Livraison à domicile sans frais',
      icon: '🚚',
      color: '#10B981', // green-500
      fee: 0,
    },
    LIVRAISON_PAYANTE: {
      name: 'Livraison payante',
      description: 'Livraison à domicile avec frais',
      icon: '💰',
      color: '#F59E0B', // amber-500
      fee: 'variable',
    },
  },

  // Configuration des jours de la semaine
  WEEK_DAYS: {
    MONDAY: { name: 'Lundi', short: 'Lun', index: 1 },
    TUESDAY: { name: 'Mardi', short: 'Mar', index: 2 },
    WEDNESDAY: { name: 'Mercredi', short: 'Mer', index: 3 },
    THURSDAY: { name: 'Jeudi', short: 'Jeu', index: 4 },
    FRIDAY: { name: 'Vendredi', short: 'Ven', index: 5 },
    SATURDAY: { name: 'Samedi', short: 'Sam', index: 6 },
    SUNDAY: { name: 'Dimanche', short: 'Dim', index: 0 },
  },

  // Configuration des mois
  MONTHS: {
    1: 'Janvier',
    2: 'Février',
    3: 'Mars',
    4: 'Avril',
    5: 'Mai',
    6: 'Juin',
    7: 'Juillet',
    8: 'Août',
    9: 'Septembre',
    10: 'Octobre',
    11: 'Novembre',
    12: 'Décembre',
  },

  // Configuration des saisons
  SEASONS: {
    SPRING: { name: 'Printemps', months: [3, 4, 5], color: '#10B981' },
    SUMMER: { name: 'Été', months: [6, 7, 8], color: '#F59E0B' },
    AUTUMN: { name: 'Automne', months: [9, 10, 11], color: '#EF4444' },
    WINTER: { name: 'Hiver', months: [12, 1, 2], color: '#3B82F6' },
  },
} as const;

// Types TypeScript pour la configuration
export type DeliveryConfig = typeof DELIVERY_CONFIG;
export type DeliveryType = keyof typeof DELIVERY_CONFIG.DELIVERY_TYPES;
export type PointCategory = keyof typeof DELIVERY_CONFIG.POINT_CATEGORIES;
export type WeekDay = keyof typeof DELIVERY_CONFIG.WEEK_DAYS;
export type Season = keyof typeof DELIVERY_CONFIG.SEASONS;

// Fonctions utilitaires
export const getDeliveryFee = (zone: string, orderAmount: number): number => {
  const zoneConfig =
    DELIVERY_CONFIG.PAID_DELIVERY_ZONES[zone as keyof typeof DELIVERY_CONFIG.PAID_DELIVERY_ZONES];
  if (!zoneConfig) return 0;

  if (orderAmount >= zoneConfig.minOrder) {
    return zoneConfig.cost;
  }

  return 0;
};

export const getMinimumOrderAmount = (deliveryType: DeliveryType): number => {
  switch (deliveryType) {
    case 'LIVRAISON_GRATUITE':
      return DELIVERY_CONFIG.MINIMUM_ORDER_AMOUNTS.FREE_DELIVERY;
    case 'LIVRAISON_PAYANTE':
      return DELIVERY_CONFIG.MINIMUM_ORDER_AMOUNTS.PAID_DELIVERY;
    case 'RETRAIT':
    default:
      return 0;
  }
};

export const isDeliveryAvailable = (zone: string, deliveryType: DeliveryType): boolean => {
  if (deliveryType === 'RETRAIT') return true;

  if (deliveryType === 'LIVRAISON_GRATUITE') {
    return DELIVERY_CONFIG.FREE_DELIVERY_ZONES.includes(zone);
  }

  if (deliveryType === 'LIVRAISON_PAYANTE') {
    return zone in DELIVERY_CONFIG.PAID_DELIVERY_ZONES;
  }

  return false;
};

export const getErrorMessage = (
  errorType: keyof typeof DELIVERY_CONFIG.ERROR_MESSAGES,
  params?: Record<string, string | number>
): string => {
  let message = DELIVERY_CONFIG.ERROR_MESSAGES[errorType];

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      message = message.replace(`{${key}}`, String(value));
    });
  }

  return message;
};

export const getSuccessMessage = (
  successType: keyof typeof DELIVERY_CONFIG.SUCCESS_MESSAGES,
  params?: Record<string, string | number>
): string => {
  let message = DELIVERY_CONFIG.SUCCESS_MESSAGES[successType];

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      message = message.replace(`{${key}}`, String(value));
    });
  }

  return message;
};

// Fonctions utilitaires pour le cycle hebdomadaire
export const getBasketCycleInfo = (): string => {
  return DELIVERY_CONFIG.BASKET_CYCLE.DESCRIPTION;
};

export const isBasketUpdateDay = (date: Date = new Date()): boolean => {
  return date.getDay() === 3; // Mercredi = 3
};

export const getBasketAvailabilityPeriod = (date: Date = new Date()): { start: Date; end: Date } => {
  const currentDate = new Date(date);
  const dayOfWeek = currentDate.getDay();
  
  // Si c'est mercredi (3) ou après, on est dans la semaine en cours
  // Sinon, on est dans la semaine précédente
  const daysFromWednesday = dayOfWeek >= 3 ? dayOfWeek - 3 : dayOfWeek + 4;
  
  const startOfWeek = new Date(currentDate);
  startOfWeek.setDate(currentDate.getDate() - daysFromWednesday);
  startOfWeek.setHours(0, 0, 0, 0);
  
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  endOfWeek.setHours(23, 59, 59, 999);
  
  return { start: startOfWeek, end: endOfWeek };
};

export const getNextBasketUpdateDate = (date: Date = new Date()): Date => {
  const currentDate = new Date(date);
  const dayOfWeek = currentDate.getDay();
  
  // Calculer le prochain mercredi
  const daysUntilWednesday = dayOfWeek <= 3 ? 3 - dayOfWeek : 10 - dayOfWeek;
  
  const nextWednesday = new Date(currentDate);
  nextWednesday.setDate(currentDate.getDate() + daysUntilWednesday);
  nextWednesday.setHours(0, 0, 0, 0);
  
  return nextWednesday;
};

export const isOrderForNextWeek = (orderDate: Date, deliveryDate: Date): boolean => {
  const orderWeek = getBasketAvailabilityPeriod(orderDate);
  const deliveryWeek = getBasketAvailabilityPeriod(deliveryDate);
  
  return deliveryWeek.start.getTime() > orderWeek.end.getTime();
};

export const getBasketWeekLabel = (date: Date = new Date()): string => {
  const { start, end } = getBasketAvailabilityPeriod(date);
  const startStr = start.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' });
  const endStr = end.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' });
  
  return `Semaine du ${startStr} au ${endStr}`;
};
