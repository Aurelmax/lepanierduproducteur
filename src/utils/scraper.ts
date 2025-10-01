/**
 * Utilitaires pour extraire les données du site existant
 */

export interface ScrapedProduct {
  name: string;
  price: number;
  unit: 'kg' | 'piece';
  minQuantity: number;
  maxQuantity: number;
  step: number;
  isNew?: boolean;
  isPromotion?: boolean;
}

/**
 * Solution 1: Extraction manuelle des données
 * Copier-coller les données du site et les structurer
 */
export const manualDataExtraction = (): ScrapedProduct[] => {
  // Données extraites manuellement du site
  return [
    {
      name: 'Chou fleur (Taille Grosse)',
      price: 4.9,
      unit: 'piece',
      minQuantity: 1,
      maxQuantity: 10,
      step: 1,
      isNew: true,
    },
    {
      name: 'Échalote',
      price: 4.9,
      unit: 'kg',
      minQuantity: 0.1,
      maxQuantity: 3,
      step: 0.1,
      isNew: true,
    },
    {
      name: 'Céleri',
      price: 3.8,
      unit: 'kg',
      minQuantity: 0.1,
      maxQuantity: 5,
      step: 0.1,
      isNew: true,
    },
    {
      name: 'Haricot vert',
      price: 12.9,
      unit: 'kg',
      minQuantity: 0.1,
      maxQuantity: 5,
      step: 0.1,
      isNew: true,
    },
    {
      name: 'Courge Butternut',
      price: 3.2,
      unit: 'kg',
      minQuantity: 0.5,
      maxQuantity: 10,
      step: 0.5,
      isNew: true,
    },
    {
      name: 'Poivron vert',
      price: 3.9,
      unit: 'kg',
      minQuantity: 0.5,
      maxQuantity: 5,
      step: 0.5,
      isPromotion: true,
    },
    {
      name: "Tomate 'Noir de crimée'",
      price: 4.9,
      unit: 'kg',
      minQuantity: 0.1,
      maxQuantity: 5,
      step: 0.1,
    },
    {
      name: "Oignon 'Paille'",
      price: 2.9,
      unit: 'kg',
      minQuantity: 0.5,
      maxQuantity: 10,
      step: 0.5,
    },
    {
      name: "Tomates 'Roma'",
      price: 3.6,
      unit: 'kg',
      minQuantity: 0.1,
      maxQuantity: 6,
      step: 0.1,
    },
    {
      name: 'Courgettes Blanche - à la Coupe',
      price: 2.9,
      unit: 'kg',
      minQuantity: 0.1,
      maxQuantity: 5,
      step: 0.1,
    },
    {
      name: 'Salade',
      price: 1.8,
      unit: 'piece',
      minQuantity: 1,
      maxQuantity: 10,
      step: 1,
    },
    {
      name: "Tomate 'Ancienne'",
      price: 4.8,
      unit: 'kg',
      minQuantity: 0.1,
      maxQuantity: 10,
      step: 0.1,
    },
    {
      name: "Bt 6 Œufs extra frais 'plein air'",
      price: 4.2,
      unit: 'piece',
      minQuantity: 1,
      maxQuantity: 10,
      step: 1,
    },
    {
      name: 'Courgette',
      price: 3.8,
      unit: 'kg',
      minQuantity: 0.5,
      maxQuantity: 5,
      step: 0.5,
    },
    {
      name: "Fleurs de Courgette 'bouquet de 6 fleurs'",
      price: 3.9,
      unit: 'piece',
      minQuantity: 1,
      maxQuantity: 20,
      step: 1,
    },
    {
      name: "Pomme de Terre 'mona lisa'",
      price: 2.4,
      unit: 'kg',
      minQuantity: 0.5,
      maxQuantity: 10,
      step: 0.5,
    },
    {
      name: 'Concombre Noa',
      price: 1.2,
      unit: 'piece',
      minQuantity: 1,
      maxQuantity: 15,
      step: 1,
    },
    {
      name: "Carotte 'vrac'",
      price: 2.6,
      unit: 'kg',
      minQuantity: 0.1,
      maxQuantity: 10,
      step: 0.1,
    },
    {
      name: "Pomme de Terre 'Grenailles'",
      price: 4.2,
      unit: 'kg',
      minQuantity: 0.1,
      maxQuantity: 5,
      step: 0.1,
    },
    {
      name: 'Pousse Épinard',
      price: 13.9,
      unit: 'kg',
      minQuantity: 0.1,
      maxQuantity: 0.7,
      step: 0.1,
    },
    {
      name: "Botte de Carottes 'fane'",
      price: 3.2,
      unit: 'piece',
      minQuantity: 1,
      maxQuantity: 10,
      step: 1,
    },
    {
      name: 'Fenouil',
      price: 3.8,
      unit: 'kg',
      minQuantity: 0.1,
      maxQuantity: 5,
      step: 0.1,
    },
    {
      name: 'Potiron',
      price: 2.9,
      unit: 'kg',
      minQuantity: 0.5,
      maxQuantity: 10,
      step: 0.5,
    },
    {
      name: "Betterave 'crue'",
      price: 1.6,
      unit: 'piece',
      minQuantity: 1,
      maxQuantity: 15,
      step: 1,
    },
    {
      name: 'Poivron rouge',
      price: 4.4,
      unit: 'kg',
      minQuantity: 0.5,
      maxQuantity: 5,
      step: 0.5,
    },
    {
      name: 'Chou blanc',
      price: 3.4,
      unit: 'kg',
      minQuantity: 0.5,
      maxQuantity: 5,
      step: 0.5,
    },
    {
      name: 'Chou Rouge',
      price: 3.4,
      unit: 'kg',
      minQuantity: 0.5,
      maxQuantity: 5,
      step: 0.5,
    },
    {
      name: 'Botte de cebettes',
      price: 2.2,
      unit: 'piece',
      minQuantity: 1,
      maxQuantity: 9,
      step: 1,
    },
    {
      name: 'Ail',
      price: 13.9,
      unit: 'kg',
      minQuantity: 0.1,
      maxQuantity: 3,
      step: 0.1,
    },
    {
      name: 'Céleri Rave',
      price: 4.2,
      unit: 'kg',
      minQuantity: 0.5,
      maxQuantity: 5,
      step: 0.5,
    },
    {
      name: 'Mesclun',
      price: 12.9,
      unit: 'kg',
      minQuantity: 0.1,
      maxQuantity: 0.7,
      step: 0.1,
    },
    {
      name: 'Roquette',
      price: 13.9,
      unit: 'kg',
      minQuantity: 0.1,
      maxQuantity: 0.2,
      step: 0.1,
    },
  ];
};

/**
 * Solution 2: Script de scraping automatisé
 * Utilise Puppeteer pour extraire les données automatiquement
 */
export const automatedScraping = async (): Promise<ScrapedProduct[]> => {
  // Cette fonction nécessiterait Puppeteer installé
  // npm install puppeteer @types/puppeteer

  const puppeteer = require('puppeteer');

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(
      'https://www.lepanierduproducteur.com/paniers-producteur-personalises-legumes-1.htm',
    );

    // Extraire les données des produits
    const products = await page.evaluate(() => {
      const productElements = document.querySelectorAll('.product-item'); // Sélecteur à adapter
      const products: ScrapedProduct[] = [];

      productElements.forEach(element => {
        const name = element.querySelector('.product-name')?.textContent?.trim();
        const priceText = element.querySelector('.product-price')?.textContent?.trim();
        const unitText = element.querySelector('.product-unit')?.textContent?.trim();

        if (name && priceText && unitText) {
          const price = parseFloat(priceText.replace('€', '').replace(',', '.'));
          const unit = unitText.includes('kg') ? 'kg' : 'piece';

          // Déterminer les quantités disponibles
          const quantitySelect = element.querySelector(
            'select[name="quantity"]',
          ) as HTMLSelectElement;
          const quantities = Array.from(quantitySelect?.options || [])
            .map(option => parseFloat(option.value))
            .filter(qty => !isNaN(qty));

          products.push({
            name,
            price,
            unit,
            minQuantity: Math.min(...quantities),
            maxQuantity: Math.max(...quantities),
            step: quantities.length > 1 ? quantities[1] - quantities[0] : 1,
          });
        }
      });

      return products;
    });

    await browser.close();
    return products;
  } catch (error) {
    console.error('Erreur lors du scraping:', error);
    return [];
  }
};

/**
 * Solution 3: API de scraping avec fetch
 * Plus simple mais limité par CORS
 */
export const fetchScraping = async (): Promise<ScrapedProduct[]> => {
  try {
    // Utiliser un service de proxy CORS ou une API backend
    const response = await fetch('/api/scrape-products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: 'https://www.lepanierduproducteur.com/paniers-producteur-personalises-legumes-1.htm',
      }),
    });

    return await response.json();
  } catch (error) {
    console.error('Erreur lors du fetch scraping:', error);
    return [];
  }
};

/**
 * Solution 4: Parser HTML statique
 * Analyser le HTML téléchargé manuellement
 */
export const parseHTML = (htmlContent: string): ScrapedProduct[] => {
  // Utiliser cheerio ou jsdom pour parser le HTML
  const cheerio = require('cheerio');
  const $ = cheerio.load(htmlContent);

  const products: ScrapedProduct[] = [];

  // Sélecteurs à adapter selon la structure HTML
  $('.product-item').each((index: number, element: any) => {
    const $el = $(element);
    const name = $el.find('.product-name').text().trim();
    const priceText = $el.find('.product-price').text().trim();
    const unitText = $el.find('.product-unit').text().trim();

    if (name && priceText && unitText) {
      const price = parseFloat(priceText.replace('€', '').replace(',', '.'));
      const unit = unitText.includes('kg') ? 'kg' : 'piece';

      products.push({
        name,
        price,
        unit,
        minQuantity: unit === 'kg' ? 0.1 : 1,
        maxQuantity: unit === 'kg' ? 10 : 20,
        step: unit === 'kg' ? 0.1 : 1,
      });
    }
  });

  return products;
};

/**
 * Solution 5: Export/Import de données
 * Le site existant exporte ses données en JSON/CSV
 */
export const importFromExport = async (): Promise<ScrapedProduct[]> => {
  try {
    // Si le site existant a une API ou export
    const response = await fetch('/api/products-export');
    const data = await response.json();

    return data.map((item: any) => ({
      name: item.nom,
      price: item.prix,
      unit: item.unite === 'kg' ? 'kg' : 'piece',
      minQuantity: item.quantite_min,
      maxQuantity: item.quantite_max,
      step: item.step || (item.unite === 'kg' ? 0.1 : 1),
    }));
  } catch (error) {
    console.error("Erreur lors de l'import:", error);
    return [];
  }
};
