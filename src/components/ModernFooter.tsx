'use client';

import { useState } from 'react';

export default function ModernFooter() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Inscription à la newsletter avec l'email: ${email}`);
      setEmail('');
    }
  };

  return (
    <footer className='bg-gray-800 text-white'>
      {/* Section principale */}
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Facebook et Certifications */}
          <div>
            <div className='mb-6'>
              <a
                href='#'
                className='flex items-center space-x-3 text-blue-400 hover:text-blue-300 transition-colors'
              >
                <div className='w-8 h-8 bg-blue-600 rounded flex items-center justify-center'>
                  <span className='text-white font-bold text-sm'>f</span>
                </div>
                <span className='text-sm'>Likez-nous sur Facebook</span>
              </a>
            </div>

            {/* Certifications */}
            <div className='flex space-x-4'>
              <div className='bg-white rounded-full p-3 w-16 h-16 flex items-center justify-center'>
                <div className='text-xs text-center'>
                  <div className='w-8 h-6 bg-red-500 rounded-sm mb-1 mx-auto'></div>
                  <div className='text-[8px] font-bold text-gray-800'>ORIGINE</div>
                  <div className='text-[6px] text-gray-600'>fruits et légumes</div>
                  <div className='text-[6px] font-bold text-blue-600'>FRANCE</div>
                </div>
              </div>
              <div className='bg-white rounded-full p-3 w-16 h-16 flex items-center justify-center'>
                <div className='text-xs text-center'>
                  <div className='w-8 h-6 bg-blue-500 rounded-sm mb-1 mx-auto'></div>
                  <div className='text-[8px] font-bold text-gray-800'>ORIGINE</div>
                  <div className='text-[6px] text-gray-600'>fruits et légumes</div>
                  <div className='text-[6px] font-bold text-blue-600'>EUROPE</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className='font-semibold mb-4 text-gray-300'>Liens utiles</h4>
            <ul className='space-y-2'>
              <li>
                <a
                  href='/distribution'
                  className='text-gray-300 hover:text-white transition-colors flex items-center'
                >
                  <span className='mr-2'>&gt;</span>Les lieux de distribution
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-300 hover:text-white transition-colors flex items-center'
                >
                  <span className='mr-2'>&gt;</span>Liens et Partenaires
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-300 hover:text-white transition-colors flex items-center'
                >
                  <span className='mr-2'>&gt;</span>Vos avis
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className='font-semibold mb-4 text-gray-300'>
              Nos paniers toutes les semaines dans votre boite mail
            </h4>
            <form onSubmit={handleNewsletterSubmit} className='space-y-3'>
              <button
                type='submit'
                className='w-full bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors duration-200'
              >
                S'INSCRIRE À LA NEWSLETTER
              </button>
            </form>
            <div className='mt-4 text-right'>
              <div className='w-16 h-16 bg-gray-600 rounded-lg mx-auto flex items-center justify-center'>
                <span className='text-2xl'>👨‍🌾</span>
              </div>
            </div>
          </div>

          {/* Partenariats */}
          <div>
            <h4 className='font-semibold mb-4 text-gray-300'>en partenariat</h4>
            <div className='space-y-6'>
              <div className='flex items-center justify-center'>
                <img
                  src='/agricultureetterritoire.png'
                  alt="Agriculture et Territoires - Chambre d'Agriculture Alpes-Maritimes"
                  className='h-16 w-auto object-contain'
                />
              </div>
              <div className='flex items-center justify-center'>
                <img
                  src='/bienvenuealaferme.png'
                  alt='Bienvenue à la ferme'
                  className='h-16 w-auto object-contain'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barre du bas */}
      <div className='bg-gray-700 py-4'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='text-gray-300 text-sm mb-2 md:mb-0'>
              <div className='flex flex-wrap gap-4'>
                <a href='#' className='hover:text-white transition-colors'>
                  Mentions Légales
                </a>
                <span>/</span>
                <a href='#' className='hover:text-white transition-colors'>
                  Conditions générales de vente
                </a>
                <span>/</span>
                <a href='#' className='hover:text-white transition-colors'>
                  Gestion des cookies
                </a>
              </div>
              <div className='text-xs text-gray-400 mt-1'>
                Ajouter aux favoris / Création CoolAndtheweb
              </div>
            </div>

            <div className='flex items-center space-x-4 text-sm'>
              <a
                href='mailto:contact@lepanierduproducteur.com'
                className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors'
              >
                <span>✉️</span>
                <span>contact@lepanierduproducteur.com</span>
              </a>
              <a
                href='tel:0616697097'
                className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors'
              >
                <span>📞</span>
                <span>06.16.69.70.97</span>
              </a>
              <a href='#' className='text-green-400 hover:text-green-300 transition-colors'>
                <span className='text-lg'>f</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
