import PageHero from '../../components/PageHero';

export default function Contact() {
  return (
    <div className='min-h-screen bg-accent-light'>
      <PageHero title='Contactez-nous' subtitle='Nous sommes là pour vous aider' />

      <div className='py-16'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            <div>
              <h2 className='text-2xl font-display font-bold text-accent-dark mb-6'>
                Informations de contact
              </h2>
              <div className='space-y-4'>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center'>
                    <span className='text-white'>📞</span>
                  </div>
                  <div>
                    <p className='font-semibold text-accent-dark'>Téléphone</p>
                    <p className='text-gray-600'>06 12 34 56 78</p>
                  </div>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center'>
                    <span className='text-white'>✉️</span>
                  </div>
                  <div>
                    <p className='font-semibold text-accent-dark'>Email</p>
                    <p className='text-gray-600'>contact@panierduproducteur.fr</p>
                  </div>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center'>
                    <span className='text-white'>📍</span>
                  </div>
                  <div>
                    <p className='font-semibold text-accent-dark'>Adresse</p>
                    <p className='text-gray-600'>123 Route de la Ferme, 12345 Village</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className='text-2xl font-display font-bold text-accent-dark mb-6'>
                Envoyez-nous un message
              </h2>
              <form className='space-y-4'>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>Nom</label>
                  <input
                    type='text'
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>Email</label>
                  <input
                    type='email'
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>Message</label>
                  <textarea
                    rows={4}
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                  ></textarea>
                </div>
                <button
                  type='submit'
                  className='w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-lg font-semibold transition-colors duration-200'
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
