# 📅 Gestion des mises à jour mensuelles

Ce document explique comment gérer les mises à jour automatiques des paniers sur votre site.

## 🎯 Principe de fonctionnement

### Période de commande
- **Mercredi au mardi** : Période de commande ouverte
- **Mercredi 8h00** : Mise à jour automatique des compositions
- **Mardi 23h59** : Fermeture des commandes

### Cycle hebdomadaire
1. **Mercredi 8h00** : Nouveaux paniers disponibles
2. **Mercredi au mardi** : Commandes ouvertes
3. **Mardi 23h59** : Fermeture des commandes
4. **Mercredi 8h00** : Nouveau cycle

## 🔧 Configuration automatique

### 1. Scripts de mise à jour

#### Script principal
```bash
# Mise à jour automatique (mercredi 8h00)
node scripts/update-baskets.js
```

#### Script de vérification
```bash
# Vérification quotidienne (9h00)
node scripts/check-status.js
```

### 2. Configuration Cron

```bash
# Installer la configuration cron
crontab crontab.example

# Ou configurer manuellement
crontab -e
```

Ajoutez ces lignes :
```cron
# Mise à jour automatique des paniers chaque mercredi à 8h00
0 8 * * 3 cd /path/to/project && node scripts/update-baskets.js >> logs/update-baskets.log 2>&1

# Vérification quotidienne à 9h00
0 9 * * * cd /path/to/project && node scripts/check-status.js >> logs/status-check.log 2>&1
```

### 3. Variables d'environnement

Créez un fichier `.env.local` :
```env
# URL de l'API (production)
API_URL=https://votre-domaine.com

# Token d'administration
ADMIN_TOKEN=votre-token-secret

# Configuration de la base de données
DATABASE_URL=your-database-url
```

## 🖥️ Interface d'administration

### Accès à l'interface
1. Allez sur `/admin`
2. Utilisez le **Gestionnaire de mises à jour**
3. Vérifiez le statut des paniers
4. Déclenchez une mise à jour manuelle si nécessaire

### Fonctionnalités disponibles
- ✅ **Statut en temps réel** : Semaine actuelle et prochaine
- ✅ **Mise à jour manuelle** : Forcer une mise à jour
- ✅ **Notifications** : Statut des mises à jour
- ✅ **Historique** : Dernière mise à jour effectuée

## 📊 API Endpoints

### Vérifier le statut
```bash
GET /api/update-baskets
```

### Déclencher une mise à jour
```bash
POST /api/update-baskets
Authorization: Bearer YOUR_ADMIN_TOKEN
```

## 🔄 Processus de mise à jour

### 1. Vérification automatique
- Chaque mercredi à 8h00
- Vérification si c'est le jour de mise à jour
- Déclenchement automatique si nécessaire

### 2. Mise à jour des compositions
- Récupération des nouvelles compositions
- Mise à jour des paniers
- Envoi de notifications aux abonnés
- Mise à jour du cache

### 3. Notifications
- Email aux abonnés de la newsletter
- Mise à jour des statuts sur le site
- Logs des opérations

## 🚨 Gestion des erreurs

### Logs de surveillance
```bash
# Vérifier les logs de mise à jour
tail -f logs/update-baskets.log

# Vérifier les logs de statut
tail -f logs/status-check.log
```

### Alertes automatiques
- Erreurs de mise à jour
- Échecs de notifications
- Problèmes de base de données

## 📱 Notifications utilisateurs

### Messages automatiques
- **Mercredi** : "🆕 Nouveaux paniers disponibles !"
- **Pendant la semaine** : "⏰ X jours restants pour commander"
- **Mardi** : "❌ Période de commande fermée - Nouveaux paniers mercredi"

### Newsletter automatique
- Envoi chaque mercredi à 8h30
- Compositions des nouveaux paniers
- Informations de livraison

## 🔧 Maintenance

### Tâches régulières
- **Quotidienne** : Vérification du statut
- **Hebdomadaire** : Mise à jour des paniers
- **Mensuelle** : Nettoyage des logs
- **Trimestrielle** : Mise à jour des dépendances

### Surveillance
- Monitoring des performances
- Vérification des logs d'erreur
- Test des notifications
- Sauvegarde des données

## 📞 Support

En cas de problème :
1. Vérifiez les logs dans `/logs/`
2. Testez l'API : `GET /api/update-baskets`
3. Vérifiez la configuration cron
4. Contactez l'administrateur système

---

**Note** : Ce système fonctionne de manière autonome une fois configuré. Les mises à jour se font automatiquement chaque mercredi à 8h00.


