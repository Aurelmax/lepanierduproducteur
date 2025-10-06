'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle, ChevronDown, Clock, Home, MapPin, Store, Truck } from 'lucide-react';
import { useState } from 'react';

interface DeliveryOption {
  type: 'production' | 'home' | 'pickup';
  title: string;
  description: string;
  days: string[];
  price?: string;
  free?: boolean;
}

export default function DeliveryOptions() {
  const [expandedSections, setExpandedSections] = useState<{
    main: boolean;
    pickup: boolean;
    paid: boolean;
    sophia: boolean;
  }>({
    main: true,
    pickup: false,
    paid: false,
    sophia: false,
  });

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const deliveryOptions: DeliveryOption[] = [
    {
      type: 'production',
      title: 'DIRECTEMENT À LA PRODUCTION',
      description: 'Retrait à la ferme',
      days: [
        'Vendredi 3 Octobre (15h - 18h)',
        'Samedi 4 Octobre (15h - 18h)',
        'Lundi 6 Octobre (15h - 18h)',
        'Mardi 7 Octobre (15h - 18h)',
      ],
    },
    {
      type: 'home',
      title: 'LIVRAISON OFFERTE À VOTRE DOMICILE sur Antibes',
      description: "À partir de 15€ d'achat",
      days: [
        'Vendredi 3 Octobre (14h - 19h)',
        'Samedi 4 Octobre (9h - 15h)',
        'Lundi 6 Octobre (14h - 19h)',
        'Mardi 7 Octobre (14h - 19h)',
      ],
      free: true,
    },
  ];

  const pickupPoints = [
    { day: 'Jeudi 2 Octobre', location: 'NICE - Gare "Riquier"', time: '16h - 19h' },
    { day: 'Vendredi 3 Octobre', location: 'ANTIBES - Villa Thuret', time: '10h30 - 12h30' },
    { day: 'Lundi 6 Octobre', location: 'CANNES - Palm Beach', time: '11h00 - 14h00' },
    { day: 'Lundi 6 Octobre', location: 'MOUANS SARTOUX', time: '11h00' },
    { day: 'Mardi 7 Octobre', location: 'NICE - Centre Antoine Lacassagne', time: '14h - 17h' },
    { day: 'Mardi 7 Octobre', location: 'CAGNES SUR MER - Hippodrome', time: '10h20' },
    { day: 'Mardi 7 Octobre', location: 'ST LAURENT DU VAR - Cap 3000', time: '11h05 - 11h10' },
    { day: 'Mardi 7 Octobre', location: 'ST LAURENT DU VAR - Centre', time: '10h40' },
    {
      day: 'Mardi 7 Octobre',
      location: "NICE ARENAS - Quartier d'Affaires",
      time: '11h15 - 11h20',
    },
    { day: 'Mardi 7 Octobre', location: 'NICE - ARKOSE', time: '16h - 23h' },
    {
      day: 'Mardi 7 Octobre',
      location: 'NICE - FAC des Sciences de Valrose',
      time: '14h30 - 15h00',
    },
    { day: 'Mardi 7 Octobre', location: 'Stade Allianz Riviera', time: '15h - 16h' },
    { day: 'Mardi 7 Octobre', location: 'AzurVet Centre de Vétérinaires', time: '15h00 - 17h00' },
    { day: 'Mardi 7 Octobre', location: 'Orange Nice Besset', time: '14h' },
  ];

  const paidDelivery = [
    {
      location: 'Livraison Cannes-Mougins-Vallauris-Golfe juan',
      day: 'Lundi 6 Octobre (10h - 16h)',
      price: '+ 3€',
    },
    {
      location: 'Livraison à Domicile sur LE CANNET',
      day: 'Lundi 6 Octobre (11h - 17h)',
      price: '+ 3€',
    },
    {
      location: 'Livraison à Domicile sur NICE - Cagnes/Mer - Villeneuve Loubet',
      day: 'Mardi 7 Octobre (12h - 16h)',
      price: '+ 5€',
    },
  ];

  const sophiaAntipolis = [
    'Centre nautique Nautipolis - Vendredi 3 Octobre (vers 15h45)',
    'Mouratoglou - Vendredi 3 Octobre (12h & 14h)',
    'Société E.T.S.I - Vendredi 3 Octobre (14h30 - 16h30)',
    'Emerald Square - Vendredi 3 Octobre (10h30)',
    'Société Stella Telecom et société au Alentours - Vendredi 3 Octobre (10h30)',
    'Société STMicroelectronics - Vendredi 3 Octobre (14h30 - 16h30)',
    'World Trade Center - Vendredi 3 Octobre (14h30 - 16h30)',
    'Société Thales - Vendredi 3 Octobre (14h30 - 16h30)',
    'Appart\'Etud "Nemea" - Vendredi 3 Octobre (12h & 16h)',
    'Société ARM - Vendredi 3 Octobre (11h30)',
    'Société Atos - Vendredi 3 Octobre (14h30 - 16h30)',
    'Société Vinci Facilities Cegelec - Vendredi 3 Octobre (12h & 16h)',
    'Société ARM - Lundi 6 Octobre (11h30)',
    'Geoazur - Campus Azur CNRS - Lundi 6 Octobre (10h15 - 10h30)',
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'production':
        return <Store className='w-5 h-5' />;
      case 'home':
        return <Home className='w-5 h-5' />;
      default:
        return <MapPin className='w-5 h-5' />;
    }
  };

  // Variants d'animation pour les sections
  const sectionVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  // Variants pour les éléments de liste
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: 'easeOut',
      },
    }),
  };

  // Variants pour les boutons de section
  const buttonVariants = {
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.1 },
    },
  };

  // Variants pour les options de livraison
  const optionVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2 },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.1 },
    },
  };

  return (
    <motion.div
      className='bg-white rounded-xl p-8 shadow-lg'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='flex items-center justify-between mb-6'>
        <motion.h3
          className='text-2xl font-display font-bold text-accent-dark'
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Choisissez votre lieu de livraison
        </motion.h3>
        <motion.div
          className='text-sm text-gray-500'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {selectedOption ? `Sélectionné: ${selectedOption}` : 'Aucune sélection'}
        </motion.div>
      </div>

      {/* Options principales */}
      <div className='mb-8'>
        <motion.button
          onClick={() => toggleSection('main')}
          className='w-full flex items-center justify-between p-4 bg-gradient-to-r from-primary-50 to-harvest-50 rounded-lg hover:from-primary-100 hover:to-harvest-100 transition-all duration-300 group'
          variants={buttonVariants}
          whileHover='hover'
          whileTap='tap'
        >
          <div className='flex items-center space-x-3'>
            <motion.div
              animate={{ rotate: expandedSections.main ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Truck className='w-6 h-6 text-primary-600' />
            </motion.div>
            <span className='font-semibold text-accent-dark'>Options principales</span>
          </div>
          <motion.div
            animate={{ rotate: expandedSections.main ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className='w-5 h-5 text-gray-500 group-hover:text-primary-600 transition-colors duration-200' />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {expandedSections.main && (
            <motion.div
              variants={sectionVariants}
              initial='hidden'
              animate='visible'
              exit='hidden'
              className='overflow-hidden'
            >
              <div className='space-y-4 mt-4'>
                {deliveryOptions.map((option, index) => (
                  <motion.div
                    key={index}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                      selectedOption === option.title
                        ? 'border-primary-500 bg-primary-50 shadow-md'
                        : 'border-gray-200 hover:border-primary-300'
                    }`}
                    onClick={() => setSelectedOption(option.title)}
                    variants={optionVariants}
                    initial='hidden'
                    animate='visible'
                    whileHover='hover'
                    whileTap='tap'
                    custom={index}
                  >
                    <div className='flex items-start space-x-3'>
                      <motion.div
                        className={`p-2 rounded-full transition-colors duration-200 ${
                          selectedOption === option.title
                            ? 'bg-primary-500 text-white'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                        animate={{
                          scale: selectedOption === option.title ? 1.1 : 1,
                          rotate: selectedOption === option.title ? 360 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {getIcon(option.type)}
                      </motion.div>
                      <div className='flex-1'>
                        <h4 className='font-semibold text-accent-dark mb-2'>{option.title}</h4>
                        <p className='text-sm text-gray-600 mb-3'>{option.description}</p>
                        <div className='space-y-1'>
                          {option.days.map((day, dayIndex) => (
                            <motion.div
                              key={dayIndex}
                              className='flex items-center space-x-2 text-sm text-gray-700'
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: dayIndex * 0.1 }}
                            >
                              <Clock className='w-4 h-4 text-gray-400' />
                              <span>{day}</span>
                            </motion.div>
                          ))}
                        </div>
                        {option.free && (
                          <motion.div
                            className='mt-3 inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold'
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                          >
                            🎉 LIVRAISON GRATUITE
                          </motion.div>
                        )}
                      </div>
                      {selectedOption === option.title && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ type: 'spring', stiffness: 200 }}
                        >
                          <CheckCircle className='w-6 h-6 text-primary-500' />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Points de retrait */}
      <div className='mb-8'>
        <motion.button
          onClick={() => toggleSection('pickup')}
          className='w-full flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 group'
          variants={buttonVariants}
          whileHover='hover'
          whileTap='tap'
        >
          <div className='flex items-center space-x-3'>
            <motion.div
              animate={{ rotate: expandedSections.pickup ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <MapPin className='w-6 h-6 text-blue-600' />
            </motion.div>
            <span className='font-semibold text-accent-dark'>Points de retrait</span>
            <motion.span
              className='bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium'
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {pickupPoints.length} points
            </motion.span>
          </div>
          <motion.div
            animate={{ rotate: expandedSections.pickup ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className='w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-colors duration-200' />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {expandedSections.pickup && (
            <motion.div
              variants={sectionVariants}
              initial='hidden'
              animate='visible'
              exit='hidden'
              className='overflow-hidden'
            >
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                {pickupPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    className='bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-all duration-200 hover:shadow-sm cursor-pointer'
                    onClick={() => setSelectedOption(point.location)}
                    variants={itemVariants}
                    initial='hidden'
                    animate='visible'
                    custom={index}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className='flex items-start space-x-2'>
                      <MapPin className='w-4 h-4 text-gray-500 mt-1 flex-shrink-0' />
                      <div className='flex-1'>
                        <div className='font-medium text-sm text-accent-dark'>{point.day}</div>
                        <div className='text-sm text-gray-700'>{point.location}</div>
                        <div className='flex items-center space-x-1 text-xs text-gray-500 mt-1'>
                          <Clock className='w-3 h-3' />
                          <span>{point.time}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Livraisons payantes */}
      <div className='mb-8'>
        <motion.button
          onClick={() => toggleSection('paid')}
          className='w-full flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg hover:from-orange-100 hover:to-red-100 transition-all duration-300 group'
          variants={buttonVariants}
          whileHover='hover'
          whileTap='tap'
        >
          <div className='flex items-center space-x-3'>
            <motion.div
              animate={{ rotate: expandedSections.paid ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Truck className='w-6 h-6 text-orange-600' />
            </motion.div>
            <span className='font-semibold text-accent-dark'>Livraison payante à domicile</span>
            <motion.span
              className='bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium'
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {paidDelivery.length} zones
            </motion.span>
          </div>
          <motion.div
            animate={{ rotate: expandedSections.paid ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className='w-5 h-5 text-gray-500 group-hover:text-orange-600 transition-colors duration-200' />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {expandedSections.paid && (
            <motion.div
              variants={sectionVariants}
              initial='hidden'
              animate='visible'
              exit='hidden'
              className='overflow-hidden'
            >
              <div className='space-y-3 mt-4'>
                {paidDelivery.map((delivery, index) => (
                  <motion.div
                    key={index}
                    className='bg-orange-50 rounded-lg p-4 hover:bg-orange-100 transition-all duration-200 hover:shadow-sm cursor-pointer'
                    onClick={() => setSelectedOption(delivery.location)}
                    variants={itemVariants}
                    initial='hidden'
                    animate='visible'
                    custom={index}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className='flex items-start space-x-2'>
                      <Home className='w-4 h-4 text-orange-600 mt-1 flex-shrink-0' />
                      <div className='flex-1'>
                        <div className='text-sm text-gray-700'>{delivery.location}</div>
                        <div className='flex items-center space-x-1 text-xs text-gray-500 mt-1'>
                          <Clock className='w-3 h-3' />
                          <span>{delivery.day}</span>
                        </div>
                        <motion.div
                          className='text-sm font-semibold text-orange-600 mt-2'
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          {delivery.price}
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Sophia Antipolis */}
      <div>
        <motion.button
          onClick={() => toggleSection('sophia')}
          className='w-full flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg hover:from-green-100 hover:to-emerald-100 transition-all duration-300 group'
          variants={buttonVariants}
          whileHover='hover'
          whileTap='tap'
        >
          <div className='flex items-center space-x-3'>
            <motion.div
              animate={{ rotate: expandedSections.sophia ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Store className='w-6 h-6 text-green-600' />
            </motion.div>
            <span className='font-semibold text-accent-dark'>
              Livraison gratuite Sophia Antipolis
            </span>
            <motion.span
              className='bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium'
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {sophiaAntipolis.length} entreprises
            </motion.span>
          </div>
          <motion.div
            animate={{ rotate: expandedSections.sophia ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className='w-5 h-5 text-gray-500 group-hover:text-green-600 transition-colors duration-200' />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {expandedSections.sophia && (
            <motion.div
              variants={sectionVariants}
              initial='hidden'
              animate='visible'
              exit='hidden'
              className='overflow-hidden'
            >
              <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mt-4'>
                {sophiaAntipolis.map((location, index) => (
                  <motion.div
                    key={index}
                    className='bg-green-50 rounded-lg p-3 hover:bg-green-100 transition-all duration-200 hover:shadow-sm cursor-pointer'
                    onClick={() => setSelectedOption(location)}
                    variants={itemVariants}
                    initial='hidden'
                    animate='visible'
                    custom={index}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className='flex items-start space-x-2'>
                      <Store className='w-4 h-4 text-green-600 mt-1 flex-shrink-0' />
                      <div className='text-sm text-gray-700'>{location}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bouton de confirmation */}
      <AnimatePresence>
        {selectedOption && (
          <motion.div
            className='mt-8 p-4 bg-primary-50 border border-primary-200 rounded-lg'
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
          >
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-3'>
                <motion.div
                  className='w-3 h-3 bg-green-500 rounded-full'
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <span className='text-sm font-medium text-primary-800'>
                  Option sélectionnée: <strong>{selectedOption}</strong>
                </span>
              </div>
              <motion.button
                className='bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Confirmer
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
