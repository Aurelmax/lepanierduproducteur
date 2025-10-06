import Link from 'next/link';
import PageHero from '../../components/PageHero';
import { getCurrentWeekPeriod } from '../../utils/dateUtils';
import {
  formatDistributionDays,
  formatFullAddress,
  getDistributionPointsByType,
  sortDistributionPointsByCityAndName,
} from '../../utils/distributionUtils';

export default function Distribution() {
  // Utiliser les dates automatiques
  const currentWeek = getCurrentWeekPeriod();

  // Récupérer les points par catégorie
  const pickupPoints = sortDistributionPointsByCityAndName(getDistributionPointsByType('retrait'));
  const freeDeliveryPoints = getDistributionPointsByType('livraison_gratuite');
  const paidDeliveryPoints = getDistributionPointsByType('livraison_payante');

  // Séparer les points de retrait par catégorie
  const publicPoints = pickupPoints.filter(p => p.category === 'public');
  const productionPoints = pickupPoints.filter(p => p.category === 'production');
  const enterprisePoints = pickupPoints.filter(p => p.category === 'entreprise');
  const sophiaPoints = pickupPoints.filter(p => p.category === 'sophia_antipolis');

  return (
    <div className='min-h-screen bg-accent-light'>
      <PageHero
        title='Points de Distribution'
        subtitle={`${currentWeek.startDate} au ${currentWeek.endDate}`}
      />

      <div className='py-16'>
        <div className='container mx-auto px-4'>
          {/* Information pour les entreprises */}
          <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12'>
            <div className='text-center'>
              <p className='text-blue-800 mb-4'>
                <span className='font-semibold'>
                  Vous êtes une société et souhaitez devenir un point de distribution ?
                </span>
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                <a
                  href='/contact'
                  className='bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors'
                >
                  📝 Remplir le formulaire
                </a>
                <a
                  href='tel:0616697097'
                  className='bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors'
                >
                  📞 06.16.69.70.97
                </a>
              </div>
            </div>
          </div>

          {/* Points de retrait principaux */}
          <div className='mb-16'>
            <h2 className='text-3xl font-display font-bold text-accent-dark text-center mb-8'>
              POINTS DE RETRAIT
            </h2>
            <p className='text-center text-gray-600 mb-8'>
              {currentWeek.startDate} au {currentWeek.endDate}
            </p>

            {/* Production */}
            {productionPoints.length > 0 && (
              <div className='mb-12'>
                <h3 className='text-2xl font-semibold text-accent-dark mb-6'>Production</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {productionPoints.map(point => (
                    <Link
                      key={point.id}
                      href={`/distribution/${point.id}`}
                      className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 block'
                    >
                      <div className='flex items-center justify-between mb-4'>
                        <h4 className='text-lg font-display font-bold text-accent-dark'>
                          {point.name}
                        </h4>
                        <div className='px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800'>
                          Production
                        </div>
                      </div>

                      <div className='space-y-3'>
                        <div className='flex items-start space-x-3'>
                          <div className='w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                            <span className='text-white text-xs'>📍</span>
                          </div>
                          <div>
                            <p className='font-semibold text-accent-dark'>Adresse</p>
                            <p className='text-gray-600 text-sm'>{formatFullAddress(point)}</p>
                          </div>
                        </div>

                        <div className='flex items-start space-x-3'>
                          <div className='w-6 h-6 bg-harvest-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                            <span className='text-white text-xs'>📅</span>
                          </div>
                          <div>
                            <p className='font-semibold text-accent-dark'>Jours</p>
                            <p className='text-gray-600 text-sm'>{formatDistributionDays(point)}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Points publics */}
            {publicPoints.length > 0 && (
              <div className='mb-12'>
                <h3 className='text-2xl font-semibold text-accent-dark mb-6'>Points publics</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {publicPoints.map(point => (
                    <Link
                      key={point.id}
                      href={`/distribution/${point.id}`}
                      className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 block'
                    >
                      <div className='flex items-center justify-between mb-4'>
                        <h4 className='text-lg font-display font-bold text-accent-dark'>
                          {point.name}
                        </h4>
                        <div className='px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800'>
                          Public
                        </div>
                      </div>

                      <div className='space-y-3'>
                        <div className='flex items-start space-x-3'>
                          <div className='w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                            <span className='text-white text-xs'>📍</span>
                          </div>
                          <div>
                            <p className='font-semibold text-accent-dark'>Adresse</p>
                            <p className='text-gray-600 text-sm'>{formatFullAddress(point)}</p>
                          </div>
                        </div>

                        <div className='flex items-start space-x-3'>
                          <div className='w-6 h-6 bg-harvest-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                            <span className='text-white text-xs'>📅</span>
                          </div>
                          <div>
                            <p className='font-semibold text-accent-dark'>Jours</p>
                            <p className='text-gray-600 text-sm'>{formatDistributionDays(point)}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Points d'entreprise */}
            {enterprisePoints.length > 0 && (
              <div className='mb-12'>
                <h3 className='text-2xl font-semibold text-accent-dark mb-6'>
                  Points d'entreprise
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {enterprisePoints.map(point => (
                    <Link
                      key={point.id}
                      href={`/distribution/${point.id}`}
                      className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 block'
                    >
                      <div className='flex items-center justify-between mb-4'>
                        <h4 className='text-lg font-display font-bold text-accent-dark'>
                          {point.name}
                        </h4>
                        <div className='px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800'>
                          Entreprise
                        </div>
                      </div>

                      <div className='space-y-3'>
                        <div className='flex items-start space-x-3'>
                          <div className='w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                            <span className='text-white text-xs'>📍</span>
                          </div>
                          <div>
                            <p className='font-semibold text-accent-dark'>Adresse</p>
                            <p className='text-gray-600 text-sm'>{formatFullAddress(point)}</p>
                          </div>
                        </div>

                        <div className='flex items-start space-x-3'>
                          <div className='w-6 h-6 bg-harvest-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                            <span className='text-white text-xs'>📅</span>
                          </div>
                          <div>
                            <p className='font-semibold text-accent-dark'>Jours</p>
                            <p className='text-gray-600 text-sm'>{formatDistributionDays(point)}</p>
                          </div>
                        </div>

                        {point.restrictions && (
                          <div className='flex items-start space-x-3'>
                            <div className='w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                              <span className='text-white text-xs'>⚠️</span>
                            </div>
                            <div>
                              <p className='font-semibold text-orange-800'>Restriction</p>
                              <p className='text-orange-600 text-sm'>{point.restrictions}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Points de retrait sur Sophia Antipolis */}
          {sophiaPoints.length > 0 && (
            <div className='mb-16'>
              <h2 className='text-3xl font-display font-bold text-accent-dark text-center mb-8'>
                POINTS DE RETRAIT sur Sophia Antipolis
              </h2>

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {sophiaPoints.map(point => (
                  <Link
                    key={point.id}
                    href={`/distribution/${point.id}`}
                    className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 block'
                  >
                    <div className='flex items-center justify-between mb-4'>
                      <h4 className='text-lg font-display font-bold text-accent-dark'>
                        {point.name}
                      </h4>
                      <div className='px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800'>
                        Sophia Antipolis
                      </div>
                    </div>

                    <div className='space-y-3'>
                      <div className='flex items-start space-x-3'>
                        <div className='w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                          <span className='text-white text-xs'>📍</span>
                        </div>
                        <div>
                          <p className='font-semibold text-accent-dark'>Adresse</p>
                          <p className='text-gray-600 text-sm'>{formatFullAddress(point)}</p>
                        </div>
                      </div>

                      <div className='flex items-start space-x-3'>
                        <div className='w-6 h-6 bg-harvest-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                          <span className='text-white text-xs'>📅</span>
                        </div>
                        <div>
                          <p className='font-semibold text-accent-dark'>Jours</p>
                          <p className='text-gray-600 text-sm'>{formatDistributionDays(point)}</p>
                        </div>
                      </div>

                      {point.restrictions && (
                        <div className='flex items-start space-x-3'>
                          <div className='w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                            <span className='text-white text-xs'>⚠️</span>
                          </div>
                          <div>
                            <p className='font-semibold text-orange-800'>Restriction</p>
                            <p className='text-orange-600 text-sm'>{point.restrictions}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Livraison gratuite */}
          {freeDeliveryPoints.length > 0 && (
            <div className='mb-16'>
              <h2 className='text-3xl font-display font-bold text-accent-dark text-center mb-8'>
                LIVRAISON OFFERTE À VOTRE DOMICILE
              </h2>
              <p className='text-center text-gray-600 mb-8'>
                {currentWeek.startDate} au {currentWeek.endDate}
              </p>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {freeDeliveryPoints.map(point => (
                  <Link
                    key={point.id}
                    href={`/distribution/${point.id}`}
                    className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 block'
                  >
                    <div className='flex items-center justify-between mb-4'>
                      <h4 className='text-lg font-display font-bold text-accent-dark'>
                        {point.name}
                      </h4>
                      <div className='px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800'>
                        Gratuit
                      </div>
                    </div>

                    <div className='space-y-3'>
                      <div className='flex items-start space-x-3'>
                        <div className='w-6 h-6 bg-earth-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                          <span className='text-white text-xs'>🚚</span>
                        </div>
                        <div>
                          <p className='font-semibold text-accent-dark'>Conditions</p>
                          <p className='text-gray-600 text-sm'>
                            Minimum {point.deliveryInfo?.minOrderAmount}€
                          </p>
                        </div>
                      </div>

                      <div className='flex items-start space-x-3'>
                        <div className='w-6 h-6 bg-harvest-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                          <span className='text-white text-xs'>📅</span>
                        </div>
                        <div>
                          <p className='font-semibold text-accent-dark'>Jours</p>
                          <p className='text-gray-600 text-sm'>{formatDistributionDays(point)}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Livraison payante */}
          {paidDeliveryPoints.length > 0 && (
            <div className='mb-16'>
              <h2 className='text-3xl font-display font-bold text-accent-dark text-center mb-8'>
                LIVRAISON PAYANTE À VOTRE DOMICILE
              </h2>
              <p className='text-center text-gray-600 mb-8'>
                {currentWeek.startDate} au {currentWeek.endDate}
              </p>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {paidDeliveryPoints.map(point => (
                  <Link
                    key={point.id}
                    href={`/distribution/${point.id}`}
                    className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 block'
                  >
                    <div className='flex items-center justify-between mb-4'>
                      <h4 className='text-lg font-display font-bold text-accent-dark'>
                        {point.name}
                      </h4>
                      <div className='px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800'>
                        +{point.deliveryInfo?.deliveryCost}€
                      </div>
                    </div>

                    <div className='space-y-3'>
                      <div className='flex items-start space-x-3'>
                        <div className='w-6 h-6 bg-earth-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                          <span className='text-white text-xs'>🚚</span>
                        </div>
                        <div>
                          <p className='font-semibold text-accent-dark'>Conditions</p>
                          <p className='text-gray-600 text-sm'>
                            Minimum {point.deliveryInfo?.minOrderAmount}€ +{' '}
                            {point.deliveryInfo?.deliveryCost}€
                          </p>
                        </div>
                      </div>

                      <div className='flex items-start space-x-3'>
                        <div className='w-6 h-6 bg-harvest-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                          <span className='text-white text-xs'>📅</span>
                        </div>
                        <div>
                          <p className='font-semibold text-accent-dark'>Jours</p>
                          <p className='text-gray-600 text-sm'>{formatDistributionDays(point)}</p>
                        </div>
                      </div>

                      {point.deliveryInfo?.neighborhoods && (
                        <div className='flex items-start space-x-3'>
                          <div className='w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                            <span className='text-white text-xs'>🏘️</span>
                          </div>
                          <div>
                            <p className='font-semibold text-accent-dark'>Quartiers</p>
                            <p className='text-gray-600 text-sm'>
                              {point.deliveryInfo.neighborhoods.slice(0, 3).join(', ')}
                              {point.deliveryInfo.neighborhoods.length > 3 && '...'}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Envoi sur toute la France */}
          <div className='mb-16'>
            <h2 className='text-3xl font-display font-bold text-accent-dark text-center mb-8'>
              ENVOI SUR TOUTE LA FRANCE
            </h2>
            <p className='text-center text-gray-600 mb-8'>
              {currentWeek.startDate} au {currentWeek.endDate}
            </p>

            <div className='bg-gradient-to-r from-primary-100 to-harvest-100 rounded-lg p-8'>
              <div className='text-center'>
                <h3 className='text-xl font-display font-bold text-accent-dark mb-4'>
                  Livraison partout en France
                </h3>
                <p className='text-gray-700 mb-4'>
                  Nous proposons également la livraison dans toute la France. Contactez-nous pour
                  connaître les conditions et tarifs.
                </p>
                <div className='flex justify-center space-x-4'>
                  <a
                    href='tel:0616697097'
                    className='bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors'
                  >
                    📞 06.16.69.70.97
                  </a>
                  <a
                    href='mailto:contact@lepanierduproducteur.com'
                    className='bg-harvest-500 hover:bg-harvest-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors'
                  >
                    ✉️ Nous contacter
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Comment commander */}
          <div className='mt-16 bg-gradient-to-r from-primary-100 to-harvest-100 rounded-lg p-8'>
            <div className='text-center'>
              <h2 className='text-2xl font-display font-bold text-accent-dark mb-4'>
                Comment commander ?
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'>
                <div className='text-center'>
                  <div className='w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <span className='text-2xl'>📱</span>
                  </div>
                  <h3 className='text-lg font-semibold text-accent-dark mb-2'>
                    1. Commandez en ligne
                  </h3>
                  <p className='text-gray-600'>
                    Choisissez vos produits et votre point de distribution
                  </p>
                </div>
                <div className='text-center'>
                  <div className='w-16 h-16 bg-harvest-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <span className='text-2xl'>🌱</span>
                  </div>
                  <h3 className='text-lg font-semibold text-accent-dark mb-2'>2. Nous récoltons</h3>
                  <p className='text-gray-600'>Vos produits sont cueillis le matin même</p>
                </div>
                <div className='text-center'>
                  <div className='w-16 h-16 bg-earth-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <span className='text-2xl'>📦</span>
                  </div>
                  <h3 className='text-lg font-semibold text-accent-dark mb-2'>3. Récupérez</h3>
                  <p className='text-gray-600'>Retirez votre commande au point choisi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
