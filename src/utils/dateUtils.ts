/**
 * Utilitaires pour la gestion automatique des dates des paniers
 */

export interface WeekPeriod {
  startDate: string;
  endDate: string;
  weekNumber: number;
  isCurrentWeek: boolean;
  isNextWeek: boolean;
}

/**
 * Calcule la période de la semaine actuelle (mercredi au mardi)
 */
export function getCurrentWeekPeriod(): WeekPeriod {
  const now = new Date();
  const currentDay = now.getDay(); // 0 = dimanche, 1 = lundi, ..., 6 = samedi

  // Calculer le mercredi de cette semaine
  let wednesdayOffset = 3 - currentDay; // 3 = mercredi
  if (wednesdayOffset < 0) {
    wednesdayOffset += 7; // Si on est après mercredi, prendre le mercredi suivant
  }

  const wednesday = new Date(now);
  wednesday.setDate(now.getDate() + wednesdayOffset);

  // Calculer le mardi suivant
  const tuesday = new Date(wednesday);
  tuesday.setDate(wednesday.getDate() + 6);

  return {
    startDate: formatDate(wednesday),
    endDate: formatDate(tuesday),
    weekNumber: getWeekNumber(wednesday),
    isCurrentWeek: true,
    isNextWeek: false,
  };
}

/**
 * Calcule la période de la semaine suivante
 */
export function getNextWeekPeriod(): WeekPeriod {
  const currentWeek = getCurrentWeekPeriod();
  const nextWednesday = new Date(currentWeek.startDate);
  nextWednesday.setDate(nextWednesday.getDate() + 7);

  const nextTuesday = new Date(nextWednesday);
  nextTuesday.setDate(nextWednesday.getDate() + 6);

  return {
    startDate: formatDate(nextWednesday),
    endDate: formatDate(nextTuesday),
    weekNumber: getWeekNumber(nextWednesday),
    isCurrentWeek: false,
    isNextWeek: true,
  };
}

/**
 * Formate une date en français
 */
function formatDate(date: Date): string {
  const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const months = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ];

  const dayName = days[date.getDay()];
  const day = date.getDate();
  const monthName = months[date.getMonth()];
  const year = date.getFullYear();

  return `${dayName} ${day} ${monthName} ${year}`;
}

/**
 * Calcule le numéro de semaine
 */
function getWeekNumber(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 1);
  const diff = date.getTime() - start.getTime();
  const oneWeek = 1000 * 60 * 60 * 24 * 7;
  return Math.ceil(diff / oneWeek);
}

/**
 * Vérifie si on est dans la période de commande (mercredi au mardi)
 */
export function isOrderPeriod(): boolean {
  const now = new Date();
  const currentDay = now.getDay();

  // Période de commande : mercredi (3) au mardi (2)
  return currentDay >= 3 || currentDay <= 2;
}

/**
 * Vérifie si on est le jour de mise à jour (mercredi)
 */
export function isUpdateDay(): boolean {
  const now = new Date();
  return now.getDay() === 3; // Mercredi
}

/**
 * Calcule le nombre de jours restants avant la fin de la période de commande
 */
export function getDaysUntilEndOfOrderPeriod(): number {
  const now = new Date();
  const currentDay = now.getDay();

  if (currentDay >= 3) {
    // Si on est mercredi ou après, calculer jusqu'au mardi suivant
    return (2 - currentDay + 7) % 7;
  } else {
    // Si on est avant mercredi, calculer jusqu'au mardi de cette semaine
    return 2 - currentDay;
  }
}

/**
 * Génère un message de statut pour l'utilisateur
 */
export function getStatusMessage(): string {
  const currentWeek = getCurrentWeekPeriod();
  const daysLeft = getDaysUntilEndOfOrderPeriod();

  if (isUpdateDay()) {
    return '🆕 Nouveaux paniers disponibles !';
  } else if (daysLeft > 0) {
    return `⏰ ${daysLeft} jour${daysLeft > 1 ? 's' : ''} restant${daysLeft > 1 ? 's' : ''} pour commander`;
  } else {
    return '❌ Période de commande fermée - Nouveaux paniers mercredi';
  }
}
