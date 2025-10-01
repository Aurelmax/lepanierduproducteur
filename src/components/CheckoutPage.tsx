'use client';

import { useState } from 'react';
import { useCart } from '../contexts/CartContext';

interface CheckoutPageProps {
  onClose: () => void;
}

export default function CheckoutPage({ onClose }: CheckoutPageProps) {
  const { state, dispatch } = useCart();
  const [formData, setFormData] = useState({
    // Informations de contact
    firstName: '',
    lastName: '',
    email: '',
    phone: '',

    // Adresse de livraison
    address: '',
    city: '',
    postalCode: '',

    // Méthode de livraison
    deliveryMethod: 'pickup',
    deliveryDate: '',
    deliveryTime: '',

    // Commentaires
    comments: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isProcessing, setIsProcessing] = useState(false);

  const total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = formData.deliveryMethod === 'delivery' ? 5.0 : 0;
  const finalTotal = total + deliveryFee;

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Prénom requis';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Nom requis';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Téléphone requis';
    }
    if (!formData.address.trim()) {
      newErrors.address = 'Adresse requise';
    }
    if (!formData.city.trim()) {
      newErrors.city = 'Ville requise';
    }
    if (!formData.postalCode.trim()) {
      newErrors.postalCode = 'Code postal requis';
    }

    if (formData.deliveryMethod === 'delivery' && !formData.deliveryDate) {
      newErrors.deliveryDate = 'Date de livraison requise';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayment = async (paymentMethod: 'paypal' | 'stripe') => {
    if (!validateForm()) {
      return;
    }

    setIsProcessing(true);

    try {
      // Simulation du traitement de paiement
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Ici, vous intégreriez avec PayPal ou Stripe
      console.log('Paiement via', paymentMethod, {
        amount: finalTotal,
        customer: formData,
        items: state.items,
      });

      // Vider le panier après paiement réussi
      dispatch({ type: 'CLEAR_CART' });

      // Afficher le succès
      alert(
        `Paiement ${paymentMethod === 'paypal' ? 'PayPal' : 'Stripe'} réussi ! Vous recevrez un email de confirmation.`,
      );

      onClose();
    } catch (error) {
      console.error('Erreur de paiement:', error);
      alert('Erreur lors du paiement. Veuillez réessayer.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className='bg-white rounded-lg shadow-xl'>
      {/* Header */}
      <div className='bg-primary-50 border-b border-primary-200 px-6 py-4'>
        <div className='flex items-center justify-between'>
          <div>
            <h1 className='text-2xl font-display font-bold text-primary-800'>
              Finaliser votre commande
            </h1>
            <p className='text-primary-600 text-sm'>
              Remplissez vos informations et choisissez votre mode de paiement
            </p>
          </div>
          <button onClick={onClose} className='text-gray-500 hover:text-gray-700 text-2xl'>
            ×
          </button>
        </div>
      </div>

      <div className='p-6'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* Formulaire */}
          <div className='space-y-6'>
            <h2 className='text-xl font-semibold text-accent-dark'>Vos informations</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label className='block text-sm font-semibold text-accent-dark mb-2'>
                  Prénom *
                </label>
                <input
                  type='text'
                  value={formData.firstName}
                  onChange={e => handleInputChange('firstName', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.firstName ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                  placeholder='Votre prénom'
                />
                {errors.firstName && (
                  <p className='text-red-500 text-sm mt-1'>{errors.firstName}</p>
                )}
              </div>

              <div>
                <label className='block text-sm font-semibold text-accent-dark mb-2'>Nom *</label>
                <input
                  type='text'
                  value={formData.lastName}
                  onChange={e => handleInputChange('lastName', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.lastName ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                  placeholder='Votre nom'
                />
                {errors.lastName && <p className='text-red-500 text-sm mt-1'>{errors.lastName}</p>}
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label className='block text-sm font-semibold text-accent-dark mb-2'>Email *</label>
                <input
                  type='email'
                  value={formData.email}
                  onChange={e => handleInputChange('email', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                  placeholder='votre@email.com'
                />
                {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
              </div>

              <div>
                <label className='block text-sm font-semibold text-accent-dark mb-2'>
                  Téléphone *
                </label>
                <input
                  type='tel'
                  value={formData.phone}
                  onChange={e => handleInputChange('phone', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                  placeholder='06.12.34.56.78'
                />
                {errors.phone && <p className='text-red-500 text-sm mt-1'>{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label className='block text-sm font-semibold text-accent-dark mb-2'>Adresse *</label>
              <input
                type='text'
                value={formData.address}
                onChange={e => handleInputChange('address', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.address ? 'border-red-500' : 'border-gray-300'
                } focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                placeholder='123 rue de la Paix'
              />
              {errors.address && <p className='text-red-500 text-sm mt-1'>{errors.address}</p>}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label className='block text-sm font-semibold text-accent-dark mb-2'>Ville *</label>
                <input
                  type='text'
                  value={formData.city}
                  onChange={e => handleInputChange('city', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.city ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                  placeholder='Antibes'
                />
                {errors.city && <p className='text-red-500 text-sm mt-1'>{errors.city}</p>}
              </div>

              <div>
                <label className='block text-sm font-semibold text-accent-dark mb-2'>
                  Code postal *
                </label>
                <input
                  type='text'
                  value={formData.postalCode}
                  onChange={e => handleInputChange('postalCode', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.postalCode ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                  placeholder='06600'
                />
                {errors.postalCode && (
                  <p className='text-red-500 text-sm mt-1'>{errors.postalCode}</p>
                )}
              </div>
            </div>

            {/* Méthode de livraison */}
            <div>
              <h3 className='text-lg font-semibold text-accent-dark mb-4'>Méthode de livraison</h3>

              <div className='space-y-4'>
                <div className='border border-gray-200 rounded-lg p-4'>
                  <label className='flex items-center cursor-pointer'>
                    <input
                      type='radio'
                      name='deliveryMethod'
                      value='pickup'
                      checked={formData.deliveryMethod === 'pickup'}
                      onChange={e => handleInputChange('deliveryMethod', e.target.value)}
                      className='mr-3'
                    />
                    <div>
                      <div className='font-semibold text-accent-dark'>Retrait sur place</div>
                      <div className='text-sm text-gray-600'>Gratuit - Retrait à la ferme</div>
                    </div>
                  </label>
                </div>

                <div className='border border-gray-200 rounded-lg p-4'>
                  <label className='flex items-center cursor-pointer'>
                    <input
                      type='radio'
                      name='deliveryMethod'
                      value='delivery'
                      checked={formData.deliveryMethod === 'delivery'}
                      onChange={e => handleInputChange('deliveryMethod', e.target.value)}
                      className='mr-3'
                    />
                    <div>
                      <div className='font-semibold text-accent-dark'>Livraison à domicile</div>
                      <div className='text-sm text-gray-600'>
                        5,00€ - Livraison gratuite à partir de 15€
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {formData.deliveryMethod === 'delivery' && (
                <div className='mt-4 space-y-4'>
                  <div>
                    <label className='block text-sm font-semibold text-accent-dark mb-2'>
                      Date de livraison *
                    </label>
                    <input
                      type='date'
                      value={formData.deliveryDate}
                      onChange={e => handleInputChange('deliveryDate', e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.deliveryDate ? 'border-red-500' : 'border-gray-300'
                      } focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                      min={new Date().toISOString().split('T')[0]}
                    />
                    {errors.deliveryDate && (
                      <p className='text-red-500 text-sm mt-1'>{errors.deliveryDate}</p>
                    )}
                  </div>

                  <div>
                    <label className='block text-sm font-semibold text-accent-dark mb-2'>
                      Créneau horaire
                    </label>
                    <select
                      value={formData.deliveryTime}
                      onChange={e => handleInputChange('deliveryTime', e.target.value)}
                      className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                    >
                      <option value=''>Sélectionner un créneau</option>
                      <option value='9h-12h'>9h - 12h</option>
                      <option value='14h-17h'>14h - 17h</option>
                      <option value='17h-19h'>17h - 19h</option>
                    </select>
                  </div>
                </div>
              )}
            </div>

            <div>
              <label className='block text-sm font-semibold text-accent-dark mb-2'>
                Commentaires (optionnel)
              </label>
              <textarea
                value={formData.comments}
                onChange={e => handleInputChange('comments', e.target.value)}
                className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                rows={3}
                placeholder='Instructions spéciales pour la livraison...'
              />
            </div>
          </div>

          {/* Récapitulatif et paiement */}
          <div className='space-y-6'>
            <h2 className='text-xl font-semibold text-accent-dark'>Récapitulatif</h2>

            {/* Récapitulatif des articles */}
            <div className='bg-gray-50 rounded-lg p-4'>
              <h3 className='text-lg font-semibold text-accent-dark mb-3'>Votre commande</h3>
              <div className='space-y-2'>
                {state.items.map(item => (
                  <div key={item.id} className='flex justify-between text-sm'>
                    <span>
                      {item.name} x {item.quantity}
                    </span>
                    <span>{(item.price * item.quantity).toFixed(2)}€</span>
                  </div>
                ))}

                {deliveryFee > 0 && (
                  <div className='flex justify-between text-sm'>
                    <span>Frais de livraison</span>
                    <span>{deliveryFee.toFixed(2)}€</span>
                  </div>
                )}

                <div className='border-t pt-2 mt-2'>
                  <div className='flex justify-between font-semibold text-lg'>
                    <span>Total</span>
                    <span>{finalTotal.toFixed(2)}€</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Méthodes de paiement */}
            <div>
              <h3 className='text-lg font-semibold text-accent-dark mb-4'>Paiement</h3>

              <div className='space-y-4'>
                <button
                  onClick={() => handlePayment('paypal')}
                  disabled={isProcessing}
                  className='w-full flex items-center justify-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  {isProcessing ? (
                    <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                  ) : (
                    <>
                      <span className='text-xl'>💳</span>
                      <span>Payer avec PayPal</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => handlePayment('stripe')}
                  disabled={isProcessing}
                  className='w-full flex items-center justify-center space-x-3 bg-purple-600 hover:bg-purple-700 text-white py-4 px-6 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  {isProcessing ? (
                    <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                  ) : (
                    <>
                      <span className='text-xl'>💳</span>
                      <span>Payer avec Stripe</span>
                    </>
                  )}
                </button>
              </div>

              <div className='mt-4 text-center text-sm text-gray-600'>
                <p>🔒 Paiement sécurisé - Vos données sont protégées</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
