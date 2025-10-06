'use client';

import { Bell, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function CompactNewsletter() {
  const [email, setEmail] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      alert('Veuillez saisir votre email');
      return;
    }

    if (!selectedLocation) {
      alert('Veuillez sélectionner un lieu de distribution');
      return;
    }

    // Simuler l'inscription
    console.log('Inscription newsletter:', { email, selectedLocation });
    setIsSubscribed(true);

    // Reset après 3 secondes
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
      setSelectedLocation('');
      setIsExpanded(false);
    }, 3000);
  };

  const popularLocations = [
    'DIRECTEMENT À LA PRODUCTION',
    'LIVRAISON OFFERTE SUR ANTIBES',
    'NICE - GARE RIQUIER',
    'NICE - CENTRE ANTOINE LACASSAGNE',
    'CANNES - PALM BEACH',
    "NICE ARENAS - QUARTIER D'AFFAIRES",
    'NICE - ARKOSE',
    'MOUANS SARTOUX',
  ];

  const allLocations = [
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
    'NAUTIPOLIS: COMPLEXE AQUATIQUE DE VALBONNE SOPHIA',
    'MOURATOGLOU',
    'SOCIÉTÉ E.T.S.I',
    'EMERALD SQUARE',
    'SOCIÉTÉ STELLA TELECOM ET SOCIÉTÉ AU ALENTOURS',
    'SOCIÉTÉ STMICROELECTRONICS',
    'WORLD TRADE CENTER',
    'SOCIÉTÉ THALES',
    'APPART\'ETUD "NEMEA"',
    'SOCIÉTÉ ARM',
    'GEOAZUR - CAMPUS AZUR CNRS',
    'SOCIÉTÉ ATOS',
    'SOCIÉTÉ VINCI FACILITIES CEGELEC',
  ];

  if (isSubscribed) {
    return (
      <div className='bg-gradient-to-r from-green-100 to-primary-100 rounded-xl p-8 text-center'>
        <div className='max-w-2xl mx-auto'>
          <div className='w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4'>
            <Bell className='w-8 h-8 text-white' />
          </div>
          <h3 className='text-2xl font-display font-bold text-accent-dark mb-2'>
            Inscription réussie !
          </h3>
          <p className='text-gray-700 mb-4'>
            Vous recevrez désormais la composition des paniers pour{' '}
            <strong>{selectedLocation}</strong>
          </p>
          <p className='text-sm text-gray-600'>
            Un email de confirmation vous a été envoyé à <strong>{email}</strong>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-gradient-to-r from-earth-100 to-primary-100 rounded-xl p-8'>
      <div className='max-w-4xl mx-auto'>
        <div className='text-center mb-6'>
          <div className='flex items-center justify-center gap-3 mb-4'>
            <Mail className='w-8 h-8 text-primary-500' />
            <h3 className='text-2xl font-display font-bold text-accent-dark'>
              Recevez nos paniers chaque semaine
            </h3>
          </div>
          <p className='text-gray-700 mb-4'>
            Inscrivez-vous à notre newsletter pour connaître la composition des paniers
          </p>
        </div>

        <form onSubmit={handleSubmit} className='space-y-6'>
          {/* Email et lieu de base */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label className='block text-sm font-semibold text-accent-dark mb-2'>
                Votre email
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

            <div>
              <label className='block text-sm font-semibold text-accent-dark mb-2'>
                Lieu de distribution
              </label>
              <select
                value={selectedLocation}
                onChange={e => setSelectedLocation(e.target.value)}
                className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                required
              >
                <option value=''>Choisissez votre lieu</option>
                {popularLocations.map((location, index) => (
                  <option key={index} value={location}>
                    {location}
                  </option>
                ))}
                <option value='' disabled>
                  ──────────────
                </option>
                <option value='other'>Autres lieux...</option>
              </select>
            </div>
          </div>

          {/* Bouton pour voir tous les lieux */}
          {selectedLocation === 'other' && (
            <div className='bg-white rounded-lg p-4 border border-gray-200'>
              <div className='flex items-center gap-2 mb-3'>
                <MapPin className='w-5 h-5 text-primary-500' />
                <h4 className='font-semibold text-accent-dark'>Tous les lieux de distribution</h4>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-2 max-h-60 overflow-y-auto'>
                {allLocations.map((location, index) => (
                  <label
                    key={index}
                    className='flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded text-sm'
                  >
                    <input
                      type='radio'
                      name='location'
                      value={location}
                      checked={selectedLocation === location}
                      onChange={e => setSelectedLocation(e.target.value)}
                      className='text-primary-500 focus:ring-primary-500'
                    />
                    <span className='text-gray-700'>{location}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Information sur la personnalisation */}
          <div className='bg-blue-50 border border-blue-200 rounded-lg p-4'>
            <div className='flex items-start gap-3'>
              <div className='w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                <span className='text-white text-sm'>💡</span>
              </div>
              <div>
                <p className='text-sm text-blue-800 font-medium mb-1'>
                  Informations personnalisées
                </p>
                <p className='text-xs text-blue-700'>
                  Vous recevrez des horaires spécifiques, compositions adaptées à votre zone, et
                  offres locales.
                </p>
              </div>
            </div>
          </div>

          {/* Bouton d'inscription */}
          <div className='text-center'>
            <button
              type='submit'
              className='bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 transform hover:scale-105'
            >
              S'inscrire à la newsletter
            </button>
          </div>

          {/* Mentions légales compactes */}
          <div className='text-xs text-gray-600 text-center'>
            En vous inscrivant, vous acceptez de recevoir nos newsletters.
            <a href='#' className='text-primary-600 hover:underline ml-1'>
              Droit d'accès et de modification
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
