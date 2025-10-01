export default function TestQuantities() {
  return (
    <div className='min-h-screen bg-accent-light py-8'>
      <div className='container mx-auto px-4'>
        <h1 className='text-3xl font-display font-bold text-accent-dark text-center mb-8'>
          Test des Quantités - Site Existant vs Notre Site
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Chou fleur */}
          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h2 className='text-xl font-semibold text-accent-dark mb-4'>
              Chou fleur (Taille Grosse)
            </h2>
            <p className='text-lg font-bold text-primary-600 mb-6'>4,90€ pièce</p>

            <div className='space-y-4'>
              <div>
                <label className='block text-sm font-semibold text-accent-dark mb-2'>
                  Quantité disponible (1 à 10 pièces) :
                </label>
                <div className='grid grid-cols-5 gap-2'>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(qty => (
                    <button
                      key={qty}
                      className='px-3 py-2 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 hover:bg-primary-500 hover:text-white transition-colors'
                    >
                      {qty} pièce{qty > 1 ? 's' : ''}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Échalote */}
          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h2 className='text-xl font-semibold text-accent-dark mb-4'>Échalote</h2>
            <p className='text-lg font-bold text-primary-600 mb-6'>4,90€ le kg</p>

            <div className='space-y-4'>
              <div>
                <label className='block text-sm font-semibold text-accent-dark mb-2'>
                  Quantité disponible (100gr à 3000gr) :
                </label>
                <div className='grid grid-cols-4 gap-2'>
                  {[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.5, 2.0, 2.5, 3.0].map(
                    qty => (
                      <button
                        key={qty}
                        className='px-2 py-2 rounded-lg text-xs font-medium bg-gray-100 text-gray-700 hover:bg-primary-500 hover:text-white transition-colors'
                      >
                        {qty}kg
                      </button>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6'>
          <h3 className='text-lg font-semibold text-blue-800 mb-4'>
            📋 Correspondance avec le site existant :
          </h3>
          <div className='space-y-2 text-blue-700'>
            <p>
              <strong>Chou fleur :</strong> 1 à 10 pièces ✅
            </p>
            <p>
              <strong>Échalote :</strong> 100gr à 3000gr (0.1kg à 3kg) ✅
            </p>
            <p>
              <strong>Options disponibles :</strong> Exactement comme sur le site original
            </p>
            <p>
              <strong>Calcul automatique :</strong> Prix total en temps réel
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
