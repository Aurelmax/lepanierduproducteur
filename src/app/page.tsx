import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import Newsletter from '../components/Newsletter';
import Certifications from '../components/Certifications';

export default function Home() {
  return (
    <div className='min-h-screen'>
      <HeroSection
        title='Le Panier du Producteur'
        subtitle='Fruits et légumes frais directement du producteur, cultivés avec amour et respect de la nature'
      />

      <section className='py-16 bg-accent-light'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-display font-bold text-center text-accent-dark mb-12'>
            Nos Produits Phares
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <ProductCard
              title='Panier Légumes de Saison'
              description='Sélection de légumes frais récoltés le matin même'
              price='15€'
              category='legumes'
            />
            <ProductCard
              title='Fruits du Verger'
              description='Pommes, poires et autres fruits de saison'
              price='12€'
              category='fruits'
            />
            <ProductCard
              title='Produits Artisanaux'
              description='Miel, confitures et autres spécialités locales'
              price='8€'
              category='autres'
            />
          </div>
        </div>
      </section>

      <section className='py-16 bg-gradient-to-r from-primary-100 to-harvest-100'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-display font-bold text-accent-dark mb-8'>
            Pourquoi nous choisir ?
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🌱</span>
              </div>
              <h3 className='text-xl font-semibold text-accent-dark mb-2'>100% Bio</h3>
              <p className='text-gray-600'>
                Produits cultivés sans pesticides ni produits chimiques
              </p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-harvest-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🚚</span>
              </div>
              <h3 className='text-xl font-semibold text-accent-dark mb-2'>Livraison Directe</h3>
              <p className='text-gray-600'>Du champ à votre table en moins de 24h</p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-earth-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>👨‍🌾</span>
              </div>
              <h3 className='text-xl font-semibold text-accent-dark mb-2'>Producteurs Locaux</h3>
              <p className='text-gray-600'>Soutenez l'agriculture locale et durable</p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl font-display font-bold text-accent-dark mb-6'>
                À propos de nous
              </h2>
              <div className='mb-6'>
                <div className='bg-earth-100 border-l-4 border-earth-500 p-4 mb-4'>
                  <p className='text-earth-800 font-semibold text-lg'>
                    Paysans depuis 1925 - Nous sommes la 3ème génération
                  </p>
                </div>
                <p className='text-gray-600 mb-4'>
                  Depuis près d'un siècle, notre famille cultive avec passion des fruits et légumes
                  de qualité dans le respect de l'environnement. Notre ferme située à Antibes vous
                  propose des produits frais, locaux et issus d'une agriculture raisonnée.
                </p>
                <p className='text-gray-600 mb-4'>
                  Face à la demande croissante, nous faisons également appel à des maraîchers
                  partenaires d'Europe pour satisfaire notre clientèle tout en maintenant nos
                  standards de qualité.
                </p>
                <p className='text-gray-600 mb-6'>
                  <strong>Chez nous, aucun insecticide, ni pesticide.</strong> Nous utilisons la PBI
                  (Protection Biologique Intégrée) pour préserver l'environnement et vous garantir
                  des produits sains.
                </p>
              </div>
              <div className='flex flex-col sm:flex-row gap-4'>
                <a
                  href='/distribution'
                  className='bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 text-center'
                >
                  Nos points de distribution
                </a>
                <a
                  href='/contact'
                  className='bg-white hover:bg-primary-50 text-primary-600 border-2 border-primary-500 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 text-center'
                >
                  Nous contacter
                </a>
              </div>
            </div>
            <div className='bg-gradient-to-br from-primary-200 to-harvest-200 rounded-lg p-8'>
              <div className='text-center mb-6'>
                <div className='text-6xl mb-4'>🌱</div>
                <h3 className='text-2xl font-display font-bold text-accent-dark mb-4'>
                  Plusieurs raisons de nous faire confiance
                </h3>
              </div>
              <ul className='space-y-4 text-gray-700'>
                <li className='flex items-start space-x-3'>
                  <span className='text-primary-500 text-xl mt-1'>✓</span>
                  <div>
                    <span className='font-semibold text-accent-dark'>
                      Produits de saison frais et de qualité
                    </span>
                    <p className='text-sm text-gray-600'>Avec un goût incomparable</p>
                  </div>
                </li>
                <li className='flex items-start space-x-3'>
                  <span className='text-primary-500 text-xl mt-1'>✓</span>
                  <div>
                    <span className='font-semibold text-accent-dark'>
                      Qualitatif au quantitatif
                    </span>
                    <p className='text-sm text-gray-600'>Contrairement aux grandes surfaces</p>
                  </div>
                </li>
                <li className='flex items-start space-x-3'>
                  <span className='text-primary-500 text-xl mt-1'>✓</span>
                  <div>
                    <span className='font-semibold text-accent-dark'>Agriculture raisonnée</span>
                    <p className='text-sm text-gray-600'>Protection Biologique Intégrée (PBI)</p>
                  </div>
                </li>
                <li className='flex items-start space-x-3'>
                  <span className='text-primary-500 text-xl mt-1'>✓</span>
                  <div>
                    <span className='font-semibold text-accent-dark'>Produits naturels</span>
                    <p className='text-sm text-gray-600'>Aspect irrégulier = produit authentique</p>
                  </div>
                </li>
                <li className='flex items-start space-x-3'>
                  <span className='text-primary-500 text-xl mt-1'>✓</span>
                  <div>
                    <span className='font-semibold text-accent-dark'>Aucun pesticide</span>
                    <p className='text-sm text-gray-600'>Ni insecticide, ni pesticide</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 bg-gradient-to-r from-earth-100 to-primary-100'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-display font-bold text-accent-dark mb-4'>
              Pourquoi nos légumes ont-ils un aspect irrégulier ?
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              C'est la preuve de leur authenticité et de leur caractère naturel
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div className='bg-white rounded-lg p-8 shadow-lg'>
              <div className='text-center mb-6'>
                <div className='text-6xl mb-4'>🥕</div>
                <h3 className='text-2xl font-display font-bold text-accent-dark'>
                  Produits Naturels
                </h3>
              </div>
              <p className='text-gray-600 mb-4'>
                Le légume ou le fruit issu de l'agriculture raisonnée est souvent irrégulier et
                moins attractif visuellement, mais cela ne lui enlève rien à son côté gustatif
                exceptionnel.
              </p>
              <p className='text-gray-600'>
                Cet aspect irrégulier du légume et du fruit donne ce sentiment d'avoir affaire à un
                produit naturel, cultivé avec respect et sans artifices.
              </p>
            </div>

            <div className='space-y-6'>
              <div className='bg-white rounded-lg p-6 shadow-md'>
                <div className='flex items-center space-x-4'>
                  <div className='w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center'>
                    <span className='text-white text-xl'>🌱</span>
                  </div>
                  <div>
                    <h4 className='font-semibold text-accent-dark'>Agriculture Raisonnée</h4>
                    <p className='text-sm text-gray-600'>
                      Respect de la nature et de l'environnement
                    </p>
                  </div>
                </div>
              </div>

              <div className='bg-white rounded-lg p-6 shadow-md'>
                <div className='flex items-center space-x-4'>
                  <div className='w-12 h-12 bg-harvest-500 rounded-full flex items-center justify-center'>
                    <span className='text-white text-xl'>👨‍🌾</span>
                  </div>
                  <div>
                    <h4 className='font-semibold text-accent-dark'>3ème Génération</h4>
                    <p className='text-sm text-gray-600'>Depuis 1925, un savoir-faire transmis</p>
                  </div>
                </div>
              </div>

              <div className='bg-white rounded-lg p-6 shadow-md'>
                <div className='flex items-center space-x-4'>
                  <div className='w-12 h-12 bg-earth-500 rounded-full flex items-center justify-center'>
                    <span className='text-white text-xl'>🏆</span>
                  </div>
                  <div>
                    <h4 className='font-semibold text-accent-dark'>Qualité Premium</h4>
                    <p className='text-sm text-gray-600'>Goût incomparable et fraîcheur garantie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <Newsletter />
        </div>
      </section>

      <section className='py-16 bg-accent-light'>
        <div className='container mx-auto px-4'>
          <Certifications />
        </div>
      </section>
    </div>
  );
}
