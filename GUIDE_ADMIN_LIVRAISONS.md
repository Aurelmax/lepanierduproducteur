# 🔧 Guide Administrateur - Gestion des Livraisons

## 📋 Table des Matières

1. [Cycle Hebdomadaire des Paniers](#cycle-hebdomadaire)
2. [Configuration des Points de Distribution](#configuration-des-points)
3. [Gestion des Horaires](#gestion-des-horaires)
4. [Modification des Tarifs](#modification-des-tarifs)
5. [Suivi des Commandes](#suivi-des-commandes)
6. [Maintenance du Système](#maintenance)
7. [Dépannage](#dépannage)

## 🔄 Cycle Hebdomadaire des Paniers

### **Règles de Base**

- **Mise à jour** : Tous les **mercredis**
- **Disponibilité** : Du **mercredi au mardi soir** selon les lieux de distribution
- **Période de commande** : Variable selon le point choisi

### **Gestion des Périodes**

#### **Semaine en Cours**
- **Période** : Mercredi au mardi suivant
- **Commandes** : Possibles jusqu'au délai de commande du point
- **Paniers** : Composition fixée depuis le mercredi précédent

#### **Semaine Suivante**
- **Ouverture** : Dès le mercredi (nouveaux paniers)
- **Commandes** : Pour la semaine du mercredi suivant au mardi d'après
- **Transition** : Les commandes passées le mardi soir sont pour la semaine suivante

### **Fonctions Utilitaires**

```typescript
// Vérifier si c'est le jour de mise à jour
isBasketUpdateDay() // true si c'est mercredi

// Obtenir la période de disponibilité actuelle
getBasketAvailabilityPeriod() // { start: Date, end: Date }

// Calculer le prochain mercredi
getNextBasketUpdateDate() // Date du prochain mercredi

// Vérifier si une commande est pour la semaine suivante
isOrderForNextWeek(orderDate, deliveryDate) // boolean

// Obtenir le label de la semaine
getBasketWeekLabel() // "Semaine du 15/01 au 21/01"
```

### **Messages Informatifs**

- **Information générale** : "Les paniers sont mis à jour tous les mercredis et disponibles du mercredi au mardi soir"
- **Transition de semaine** : "Commande pour la semaine suivante (nouveaux paniers disponibles le mercredi)"

## 🏢 Configuration des Points de Distribution

### **Ajouter un Nouveau Point**

1. **Ouvrir le fichier de configuration** :

   ```bash
   src/data/distributionPoints.ts
   ```

2. **Ajouter un nouvel objet** dans le tableau `distributionPoints` :

   ```typescript
   {
     id: 'nouveau-point-unique',
     name: 'NOM DU POINT',
     address: 'Adresse complète',
     city: 'Ville',
     postalCode: 'Code postal',
     type: 'retrait' | 'livraison_gratuite' | 'livraison_payante',
     category: 'public' | 'production' | 'entreprise' | 'sophia_antipolis',
     restriction: 'Réservé au Personnel', // Optionnel
     pickupInfo: {
       schedule: 'Lundi (14h-17h)',
       orderCutoff: 'Lundi 12h',
       specificInstructions: 'Instructions spéciales',
       preciseLocation: 'Localisation précise',
       contactEmail: 'contact@example.com'
     },
     deliveryInfo: { // Seulement pour les livraisons
       schedule: 'Lundi (14h-19h)',
       orderCutoff: 'Lundi 16h',
       deliveryCost: 3, // En euros
       minOrderAmount: 20, // Montant minimum
       deliveryZones: ['Zone 1', 'Zone 2']
     }
   }
   ```

3. **Tester la configuration** :
   - Redémarrer le serveur de développement
   - Vérifier l'apparition du point dans l'interface
   - Tester la sélection et les calculs

### **Modifier un Point Existant**

1. **Localiser le point** par son `id`
2. **Modifier les propriétés** nécessaires
3. **Vérifier la cohérence** des données
4. **Tester les changements**

### **Supprimer un Point**

1. **Commenter ou supprimer** l'objet du tableau
2. **Vérifier** qu'aucune commande en cours n'utilise ce point
3. **Informer les clients** si nécessaire

## ⏰ Gestion des Horaires

### **Modification des Horaires de Distribution**

1. **Identifier le point** à modifier
2. **Mettre à jour** la propriété `schedule` :

   ```typescript
   pickupInfo: {
     schedule: 'Nouveaux horaires', // Ex: 'Mardi (15h-18h)'
     orderCutoff: 'Nouveau délai',  // Ex: 'Mardi 13h'
   }
   ```

3. **Ajuster les créneaux** dans l'interface de checkout si nécessaire

### **Gestion des Jours Fériés**

1. **Créer un système de dates** spéciales
2. **Modifier temporairement** les horaires
3. **Informer les clients** via notification

### **Horaires Saisonniers**

1. **Créer des configurations** saisonnières
2. **Mettre à jour** automatiquement selon la période
3. **Prévoir la transition** entre les saisons

## 💰 Modification des Tarifs

### **Changer les Frais de Livraison**

1. **Localiser** les points de livraison payante
2. **Modifier** la propriété `deliveryCost` :

   ```typescript
   deliveryInfo: {
     deliveryCost: 4, // Nouveau prix en euros
   }
   ```

3. **Tester** le calcul automatique dans l'interface

### **Ajuster les Montants Minimums**

1. **Modifier** `minOrderAmount` pour les livraisons gratuites :

   ```typescript
   deliveryInfo: {
     minOrderAmount: 18, // Nouveau montant minimum
   }
   ```

2. **Vérifier** la validation dans le checkout

### **Tarifs Spéciaux par Zone**

1. **Créer des zones** spécifiques
2. **Définir des tarifs** différenciés
3. **Implémenter la logique** de calcul

## 📊 Suivi des Commandes

### **Tableau de Bord Administrateur**

Accéder à : `http://localhost:3000/admin`

**Métriques disponibles** :

- Nombre de commandes par jour
- Répartition par type de livraison
- Points les plus utilisés
- Revenus par zone

### **Export des Données**

1. **Commandes par période** :

   ```bash
   npm run export-orders -- --period=week
   ```

2. **Statistiques par point** :
   ```bash
   npm run export-stats -- --point=all
   ```

### **Alertes et Notifications**

**Configuration des alertes** :

- Commandes en retard
- Points surchargés
- Problèmes de livraison
- Montants anormaux

## 🔧 Maintenance du Système

### **Sauvegarde des Données**

1. **Sauvegarde quotidienne** :

   ```bash
   npm run backup -- --type=full
   ```

2. **Sauvegarde des configurations** :
   ```bash
   npm run backup-config
   ```

### **Mise à Jour des Données**

1. **Vérifier la cohérence** des données
2. **Tester** les nouvelles configurations
3. **Déployer** en production
4. **Surveiller** les performances

### **Optimisation des Performances**

1. **Cache des points** de distribution
2. **Optimisation** des requêtes
3. **Compression** des données
4. **CDN** pour les images

## 🚨 Dépannage

### **Problèmes Courants**

#### **Point n'apparaît pas dans la liste**

- ✅ Vérifier l'`id` unique
- ✅ Vérifier la syntaxe JSON
- ✅ Redémarrer le serveur
- ✅ Vérifier les filtres actifs

#### **Calcul de frais incorrect**

- ✅ Vérifier `deliveryCost` et `minOrderAmount`
- ✅ Tester avec différents montants
- ✅ Vérifier la logique de calcul
- ✅ Contrôler les conditions

#### **Horaires incorrects**

- ✅ Vérifier le format de `schedule`
- ✅ Contrôler `orderCutoff`
- ✅ Tester les créneaux disponibles
- ✅ Vérifier le fuseau horaire

#### **Erreurs de validation**

- ✅ Vérifier les types TypeScript
- ✅ Contrôler les propriétés requises
- ✅ Tester les cas limites
- ✅ Vérifier les messages d'erreur

### **Logs et Debugging**

1. **Activer les logs** détaillés :

   ```bash
   DEBUG=* npm run dev
   ```

2. **Vérifier les logs** de l'application
3. **Analyser** les erreurs JavaScript
4. **Tester** en mode développement

### **Support Technique**

**En cas de problème** :

1. **Documenter** le problème
2. **Reproduire** l'erreur
3. **Collecter** les logs
4. **Contacter** l'équipe technique

## 📱 Interface d'Administration

### **Accès au Panel Admin**

URL : `http://localhost:3000/admin`

**Fonctionnalités** :

- Gestion des points de distribution
- Modification des horaires
- Ajustement des tarifs
- Suivi des commandes
- Statistiques en temps réel

### **Permissions et Sécurité**

1. **Authentification** requise
2. **Rôles** d'administrateur
3. **Audit trail** des modifications
4. **Sauvegarde** automatique

## 🔄 Procédures de Mise à Jour

### **Mise à Jour Mineure**

1. **Modifier** les fichiers de configuration
2. **Tester** en local
3. **Déployer** en staging
4. **Valider** avec l'équipe
5. **Déployer** en production

### **Mise à Jour Majeure**

1. **Planifier** la maintenance
2. **Informer** les utilisateurs
3. **Sauvegarder** les données
4. **Déployer** la nouvelle version
5. **Vérifier** le bon fonctionnement
6. **Surveiller** les 24h suivantes

## 📞 Contacts et Support

### **Équipe Technique**

- **Développeur Principal** : [Nom] - [Email]
- **DevOps** : [Nom] - [Email]
- **Support Client** : [Nom] - [Email]

### **Escalade des Problèmes**

1. **Niveau 1** : Support client
2. **Niveau 2** : Équipe technique
3. **Niveau 3** : Développeur principal
4. **Urgence** : Contact direct

---

_Guide mis à jour le : Décembre 2024_
_Version : 1.0_
_Prochaine révision : Janvier 2025_
