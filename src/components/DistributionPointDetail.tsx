'use client';

import { DistributionPoint } from '../types/distribution';
import {
  calculateDeliveryCost,
  checkMinimumOrderAmount,
  formatFullAddress,
  getContactInfo,
  getLocationInstructions,
} from '../utils/distributionUtils';

interface DistributionPointDetailProps {
  point: DistributionPoint;
  orderAmount?: number;
  showOrderButton?: boolean;
  onOrderClick?: () => void;
}

export default function DistributionPointDetail({
  point,
  orderAmount = 0,
  showOrderButton = false,
  onOrderClick,
}: DistributionPointDetailProps) {
  const isAvailable = point.type === 'retrait' || checkMinimumOrderAmount(point, orderAmount);
  const deliveryCost = calculateDeliveryCost(point, orderAmount);

  return (
    <div className='max-w-4xl mx-auto p-6'>
      {/* En-tête */}
      <div className='bg-gradient-to-r from-primary-100 to-harvest-100 rounded-lg p-6 mb-6'>
        <div className='flex items-center gap-4'>
          <div className='w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center'>
            <span className='text-white text-2xl'>📍</span>
          </div>
          <div>
            <h1 className='text-3xl font-display font-bold text-accent-dark'>{point.name}</h1>
            <p className='text-gray-600 mt-1'>{formatFullAddress(point)}</p>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {/* Informations principales */}
        <div className='lg:col-span-2 space-y-6'>
          {/* Adresse */}
          <div className='bg-white rounded-lg shadow-md p-6'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center'>
                <span className='text-white text-sm'>📍</span>
              </div>
              <h2 className='text-xl font-semibold text-accent-dark'>Adresse</h2>
            </div>
            <div className='text-gray-700'>
              <p className='font-medium'>{point.address}</p>
              <p>
                {point.postalCode} - {point.city}
              </p>
            </div>
          </div>

          {/* Jours de distribution */}
          <div className='bg-white rounded-lg shadow-md p-6'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='w-8 h-8 bg-harvest-500 rounded-full flex items-center justify-center'>
                <span className='text-white text-sm'>📅</span>
              </div>
              <h2 className='text-xl font-semibold text-accent-dark'>Jours de distribution</h2>
            </div>
            <div className='space-y-3'>
              {point.days.map((day, index) => (
                <div
                  key={index}
                  className='flex items-center justify-between p-3 bg-gray-50 rounded-lg'
                >
                  <div className='flex items-center gap-3'>
                    <span className='font-semibold text-accent-dark capitalize'>{day.day}</span>
                    {day.deliveryTime && (
                      <span className='text-sm text-gray-600'>Livraison {day.deliveryTime}</span>
                    )}
                    {day.pickupTime && (
                      <span className='text-sm text-gray-600'>Retrait {day.pickupTime}</span>
                    )}
                  </div>
                  <span className='text-sm text-gray-500'>Commande avant {day.orderDeadline}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Instructions de localisation */}
          {point.locationInfo && (
            <div className='bg-white rounded-lg shadow-md p-6'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-8 h-8 bg-earth-500 rounded-full flex items-center justify-center'>
                  <span className='text-white text-sm'>🏢</span>
                </div>
                <h2 className='text-xl font-semibold text-accent-dark'>Informations pratiques</h2>
              </div>
              <div className='space-y-2'>
                {getLocationInstructions(point).map((instruction, index) => (
                  <div key={index} className='flex items-start gap-2'>
                    <span className='text-primary-500 mt-1'>•</span>
                    <span className='text-gray-700'>{instruction}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Informations de contact */}
          {point.contactInfo && (
            <div className='bg-white rounded-lg shadow-md p-6'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center'>
                  <span className='text-white text-sm'>📞</span>
                </div>
                <h2 className='text-xl font-semibold text-accent-dark'>Contact</h2>
              </div>
              <div className='space-y-2'>
                {getContactInfo(point).map((info, index) => (
                  <div key={index} className='flex items-start gap-2'>
                    <span className='text-blue-500 mt-1'>📞</span>
                    <span className='text-gray-700'>{info}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Restrictions */}
          {point.restrictions && (
            <div className='bg-orange-50 border border-orange-200 rounded-lg p-6'>
              <div className='flex items-center gap-3 mb-3'>
                <div className='w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center'>
                  <span className='text-white text-sm'>⚠️</span>
                </div>
                <h2 className='text-xl font-semibold text-orange-800'>Important</h2>
              </div>
              <p className='text-orange-700 font-medium'>{point.restrictions}</p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className='space-y-6'>
          {/* Informations de livraison */}
          {point.type !== 'retrait' && (
            <div className='bg-white rounded-lg shadow-md p-6'>
              <h3 className='text-lg font-semibold text-accent-dark mb-4'>Livraison</h3>
              <div className='space-y-3'>
                {point.deliveryInfo?.minOrderAmount && (
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>Minimum de commande :</span>
                    <span className='font-semibold'>{point.deliveryInfo.minOrderAmount}€</span>
                  </div>
                )}
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Coût de livraison :</span>
                  <span
                    className={`font-semibold ${deliveryCost === 0 ? 'text-green-600' : 'text-orange-600'}`}
                  >
                    {deliveryCost === 0 ? 'Gratuit' : `+${deliveryCost}€`}
                  </span>
                </div>
                {point.deliveryInfo?.deliveryZones && (
                  <div>
                    <span className='text-gray-600 text-sm'>Zones desservies :</span>
                    <div className='mt-1'>
                      {point.deliveryInfo.deliveryZones.map((zone, index) => (
                        <span
                          key={index}
                          className='inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded mr-1 mb-1'
                        >
                          {zone}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {point.deliveryInfo?.neighborhoods && (
                  <div>
                    <span className='text-gray-600 text-sm'>Quartiers desservis :</span>
                    <div className='mt-1 max-h-32 overflow-y-auto'>
                      {point.deliveryInfo.neighborhoods.map((neighborhood, index) => (
                        <span
                          key={index}
                          className='inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded mr-1 mb-1'
                        >
                          {neighborhood}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Statut de disponibilité */}
          <div className='bg-white rounded-lg shadow-md p-6'>
            <h3 className='text-lg font-semibold text-accent-dark mb-4'>Disponibilité</h3>
            <div className='flex items-center gap-3'>
              <div
                className={`w-4 h-4 rounded-full ${isAvailable ? 'bg-green-500' : 'bg-red-500'}`}
              ></div>
              <span
                className={isAvailable ? 'text-green-700 font-medium' : 'text-red-700 font-medium'}
              >
                {isAvailable ? 'Disponible' : 'Non disponible'}
              </span>
            </div>
            {!isAvailable && point.type !== 'retrait' && (
              <p className='text-red-600 text-sm mt-2'>Montant minimum de commande non atteint</p>
            )}
          </div>

          {/* Bouton de commande */}
          {showOrderButton && isAvailable && (
            <div className='bg-white rounded-lg shadow-md p-6'>
              <button
                onClick={onOrderClick}
                className='w-full bg-primary-500 hover:bg-primary-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors'
              >
                Commander maintenant
              </button>
              <p className='text-gray-600 text-sm mt-2 text-center'>
                Total estimé : {orderAmount + deliveryCost}€
              </p>
            </div>
          )}

          {/* Informations générales */}
          <div className='bg-gray-50 rounded-lg p-6'>
            <h3 className='text-lg font-semibold text-accent-dark mb-4'>Informations</h3>
            <div className='space-y-2 text-sm text-gray-600'>
              <div className='flex justify-between'>
                <span>Type :</span>
                <span className='font-medium capitalize'>
                  {point.type === 'retrait'
                    ? 'Point de retrait'
                    : point.type === 'livraison_gratuite'
                      ? 'Livraison gratuite'
                      : 'Livraison payante'}
                </span>
              </div>
              <div className='flex justify-between'>
                <span>Catégorie :</span>
                <span className='font-medium capitalize'>
                  {point.category === 'public'
                    ? 'Public'
                    : point.category === 'production'
                      ? 'Production'
                      : point.category === 'entreprise'
                        ? 'Entreprise'
                        : 'Sophia Antipolis'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
