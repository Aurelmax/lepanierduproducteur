export interface DistributionPoint {
  id: number;
  name: string;
  address: string;
  city: string;
  postalCode: string;
  type: 'retrait' | 'livraison_gratuite' | 'livraison_payante';
  category: 'public' | 'production' | 'entreprise' | 'sophia_antipolis';
  days: DistributionDay[];
  restrictions?: string;
  deliveryInfo?: DeliveryInfo;
  contactInfo?: ContactInfo;
  locationInfo?: LocationInfo;
}

export interface DistributionDay {
  day: 'lundi' | 'mardi' | 'mercredi' | 'jeudi' | 'vendredi' | 'samedi';
  orderDeadline: string; // Format: "HH:mm"
  deliveryTime?: string; // Format: "HH:mm-HH:mm"
  pickupTime?: string; // Format: "HH:mm-HH:mm"
}

export interface DeliveryInfo {
  minOrderAmount?: number;
  deliveryCost?: number;
  deliveryZones?: string[];
  neighborhoods?: string[];
}

export interface ContactInfo {
  phoneCall: boolean;
  callMinutesBefore?: number;
  email?: string;
  procedure?: string;
}

export interface LocationInfo {
  building?: string;
  floor?: string;
  room?: string;
  landmark?: string;
  parking?: string;
  entrance?: string;
  specificInstructions?: string;
}

export interface DistributionFilter {
  type?: 'retrait' | 'livraison_gratuite' | 'livraison_payante';
  category?: 'public' | 'production' | 'entreprise' | 'sophia_antipolis';
  city?: string;
  day?: string;
  minOrderAmount?: number;
  maxDeliveryCost?: number;
}
