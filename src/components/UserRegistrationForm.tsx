'use client';

import { Bell, CheckCircle, Lock, Mail, MapPin, Phone, User } from 'lucide-react';
import { useState } from 'react';
import { distributionPoints } from '../data/distributionPoints';

interface UserRegistrationFormData {
  // Informations personnelles
  civility: string;
  lastName: string;
  firstName: string;

  // Adresse
  streetNumber: string;
  streetName: string;
  addressComplement: string;
  addressComplement2: string;
  city: string;
  postalCode: string;

  // Contact
  mobilePhone: string;
  landlinePhone: string;
  email: string;

  // Compte
  password: string;
  confirmPassword: string;

  // Newsletter et préférences
  newsletterSubscription: boolean;
  newsletterLanguage: 'francais' | 'anglais';
  preferredDistributionPoint: string;
}

export default function UserRegistrationForm() {
  const [formData, setFormData] = useState<UserRegistrationFormData>({
    civility: '',
    lastName: '',
    firstName: '',
    streetNumber: '',
    streetName: '',
    addressComplement: '',
    addressComplement2: '',
    city: '',
    postalCode: '',
    mobilePhone: '',
    landlinePhone: '',
    email: '',
    password: '',
    confirmPassword: '',
    newsletterSubscription: true,
    newsletterLanguage: 'francais',
    preferredDistributionPoint: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'coordonnees' | 'commandes'>('coordonnees');

  const handleInputChange = (field: keyof UserRegistrationFormData, value: any) => {
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

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    // Required fields
    if (!formData.civility.trim()) {
      newErrors.civility = 'La civilité est requise';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Le nom est requis';
    }
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Le prénom est requis';
    }
    if (!formData.streetNumber.trim()) {
      newErrors.streetNumber = 'Le numéro de rue est requis';
    }
    if (!formData.streetName.trim()) {
      newErrors.streetName = 'Le nom de la rue est requis';
    }
    if (!formData.city.trim()) {
      newErrors.city = 'La ville est requise';
    }
    if (!formData.postalCode.trim()) {
      newErrors.postalCode = 'Le code postal est requis';
    }
    if (!formData.mobilePhone.trim()) {
      newErrors.mobilePhone = 'Le téléphone portable est requis';
    } else if (formData.mobilePhone.length < 8) {
      newErrors.mobilePhone = 'Le téléphone doit contenir au moins 8 caractères';
    }
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Le mot de passe est requis';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Le mot de passe doit contenir au moins 6 caractères';
    }
    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = 'La confirmation du mot de passe est requise';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
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
        <h2 className='text-2xl font-display font-bold text-accent-dark mb-4'>
          Compte créé avec succès !
        </h2>
        <p className='text-gray-700 mb-6'>
          Votre compte a été créé avec succès. Vous pouvez maintenant vous connecter et passer vos
          commandes.
        </p>
        <div className='bg-blue-50 border border-blue-200 rounded-lg p-4'>
          <p className='text-blue-800 font-medium'>
            📧 Un email de confirmation vous a été envoyé à {formData.email}
          </p>
        </div>
        <div className='mt-6 space-x-4'>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                civility: '',
                lastName: '',
                firstName: '',
                streetNumber: '',
                streetName: '',
                addressComplement: '',
                addressComplement2: '',
                city: '',
                postalCode: '',
                mobilePhone: '',
                landlinePhone: '',
                email: '',
                password: '',
                confirmPassword: '',
                newsletterSubscription: true,
                newsletterLanguage: 'francais',
                preferredDistributionPoint: '',
              });
            }}
            className='bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors'
          >
            Créer un autre compte
          </button>
          <button
            onClick={() => {
              // Redirect to login or home
              window.location.href = '/';
            }}
            className='bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors'
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto'>
      <div className='text-center mb-8'>
        <User className='w-12 h-12 text-primary-500 mx-auto mb-4' />
        <h2 className='text-3xl font-display font-bold text-accent-dark mb-2'>
          Créer votre compte
        </h2>
        <p className='text-gray-600'>
          Remplissez ce formulaire pour créer votre compte et commencer à commander
        </p>
      </div>

      {/* Message d'information */}
      <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8'>
        <p className='text-blue-800 text-sm'>
          Si vous vous êtes déjà inscrit à la newsletter, merci de réemployer le même email dans la
          création de votre compte ci-dessous pour pouvoir commander sur le site.
        </p>
      </div>

      {/* Onglets */}
      <div className='flex space-x-1 bg-gray-100 p-1 rounded-lg mb-8'>
        <button
          onClick={() => setActiveTab('coordonnees')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'coordonnees'
              ? 'bg-white text-primary-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Mes coordonnées
        </button>
        <button
          onClick={() => setActiveTab('commandes')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'commandes'
              ? 'bg-white text-primary-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Mes commandes
        </button>
      </div>

      <form onSubmit={handleSubmit} className='space-y-8'>
        {activeTab === 'coordonnees' && (
          <>
            {/* Informations personnelles */}
            <div className='bg-gray-50 rounded-lg p-6'>
              <h3 className='text-xl font-semibold text-accent-dark mb-4 flex items-center gap-2'>
                <User className='w-5 h-5' />
                Informations personnelles
              </h3>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div>
                  <label
                    htmlFor='civility'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Civilité *
                  </label>
                  <select
                    id='civility'
                    value={formData.civility}
                    onChange={e => handleInputChange('civility', e.target.value)}
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                  >
                    <option value=''>Sélectionner...</option>
                    <option value='M.'>M.</option>
                    <option value='Mme'>Mme</option>
                    <option value='Mlle'>Mlle</option>
                  </select>
                  {errors.civility && (
                    <p className='text-red-500 text-xs mt-1'>{errors.civility}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor='lastName'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Nom *
                  </label>
                  <input
                    type='text'
                    id='lastName'
                    value={formData.lastName}
                    onChange={e => handleInputChange('lastName', e.target.value)}
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                    placeholder='Dupont'
                  />
                  {errors.lastName && (
                    <p className='text-red-500 text-xs mt-1'>{errors.lastName}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor='firstName'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Prénom *
                  </label>
                  <input
                    type='text'
                    id='firstName'
                    value={formData.firstName}
                    onChange={e => handleInputChange('firstName', e.target.value)}
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                    placeholder='Jean'
                  />
                  {errors.firstName && (
                    <p className='text-red-500 text-xs mt-1'>{errors.firstName}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Adresse */}
            <div className='bg-gray-50 rounded-lg p-6'>
              <h3 className='text-xl font-semibold text-accent-dark mb-4 flex items-center gap-2'>
                <MapPin className='w-5 h-5' />
                Adresse
              </h3>

              <div className='space-y-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div>
                    <label
                      htmlFor='streetNumber'
                      className='block text-sm font-medium text-gray-700 mb-1'
                    >
                      Numéro et nom de la rue *
                    </label>
                    <input
                      type='text'
                      id='streetNumber'
                      value={formData.streetNumber}
                      onChange={e => handleInputChange('streetNumber', e.target.value)}
                      className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                      placeholder='123, rue de la Paix'
                    />
                    {errors.streetNumber && (
                      <p className='text-red-500 text-xs mt-1'>{errors.streetNumber}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor='streetName'
                      className='block text-sm font-medium text-gray-700 mb-1'
                    >
                      Nom de la rue *
                    </label>
                    <input
                      type='text'
                      id='streetName'
                      value={formData.streetName}
                      onChange={e => handleInputChange('streetName', e.target.value)}
                      className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                      placeholder='rue de la Paix'
                    />
                    {errors.streetName && (
                      <p className='text-red-500 text-xs mt-1'>{errors.streetName}</p>
                    )}
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div>
                    <label
                      htmlFor='addressComplement'
                      className='block text-sm font-medium text-gray-700 mb-1'
                    >
                      Complément adresse (Résidence... etc)
                    </label>
                    <input
                      type='text'
                      id='addressComplement'
                      value={formData.addressComplement}
                      onChange={e => handleInputChange('addressComplement', e.target.value)}
                      className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                      placeholder='Résidence Les Jardins'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='addressComplement2'
                      className='block text-sm font-medium text-gray-700 mb-1'
                    >
                      Suite complément adresse
                    </label>
                    <input
                      type='text'
                      id='addressComplement2'
                      value={formData.addressComplement2}
                      onChange={e => handleInputChange('addressComplement2', e.target.value)}
                      className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                      placeholder='Bâtiment A, Appartement 12'
                    />
                  </div>
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

            {/* Contact */}
            <div className='bg-gray-50 rounded-lg p-6'>
              <h3 className='text-xl font-semibold text-accent-dark mb-4 flex items-center gap-2'>
                <Phone className='w-5 h-5' />
                Contact
              </h3>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <label
                    htmlFor='mobilePhone'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Téléphone portable (min. 8 caractères) *
                  </label>
                  <input
                    type='tel'
                    id='mobilePhone'
                    value={formData.mobilePhone}
                    onChange={e => handleInputChange('mobilePhone', e.target.value)}
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                    placeholder='06.12.34.56.78'
                  />
                  {errors.mobilePhone && (
                    <p className='text-red-500 text-xs mt-1'>{errors.mobilePhone}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor='landlinePhone'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Téléphone fixe (min. 8 caractères)
                  </label>
                  <input
                    type='tel'
                    id='landlinePhone'
                    value={formData.landlinePhone}
                    onChange={e => handleInputChange('landlinePhone', e.target.value)}
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                    placeholder='04.93.12.34.56'
                  />
                </div>
              </div>
            </div>

            {/* Compte */}
            <div className='bg-gray-50 rounded-lg p-6'>
              <h3 className='text-xl font-semibold text-accent-dark mb-4 flex items-center gap-2'>
                <Lock className='w-5 h-5' />
                Compte
              </h3>

              <div className='space-y-4'>
                <div>
                  <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>
                    Votre email *
                  </label>
                  <input
                    type='email'
                    id='email'
                    value={formData.email}
                    onChange={e => handleInputChange('email', e.target.value)}
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                    placeholder='jean.dupont@email.com'
                  />
                  {errors.email && <p className='text-red-500 text-xs mt-1'>{errors.email}</p>}
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div>
                    <label
                      htmlFor='password'
                      className='block text-sm font-medium text-gray-700 mb-1'
                    >
                      Mot de passe *
                    </label>
                    <input
                      type='password'
                      id='password'
                      value={formData.password}
                      onChange={e => handleInputChange('password', e.target.value)}
                      className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                      placeholder='••••••••'
                    />
                    {errors.password && (
                      <p className='text-red-500 text-xs mt-1'>{errors.password}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor='confirmPassword'
                      className='block text-sm font-medium text-gray-700 mb-1'
                    >
                      Répéter le mot de passe *
                    </label>
                    <input
                      type='password'
                      id='confirmPassword'
                      value={formData.confirmPassword}
                      onChange={e => handleInputChange('confirmPassword', e.target.value)}
                      className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                      placeholder='••••••••'
                    />
                    {errors.confirmPassword && (
                      <p className='text-red-500 text-xs mt-1'>{errors.confirmPassword}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'commandes' && (
          <>
            {/* Newsletter */}
            <div className='bg-gray-50 rounded-lg p-6'>
              <h3 className='text-xl font-semibold text-accent-dark mb-4 flex items-center gap-2'>
                <Bell className='w-5 h-5' />
                Newsletter et préférences
              </h3>

              <div className='space-y-6'>
                <div>
                  <p className='text-sm font-medium text-gray-700 mb-3'>
                    Vous souhaitez recevoir la composition des paniers chaque semaine dans votre
                    boîte mail ?
                  </p>
                  <div className='flex space-x-6'>
                    <label className='flex items-center space-x-2 cursor-pointer'>
                      <input
                        type='radio'
                        name='newsletterSubscription'
                        checked={formData.newsletterSubscription === true}
                        onChange={() => handleInputChange('newsletterSubscription', true)}
                        className='text-primary-500'
                      />
                      <span className='text-sm'>OUI</span>
                    </label>
                    <label className='flex items-center space-x-2 cursor-pointer'>
                      <input
                        type='radio'
                        name='newsletterSubscription'
                        checked={formData.newsletterSubscription === false}
                        onChange={() => handleInputChange('newsletterSubscription', false)}
                        className='text-primary-500'
                      />
                      <span className='text-sm'>NON</span>
                    </label>
                  </div>
                </div>

                {formData.newsletterSubscription && (
                  <div>
                    <p className='text-sm font-medium text-gray-700 mb-3'>En langue :</p>
                    <div className='flex space-x-6'>
                      <label className='flex items-center space-x-2 cursor-pointer'>
                        <input
                          type='radio'
                          name='newsletterLanguage'
                          value='francais'
                          checked={formData.newsletterLanguage === 'francais'}
                          onChange={e => handleInputChange('newsletterLanguage', e.target.value)}
                          className='text-primary-500'
                        />
                        <span className='text-sm'>FRANÇAISE</span>
                      </label>
                      <label className='flex items-center space-x-2 cursor-pointer'>
                        <input
                          type='radio'
                          name='newsletterLanguage'
                          value='anglais'
                          checked={formData.newsletterLanguage === 'anglais'}
                          onChange={e => handleInputChange('newsletterLanguage', e.target.value)}
                          className='text-primary-500'
                        />
                        <span className='text-sm'>OU ANGLAISE</span>
                      </label>
                    </div>
                  </div>
                )}

                <div className='bg-blue-50 border border-blue-200 rounded-lg p-4'>
                  <div className='flex items-start space-x-3'>
                    <Mail className='w-5 h-5 text-blue-500 mt-0.5' />
                    <div>
                      <p className='text-blue-800 text-sm font-medium'>
                        Sélectionner les paniers d'un lieu de retrait
                      </p>
                      <p className='text-blue-700 text-xs mt-1'>
                        Il ne vous sera envoyé que la composition des paniers. AUCUNE publicité ne
                        vous sera envoyée.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='preferredDistributionPoint'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Choisissez votre lieu de distribution favori
                  </label>
                  <div className='max-h-60 overflow-y-auto border border-gray-300 rounded-md p-4 space-y-2'>
                    {distributionPoints.map(point => (
                      <label key={point.id} className='flex items-center space-x-2 cursor-pointer'>
                        <input
                          type='radio'
                          name='preferredDistributionPoint'
                          value={point.id.toString()}
                          checked={formData.preferredDistributionPoint === point.id.toString()}
                          onChange={e =>
                            handleInputChange('preferredDistributionPoint', e.target.value)
                          }
                          className='text-primary-500'
                        />
                        <span className='text-sm'>{point.name}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* reCAPTCHA et bouton de soumission */}
        <div className='text-center space-y-4'>
          {/* reCAPTCHA placeholder */}
          <div className='flex justify-center'>
            <div className='bg-gray-100 border border-gray-300 rounded p-3 flex items-center space-x-2'>
              <input type='checkbox' id='recaptcha' className='rounded' />
              <label htmlFor='recaptcha' className='text-sm text-gray-600 cursor-pointer'>
                Je ne suis pas un robot
              </label>
            </div>
          </div>

          {errors.submit && <p className='text-red-500 text-sm'>{errors.submit}</p>}

          <button
            type='submit'
            disabled={isSubmitting}
            className='bg-primary-500 hover:bg-primary-600 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {isSubmitting ? 'Création en cours...' : 'Créer'}
          </button>

          <p className='text-gray-600 text-sm'>* Champs obligatoires</p>
        </div>
      </form>
    </div>
  );
}
