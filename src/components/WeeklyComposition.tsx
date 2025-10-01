import { getCurrentWeekPeriod, getStatusMessage } from '../utils/dateUtils';

interface WeeklyCompositionProps {
  startDate?: string;
  endDate?: string;
}

export default function WeeklyComposition({ startDate, endDate }: WeeklyCompositionProps) {
  // Utiliser les dates automatiques si non fournies
  const currentWeek = getCurrentWeekPeriod();
  const displayStartDate = startDate || currentWeek.startDate;
  const displayEndDate = endDate || currentWeek.endDate;
  const statusMessage = getStatusMessage();

  return (
    <div className='bg-gradient-to-r from-primary-500 to-primary-700 text-white rounded-xl p-6 mb-8'>
      <div className='text-center'>
        <h2 className='text-2xl md:text-3xl font-display font-bold mb-2'>
          Composition des Paniers Fraîcheur de la Semaine
        </h2>
        <p className='text-primary-100 text-lg'>
          {displayStartDate} au {displayEndDate}
        </p>

        {/* Message de statut automatique */}
        <div className='mt-4 p-3 bg-white/10 rounded-lg'>
          <p className='text-primary-200 font-semibold'>{statusMessage}</p>
        </div>

        <div className='mt-4 space-y-2'>
          <p className='text-primary-200'>
            <a href='/distribution' className='underline hover:text-white transition-colors'>
              Voir les différents points de retraits
            </a>
          </p>
          <p className='text-primary-200 text-sm'>
            Les paniers sont mis à jour tous les mercredis et sont disponibles du mercredi au mardi
            soir selon les lieux de distribution.
          </p>
        </div>
      </div>
    </div>
  );
}
