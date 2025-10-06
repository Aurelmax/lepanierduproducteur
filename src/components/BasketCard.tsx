'use client';

interface BasketItem {
  name: string;
  quantity: string;
  description?: string;
}

interface BasketCardProps {
  title: string;
  price: string;
  items: BasketItem[];
  isPopular?: boolean;
  isAvailable?: boolean;
  onOrder: () => void;
  subscriptionPrice?: string;
  subscriptionDiscount?: string;
}

export default function BasketCard({
  title,
  price,
  items,
  isPopular = false,
  isAvailable = true,
  onOrder,
  subscriptionPrice,
  subscriptionDiscount,
}: BasketCardProps) {
  return (
    <div
      className={`relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden ${isPopular ? 'ring-2 ring-primary-500' : ''} ${!isAvailable ? 'opacity-75' : ''}`}
    >
      {/* Logo en arrière-plan */}
      <div className='absolute top-4 right-4 opacity-5'>
        <img src='/logo.png' alt='Le Panier du Producteur' className='w-20 h-20 object-contain' />
      </div>

      {/* Logo Origine France */}
      <div className='absolute top-4 left-4 z-10'>
        <img
          src='/origine-france-fruites-et-legumes-p.png'
          alt='Origine France - Fruits et Légumes'
          className='w-14 h-14 object-contain opacity-90'
        />
      </div>

      {isPopular && (
        <div className='absolute -top-2 left-1/2 transform -translate-x-1/2 z-10'>
          <span className='bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md'>
            Populaire
          </span>
        </div>
      )}

      <div className={`relative z-10 ${isPopular ? 'pt-8 px-6 pb-6' : 'p-6'}`}>
        <div className='text-center mb-4'>
          <h3 className='text-xl font-display font-bold text-accent-dark mb-2'>{title}</h3>
          <div className='text-3xl font-bold text-primary-600'>{price}</div>
          {subscriptionPrice && (
            <div className='mt-2 text-sm text-gray-600'>
              <div className='font-semibold text-green-600'>
                Abonnement 4 semaines: {subscriptionPrice}
              </div>
              <div className='text-xs text-green-500'>Réduction de {subscriptionDiscount}</div>
            </div>
          )}
        </div>

        <div className='space-y-3 mb-6'>
          {items.map((item, index) => (
            <div key={index} className='flex items-center space-x-3'>
              <div className='w-2 h-2 bg-primary-400 rounded-full flex-shrink-0'></div>
              <div className='flex-1'>
                <span className='text-accent-dark font-medium'>{item.quantity}</span>
                <span className='text-gray-600 ml-2'>{item.name}</span>
                {item.description && (
                  <span className='text-gray-500 text-sm ml-2'>({item.description})</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Overlay "Plus de paniers" */}
        {!isAvailable && (
          <div className='absolute inset-0 bg-red-500/20 flex items-center justify-center z-20'>
            <div className='bg-red-500 text-white px-6 py-3 rounded-lg font-bold text-lg transform -rotate-12 shadow-lg'>
              PLUS DE PANIERS
            </div>
          </div>
        )}

        <button
          onClick={onOrder}
          disabled={!isAvailable}
          className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${
            isAvailable
              ? 'bg-primary-500 hover:bg-primary-600 text-white transform hover:scale-105'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {isAvailable ? 'Commander' : 'Indisponible'}
        </button>
      </div>
    </div>
  );
}
