'use client';

import CartButton from './CartButton';
import Logo from './Logo';

export default function ModernHeader() {
  return (
    <header className='bg-white shadow-lg sticky top-0 z-50'>
      {/* Contact bar */}
      <div className='bg-primary-600 text-white py-2'>
        <div className='container mx-auto px-4 flex justify-between items-center text-sm'>
          <div className='flex items-center space-x-4'>
            <span>📞 06.16.69.70.97</span>
            <span>✉️ contact@lepanierduproducteur.com</span>
          </div>
          <div className='flex items-center space-x-4'>
            <a
              href='/creer-compte'
              className='text-white hover:text-primary-200 font-medium transition-colors'
            >
              Créer un compte
            </a>
            <span>FR</span>
            <span className='text-primary-200'>Paiement sécurisé</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className='container mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <Logo size='xxxl' showText={false} />

          {/* Navigation */}
          <nav className='hidden lg:flex space-x-8'>
            <a
              href='/'
              className='text-accent-dark hover:text-primary-600 font-medium transition-colors'
            >
              Accueil
            </a>
            <a
              href='/paniers'
              className='text-accent-dark hover:text-primary-600 font-medium transition-colors'
            >
              Paniers
            </a>
            <a
              href='/abonnements'
              className='text-accent-dark hover:text-primary-600 font-medium transition-colors'
            >
              Abonnements
            </a>
            <a
              href='/legumes'
              className='text-accent-dark hover:text-primary-600 font-medium transition-colors'
            >
              Légumes
            </a>
            <a
              href='/fruits'
              className='text-accent-dark hover:text-primary-600 font-medium transition-colors'
            >
              Fruits
            </a>
            <a
              href='/autres-produits'
              className='text-accent-dark hover:text-primary-600 font-medium transition-colors'
            >
              Autres
            </a>
            <a
              href='/distribution'
              className='text-accent-dark hover:text-primary-600 font-medium transition-colors'
            >
              Distribution
            </a>
            <a
              href='/contact'
              className='text-accent-dark hover:text-primary-600 font-medium transition-colors'
            >
              Contact
            </a>
          </nav>

          {/* Cart */}
          <div className='flex items-center space-x-4'>
            <CartButton />
            <button className='lg:hidden p-2 text-accent-dark'>
              <span className='text-2xl'>☰</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
