#!/usr/bin/env node

/**
 * Script de mise à jour automatique des paniers
 * À exécuter via cron chaque mercredi à 8h00
 * 
 * Usage: node scripts/update-baskets.js
 * Cron: 0 8 * * 3 cd /path/to/project && node scripts/update-baskets.js
 */

const https = require('https');
const http = require('http');

const API_URL = process.env.API_URL || 'http://localhost:3001';
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'dev-token';

async function triggerUpdate() {
  return new Promise((resolve, reject) => {
    const url = new URL('/api/update-baskets', API_URL);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ADMIN_TOKEN}`
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
  console.log(`[${new Date().toISOString()}] Début de la mise à jour automatique des paniers`);
  
  try {
    const result = await triggerUpdate();
    
    if (result.success) {
      console.log(`[${new Date().toISOString()}] ✅ Mise à jour réussie: ${result.message}`);
      process.exit(0);
    } else {
      console.log(`[${new Date().toISOString()}] ❌ Échec de la mise à jour: ${result.message}`);
      process.exit(1);
    }
  } catch (error) {
    console.error(`[${new Date().toISOString()}] 💥 Erreur lors de la mise à jour:`, error.message);
    process.exit(1);
  }
}

// Vérifier si le script est exécuté directement
if (require.main === module) {
  main();
}

module.exports = { triggerUpdate };
