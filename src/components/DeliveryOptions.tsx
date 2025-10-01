'use client';

interface DeliveryOption {
  type: 'production' | 'home' | 'pickup';
  title: string;
  description: string;
  days: string[];
  price?: string;
  free?: boolean;
}

export default function DeliveryOptions() {
  const deliveryOptions: DeliveryOption[] = [
    {
      type: 'production',
      title: 'DIRECTEMENT À LA PRODUCTION',
      description: 'Retrait à la ferme',
      days: [
        'Vendredi 3 Octobre (15h - 18h)',
        'Samedi 4 Octobre (15h - 18h)',
        'Lundi 6 Octobre (15h - 18h)',
        'Mardi 7 Octobre (15h - 18h)',
      ],
    },
    {
      type: 'home',
      title: 'LIVRAISON OFFERTE À VOTRE DOMICILE sur Antibes',
      description: "À partir de 15€ d'achat",
      days: [
        'Vendredi 3 Octobre (14h - 19h)',
        'Samedi 4 Octobre (9h - 15h)',
        'Lundi 6 Octobre (14h - 19h)',
        'Mardi 7 Octobre (14h - 19h)',
      ],
      free: true,
    },
  ];

  const pickupPoints = [
    { day: 'Jeudi 2 Octobre', location: 'NICE - Gare "Riquier"', time: '16h - 19h' },
    { day: 'Vendredi 3 Octobre', location: 'ANTIBES - Villa Thuret', time: '10h30 - 12h30' },
    { day: 'Lundi 6 Octobre', location: 'CANNES - Palm Beach', time: '11h00 - 14h00' },
    { day: 'Lundi 6 Octobre', location: 'MOUANS SARTOUX', time: '11h00' },
    { day: 'Mardi 7 Octobre', location: 'NICE - Centre Antoine Lacassagne', time: '14h - 17h' },
    { day: 'Mardi 7 Octobre', location: 'CAGNES SUR MER - Hippodrome', time: '10h20' },
    { day: 'Mardi 7 Octobre', location: 'ST LAURENT DU VAR - Cap 3000', time: '11h05 - 11h10' },
    { day: 'Mardi 7 Octobre', location: 'ST LAURENT DU VAR - Centre', time: '10h40' },
    {
      day: 'Mardi 7 Octobre',
      location: "NICE ARENAS - Quartier d'Affaires",
      time: '11h15 - 11h20',
    },
    { day: 'Mardi 7 Octobre', location: 'NICE - ARKOSE', time: '16h - 23h' },
    {
      day: 'Mardi 7 Octobre',
      location: 'NICE - FAC des Sciences de Valrose',
      time: '14h30 - 15h00',
    },
    { day: 'Mardi 7 Octobre', location: 'Stade Allianz Riviera', time: '15h - 16h' },
    { day: 'Mardi 7 Octobre', location: 'AzurVet Centre de Vétérinaires', time: '15h00 - 17h00' },
    { day: 'Mardi 7 Octobre', location: 'Orange Nice Besset', time: '14h' },
  ];

  const paidDelivery = [
    {
      location: 'Livraison Cannes-Mougins-Vallauris-Golfe juan',
      day: 'Lundi 6 Octobre (10h - 16h)',
      price: '+ 3€',
    },
    {
      location: 'Livraison à Domicile sur LE CANNET',
      day: 'Lundi 6 Octobre (11h - 17h)',
      price: '+ 3€',
    },
    {
      location: 'Livraison à Domicile sur NICE - Cagnes/Mer - Villeneuve Loubet',
      day: 'Mardi 7 Octobre (12h - 16h)',
      price: '+ 5€',
    },
  ];

  const sophiaAntipolis = [
    'Centre nautique Nautipolis - Vendredi 3 Octobre (vers 15h45)',
    'Mouratoglou - Vendredi 3 Octobre (12h & 14h)',
    'Société E.T.S.I - Vendredi 3 Octobre (14h30 - 16h30)',
    'Emerald Square - Vendredi 3 Octobre (10h30)',
    'Société Stella Telecom et société au Alentours - Vendredi 3 Octobre (10h30)',
    'Société STMicroelectronics - Vendredi 3 Octobre (14h30 - 16h30)',
    'World Trade Center - Vendredi 3 Octobre (14h30 - 16h30)',
    'Société Thales - Vendredi 3 Octobre (14h30 - 16h30)',
    'Appart\'Etud "Nemea" - Vendredi 3 Octobre (12h & 16h)',
    'Société ARM - Vendredi 3 Octobre (11h30)',
    'Société Atos - Vendredi 3 Octobre (14h30 - 16h30)',
    'Société Vinci Facilities Cegelec - Vendredi 3 Octobre (12h & 16h)',
    'Société ARM - Lundi 6 Octobre (11h30)',
    'Geoazur - Campus Azur CNRS - Lundi 6 Octobre (10h15 - 10h30)',
  ];

  return (
    <div className='bg-white rounded-xl p-8 shadow-lg'>
      <h3 className='text-2xl font-display font-bold text-accent-dark mb-6'>
        Choisissez votre lieu de livraison
      </h3>

      {/* Options principales */}
      <div className='space-y-6 mb-8'>
        {deliveryOptions.map((option, index) => (
          <div key={index} className='border border-gray-200 rounded-lg p-4'>
            <h4 className='font-semibold text-accent-dark mb-2'>{option.title}</h4>
            <p className='text-sm text-gray-600 mb-3'>{option.description}</p>
            <div className='space-y-1'>
              {option.days.map((day, dayIndex) => (
                <div key={dayIndex} className='text-sm text-gray-700'>
                  {day}
                </div>
              ))}
            </div>
            {option.free && (
              <div className='mt-2 text-green-600 font-semibold text-sm'>LIVRAISON GRATUITE</div>
            )}
          </div>
        ))}
      </div>

      {/* Points de retrait */}
      <div className='mb-8'>
        <h4 className='font-semibold text-accent-dark mb-4'>POINTS DE RETRAITS</h4>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {pickupPoints.map((point, index) => (
            <div key={index} className='bg-gray-50 rounded-lg p-3'>
              <div className='font-medium text-sm text-accent-dark'>{point.day}</div>
              <div className='text-sm text-gray-700'>{point.location}</div>
              <div className='text-xs text-gray-500'>{point.time}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Livraisons payantes */}
      <div className='mb-8'>
        <h4 className='font-semibold text-accent-dark mb-4'>LIVRAISON PAYANTE À DOMICILE</h4>
        <div className='space-y-3'>
          {paidDelivery.map((delivery, index) => (
            <div key={index} className='bg-orange-50 rounded-lg p-3'>
              <div className='text-sm text-gray-700'>{delivery.location}</div>
              <div className='text-xs text-gray-500'>{delivery.day}</div>
              <div className='text-sm font-semibold text-orange-600'>{delivery.price}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Sophia Antipolis */}
      <div>
        <h4 className='font-semibold text-accent-dark mb-4'>LIVRAISON GRATUITE SOPHIA ANTIPOLIS</h4>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
          {sophiaAntipolis.map((location, index) => (
            <div key={index} className='bg-green-50 rounded-lg p-3'>
              <div className='text-sm text-gray-700'>{location}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
