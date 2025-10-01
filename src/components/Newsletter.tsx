'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [language, setLanguage] = useState('francaise');
  const [isRobot, setIsRobot] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedLocation) {
      alert('Veuillez sélectionner un lieu de distribution');
      return;
    }

    if (!isRobot) {
      alert("Veuillez confirmer que vous n'êtes pas un robot");
      return;
    }

    // Logique d'inscription à la newsletter personnalisée par localité
    console.log('Inscription newsletter personnalisée:', {
      email,
      selectedLocation,
      language,
      message: `Inscription pour recevoir les compositions des paniers pour le lieu: ${selectedLocation}`,
    });

    // Ici vous pourriez envoyer les données à votre API
    alert(
      `Inscription réussie ! Vous recevrez les compositions des paniers pour ${selectedLocation}`,
    );

    // Reset du formulaire
    setEmail('');
    setSelectedLocation('');
    setLanguage('francaise');
    setIsRobot(false);
  };

  const deliveryLocations = [
    'DIRECTEMENT À LA PRODUCTION',
    'LIVRAISON OFFERTE SUR ANTIBES',
    'NICE GARE RIQUIER',
    'NICE - CENTRE ANTOINE LACASSAGNE',
    'NICE - FAC DES SCIENCES DE VALROSE',
    'LIVRAISON CANNES-MOUGINS-VALLAURIS-GOLFE JUAN',
    'LIVRAISON À DOMICILE SUR LE CANNET',
    'CANNES - PALM BEACH',
    'CAGNES SUR MER - HIPPODROMME',
    'ST LAURENT DU VAR - CAP 3000',
    'ST LAURENT DU VAR - CENTRE',
    "NICE ARENAS - QUARTIER D'AFFAIRES",
    'NICE - ARKOSE',
    'MOUANS SARTOUX',
    'STADE ALLIANZ RIVIERA',
    'AZURVET CENTRE DE VÉTÉRINAIRES',
    'ANTIBES - VILLA THURET',
    'LIVRAISON À DOMICILE SUR NICE - CAGNES/MER - VILLENEUVE LOUBET',
    'ORANGE NICE BESSET',
  ];

  const sophiaAntipolisLocations = [
    'NAUTIPOLIS: COMPLEXE AQUATIQUE DE VALBONNE SOPHIA',
    'MOURATOGLOU',
    'SOCIÉTÉ E.T.S.I',
    'EMERALD SQUARE',
    'SOCIÉTÉ STELLA TELECOM ET',
    'SOCIÉTÉ AU ALENTOURS',
    'SOCIÉTÉ STMICROELECTRONICS',
    'WORLD TRADE CENTER',
    'SOCIÉTÉ THALES',
    'APPART\'ETUD "NEMEA"',
    'SOCIÉTÉ ARM',
    'GEOAZUR - CAMPUS AZUR CNRS',
    'SOCIÉTÉ ATOS',
    'SOCIÉTÉ VINCI FACILITIES CEGELEC',
  ];

  return (
    <div className='bg-gradient-to-r from-earth-100 to-primary-100 rounded-xl p-8'>
      <div className='max-w-4xl mx-auto'>
        <div className='text-center mb-8'>
          <h3 className='text-2xl font-display font-bold text-accent-dark mb-2'>
            Inscription Newsletter
          </h3>
          <p className='text-lg text-gray-700 mb-4'>
            pour recevoir la composition des paniers de la semaine
          </p>
          <div className='bg-blue-50 border border-blue-200 rounded-lg p-4'>
            <p className='text-sm text-blue-800'>
              <strong>💡 Pourquoi choisir votre lieu ?</strong>
              <br />
              Nous vous enverrons des informations personnalisées selon votre point de distribution
              : horaires spécifiques, compositions adaptées à votre zone, et offres locales.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className='space-y-6'>
          {/* Email */}
          <div>
            <label className='block text-sm font-semibold text-accent-dark mb-2'>
              Inscrivez votre email
            </label>
            <input
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent'
              placeholder='votre@email.com'
              required
            />
          </div>

          {/* Lieux de livraison */}
          <div>
            <h4 className='text-lg font-semibold text-accent-dark mb-4'>
              Recevez la composition des paniers du lieu :
            </h4>
            {selectedLocation && (
              <div className='mb-4 p-3 bg-green-50 border border-green-200 rounded-lg'>
                <p className='text-sm text-green-800'>
                  <strong>✅ Lieu sélectionné :</strong> {selectedLocation}
                </p>
              </div>
            )}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <div className='space-y-2 max-h-96 overflow-y-auto'>
                  {deliveryLocations.map((location, index) => (
                    <label
                      key={index}
                      className='flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded'
                    >
                      <input
                        type='radio'
                        name='location'
                        value={location}
                        checked={selectedLocation === location}
                        onChange={e => setSelectedLocation(e.target.value)}
                        className='text-primary-500 focus:ring-primary-500'
                      />
                      <span className='text-sm text-gray-700'>{location}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h5 className='font-semibold text-accent-dark mb-3'>
                  Livraison gratuite sur Sophia Antipolis :
                </h5>
                <div className='space-y-2 max-h-96 overflow-y-auto'>
                  {sophiaAntipolisLocations.map((location, index) => (
                    <label
                      key={index}
                      className='flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded'
                    >
                      <input
                        type='radio'
                        name='location'
                        value={location}
                        checked={selectedLocation === location}
                        onChange={e => setSelectedLocation(e.target.value)}
                        className='text-primary-500 focus:ring-primary-500'
                      />
                      <span className='text-sm text-gray-700'>{location}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Langue */}
          <div>
            <p className='text-sm font-semibold text-accent-dark mb-3'>
              En langue Française ou Anglaise
            </p>
            <div className='flex space-x-4'>
              <label className='flex items-center space-x-2 cursor-pointer'>
                <input
                  type='radio'
                  name='language'
                  value='francaise'
                  checked={language === 'francaise'}
                  onChange={e => setLanguage(e.target.value)}
                  className='text-primary-500 focus:ring-primary-500'
                />
                <span className='text-sm text-gray-700'>Française</span>
              </label>
              <label className='flex items-center space-x-2 cursor-pointer'>
                <input
                  type='radio'
                  name='language'
                  value='anglaise'
                  checked={language === 'anglaise'}
                  onChange={e => setLanguage(e.target.value)}
                  className='text-primary-500 focus:ring-primary-500'
                />
                <span className='text-sm text-gray-700'>Anglaise</span>
              </label>
            </div>
          </div>

          {/* reCAPTCHA */}
          <div>
            <label className='flex items-center space-x-2 cursor-pointer'>
              <input
                type='checkbox'
                checked={isRobot}
                onChange={e => setIsRobot(e.target.checked)}
                className='text-primary-500 focus:ring-primary-500'
              />
              <span className='text-sm text-gray-700'>Je ne suis pas un robot</span>
            </label>
            <div className='mt-2 text-xs text-gray-500'>
              <a href='#' className='text-primary-600 hover:underline'>
                Confidentialité
              </a>{' '}
              -
              <a href='#' className='text-primary-600 hover:underline ml-1'>
                Conditions
              </a>
            </div>
          </div>

          {/* Bouton d'inscription */}
          <div className='text-center'>
            <button
              type='submit'
              className='bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-200 transform hover:scale-105'
            >
              S'INSCRIRE
            </button>
          </div>

          {/* Mentions légales */}
          <div className='text-xs text-gray-600 text-center'>
            Vous disposez d'un droit d'accès, de modification, de rectification et de suppression
            des données qui vous concernent (art. 34 de la loi 'Informatique et Libertés'). Pour
            l'exercer, adressez-vous par email à contact@lepanierduproducteur.com
          </div>
        </form>
      </div>
    </div>
  );
}
