'use client';

import { useState } from 'react';

export default function ScraperDemo() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [method, setMethod] = useState<string>('manual');

  const loadProducts = async (method: string) => {
    setLoading(true);

    try {
      let data = [];

      switch (method) {
      case 'manual':
        data = [
          {
            name: 'Chou fleur (Taille Grosse)',
            price: 4.9,
            unit: 'piece',
            minQuantity: 1,
            maxQuantity: 10,
            step: 1,
          },
          {
            name: 'Échalote',
            price: 4.9,
            unit: 'kg',
            minQuantity: 0.1,
            maxQuantity: 3,
            step: 0.1,
          },
        ];
        break;
      case 'api':
        const response = await fetch('/api/scrape-products', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            url: 'https://www.lepanierduproducteur.com/paniers-producteur-personalises-legumes-1.htm',
          }),
        });
        data = await response.json();
        break;
      default:
        data = [];
      }

      setProducts(data);
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen bg-accent-light py-8'>
      <div className='container mx-auto px-4'>
        <h1 className='text-3xl font-display font-bold text-accent-dark text-center mb-8'>
          🔍 Solutions d'Extraction de Données
        </h1>

        {/* Méthodes disponibles */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h3 className='text-lg font-semibold text-accent-dark mb-4'>
              📝 Solution 1: Extraction Manuelle
            </h3>
            <p className='text-gray-600 mb-4'>
              Copier-coller les données du site et les structurer manuellement.
            </p>
            <button
              onClick={() => {
                setMethod('manual');
                loadProducts('manual');
              }}
              className='w-full bg-primary-500 hover:bg-primary-600 text-white py-2 rounded-lg font-semibold transition-colors'
            >
              Utiliser cette méthode
            </button>
          </div>

          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h3 className='text-lg font-semibold text-accent-dark mb-4'>
              🤖 Solution 2: Scraping Automatisé
            </h3>
            <p className='text-gray-600 mb-4'>
              Utiliser Puppeteer pour extraire automatiquement les données.
            </p>
            <button
              onClick={() => {
                setMethod('puppeteer');
                alert("Nécessite l'installation de Puppeteer");
              }}
              className='w-full bg-harvest-500 hover:bg-harvest-600 text-white py-2 rounded-lg font-semibold transition-colors'
            >
              Installer Puppeteer
            </button>
          </div>

          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h3 className='text-lg font-semibold text-accent-dark mb-4'>
              🌐 Solution 3: API de Scraping
            </h3>
            <p className='text-gray-600 mb-4'>
              Utiliser une API backend pour contourner les restrictions CORS.
            </p>
            <button
              onClick={() => {
                setMethod('api');
                loadProducts('api');
              }}
              className='w-full bg-earth-500 hover:bg-earth-600 text-white py-2 rounded-lg font-semibold transition-colors'
            >
              Tester l'API
            </button>
          </div>
        </div>

        {/* Résultats */}
        {loading && (
          <div className='text-center py-8'>
            <div className='inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500'></div>
            <p className='mt-2 text-gray-600'>Extraction en cours...</p>
          </div>
        )}

        {products.length > 0 && (
          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h2 className='text-xl font-semibold text-accent-dark mb-4'>
              📊 Produits extraits ({products.length})
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {products.slice(0, 12).map((product, index) => (
                <div key={index} className='border border-gray-200 rounded-lg p-4'>
                  <h3 className='font-semibold text-accent-dark mb-2'>{product.name}</h3>
                  <div className='text-lg font-bold text-primary-600 mb-2'>
                    {product.price.toFixed(2)}€ {product.unit === 'kg' ? 'le kg' : 'pièce'}
                  </div>
                  <div className='text-sm text-gray-600'>
                    Quantité: {product.minQuantity} à {product.maxQuantity} {product.unit}
                  </div>
                </div>
              ))}
            </div>

            {products.length > 12 && (
              <p className='text-center text-gray-600 mt-4'>
                ... et {products.length - 12} autres produits
              </p>
            )}
          </div>
        )}

        {/* Instructions */}
        <div className='mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6'>
          <h3 className='text-lg font-semibold text-blue-800 mb-4'>💡 Recommandations :</h3>
          <div className='space-y-2 text-blue-700'>
            <p>
              <strong>Solution 1 (Manuelle) :</strong> Rapide, fiable, mais nécessite une mise à
              jour manuelle
            </p>
            <p>
              <strong>Solution 2 (Puppeteer) :</strong> Automatique, mais plus complexe à mettre en
              place
            </p>
            <p>
              <strong>Solution 3 (API) :</strong> Équilibre entre automatisation et simplicité
            </p>
            <p>
              <strong>Solution 4 (Export) :</strong> Idéale si le site existant a une API
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
