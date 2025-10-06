import PageHero from '../../components/PageHero';
import ProductCard from '../../components/ProductCard';

export default function AutresProduits() {
  return (
    <div className='min-h-screen bg-accent-light'>
      <PageHero title='Autres Produits' subtitle='Découvrez nos spécialités artisanales' />

      <div className='py-16'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <ProductCard
              title='Miel de Lavande'
              description='Miel artisanal récolté dans nos ruches'
              price='8€/pot'
              category='autres'
              productId='miel-lavande'
              image='https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=300&fit=crop&auto=format'
            />
            <ProductCard
              title='Confiture de Fraises'
              description='Confiture maison aux fraises du jardin'
              price='4€/pot'
              category='autres'
              productId='confiture-fraises'
              image='https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&auto=format'
            />
            <ProductCard
              title="Huile d'Olive Extra Vierge"
              description="Huile d'olive pressée à froid"
              price='12€/bouteille'
              category='autres'
              productId='huile-olive'
              image='https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=300&fit=crop&auto=format'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
