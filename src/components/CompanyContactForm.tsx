'use client';

import { Building2, CheckCircle, Clock, MapPin, Phone, Users } from 'lucide-react';
import { useState } from 'react';

interface CompanyContactFormData {
  // Informations de l'entreprise
  companyName: string;
  contactPerson: string;
  position: string;
  email: string;
  phone: string;

  // Informations du lieu
  address: string;
  city: string;
  postalCode: string;

  // Détails de la demande
  companySize: string;
  preferredDays: string[];
  preferredTimes: string;
  specialRequirements: string;
  additionalInfo: string;

  // Type de distribution souhaité
  distributionType: 'retrait' | 'livraison_gratuite' | 'livraison_payante' | 'both';

  // Conditions spécifiques
  minOrderAmount?: number;
  deliveryCost?: number;
  deliveryZones?: string;
}

export default function CompanyContactForm() {
  const [formData, setFormData] = useState<CompanyContactFormData>({
    companyName: '',
    contactPerson: '',
    position: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    companySize: '',
    preferredDays: [],
    preferredTimes: '',
    specialRequirements: '',
    additionalInfo: '',
    distributionType: 'retrait',
    minOrderAmount: undefined,
    deliveryCost: undefined,
    deliveryZones: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: keyof CompanyContactFormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: '',
      }));
    }
  };

  const handleDayToggle = (day: string) => {
    setFormData(prev => ({
      ...prev,
      preferredDays: prev.preferredDays.includes(day)
        ? prev.preferredDays.filter(d => d !== day)
        : [...prev.preferredDays, day],
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    // Required fields
    if (!formData.companyName.trim()) {
      newErrors.companyName = "Le nom de l'entreprise est requis";
    }
    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = 'Le nom du contact est requis';
    }
    if (!formData.position.trim()) {
      newErrors.position = 'La fonction du contact est requise';
    }
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Le téléphone est requis';
    }
    if (!formData.address.trim()) {
      newErrors.address = "L'adresse est requise";
    }
    if (!formData.city.trim()) {
      newErrors.city = 'La ville est requise';
    }
    if (!formData.postalCode.trim()) {
      newErrors.postalCode = 'Le code postal est requis';
    }
    if (!formData.companySize) {
      newErrors.companySize = "La taille de l'entreprise est requise";
    }
    if (formData.preferredDays.length === 0) {
      newErrors.preferredDays = 'Veuillez sélectionner au moins un jour';
    }
    if (!formData.preferredTimes.trim()) {
      newErrors.preferredTimes = 'Les créneaux horaires sont requis';
    }

    // Conditional validation for delivery
    if (formData.distributionType === 'livraison_payante' && !formData.deliveryCost) {
      newErrors.deliveryCost = 'Le coût de livraison est requis pour la livraison payante';
    }
    if (
      (formData.distributionType === 'livraison_gratuite' ||
        formData.distributionType === 'livraison_payante') &&
      !formData.minOrderAmount
    ) {
      newErrors.minOrderAmount = 'Le montant minimum de commande est requis pour la livraison';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ submit: "Une erreur est survenue lors de l'envoi du formulaire" });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className='bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto text-center'>
        <CheckCircle className='w-16 h-16 text-green-500 mx-auto mb-6' />
        <h2 className='text-2xl font-disibold text-accent-dark mb-4'>
          Demande envoyée avec succès !
        </h2>
        <p className='text-gray-700 mb-6'>
          Merci pour votre intérêt. Nous étudierons votre demande et vous contacterons dans les plus
          brefs délais.
        </p>
        <div className='bg-blue-50 border border-blue-200 rounded-lg p-4'>
          <p className='text-blue-800 font-medium'>
            📞 Vous pouvez également nous contacter directement au 06.16.69.70.97
          </p>
        </div>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              companyName: '',
              contactPerson: '',
              position: '',
              email: '',
              phone: '',
              address: '',
              city: '',
              postalCode: '',
              companySize: '',
              preferredDays: [],
              preferredTimes: '',
              specialRequirements: '',
              additionalInfo: '',
              distributionType: 'retrait',
              minOrderAmount: undefined,
              deliveryCost: undefined,
              deliveryZones: '',
            });
          }}
          className='mt-6 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors'
        >
          Faire une nouvelle demande
        </button>
      </div>
    );
  }

  return (
    <div className='bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto'>
      <div className='text-center mb-8'>
        <Building2 className='w-12 h-12 text-primary-500 mx-auto mb-4' />
        <h2 className='text-3xl font-display font-bold text-accent-dark mb-2'>
          Devenir un point de distribution
        </h2>
        <p className='text-gray-600'>
          Remplissez ce formulaire pour proposer votre entreprise comme point de distribution
        </p>
      </div>

      <form onSubmit={handleSubmit} className='space-y-8'>
        {/* Informations de l'entreprise */}
        <div className='bg-gray-50 rounded-lg p-6'>
          <h3 className='text-xl font-semibold text-accent-dark mb-4 flex items-center gap-2'>
            <Building2 className='w-5 h-5' />
            Informations de l'entreprise
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label htmlFor='companyName' className='block text-sm font-medium text-gray-700 mb-1'>
                Nom de l'entreprise *
              </label>
              <input
                type='text'
                id='companyName'
                value={formData.companyName}
                onChange={e => handleInputChange('companyName', e.target.value)}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                placeholder='Ex: Société ABC'
              />
              {errors.companyName && (
                <p className='text-red-500 text-xs mt-1'>{errors.companyName}</p>
              )}
            </div>

            <div>
              <label
                htmlFor='contactPerson'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Personne de contact *
              </label>
              <input
                type='text'
                id='contactPerson'
                value={formData.contactPerson}
                onChange={e => handleInputChange('contactPerson', e.target.value)}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                placeholder='Ex: Jean Dupont'
              />
              {errors.contactPerson && (
                <p className='text-red-500 text-xs mt-1'>{errors.contactPerson}</p>
              )}
            </div>

            <div>
              <label htmlFor='position' className='block text-sm font-medium text-gray-700 mb-1'>
                Fonction *
              </label>
              <input
                type='text'
                id='position'
                value={formData.position}
                onChange={e => handleInputChange('position', e.target.value)}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                placeholder='Ex: Directeur RH'
              />
              {errors.position && <p className='text-red-500 text-xs mt-1'>{errors.position}</p>}
            </div>

            <div>
              <label htmlFor='companySize' className='block text-sm font-medium text-gray-700 mb-1'>
                Taille de l'entreprise *
              </label>
              <select
                id='companySize'
                value={formData.companySize}
                onChange={e => handleInputChange('companySize', e.target.value)}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
              >
                <option value=''>Sélectionner...</option>
                <option value='1-10'>1-10 employés</option>
                <option value='11-50'>11-50 employés</option>
                <option value='51-200'>51-200 employés</option>
                <option value='201-500'>201-500 employés</option>
                <option value='500+'>Plus de 500 employés</option>
              </select>
              {errors.companySize && (
                <p className='text-red-500 text-xs mt-1'>{errors.companySize}</p>
              )}
            </div>
          </div>
        </div>

        {/* Informations de contact */}
        <div className='bg-gray-50 rounded-lg p-6'>
          <h3 className='text-xl font-semibold text-accent-dark mb-4 flex items-center gap-2'>
            <Phone className='w-5 h-5' />
            Informations de contact
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>
                Email *
              </label>
              <input
                type='email'
                id='email'
                value={formData.email}
                onChange={e => handleInputChange('email', e.target.value)}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                placeholder='contact@entreprise.com'
              />
              {errors.email && <p className='text-red-500 text-xs mt-1'>{errors.email}</p>}
            </div>

            <div>
              <label htmlFor='phone' className='block text-sm font-medium text-gray-700 mb-1'>
                Téléphone *
              </label>
              <input
                type='tel'
                id='phone'
                value={formData.phone}
                onChange={e => handleInputChange('phone', e.target.value)}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                placeholder='06.12.34.56.78'
              />
              {errors.phone && <p className='text-red-500 text-xs mt-1'>{errors.phone}</p>}
            </div>
          </div>
        </div>

        {/* Adresse */}
        <div className='bg-gray-50 rounded-lg p-6'>
          <h3 className='text-xl font-semibold text-accent-dark mb-4 flex items-center gap-2'>
            <MapPin className='w-5 h-5' />
            Adresse du point de distribution
          </h3>

          <div className='space-y-4'>
            <div>
              <label htmlFor='address' className='block text-sm font-medium text-gray-700 mb-1'>
                Adresse complète *
              </label>
              <input
                type='text'
                id='address'
                value={formData.address}
                onChange={e => handleInputChange('address', e.target.value)}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                placeholder='123, rue de la Paix'
              />
              {errors.address && <p className='text-red-500 text-xs mt-1'>{errors.address}</p>}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label htmlFor='city' className='block text-sm font-medium text-gray-700 mb-1'>
                  Ville *
                </label>
                <input
                  type='text'
                  id='city'
                  value={formData.city}
                  onChange={e => handleInputChange('city', e.target.value)}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                  placeholder='Nice'
                />
                {errors.city && <p className='text-red-500 text-xs mt-1'>{errors.city}</p>}
              </div>

              <div>
                <label
                  htmlFor='postalCode'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Code postal *
                </label>
                <input
                  type='text'
                  id='postalCode'
                  value={formData.postalCode}
                  onChange={e => handleInputChange('postalCode', e.target.value)}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                  placeholder='06000'
                />
                {errors.postalCode && (
                  <p className='text-red-500 text-xs mt-1'>{errors.postalCode}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Type de distribution */}
        <div className='bg-gray-50 rounded-lg p-6'>
          <h3 className='text-xl font-semibold text-accent-dark mb-4'>
            Type de distribution souhaité
          </h3>

          <div className='space-y-3'>
            {[
              {
                value: 'retrait',
                label: 'Point de retrait uniquement',
                description: 'Les clients viennent récupérer leurs commandes',
              },
              {
                value: 'livraison_gratuite',
                label: 'Livraison gratuite',
                description: 'Livraison gratuite pour vos employés/clients',
              },
              {
                value: 'livraison_payante',
                label: 'Livraison payante',
                description: 'Livraison avec frais à la charge du client',
              },
              {
                value: 'both',
                label: 'Retrait et livraison',
                description: 'Les deux options disponibles',
              },
            ].map(option => (
              <label key={option.value} className='flex items-start space-x-3 cursor-pointer'>
                <input
                  type='radio'
                  name='distributionType'
                  value={option.value}
                  checked={formData.distributionType === option.value}
                  onChange={e => handleInputChange('distributionType', e.target.value)}
                  className='mt-1'
                />
                <div>
                  <div className='font-medium text-accent-dark'>{option.label}</div>
                  <div className='text-sm text-gray-600'>{option.description}</div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Conditions de livraison */}
        {(formData.distributionType === 'livraison_gratuite' ||
          formData.distributionType === 'livraison_payante' ||
          formData.distributionType === 'both') && (
          <div className='bg-gray-50 rounded-lg p-6'>
            <h3 className='text-xl font-semibold text-accent-dark mb-4'>Conditions de livraison</h3>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label
                  htmlFor='minOrderAmount'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Montant minimum de commande (€) *
                </label>
                <input
                  type='number'
                  id='minOrderAmount'
                  value={formData.minOrderAmount || ''}
                  onChange={e =>
                    handleInputChange(
                      'minOrderAmount',
                      e.target.value ? parseInt(e.target.value) : undefined
                    )
                  }
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                  placeholder='15'
                />
                {errors.minOrderAmount && (
                  <p className='text-red-500 text-xs mt-1'>{errors.minOrderAmount}</p>
                )}
              </div>

              {formData.distributionType === 'livraison_payante' && (
                <div>
                  <label
                    htmlFor='deliveryCost'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Coût de livraison (€) *
                  </label>
                  <input
                    type='number'
                    id='deliveryCost'
                    value={formData.deliveryCost || ''}
                    onChange={e =>
                      handleInputChange(
                        'deliveryCost',
                        e.target.value ? parseInt(e.target.value) : undefined
                      )
                    }
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                    placeholder='3'
                  />
                  {errors.deliveryCost && (
                    <p className='text-red-500 text-xs mt-1'>{errors.deliveryCost}</p>
                  )}
                </div>
              )}

              <div className='md:col-span-2'>
                <label
                  htmlFor='deliveryZones'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Zones de livraison (si applicable)
                </label>
                <input
                  type='text'
                  id='deliveryZones'
                  value={formData.deliveryZones}
                  onChange={e => handleInputChange('deliveryZones', e.target.value)}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                  placeholder='Ex: Nice, Cannes, Antibes'
                />
              </div>
            </div>
          </div>
        )}

        {/* Disponibilités */}
        <div className='bg-gray-50 rounded-lg p-6'>
          <h3 className='text-xl font-semibold text-accent-dark mb-4 flex items-center gap-2'>
            <Clock className='w-5 h-5' />
            Disponibilités
          </h3>

          <div className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Jours préférés *
              </label>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
                {['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'].map(
                  day => (
                    <label key={day} className='flex items-center space-x-2 cursor-pointer'>
                      <input
                        type='checkbox'
                        checked={formData.preferredDays.includes(day)}
                        onChange={() => handleDayToggle(day)}
                        className='rounded'
                      />
                      <span className='text-sm capitalize'>{day}</span>
                    </label>
                  )
                )}
              </div>
              {errors.preferredDays && (
                <p className='text-red-500 text-xs mt-1'>{errors.preferredDays}</p>
              )}
            </div>

            <div>
              <label
                htmlFor='preferredTimes'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Créneaux horaires préférés *
              </label>
              <textarea
                id='preferredTimes'
                value={formData.preferredTimes}
                onChange={e => handleInputChange('preferredTimes', e.target.value)}
                rows={3}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                placeholder='Ex: 12h-14h pour le déjeuner, 17h-19h après le travail'
              />
              {errors.preferredTimes && (
                <p className='text-red-500 text-xs mt-1'>{errors.preferredTimes}</p>
              )}
            </div>
          </div>
        </div>

        {/* Informations supplémentaires */}
        <div className='bg-gray-50 rounded-lg p-6'>
          <h3 className='text-xl font-semibold text-accent-dark mb-4 flex items-center gap-2'>
            <Users className='w-5 h-5' />
            Informations supplémentaires
          </h3>

          <div className='space-y-4'>
            <div>
              <label
                htmlFor='specialRequirements'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Exigences particulières
              </label>
              <textarea
                id='specialRequirements'
                value={formData.specialRequirements}
                onChange={e => handleInputChange('specialRequirements', e.target.value)}
                rows={3}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                placeholder='Ex: Accès sécurisé, parking disponible, local réfrigéré...'
              />
            </div>

            <div>
              <label
                htmlFor='additionalInfo'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Informations complémentaires
              </label>
              <textarea
                id='additionalInfo'
                value={formData.additionalInfo}
                onChange={e => handleInputChange('additionalInfo', e.target.value)}
                rows={4}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                placeholder='Toute information utile pour évaluer votre demande...'
              />
            </div>
          </div>
        </div>

        {/* Bouton de soumission */}
        <div className='text-center'>
          {errors.submit && <p className='text-red-500 text-sm mb-4'>{errors.submit}</p>}

          <button
            type='submit'
            disabled={isSubmitting}
            className='bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
          </button>

          <p className='text-gray-600 text-sm mt-4'>* Champs obligatoires</p>
        </div>
      </form>
    </div>
  );
}
