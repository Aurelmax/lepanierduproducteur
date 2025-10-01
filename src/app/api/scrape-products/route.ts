import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    // Solution 1: Utiliser un service de proxy CORS
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
    const response = await fetch(proxyUrl);
    const data = await response.json();

    // Parser le HTML
    const html = data.contents;
    const products = parseHTML(html);

    return NextResponse.json(products);
  } catch (error) {
    console.error('Erreur scraping:', error);
    return NextResponse.json({ error: 'Erreur lors du scraping' }, { status: 500 });
  }
}

function parseHTML(html: string) {
  // Parser simple pour extraire les données
  const products = [];

  // Regex pour extraire les informations des produits
  const productRegex = /<div[^>]*class="[^"]*product[^"]*"[^>]*>([\s\S]*?)<\/div>/g;
  let match;

  while ((match = productRegex.exec(html)) !== null) {
    const productHtml = match[1];

    // Extraire le nom
    const nameMatch = productHtml.match(/<h[1-6][^>]*>([^<]+)<\/h[1-6]>/);
    const name = nameMatch ? nameMatch[1].trim() : '';

    // Extraire le prix
    const priceMatch = productHtml.match(/(\d+,\d+)\s*€/);
    const price = priceMatch ? parseFloat(priceMatch[1].replace(',', '.')) : 0;

    // Extraire l'unité
    const unitMatch = productHtml.match(/€\s*(le\s*kg|pièce)/);
    const unit = unitMatch ? (unitMatch[1].includes('kg') ? 'kg' : 'piece') : 'kg';

    if (name && price > 0) {
      products.push({
        name,
        price,
        unit,
        minQuantity: unit === 'kg' ? 0.1 : 1,
        maxQuantity: unit === 'kg' ? 10 : 20,
        step: unit === 'kg' ? 0.1 : 1,
      });
    }
  }

  return products;
}
