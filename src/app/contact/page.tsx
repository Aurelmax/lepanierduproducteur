import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import CompanyContactForm from '../../components/CompanyContactForm';
import PageHero from '../../components/PageHero';

export default function Contact() {
  return (
    <div className='min-h-screen bg-accent-light'>
      <PageHero title='Contact' subtitle='Devenez un point de distribution ou contactez-nous' />

      <div className='py-16'>
        <div className='container mx-auto px-4'>
          {/* Informations de contact générales */}
          <div className='mb-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
              <div className='bg-white rounded-lg shadow-md p-6 text-center'>
                <Phone className='w-8 h-8 text-primary-500 mx-auto mb-4' />
                <h3 className='text-lg font-semibold text-accent-dark mb-2'>Téléphone</h3>
                <p className='text-gray-600 mb-2'>06.16.69.70.97</p>
                <a
                  href='tel:0616697097'
                  className='text-primary-500 hover:text-primary-600 font-medium'
                >
                  Appeler maintenant
                </a>
              </div>

              <div className='bg-white rounded-lg shadow-md p-6 text-center'>
                <Mail className='w-8 h-8 text-primary-500 mx-auto mb-4' />
                <h3 className='text-lg font-semibold text-accent-dark mb-2'>Email</h3>
                <p className='text-gray-600 mb-2'>contact@lepanierduproducteur.com</p>
                <a
                  href='mailto:contact@lepanierduproducteur.com'
                  className='text-primary-500 hover:text-primary-600 font-medium'
                >
                  Nous écrire
                </a>
              </div>

              <div className='bg-white rounded-lg shadow-md p-6 text-center'>
                <MapPin className='w-8 h-8 text-primary-500 mx-auto mb-4' />
                <h3 className='text-lg font-semibold text-accent-dark mb-2'>Adresse</h3>
                <p className='text-gray-600'>
                  145, chemin de la Constance
                  <br />
                  06600 Antibes
                </p>
              </div>

              <div className='bg-white rounded-lg shadow-md p-6 text-center'>
                <Clock className='w-8 h-8 text-primary-500 mx-auto mb-4' />
                <h3 className='text-lg font-semibold text-accent-dark mb-2'>Horaires</h3>
                <p className='text-gray-600'>
                  Lun-Sam: 15h-18h
                  <br />
                  Fermé le dimanche
                </p>
              </div>
            </div>
          </div>

          {/* Section pour les entreprises */}
          <div className='mb-16'>
            <div className='text-center mb-8'>
              <h2 className='text-3xl font-display font-bold text-accent-dark mb-4'>
                Devenez un point de distribution
              </h2>
              <p className='text-gray-600 max-w-3xl mx-auto'>
                Vous êtes une société et souhaitez proposer votre lieu comme point de distribution
                pour nos paniers fraîcheur ? Remplissez le formulaire ci-dessous et nous étudierons
                votre demande dans les plus brefs délais.
              </p>
            </div>

            <CompanyContactForm />
          </div>

          {/* Avantages pour les entreprises */}
          <div className='bg-gradient-to-r from-primary-100 to-harvest-100 rounded-lg p-8 mb-16'>
            <h2 className='text-2xl font-display font-bold text-accent-dark text-center mb-8'>
              Avantages pour votre entreprise
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div className='text-center'>
                <div className='w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-white text-2xl'>🌱</span>
                </div>
                <h3 className='text-lg font-semibold text-accent-dark mb-2'>
                  Bien-être des employés
                </h3>
                <p className='text-gray-700'>
                  Offrez des produits frais et locaux à vos équipes, favorisant leur bien-être et
                  leur motivation.
                </p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-harvest-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-white text-2xl'>🤝</span>
                </div>
                <h3 className='text-lg font-semibold text-accent-dark mb-2'>Engagement RSE</h3>
                <p className='text-gray-700'>
                  Participez à l'économie locale et soutenez l'agriculture durable dans votre
                  région.
                </p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-earth-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-white text-2xl'>📦</span>
                </div>
                <h3 className='text-lg font-semibold text-accent-dark mb-2'>Service clé en main</h3>
                <p className='text-gray-700'>
                  Nous nous occupons de tout : livraison, gestion des commandes et communication
                  avec vos employés.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className='bg-white rounded-lg shadow-lg p-8'>
            <h2 className='text-2xl font-display font-bold text-accent-dark text-center mb-8'>
              Questions fréquentes
            </h2>

            <div className='space-y-6'>
              <div className='border-b border-gray-200 pb-4'>
                <h3 className='text-lg font-semibold text-accent-dark mb-2'>
                  Quels sont les critères pour devenir un point de distribution ?
                </h3>
                <p className='text-gray-600'>
                  Nous recherchons des entreprises avec un minimum de 10 employés, disposant d'un
                  espace approprié pour le stockage des paniers et d'horaires de récupération
                  compatibles avec nos tournées de livraison.
                </p>
              </div>

              <div className='border-b border-gray-200 pb-4'>
                <h3 className='text-lg font-semibold text-accent-dark mb-2'>
                  Y a-t-il des frais pour l'entreprise ?
                </h3>
                <p className='text-gray-600'>
                  Non, devenir un point de distribution est entièrement gratuit pour l'entreprise.
                  Seuls vos employés paient leurs commandes individuelles.
                </p>
              </div>

              <div className='border-b border-gray-200 pb-4'>
                <h3 className='text-lg font-semibold text-accent-dark mb-2'>
                  Comment se déroule la livraison ?
                </h3>
                <p className='text-gray-600'>
                  Nous livrons directement à votre entreprise selon un planning établi. Les paniers
                  sont étiquetés avec le nom de chaque commanditaire et peuvent être récupérés
                  pendant les heures d'ouverture de votre entreprise.
                </p>
              </div>

              <div className='border-b border-gray-200 pb-4'>
                <h3 className='text-lg font-semibold text-accent-dark mb-2'>
                  Puis-je choisir les jours de livraison ?
                </h3>
                <p className='text-gray-600'>
                  Oui, nous nous adaptons à vos contraintes et préférences. Nous proposons des
                  livraisons du lundi au samedi selon vos besoins.
                </p>
              </div>

              <div>
                <h3 className='text-lg font-semibold text-accent-dark mb-2'>
                  Que se passe-t-il si un employé ne récupère pas son panier ?
                </h3>
                <p className='text-gray-600'>
                  Nous vous fournissons une liste des commandes avant chaque livraison. Si un panier
                  n'est pas récupéré, nous le récupérons lors de notre prochaine tournée et
                  remboursons le client.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
