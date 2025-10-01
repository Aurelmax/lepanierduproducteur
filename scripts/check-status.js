#!/usr/bin/env node

/**
 * Script de vérification du statut des paniers
 * À exécuter quotidiennement pour vérifier l'état du système
 */

const https = require('https');
const http = require('http');

const API_URL = process.env.API_URL || 'http://localhost:3001';

async function checkStatus() {
  return new Promise((resolve, reject) => {
    const url = new URL('/api/update-baskets', API_URL);
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const client = url.protocol === 'https:' ? https : http;
    
    const req = client.request(url, options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          resolve(result);
        } catch (error) {
          reject(new Error(`Erreur de parsing: ${error.message}`));
        }
      });
    });

    req.on('error', (error) => {
      reject(new Error(`Erreur de requête: ${error.message}`));
    });

    req.end();
  });
}

async function main() {
  console.log(`[${new Date().toISOString()}] Vérification du statut des paniers`);
  
  try {
    const result = await checkStatus();
    
    if (result.success) {
      console.log(`[${new Date().toISOString()}] ✅ Statut: ${result.message}`);
      
      if (result.data?.isNewWeek) {
        console.log(`[${new Date().toISOString()}] 🔔 Nouvelle semaine détectée - Mise à jour recommandée`);
      }
    } else {
      console.log(`[${new Date().toISOString()}] ❌ Erreur de statut: ${result.error}`);
    }
  } catch (error) {
    console.error(`[${new Date().toISOString()}] 💥 Erreur lors de la vérification:`, error.message);
  }
}

// Vérifier si le script est exécuté directement
if (require.main === module) {
  main();
}

module.exports = { checkStatus };
