'use client';

import { useEffect, useState } from 'react';
import { getCurrentWeekPeriod, getNextWeekPeriod, getStatusMessage, isUpdateDay } from '../utils/dateUtils';

interface UpdateStatus {
  currentWeek: string;
  nextWeek: string;
  isUpdateDay: boolean;
  statusMessage: string;
  lastUpdate?: string;
}

export default function UpdateManager() {
  const [status, setStatus] = useState<UpdateStatus | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateResult, setUpdateResult] = useState<string | null>(null);

  useEffect(() => {
    loadStatus();
  }, []);

  const loadStatus = async () => {
    try {
      const response = await fetch('/api/update-baskets');
      const data = await response.json();
      
      if (data.success) {
        const currentWeek = getCurrentWeekPeriod();
        const nextWeek = getNextWeekPeriod();
        
        setStatus({
          currentWeek: `${currentWeek.startDate} - ${currentWeek.endDate}`,
          nextWeek: `${nextWeek.startDate} - ${nextWeek.endDate}`,
          isUpdateDay: isUpdateDay(),
          statusMessage: getStatusMessage(),
          lastUpdate: data.data?.updateDate
        });
      }
    } catch (error) {
      console.error('Erreur lors du chargement du statut:', error);
    }
  };

  const triggerUpdate = async () => {
    setIsUpdating(true);
    setUpdateResult(null);
    
    try {
      const response = await fetch('/api/update-baskets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_ADMIN_TOKEN || 'dev-token'}`
        }
      });
      
      const result = await response.json();
      setUpdateResult(result.message);
      
      if (result.success) {
        await loadStatus(); // Recharger le statut
      }
    } catch (error) {
      setUpdateResult('Erreur lors de la mise à jour');
    } finally {
      setIsUpdating(false);
    }
  };

  if (!status) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-accent-dark mb-4">
        📅 Gestion des mises à jour
      </h3>
      
      {/* Statut actuel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-800 mb-2">Semaine actuelle</h4>
          <p className="text-blue-700 text-sm">{status.currentWeek}</p>
        </div>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-semibold text-green-800 mb-2">Prochaine semaine</h4>
          <p className="text-green-700 text-sm">{status.nextWeek}</p>
        </div>
      </div>

      {/* Message de statut */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
        <p className="text-gray-700">{status.statusMessage}</p>
        {status.lastUpdate && (
          <p className="text-gray-500 text-sm mt-2">
            Dernière mise à jour: {new Date(status.lastUpdate).toLocaleString('fr-FR')}
          </p>
        )}
      </div>

      {/* Bouton de mise à jour */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={triggerUpdate}
          disabled={isUpdating || !status.isUpdateDay}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
            status.isUpdateDay && !isUpdating
              ? 'bg-primary-500 hover:bg-primary-600 text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {isUpdating ? 'Mise à jour en cours...' : 'Mettre à jour les paniers'}
        </button>
        
        <button
          onClick={loadStatus}
          className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-semibold transition-colors"
        >
          Actualiser le statut
        </button>
      </div>

      {/* Résultat de la mise à jour */}
      {updateResult && (
        <div className={`mt-4 p-4 rounded-lg ${
          updateResult.includes('succès') 
            ? 'bg-green-50 border border-green-200 text-green-700'
            : 'bg-red-50 border border-red-200 text-red-700'
        }`}>
          {updateResult}
        </div>
      )}

      {/* Informations supplémentaires */}
      <div className="mt-6 text-sm text-gray-600">
        <h4 className="font-semibold mb-2">ℹ️ Informations :</h4>
        <ul className="space-y-1">
          <li>• Les paniers sont mis à jour automatiquement chaque mercredi</li>
          <li>• La période de commande va du mercredi au mardi</li>
          <li>• Les abonnés reçoivent une notification lors de la mise à jour</li>
          <li>• Vous pouvez forcer une mise à jour manuelle si nécessaire</li>
        </ul>
      </div>
    </div>
  );
}


