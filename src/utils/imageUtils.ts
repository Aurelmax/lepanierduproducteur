/**
 * Utilitaires pour la gestion des images
 */

export interface ImageData {
  name: string;
  url: string;
  localPath?: string;
  optimizedUrl?: string;
}

/**
 * URLs d'images optimisées pour les fruits
 * Basées sur les données du site lepanierduproducteur.com
 */
export const FRUIT_IMAGES: { [key: string]: string } = {
  // Raisins
  "Raisin 'Noir'":
    'https://images.unsplash.com/photo-1615485925534-598c5a0b0b4b?w=400&h=300&fit=crop&auto=format',
  "Raisin 'Blanc'":
    'https://images.unsplash.com/photo-1615485925534-598c5a0b0b4b?w=400&h=300&fit=crop&auto=format',

  // Pommes
  "Pomme 'Gala'":
    'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=300&fit=crop&auto=format',
  "Pomme 'Golden'":
    'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=300&fit=crop&auto=format',

  // Poires
  "Poire 'Guyot'":
    'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=300&fit=crop&auto=format',

  // Prunes
  "Prune 'Quetsche'":
    'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format',
  "Prune 'Jaune'":
    'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format',

  // Figues
  Figue:
    'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format',

  // Brugnons
  Brugnon:
    'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format',
};

/**
 * URLs d'images optimisées pour les légumes
 * Basées sur les données du site lepanierduproducteur.com
 */
export const VEGETABLE_IMAGES: { [key: string]: string } = {
  // Chou
  'Chou fleur (Taille Grosse)':
    'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format',
  'Chou blanc':
    'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format',
  'Chou Rouge':
    'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format',

  // Échalotes et oignons
  Echalote:
    'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format',
  "Oignon 'Paille'":
    'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format',
  'Botte de cebettes':
    'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format',

  // Céleri
  Celeri:
    'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format',
  'Céleri Rave':
    'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format',

  // Haricots
  'Haricot vert':
    'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format',

  // Courges
  'Courge Butternut':
    'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format',
  'Courge de Nice':
    'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format',
  Potiron:
    'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format',

  // Poivrons
  'Poivron vert':
    'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format',
  'Poivron rouge':
    'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format',

  // Tomates
  "Tomate 'Noir de crimée'":
    'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format',
  "Tomates 'Roma'":
    'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format',
  "Tomate 'Ancienne'":
    'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format',

  // Courgettes
  'Courgettes Blanche - à la Coupe':
    'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format',
  Courgette:
    'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format',
  "Fleurs de Courgette 'bouquet de 6 fleurs'":
    'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format',

  // Salades
  Salade:
    'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format',
  Mesclun:
    'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format',
  Roquette:
    'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format',
  'Pousse Epinard':
    'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format',

  // Pommes de terre
  "Pomme de Terre 'mona lisa'":
    'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format',
  "Pomme de Terre 'Grenailles'":
    'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format',

  // Carottes
  "Carotte 'vrac'":
    'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format',
  "Botte de Carottes 'fane'":
    'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format',

  // Autres légumes
  'Concombre Noa':
    'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format',
  Fenouil:
    'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format',
  "Betterave 'crue'":
    'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format',
  Ail: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format',

  // Œufs
  "Bt 6 Oeufs extra frais 'plein air'":
    'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format',
};

/**
 * Génère une URL d'image optimisée pour un fruit
 */
export function getFruitImageUrl(fruitName: string): string {
  // Vérifier si on a une image spécifique
  if (FRUIT_IMAGES[fruitName]) {
    return FRUIT_IMAGES[fruitName];
  }

  // Fallback vers une image générique basée sur le type de fruit
  const fruitType = fruitName.toLowerCase();

  if (fruitType.includes('pomme')) {
    return 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=300&fit=crop&auto=format';
  }

  if (fruitType.includes('raisin')) {
    return 'https://images.unsplash.com/photo-1615485925534-598c5a0b0b4b?w=400&h=300&fit=crop&auto=format';
  }

  if (fruitType.includes('prune') || fruitType.includes('figue') || fruitType.includes('brugnon')) {
    return 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format';
  }

  if (fruitType.includes('poire')) {
    return 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=300&fit=crop&auto=format';
  }

  // Image générique pour les fruits
  return 'https://images.unsplash.com/photo-1615485925534-598c5a0b0b4b?w=400&h=300&fit=crop&auto=format';
}

/**
 * Génère une URL d'image optimisée pour un légume
 */
export function getVegetableImageUrl(vegetableName: string): string {
  // Vérifier si on a une image spécifique
  if (VEGETABLE_IMAGES[vegetableName]) {
    return VEGETABLE_IMAGES[vegetableName];
  }

  // Fallback vers une image générique basée sur le type de légume
  const vegetableType = vegetableName.toLowerCase();

  if (vegetableType.includes('tomate')) {
    return 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format';
  }

  if (vegetableType.includes('courgette') || vegetableType.includes('courge')) {
    return 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format';
  }

  if (vegetableType.includes('carotte') || vegetableType.includes('pomme de terre')) {
    return 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format';
  }

  if (
    vegetableType.includes('salade') ||
    vegetableType.includes('mesclun') ||
    vegetableType.includes('roquette')
  ) {
    return 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format';
  }

  if (vegetableType.includes('chou') || vegetableType.includes('céleri')) {
    return 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format';
  }

  if (vegetableType.includes('poivron')) {
    return 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format';
  }

  if (vegetableType.includes('haricot')) {
    return 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format';
  }

  if (vegetableType.includes('œuf') || vegetableType.includes('oeuf')) {
    return 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format';
  }

  // Image générique pour les légumes
  return 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&auto=format';
}

/**
 * Génère une URL d'image placeholder avec le nom du fruit
 */
export function getPlaceholderImageUrl(
  fruitName: string,
  width: number = 400,
  height: number = 300,
): string {
  const encodedName = encodeURIComponent(fruitName);
  return `https://via.placeholder.com/${width}x${height}/4ade80/ffffff?text=${encodedName}`;
}

/**
 * Vérifie si une URL d'image est valide
 */
export function isValidImageUrl(url: string): boolean {
  try {
    new URL(url);
    return url.match(/\.(jpg|jpeg|png|gif|webp)$/i) !== null;
  } catch {
    return false;
  }
}

/**
 * Optimise une URL d'image Unsplash
 */
export function optimizeUnsplashUrl(
  url: string,
  width: number = 400,
  height: number = 300,
): string {
  if (!url.includes('unsplash.com')) {
    return url;
  }

  // Ajouter les paramètres d'optimisation
  const urlObj = new URL(url);
  urlObj.searchParams.set('w', width.toString());
  urlObj.searchParams.set('h', height.toString());
  urlObj.searchParams.set('fit', 'crop');
  urlObj.searchParams.set('auto', 'format');
  urlObj.searchParams.set('q', '80'); // Qualité

  return urlObj.toString();
}
