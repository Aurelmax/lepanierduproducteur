/**
 * Script pour extraire les URLs des images du site lepanierduproducteur.com
 * Usage: node scripts/extract-images.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const SITE_URL =
  'https://www.lepanierduproducteur.com/paniers-producteur-personalises-fruits-2.htm';

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, response => {
        let data = '';

        response.on('data', chunk => {
          data += chunk;
        });

        response.on('end', () => {
          resolve(data);
        });
      })
      .on('error', err => {
        reject(err);
      });
  });
}

function extractImageUrls(html) {
  const imageUrls = [];

  // Regex pour trouver toutes les balises img
  const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  let match;

  while ((match = imgRegex.exec(html)) !== null) {
    const src = match[1];

    // Filtrer les images pertinentes (pas les icônes, logos, etc.)
    if (
      src.includes('fruit') ||
      src.includes('produit') ||
      src.includes('.jpg') ||
      src.includes('.jpeg') ||
      src.includes('.png') ||
      src.includes('image')
    ) {
      // Convertir les URLs relatives en absolues
      let fullUrl = src;
      if (src.startsWith('/')) {
        fullUrl = 'https://www.lepanierduproducteur.com' + src;
      } else if (src.startsWith('./')) {
        fullUrl = 'https://www.lepanierduproducteur.com/' + src.substring(2);
      }

      imageUrls.push(fullUrl);
    }
  }

  return [...new Set(imageUrls)]; // Supprimer les doublons
}

function extractProductData(html) {
  const products = [];

  // Extraire les noms de produits et prix
  const productRegex = /<h3[^>]*>([^<]+)<\/h3>[\s\S]*?(\d+,\d+)\s*€/gi;
  let match;

  while ((match = productRegex.exec(html)) !== null) {
    const name = match[1].trim();
    const price = match[2].replace(',', '.');

    products.push({
      name: name,
      price: parseFloat(price),
      image: `https://images.unsplash.com/photo-${Math.random().toString(36).substr(2, 9)}?w=300&h=200&fit=crop`, // Placeholder
    });
  }

  return products;
}

async function main() {
  try {
    console.log('🔍 Extraction des images du site lepanierduproducteur.com...');

    const html = await fetchPage(SITE_URL);
    console.log('✅ Page récupérée avec succès');

    const imageUrls = extractImageUrls(html);
    console.log(`📸 ${imageUrls.length} images trouvées:`);
    imageUrls.forEach((url, index) => {
      console.log(`  ${index + 1}. ${url}`);
    });

    const products = extractProductData(html);
    console.log(`\n🍎 ${products.length} produits trouvés:`);
    products.forEach((product, index) => {
      console.log(`  ${index + 1}. ${product.name} - ${product.price}€`);
    });

    // Sauvegarder les données
    const outputDir = path.join(__dirname, '../public/images-data');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const data = {
      extractedAt: new Date().toISOString(),
      siteUrl: SITE_URL,
      imageUrls: imageUrls,
      products: products,
    };

    fs.writeFileSync(path.join(outputDir, 'extracted-data.json'), JSON.stringify(data, null, 2));

    console.log(`\n💾 Données sauvegardées dans: ${outputDir}/extracted-data.json`);

    // Générer un fichier de mapping pour les images
    const imageMapping = {};
    products.forEach((product, index) => {
      if (imageUrls[index]) {
        imageMapping[product.name] = imageUrls[index];
      }
    });

    fs.writeFileSync(
      path.join(outputDir, 'image-mapping.json'),
      JSON.stringify(imageMapping, null, 2)
    );

    console.log('🎯 Mapping des images créé: image-mapping.json');
  } catch (error) {
    console.error("❌ Erreur lors de l'extraction:", error.message);
  }
}

if (require.main === module) {
  main();
}

module.exports = { extractImageUrls, extractProductData };
