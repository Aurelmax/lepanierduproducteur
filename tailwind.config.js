/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}', // dossier app (Next.js 13+)
    './src/components/**/*.{js,ts,jsx,tsx,mdx}', // dossier composants
    './src/**/*.{js,ts,jsx,tsx,mdx}', // tous les fichiers dans src
  ],
  theme: {
    extend: {
      colors: {
        // Palette basée sur le logo "Le Panier du Producteur" - Bleu océan
        primary: {
          50: '#f0f9ff', // Bleu très clair
          100: '#e0f2fe', // Bleu clair
          200: '#bae6fd', // Bleu ciel clair
          300: '#7dd3fc', // Bleu ciel
          400: '#38bdf8', // Bleu
          500: '#04738e', // Bleu principal (votre couleur)
          600: '#0369a1', // Bleu foncé
          700: '#0369a1', // Bleu profond
          800: '#075985', // Bleu très foncé
          900: '#0c4a6e', // Bleu sombre
        },
        earth: {
          50: '#fdf4e7', // Terre très claire
          100: '#f7e6cc', // Terre claire
          200: '#f0d199', // Terre
          300: '#e8bc66', // Terre dorée
          400: '#e0a733', // Terre chaude
          500: '#d49200', // Terre principale
          600: '#b87d00', // Terre foncée
          700: '#9c6800', // Terre profonde
          800: '#805300', // Terre très foncée
          900: '#643e00', // Terre sombre
        },
        harvest: {
          50: '#fff7ed', // Orange très clair
          100: '#ffedd5', // Orange clair
          200: '#fed7aa', // Orange
          300: '#fdba74', // Orange chaud
          400: '#fb923c', // Orange vif
          500: '#f97316', // Orange principal
          600: '#ea580c', // Orange foncé
          700: '#c2410c', // Orange profond
          800: '#9a3412', // Orange très foncé
          900: '#7c2d12', // Orange sombre
        },
        denim: {
          50: '#eff6ff', // Bleu très clair
          100: '#dbeafe', // Bleu clair
          200: '#bfdbfe', // Bleu
          300: '#93c5fd', // Bleu ciel
          400: '#60a5fa', // Bleu
          500: '#3b82f6', // Bleu principal
          600: '#2563eb', // Bleu foncé
          700: '#1d4ed8', // Bleu profond
          800: '#1e40af', // Bleu très foncé
          900: '#1e3a8a', // Bleu sombre
        },
        accent: {
          purple: '#8b5cf6', // Rouge-violet des légumes
          dark: '#374151', // Marron foncé du texte
          light: '#f9fafb', // Fond clair
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
