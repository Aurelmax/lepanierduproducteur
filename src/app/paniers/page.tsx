'use client';

import BasketCard from '../../components/BasketCard';
import DeliveryOptions from '../../components/DeliveryOptions';
import Newsletter from '../../components/Newsletter';
import PageHero from '../../components/PageHero';
import WeeklyComposition from '../../components/WeeklyComposition';
import { useCart } from '../../contexts/CartContext';

export default function Paniers() {
  const { dispatch } = useCart();

  const handleOrder = (basketType: string) => {
    // Créer un produit panier avec les détails
    const basketProducts = {
      'SOLO': {
        id: 'panier-solo',
        name: 'Panier Fraîcheur SOLO',
        price: 12.00,
        unit: 'panier',
        image: '/legumes.webp',
        isNew: false,
        isPromotion: false,
      },
      'DUO': {
        id: 'panier-duo',
        name: 'Panier Fraîcheur DUO',
        price: 16.00,
        unit: 'panier',
        image: '/legumes.webp',
        isNew: false,
        isPromotion: false,
      },
      'FAMILIAL': {
        id: 'panier-familial',
        name: 'Panier Fraîcheur FAMILIAL',
        price: 24.00,
        unit: 'panier',
        image: '/legumes.webp',
        isNew: false,
        isPromotion: false,
      },
      'Fruits': {
        id: 'panier-fruits',
        name: 'Panier Fruits',
        price: 15.00,
        unit: 'panier',
        image: '/legumes.webp',
        isNew: false,
        isPromotion: false,
      },
      'Dégustation': {
        id: 'panier-degustation',
        name: 'Panier de Fruits Dégustation',
        price: 35.00,
        unit: 'panier',
        image: '/legumes.webp',
        isNew: false,
        isPromotion: false,
      },
    };

    const product = basketProducts[basketType as keyof typeof basketProducts];

    if (product) {
      dispatch({
        type: 'ADD_ITEM',
        payload: {
          ...product,
          quantity: 1,
        },
      });

      // Ouvrir le panier après ajout
      dispatch({ type: 'OPEN_CART' });
    }
  };

  return (
    <div className="min-h-screen bg-accent-light">
      <PageHero
        title="Nos Paniers"
        subtitle="Découvrez nos paniers de fruits et légumes frais"
      />
      <div className="container mx-auto px-4 py-8">
        <WeeklyComposition />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <BasketCard
            title="Panier Fraîcheur SOLO"
            price="12,00€"
            items={[
              { quantity: '500gr', name: 'Tomate "Ancienne"' },
              { quantity: '500gr', name: 'Courgette' },
              { quantity: '500gr', name: 'Carotte "vrac"' },
              { quantity: '1 x', name: 'Betterave "crue"' },
              { quantity: '500gr', name: 'Pomme de Terre "mona lisa"' },
              { quantity: '200gr', name: 'Oignon "Paille"' },
              { quantity: '1 x Bt 6', name: 'Oeufs extra frais "plein air"' },
              { quantity: '700gr', name: 'Raisin "Blanc"' },
            ]}
            onOrder={() => handleOrder('SOLO')}
            subscriptionPrice="43,20€"
            subscriptionDiscount="10%"
          />

          <BasketCard
            title="Panier Fraîcheur DUO"
            price="16,00€"
            isPopular={true}
            items={[
              { quantity: '800gr', name: 'Tomate "Ancienne"' },
              { quantity: '800gr', name: 'Courgette' },
              { quantity: '800gr', name: 'Carotte "vrac"' },
              { quantity: '1 x', name: 'Betterave "crue"' },
              { quantity: '800gr', name: 'Pomme de Terre "mona lisa"' },
              { quantity: '300gr', name: 'Oignon "Paille"' },
              { quantity: '1 x Bt 6', name: 'Oeufs extra frais "plein air"' },
              { quantity: '1,1 Kg', name: 'Raisin "Blanc"' },
            ]}
            onOrder={() => handleOrder('DUO')}
            subscriptionPrice="57,60€"
            subscriptionDiscount="10%"
          />

          <BasketCard
            title="Panier Fraîcheur FAMILIAL"
            price="24,00€"
            items={[
              { quantity: '1,1 Kg', name: 'Tomate "Ancienne"' },
              { quantity: '1,1 Kg', name: 'Courgette' },
              { quantity: '1,1 Kg', name: 'Carotte "vrac"' },
              { quantity: '2 x', name: 'Betterave "crue"' },
              { quantity: '1,1 Kg', name: 'Pomme de Terre "mona lisa"' },
              { quantity: '500gr', name: 'Oignon "Paille"' },
              { quantity: '2 x Bt 6', name: 'Oeufs extra frais "plein air"' },
              { quantity: '1,5 Kg', name: 'Raisin "Blanc"' },
            ]}
            onOrder={() => handleOrder('FAMILIAL')}
            subscriptionPrice="86,40€"
            subscriptionDiscount="10%"
          />

          <BasketCard
            title="Panier Fruits"
            price="15,00€"
            items={[
              { quantity: '800gr', name: 'Raisin "Noir"' },
              { quantity: '1 Kg', name: 'Pomme "Gala"' },
              { quantity: '1 Kg', name: 'Poire "Guyot"' },
              { quantity: '500gr', name: 'Prune "Quetsche"' },
              { quantity: '1 Kg', name: 'Brugnon' },
            ]}
            onOrder={() => handleOrder('Fruits')}
            subscriptionPrice="54,00€"
            subscriptionDiscount="10%"
          />

          <BasketCard
            title="Panier de Fruits Dégustation"
            price="35,00€"
            items={[
              { quantity: '2 Kg', name: 'Raisin "Noir"' },
              { quantity: '2 Kg', name: 'Poire "Guyot"' },
              { quantity: '1 Kg', name: 'Pomme "Gala"' },
              { quantity: '1,5 Kg', name: 'Prune "Quetsche"' },
              { quantity: '1,5 Kg', name: 'Raisin "Blanc"' },
              { quantity: '2 Kg', name: 'Brugnon' },
            ]}
            onOrder={() => handleOrder('Dégustation')}
            subscriptionPrice="126,00€"
            subscriptionDiscount="10%"
          />
        </div>

        <DeliveryOptions />

        <Newsletter />
      </div>
    </div>
  );
}
