'use client';

import { useEffect, useState } from 'react';
import { DistributionFilter, DistributionPoint } from '../types/distribution';
import {
  calculateDeliveryCost,
  checkMinimumOrderAmount,
  filterDistributionPoints,
  formatDistributionDays,
  formatFullAddress,
  getContactInfo,
  getLocationInstructions,
} from '../utils/distributionUtils';

interface DistributionPointSelectorProps {
  selectedPoint: DistributionPoint | null;
  onPointSelect: (point: DistributionPoint) => void;
  orderAmount: number;
  className?: string;
}

export default function DistributionPointSelector({
  selectedPoint,
  onPointSelect,
  orderAmount,
  className = '',
}: DistributionPointSelectorProps) {
  const [activeTab, setActiveTab] = useState<
    'retrait' | 'livraison_gratuite' | 'livraison_payante'
  >('retrait');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredPoints, setFilteredPoints] = useState<DistributionPoint[]>([]);

  // Filtrer les points selon les critères
  useEffect(() => {
    const filters: DistributionFilter = {
      type: activeTab,
      city: searchTerm || undefined,
    };

    if (selectedCategory !== 'all') {
      filters.category = selectedCategory as any;
    }

    let points = filterDistributionPoints(filters);

    // Filtrer par montant minimum pour les livraisons
    if (activeTab !== 'retrait') {
      points = points.filter(point => checkMinimumOrderAmount(point, orderAmount));
    }

    setFilteredPoints(points);
  }, [activeTab, searchTerm, selectedCategory, orderAmount]);

  const getTabLabel = (type: string) => {
    switch (type) {
      case 'retrait':
        return 'Points de retrait';
      case 'livraison_gratuite':
        return 'Livraison gratuite';
      case 'livraison_payante':
        return 'Livraison payante';
      default:
        return type;
    }
  };

  const getCategoryOptions = () => {
    switch (activeTab) {
      case 'retrait':
        return [
          { value: 'all', label: 'Tous' },
          { value: 'public', label: 'Public' },
          { value: 'production', label: 'Production' },
          { value: 'entreprise', label: 'Entreprise' },
          { value: 'sophia_antipolis', label: 'Sophia Antipolis' },
        ];
      case 'livraison_gratuite':
      case 'livraison_payante':
        return [{ value: 'all', label: 'Toutes les zones' }];
      default:
        return [{ value: 'all', label: 'Tous' }];
    }
  };

  const getDeliveryCostInfo = (point: DistributionPoint) => {
    if (point.type === 'retrait') {
      return null;
    }

    const cost = calculateDeliveryCost(point, orderAmount);
    const minAmount = point.deliveryInfo?.minOrderAmount;

    if (point.type === 'livraison_gratuite') {
      return (
        <div className='text-green-600 text-sm'>
          <span className='font-semibold'>Gratuit</span>
          {minAmount && <span> (min. {minAmount}€)</span>}
        </div>
      );
    }

    if (point.type === 'livraison_payante') {
      return (
        <div className='text-orange-600 text-sm'>
          <span className='font-semibold'>+{cost}€</span>
          {minAmount && <span> (min. {minAmount}€)</span>}
        </div>
      );
    }

    return null;
  };

  const isPointAvailable = (point: DistributionPoint) => {
    if (point.type === 'retrait') {
      return true;
    }
    return checkMinimumOrderAmount(point, orderAmount);
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* En-tête */}
      <div>
        <h3 className='text-xl font-semibold text-accent-dark mb-2'>
          Choisissez votre point de distribution
        </h3>
        <p className='text-gray-600 text-sm'>
          Montant de votre commande : <span className='font-semibold'>{orderAmount}€</span>
        </p>
      </div>

      {/* Onglets */}
      <div className='flex space-x-1 bg-gray-100 p-1 rounded-lg'>
        {(['retrait', 'livraison_gratuite', 'livraison_payante'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === tab
                ? 'bg-white text-primary-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {getTabLabel(tab)}
          </button>
        ))}
      </div>

      {/* Filtres */}
      <div className='flex flex-col sm:flex-row gap-4'>
        {/* Recherche par ville */}
        <div className='flex-1'>
          <input
            type='text'
            placeholder='Rechercher par ville...'
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
          />
        </div>

        {/* Filtre par catégorie */}
        <div className='sm:w-48'>
          <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
          >
            {getCategoryOptions().map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Liste des points */}
      <div className='space-y-3 max-h-96 overflow-y-auto'>
        {filteredPoints.length === 0 ? (
          <div className='text-center py-8 text-gray-500'>
            <p>Aucun point de distribution trouvé</p>
            {activeTab !== 'retrait' && (
              <p className='text-sm mt-1'>
                Vérifiez que votre commande respecte le montant minimum
              </p>
            )}
          </div>
        ) : (
          filteredPoints.map(point => {
            const isSelected = selectedPoint?.id === point.id;
            const isAvailable = isPointAvailable(point);

            return (
              <div
                key={point.id}
                className={`border rounded-lg p-4 cursor-pointer transition-all ${
                  isSelected
                    ? 'border-primary-500 bg-primary-50'
                    : isAvailable
                      ? 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                      : 'border-gray-200 bg-gray-50 opacity-60'
                }`}
                onClick={() => isAvailable && onPointSelect(point)}
              >
                <div className='flex justify-between items-start'>
                  <div className='flex-1'>
                    <div className='flex items-center gap-2 mb-2'>
                      <h4 className='font-semibold text-accent-dark'>{point.name}</h4>
                      {point.restrictions && (
                        <span className='px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full'>
                          {point.restrictions}
                        </span>
                      )}
                    </div>

                    <p className='text-sm text-gray-600 mb-2'>{formatFullAddress(point)}</p>

                    <div className='text-sm text-gray-600 mb-2'>
                      <span className='font-medium'>Jours :</span> {formatDistributionDays(point)}
                    </div>

                    {/* Informations spécifiques */}
                    {point.type === 'retrait' && (
                      <div className='text-sm text-gray-600'>
                        {point.days.map((day, index) => (
                          <div key={index}>
                            <span className='font-medium'>
                              {day.day.charAt(0).toUpperCase() + day.day.slice(1)} :
                            </span>
                            {day.deliveryTime && <span> Livraison {day.deliveryTime}</span>}
                            {day.pickupTime && <span> Retrait {day.pickupTime}</span>}
                            <span> (commande avant {day.orderDeadline})</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Instructions de localisation */}
                    {point.locationInfo && (
                      <div className='text-sm text-gray-600 mt-2'>
                        {getLocationInstructions(point).map((instruction, index) => (
                          <div key={index} className='text-xs'>
                            • {instruction}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Informations de contact */}
                    {point.contactInfo && (
                      <div className='text-sm text-gray-600 mt-2'>
                        {getContactInfo(point).map((info, index) => (
                          <div key={index} className='text-xs'>
                            📞 {info}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className='ml-4 text-right'>
                    {getDeliveryCostInfo(point)}
                    {!isAvailable && (
                      <div className='text-red-500 text-xs mt-1'>Montant insuffisant</div>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Point sélectionné */}
      {selectedPoint && (
        <div className='bg-primary-50 border border-primary-200 rounded-lg p-4'>
          <h4 className='font-semibold text-primary-800 mb-2'>Point sélectionné</h4>
          <p className='text-primary-700'>
            {selectedPoint.name} - {formatFullAddress(selectedPoint)}
          </p>
          {selectedPoint.type !== 'retrait' && (
            <p className='text-primary-600 text-sm mt-1'>
              Coût de livraison : {calculateDeliveryCost(selectedPoint, orderAmount)}€
            </p>
          )}
        </div>
      )}
    </div>
  );
}
