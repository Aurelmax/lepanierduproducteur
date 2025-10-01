import PageHero from '../../components/PageHero';
import { getCurrentWeekPeriod } from '../../utils/dateUtils';

export default function Distribution() {
  // Utiliser les dates automatiques
  const currentWeek = getCurrentWeekPeriod();
  const distributionPoints = [
    // Points de retrait principaux
    {
      city: 'DIRECTEMENT À LA PRODUCTION',
      location: 'Antibes',
      type: 'Point de retrait',
      address: 'Retrait à la ferme',
      schedule: '15-18h du lundi au samedi',
      delivery: false,
    },
    {
      city: 'NICE - GARE "RIQUIER"',
      location: 'Nice',
      type: 'Point de retrait',
      address: 'Gare Riquier',
      schedule: 'Jeudi 2 Octobre (16h - 19h)',
      delivery: false,
    },
    {
      city: 'NICE - CENTRE ANTOINE LACASSAGNE',
      location: 'Nice',
      type: 'Point de retrait',
      address: 'Centre Antoine Lacassagne',
      schedule: 'Mardi 7 Octobre (14h - 17h)',
      delivery: false,
    },
    {
      city: 'NICE - FAC DES SCIENCES DE VALROSE',
      location: 'Nice',
      type: 'Point de retrait',
      address: 'Fac des Sciences de Valrose',
      schedule: 'Mardi 7 Octobre (14h30 - 15h00)',
      delivery: false,
    },
    {
      city: 'CANNES - PALM BEACH',
      location: 'Cannes',
      type: 'Point de retrait',
      address: 'Palm Beach',
      schedule: 'Lundi 6 Octobre (11h00 - 14h00)',
      delivery: false,
    },
    {
      city: 'CAGNES SUR MER - HIPPODROMME',
      location: 'Cagnes sur Mer',
      type: 'Point de retrait',
      address: 'Hippodromme',
      schedule: 'Mardi 7 Octobre (10h20)',
      delivery: false,
    },
    {
      city: 'ST LAURENT DU VAR - CAP 3000',
      location: 'St Laurent du Var',
      type: 'Point de retrait',
      address: 'Cap 3000',
      schedule: 'Mardi 7 Octobre (11h05 - 11h10)',
      delivery: false,
    },
    {
      city: 'ST LAURENT DU VAR - CENTRE',
      location: 'St Laurent du Var',
      type: 'Point de retrait',
      address: 'Centre',
      schedule: 'Mardi 7 Octobre (10h40)',
      delivery: false,
    },
    {
      city: "NICE ARENAS - QUARTIER D'AFFAIRES",
      location: 'Nice',
      type: 'Point de retrait',
      address: "Quartier d'Affaires",
      schedule: 'Mardi 7 Octobre (11h15 - 11h20)',
      delivery: false,
    },
    {
      city: 'NICE - ARKOSE',
      location: 'Nice',
      type: 'Point de retrait',
      address: 'ARKOSE',
      schedule: 'Mardi 7 Octobre (16h - 23h)',
      delivery: false,
    },
    {
      city: 'MOUANS SARTOUX',
      location: 'Mouans Sartoux',
      type: 'Point de retrait',
      address: 'Mouans Sartoux',
      schedule: 'Lundi 6 Octobre (11h00)',
      delivery: false,
    },
    {
      city: 'STADE ALLIANZ RIVIERA',
      location: 'Nice',
      type: 'Point de retrait',
      address: 'Stade Allianz Riviera',
      schedule: 'Mardi 7 Octobre (15h - 16h)',
      delivery: false,
    },
    {
      city: 'AZURVET CENTRE DE VÉTÉRINAIRES',
      location: 'Nice',
      type: 'Point de retrait',
      address: 'Centre de Vétérinaires',
      schedule: 'Mardi 7 Octobre (15h00 - 17h00)',
      delivery: false,
    },
    {
      city: 'ANTIBES - VILLA THURET',
      location: 'Antibes',
      type: 'Point de retrait',
      address: 'Villa Thuret',
      schedule: 'Vendredi 3 Octobre (10h30 - 12h30)',
      delivery: false,
    },
    {
      city: 'ORANGE NICE BESSET',
      location: 'Nice',
      type: 'Point de retrait',
      address: 'Orange Nice Besset',
      schedule: 'Mardi 7 Octobre (14h)',
      delivery: false,
    },
  ];

  const sophiaAntipolisPoints = [
    {
      city: 'NAUTIPOLIS: COMPLEXE AQUATIQUE DE VALBONNE SOPHIA',
      location: 'Sophia Antipolis',
      type: 'Point de retrait',
      address: 'Centre nautique Nautipolis',
      schedule: 'Vendredi 3 Octobre (vers 15h45)',
      delivery: false,
    },
    {
      city: 'MOURATOGLOU',
      location: 'Sophia Antipolis',
      type: 'Point de retrait',
      address: 'Mouratoglou',
      schedule: 'Vendredi 3 Octobre (12h & 14h)',
      delivery: false,
    },
    {
      city: 'SOCIÉTÉ THALES',
      location: 'Sophia Antipolis',
      type: 'Point de retrait',
      address: 'Société Thales',
      schedule: 'Vendredi 3 Octobre (14h30 - 16h30)',
      delivery: false,
    },
    {
      city: 'APPART\'ETUD "NEMEA"',
      location: 'Sophia Antipolis',
      type: 'Point de retrait',
      address: 'Appart\'Etud "Nemea"',
      schedule: 'Vendredi 3 Octobre (12h & 16h)',
      delivery: false,
    },
    {
      city: 'SOCIÉTÉ ARM',
      location: 'Sophia Antipolis',
      type: 'Point de retrait',
      address: 'Société ARM',
      schedule: 'Vendredi 3 Octobre (11h30), Lundi 6 Octobre (11h30)',
      delivery: false,
    },
    {
      city: 'SOCIÉTÉ STELLA TELECOM ET SOCIÉTÉ AU ALENTOURS',
      location: 'Sophia Antipolis',
      type: 'Point de retrait',
      address: 'Société Stella Telecom et société au Alentours',
      schedule: 'Vendredi 3 Octobre (10h30)',
      delivery: false,
    },
    {
      city: 'SOCIÉTÉ STMICROELECTRONICS',
      location: 'Sophia Antipolis',
      type: 'Point de retrait',
      address: 'Société STMicroelectronics',
      schedule: 'Vendredi 3 Octobre (14h30 - 16h30)',
      delivery: false,
    },
    {
      city: 'GEOAZUR CAMPUS AZUR CNRS',
      location: 'Sophia Antipolis',
      type: 'Point de retrait',
      address: 'Geoazur - Campus Azur CNRS',
      schedule: 'Lundi 6 Octobre (10h15 - 10h30)',
      delivery: false,
    },
    {
      city: 'EMERALD SQUARE',
      location: 'Sophia Antipolis',
      type: 'Point de retrait',
      address: 'Emerald Square',
      schedule: 'Vendredi 3 Octobre (10h30)',
      delivery: false,
    },
    {
      city: 'SOCIÉTÉ E.T.S.I',
      location: 'Sophia Antipolis',
      type: 'Point de retrait',
      address: 'Société E.T.S.I',
      schedule: 'Vendredi 3 Octobre (14h30 - 16h30)',
      delivery: false,
    },
    {
      city: 'SOCIÉTÉ ATOS',
      location: 'Sophia Antipolis',
      type: 'Point de retrait',
      address: 'Société Atos',
      schedule: 'Vendredi 3 Octobre (14h30 - 16h30)',
      delivery: false,
    },
    {
      city: 'WORLD TRADE CENTER',
      location: 'Sophia Antipolis',
      type: 'Point de retrait',
      address: 'World Trade Center',
      schedule: 'Vendredi 3 Octobre (14h30 - 16h30)',
      delivery: false,
    },
    {
      city: 'SOCIÉTÉ VINCI FACILITIES CEGELEC',
      location: 'Sophia Antipolis',
      type: 'Point de retrait',
      address: 'Société Vinci Facilities Cegelec',
      schedule: 'Vendredi 3 Octobre (12h & 16h)',
      delivery: false,
    },
  ];

  const freeDeliveryOptions = [
    {
      city: 'LIVRAISON OFFERTE À DOMICILE',
      location: 'Antibes',
      type: 'Livraison gratuite',
      address: "À partir de 15€ d'achat",
      schedule: 'Lundi Après-midi, Mardi Après-midi, Mercredi Après-midi, Vendredi Après-midi, Samedi Matin',
      delivery: true,
      cost: 'Gratuit',
    },
  ];

  const paidDeliveryOptions = [
    {
      city: 'LIVRAISON PAYANTE À DOMICILE',
      location: 'Cannes-Mougins-Vallauris-Golfe juan',
      type: 'Livraison payante',
      address: '+ 3€',
      schedule: 'Lundi 6 Octobre (10h - 16h)',
      delivery: true,
      cost: '3€',
    },
    {
      city: 'LIVRAISON PAYANTE À DOMICILE',
      location: 'LE CANNET',
      type: 'Livraison payante',
      address: '+ 3€',
      schedule: 'Lundi 6 Octobre (11h - 17h)',
      delivery: true,
      cost: '3€',
    },
    {
      city: 'LIVRAISON PAYANTE À DOMICILE',
      location: 'NICE - Cagnes/Mer - Villeneuve Loubet',
      type: 'Livraison payante',
      address: '+ 5€',
      schedule: 'Mardi 7 Octobre (12h - 16h)',
      delivery: true,
      cost: '5€',
    },
  ];

  return (
    <div className='min-h-screen bg-accent-light'>
      <PageHero title='Points de Distribution' subtitle={`${currentWeek.startDate} au ${currentWeek.endDate}`} />

      <div className='py-16'>
        <div className='container mx-auto px-4'>
          {/* Information pour les entreprises */}
          <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12'>
            <p className='text-center text-blue-800'>
              <span className='font-semibold'>
                Vous êtes une société, et désirez que lepanierduproducteur.com propose votre lieu de
                distribution, merci de nous contacter au 06.16.69.70.97
              </span>
            </p>
          </div>

          {/* Points de retrait principaux */}
          <div className='mb-16'>
            <h2 className='text-3xl font-display font-bold text-accent-dark text-center mb-8'>
              POINTS DE RETRAIT
            </h2>
            <p className='text-center text-gray-600 mb-8'>{currentWeek.startDate} au {currentWeek.endDate}</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {distributionPoints.map((point, index) => (
                <div
                  key={index}
                  className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300'
                >
                  <div className='flex items-center justify-between mb-4'>
                    <h3 className='text-lg font-display font-bold text-accent-dark'>
                      {point.city}
                    </h3>
                    <div className='px-3 py-1 rounded-full text-sm font-medium bg-harvest-100 text-harvest-800'>
                      {point.type}
                    </div>
                  </div>

                  <div className='space-y-3'>
                    <div className='flex items-start space-x-3'>
                      <div className='w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                        <span className='text-white text-xs'>📍</span>
                      </div>
                      <div>
                        <p className='font-semibold text-accent-dark'>Lieu</p>
                        <p className='text-gray-600 text-sm'>{point.address}</p>
                      </div>
                    </div>

                    <div className='flex items-start space-x-3'>
                      <div className='w-6 h-6 bg-harvest-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                        <span className='text-white text-xs'>🕒</span>
                      </div>
                      <div>
                        <p className='font-semibold text-accent-dark'>Horaires</p>
                        <p className='text-gray-600 text-sm'>{point.schedule}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Points de retrait Sophia Antipolis */}
          <div className='mb-16'>
            <h2 className='text-3xl font-display font-bold text-accent-dark text-center mb-8'>
              POINTS DE RETRAIT SUR SOPHIA ANTIPOLIS
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {sophiaAntipolisPoints.map((point, index) => (
                <div
                  key={index}
                  className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300'
                >
                  <div className='flex items-center justify-between mb-4'>
                    <h3 className='text-lg font-display font-bold text-accent-dark'>
                      {point.city}
                    </h3>
                    <div className='px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800'>
                      {point.type}
                    </div>
                  </div>

                  <div className='space-y-3'>
                    <div className='flex items-start space-x-3'>
                      <div className='w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                        <span className='text-white text-xs'>📍</span>
                      </div>
                      <div>
                        <p className='font-semibold text-accent-dark'>Lieu</p>
                        <p className='text-gray-600 text-sm'>{point.address}</p>
                      </div>
                    </div>

                    <div className='flex items-start space-x-3'>
                      <div className='w-6 h-6 bg-harvest-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                        <span className='text-white text-xs'>🕒</span>
                      </div>
                      <div>
                        <p className='font-semibold text-accent-dark'>Horaires</p>
                        <p className='text-gray-600 text-sm'>{point.schedule}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Livraison gratuite */}
          <div className='mb-16'>
            <h2 className='text-3xl font-display font-bold text-accent-dark text-center mb-8'>
              LIVRAISON OFFERTE À VOTRE DOMICILE SUR ANTIBES
            </h2>
            <p className='text-center text-gray-600 mb-8'>{currentWeek.startDate} au {currentWeek.endDate}</p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {freeDeliveryOptions.map((option, index) => (
                <div
                  key={index}
                  className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300'
                >
                  <div className='flex items-center justify-between mb-4'>
                    <h3 className='text-lg font-display font-bold text-accent-dark'>
                      {option.city}
                    </h3>
                    <div
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        option.cost === 'Gratuit'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-orange-100 text-orange-800'
                      }`}
                    >
                      {option.cost}
                    </div>
                  </div>

                  <div className='space-y-3'>
                    <div className='flex items-start space-x-3'>
                      <div className='w-6 h-6 bg-earth-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                        <span className='text-white text-xs'>🚚</span>
                      </div>
                      <div>
                        <p className='font-semibold text-accent-dark'>Conditions</p>
                        <p className='text-gray-600 text-sm'>{option.address}</p>
                      </div>
                    </div>

                    <div className='flex items-start space-x-3'>
                      <div className='w-6 h-6 bg-harvest-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                        <span className='text-white text-xs'>🕒</span>
                      </div>
                      <div>
                        <p className='font-semibold text-accent-dark'>Horaires</p>
                        <p className='text-gray-600 text-sm'>{option.schedule}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Livraison payante */}
          <div className='mb-16'>
            <h2 className='text-3xl font-display font-bold text-accent-dark text-center mb-8'>
              LIVRAISON PAYANTE À VOTRE DOMICILE
            </h2>
            <p className='text-center text-gray-600 mb-8'>{currentWeek.startDate} au {currentWeek.endDate}</p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {paidDeliveryOptions.map((option, index) => (
                <div
                  key={index}
                  className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300'
                >
                  <div className='flex items-center justify-between mb-4'>
                    <h3 className='text-lg font-display font-bold text-accent-dark'>
                      {option.city}
                    </h3>
                    <div
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        option.cost === 'Gratuit'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-orange-100 text-orange-800'
                      }`}
                    >
                      {option.cost}
                    </div>
                  </div>

                  <div className='space-y-3'>
                    <div className='flex items-start space-x-3'>
                      <div className='w-6 h-6 bg-earth-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                        <span className='text-white text-xs'>🚚</span>
                      </div>
                      <div>
                        <p className='font-semibold text-accent-dark'>Conditions</p>
                        <p className='text-gray-600 text-sm'>{option.address}</p>
                      </div>
                    </div>

                    <div className='flex items-start space-x-3'>
                      <div className='w-6 h-6 bg-harvest-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                        <span className='text-white text-xs'>🕒</span>
                      </div>
                      <div>
                        <p className='font-semibold text-accent-dark'>Horaires</p>
                        <p className='text-gray-600 text-sm'>{option.schedule}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Envoi sur toute la France */}
          <div className='mb-16'>
            <h2 className='text-3xl font-display font-bold text-accent-dark text-center mb-8'>
              ENVOI SUR TOUTE LA FRANCE
            </h2>
            <p className='text-center text-gray-600 mb-8'>{currentWeek.startDate} au {currentWeek.endDate}</p>

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
                  <p className='text-gray-600'>Choisissez vos produits et votre point de retrait</p>
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
