'use client';

import { CheckCircle, CreditCard } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useCart } from '../contexts/CartContext';

interface SimpleCheckoutProps {
  onClose: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  deliveryMethod: 'pickup' | 'delivery';
  deliveryDate: string;
  deliveryTimeSlot: string;
  comments: string;
  paymentMethod: 'paypal' | 'stripe' | '';
}

export default function SimpleCheckout({ onClose }: SimpleCheckoutProps) {
  const { state, dispatch } = useCart();
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    deliveryMethod: 'pickup',
    deliveryDate: '',
    deliveryTimeSlot: '',
    comments: '',
    paymentMethod: '',
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const total = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = formData.deliveryMethod === 'delivery' && total < 15 ? 5.00 : 0;
  const finalTotal = total + deliveryFee;

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: {[key: string]: string} = {};
    if (!formData.firstName) {
      newErrors.firstName = 'Le prénom est requis.';
    }
    if (!formData.lastName) {
      newErrors.lastName = 'Le nom est requis.';
    }
    if (!formData.email) {
      newErrors.email = 'L\'email est requis.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide.';
    }
    if (!formData.phone) {
      newErrors.phone = 'Le téléphone est requis.';
    }
    if (formData.deliveryMethod === 'delivery') {
      if (!formData.address) {
        newErrors.address = 'L\'adresse est requise pour la livraison.';
      }
      if (!formData.city) {
        newErrors.city = 'La ville est requise pour la livraison.';
      }
      if (!formData.zipCode) {
        newErrors.zipCode = 'Le code postal est requis pour la livraison.';
      }
    }
    if (!formData.deliveryDate) {
      newErrors.deliveryDate = 'La date de livraison/retrait est requise.';
    }
    if (!formData.deliveryTimeSlot) {
      newErrors.deliveryTimeSlot = 'Le créneau horaire est requis.';
    }
    if (!formData.paymentMethod) {
      newErrors.paymentMethod = 'Veuillez choisir une méthode de paiement.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayment = async (method: 'paypal' | 'stripe') => {
    if (!validateForm()) {
      alert('Veuillez corriger les erreurs dans le formulaire.');
      return;
    }

    setIsProcessing(true);
    setFormData(prev => ({ ...prev, paymentMethod: method }));

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    // In a real application, you would integrate with PayPal/Stripe API here
    console.log('Processing payment with:', method);
    console.log('Order details:', {
      items: state.items,
      formData,
      total: finalTotal,
      paymentMethod: method,
    });

    setIsProcessing(false);
    setOrderConfirmed(true);
    dispatch({ type: 'CLEAR_CART' });
  };

  if (orderConfirmed) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-display font-bold text-accent-dark mb-4">
            Commande Confirmée !
          </h2>
          <p className="text-gray-700 mb-6">
            Merci pour votre commande. Un email de confirmation vous a été envoyé.
          </p>
          <button
            onClick={() => {
              onClose();
              router.push('/');
            }}
            className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="relative bg-white rounded-xl shadow-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <h2 className="text-3xl font-display font-bold text-accent-dark text-center mb-8">
          Finaliser votre commande
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulaire de commande */}
          <div>
            <h3 className="text-xl font-semibold text-accent-dark mb-4">Vos informations</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Prénom</label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Nom</label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Téléphone</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              <h3 className="text-xl font-semibold text-accent-dark mt-8 mb-4">Méthode de réception</h3>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="pickup"
                    checked={formData.deliveryMethod === 'pickup'}
                    onChange={(e) => handleInputChange('deliveryMethod', e.target.value as 'pickup' | 'delivery')}
                    className="text-primary-500"
                  />
                  <span>Retrait sur place (Gratuit)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="delivery"
                    checked={formData.deliveryMethod === 'delivery'}
                    onChange={(e) => handleInputChange('deliveryMethod', e.target.value as 'pickup' | 'delivery')}
                    className="text-primary-500"
                  />
                  <span>Livraison à domicile (5€, gratuit dès 15€ d'achat)</span>
                </label>
              </div>

              {formData.deliveryMethod === 'delivery' && (
                <div className="space-y-4 mt-4">
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Adresse</label>
                    <input
                      type="text"
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                    />
                    {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">Ville</label>
                      <input
                        type="text"
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                      />
                      {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                    </div>
                    <div>
                      <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">Code Postal</label>
                      <input
                        type="text"
                        id="zipCode"
                        value={formData.zipCode}
                        onChange={(e) => handleInputChange('zipCode', e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                      />
                      {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
                    </div>
                  </div>
                </div>
              )}

              <h3 className="text-xl font-semibold text-accent-dark mt-8 mb-4">Date et créneau</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="deliveryDate" className="block text-sm font-medium text-gray-700">Date</label>
                  <input
                    type="date"
                    id="deliveryDate"
                    value={formData.deliveryDate}
                    onChange={(e) => handleInputChange('deliveryDate', e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  />
                  {errors.deliveryDate && <p className="text-red-500 text-xs mt-1">{errors.deliveryDate}</p>}
                </div>
                <div>
                  <label htmlFor="deliveryTimeSlot" className="block text-sm font-medium text-gray-700">Créneau horaire</label>
                  <select
                    id="deliveryTimeSlot"
                    value={formData.deliveryTimeSlot}
                    onChange={(e) => handleInputChange('deliveryTimeSlot', e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Sélectionner un créneau</option>
                    <option value="9h-12h">9h - 12h</option>
                    <option value="14h-17h">14h - 17h</option>
                    <option value="17h-19h">17h - 19h</option>
                  </select>
                  {errors.deliveryTimeSlot && <p className="text-red-500 text-xs mt-1">{errors.deliveryTimeSlot}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="comments" className="block text-sm font-medium text-gray-700">Commentaires (facultatif)</label>
                <textarea
                  id="comments"
                  value={formData.comments}
                  onChange={(e) => handleInputChange('comments', e.target.value)}
                  rows={3}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Récapitulatif et Paiement */}
          <div>
            <h3 className="text-xl font-semibold text-accent-dark mb-4">Votre commande</h3>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="space-y-2">
                {state.items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>{item.name} x {item.quantity}</span>
                    <span>{(item.price * item.quantity).toFixed(2)}€</span>
                  </div>
                ))}
                {deliveryFee > 0 && (
                  <div className="flex justify-between text-sm">
                    <span>Frais de livraison</span>
                    <span>{deliveryFee.toFixed(2)}€</span>
                  </div>
                )}
                <div className="flex justify-between font-bold text-lg border-t border-gray-200 pt-2 mt-2">
                  <span>Total</span>
                  <span>{finalTotal.toFixed(2)}€</span>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-accent-dark mb-4">Méthode de paiement</h3>
            <div className="space-y-4">
              <button
                onClick={() => handlePayment('paypal')}
                disabled={isProcessing}
                className="w-full flex items-center justify-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.543-.68c-.78-.78-1.96-1.12-3.36-1.12H8.5c-.524 0-.968.382-1.05.9L5.5 19.337h4.576c.524 0 .968-.382 1.05-.9l1.12-7.106h2.19c2.57 0 4.578-.543 5.69-1.81 1.01-1.15 1.304-2.42 1.012-4.287z"/>
                </svg>
                <span>Payer avec PayPal</span>
              </button>
              <button
                onClick={() => handlePayment('stripe')}
                disabled={isProcessing}
                className="w-full flex items-center justify-center space-x-3 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <CreditCard className="w-5 h-5" />
                <span>Payer par Carte (Stripe)</span>
              </button>
            </div>
            {errors.paymentMethod && <p className="text-red-500 text-xs mt-2">{errors.paymentMethod}</p>}

            {isProcessing && (
              <div className="mt-6 text-center text-primary-600 font-semibold">
                Traitement de votre commande...
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
