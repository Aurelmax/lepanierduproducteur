export default function Certifications() {
  return (
    <div className='bg-white rounded-xl p-8 shadow-lg'>
      <h3 className='text-xl font-display font-bold text-accent-dark mb-6 text-center'>
        Nos Certifications et Partenaires
      </h3>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='text-center'>
          <div className='w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3'>
            <span className='text-3xl'>🇫🇷</span>
          </div>
          <h4 className='font-semibold text-accent-dark mb-2'>Origine France</h4>
          <p className='text-sm text-gray-600'>Fruits et légumes</p>
        </div>

        <div className='text-center'>
          <div className='w-20 h-20 bg-harvest-100 rounded-full flex items-center justify-center mx-auto mb-3'>
            <span className='text-3xl'>🇪🇺</span>
          </div>
          <h4 className='font-semibold text-accent-dark mb-2'>Origine Europe</h4>
          <p className='text-sm text-gray-600'>Fruits et légumes</p>
        </div>

        <div className='text-center'>
          <div className='w-20 h-20 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-3'>
            <span className='text-3xl'>🏡</span>
          </div>
          <h4 className='font-semibold text-accent-dark mb-2'>Bienvenue à la ferme</h4>
          <p className='text-sm text-gray-600'>Accueil à la ferme</p>
        </div>
      </div>
    </div>
  );
}
