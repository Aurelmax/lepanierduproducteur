# 📦 Notice de Gestion des Livraisons - Panier des Producteurs

## 🎯 Vue d'ensemble

Ce document explique le système de gestion des livraisons et points de distribution pour le site "Panier des Producteurs". Le système permet aux clients de choisir entre différents modes de livraison et points de retrait selon leurs besoins.

### **🔄 Cycle Hebdomadaire des Paniers**

- **Mise à jour** : Tous les **mercredis**
- **Disponibilité** : Du **mercredi au mardi soir** selon les lieux de distribution
- **Période de commande** : Variable selon le point choisi (voir délais ci-dessous)

## 🚚 Types de Livraison

### 1. **Retrait sur Place** 📍

- **Description** : Le client récupère sa commande directement au point de distribution
- **Avantages** : Gratuit, contact direct avec le producteur
- **Points disponibles** : 36 points de distribution répartis sur la région

### 2. **Livraison Gratuite** 🚚

- **Description** : Livraison à domicile sans frais supplémentaires
- **Conditions** : Commande minimum de 15€
- **Zones** : Antibes et environs
- **Horaires** : Lundi, Mardi, Mercredi, Vendredi après-midi + Samedi matin

### 3. **Livraison Payante** 💰

- **Description** : Livraison à domicile avec frais
- **Coût** : 3€ à 5€ selon la zone
- **Commande minimum** : 20€
- **Zones** : Cannes, Le Cannet, Nice, Cagnes-sur-Mer, Villeneuve-Loubet

## 📍 Points de Distribution

### **Catégories de Points**

#### 🏢 **Points Entreprise** (Accès restreint)

- **Restriction** : Réservé au personnel uniquement
- **Exemples** :
  - Centre Antoine Lacassagne (Nice)
  - Faculté des Sciences de Valrose (Nice)
  - Stade Allianz Riviera (Nice)
  - AzurVet Centre de Vétérinaires
  - Orange Nice Besset

#### 🏛️ **Points Publics** (Accès libre)

- **Restriction** : Ouvert à tous
- **Exemples** :
  - Gare SNCF Nice Riquier
  - Cannes Palm Beach
  - Cagnes sur Mer Hippodrome
  - Saint Laurent du Var Centre

#### 🏭 **Sophia Antipolis** (Zone technologique)

- **Spécificité** : Zone d'activité technologique
- **Exemples** :
  - Nautipolis Complexe aquatique
  - Société Thales
  - Société ARM
  - STMicroelectronics

#### 🌱 **Production** (Ferme)

- **Localisation** : 145, chemin de la Constance, Antibes
- **Horaires** : 15h-18h
- **Avantage** : Retrait direct à la ferme

## ⏰ Horaires et Délais de Commande

### **Jours de Distribution**

> **📅 Important** : Les paniers sont mis à jour tous les mercredis et disponibles du mercredi au mardi soir selon les lieux.

| Jour         | Points Disponibles                               | Délai de Commande | Période de Disponibilité |
| ------------ | ------------------------------------------------ | ----------------- | ------------------------ |
| **Lundi**    | Cannes, Mouans-Sartoux, Antibes (livraison)      | 9h-16h            | Mercredi précédent - Mardi |
| **Mardi**    | Nice, Cagnes, Saint-Laurent, Antibes (livraison) | 9h-15h            | Mercredi précédent - Mardi |
| **Mercredi** | Antibes (livraison)                              | 9h-16h            | **NOUVEAUX PANIERS** - Mardi suivant |
| **Jeudi**    | Nice Riquier                                     | 13h               | Mercredi - Mardi suivant |
| **Vendredi** | Sophia Antipolis, Antibes (livraison)            | 9h-16h            | Mercredi - Mardi suivant |
| **Samedi**   | Antibes (livraison matin)                        | 10h               | Mercredi - Mardi suivant |

### **Créneaux Horaires**

- **Matin** : 9h-12h
- **Après-midi** : 14h-17h
- **Soir** : 17h-19h

## 💰 Calcul des Frais de Livraison

### **Logique de Calcul**

```typescript
function calculateDeliveryFee(point, orderAmount) {
  // Livraison gratuite
  if (point.type === 'livraison_gratuite' && orderAmount >= 15) {
    return 0;
  }

  // Livraison payante
  if (point.type === 'livraison_payante' && orderAmount >= 20) {
    return point.deliveryCost; // 3€ à 5€
  }

  // Retrait sur place
  if (point.type === 'retrait') {
    return 0;
  }

  // Commande insuffisante
  return null; // Bloque la commande
}
```

### **Exemples de Calcul**

| Type               | Commande | Frais | Total            |
| ------------------ | -------- | ----- | ---------------- |
| Retrait            | 25€      | 0€    | 25€              |
| Livraison gratuite | 20€      | 0€    | 20€              |
| Livraison gratuite | 10€      | ❌    | Commande bloquée |
| Livraison payante  | 25€      | 3€    | 28€              |
| Livraison payante  | 15€      | ❌    | Commande bloquée |

## 🛒 Processus de Commande

### **Étape 1 : Ajout au Panier**

1. Client navigue sur le site
2. Clique sur "Ajouter au panier" pour un produit
3. Produit ajouté au panier (sans sélection de livraison)

### **Étape 2 : Sélection de Livraison**

1. Client clique sur "Commander maintenant"
2. Ouverture du checkout avec sélection de livraison
3. Choix du point de distribution ou mode de livraison
4. Validation des conditions (montant minimum, horaires)
5. **Vérification de la période** : Les paniers sont disponibles du mercredi au mardi

### **Étape 3 : Finalisation**

1. Saisie des informations personnelles
2. Sélection de la date et créneau (selon le cycle hebdomadaire)
3. Choix du mode de paiement (PayPal/Stripe)
4. Confirmation de la commande

### **📅 Gestion des Périodes**

- **Commande pour la semaine en cours** : Possible jusqu'au délai de commande
- **Commande pour la semaine suivante** : Ouverte dès le mercredi (nouveaux paniers)
- **Transition** : Les commandes passées le mardi soir sont pour la semaine suivante

## 🔧 Configuration Technique

### **Structure des Données**

```typescript
interface DistributionPoint {
  id: string;
  name: string;
  address: string;
  city: string;
  postalCode: string;
  type: 'retrait' | 'livraison_gratuite' | 'livraison_payante';
  category: 'public' | 'production' | 'entreprise' | 'sophia_antipolis';
  restriction?: string;
  pickupInfo?: {
    schedule: string;
    orderCutoff: string;
    specificInstructions?: string;
  };
  deliveryInfo?: {
    schedule: string;
    orderCutoff: string;
    deliveryCost?: number;
    minOrderAmount?: number;
  };
}
```

### **Fichiers de Configuration**

- **`src/data/distributionPoints.ts`** : Liste complète des 36 points
- **`src/types/distribution.ts`** : Types TypeScript
- **`src/utils/distributionUtils.ts`** : Fonctions utilitaires
- **`src/components/DistributionPointSelector.tsx`** : Interface de sélection

## 📱 Interface Utilisateur

### **Sélecteur de Points**

- **Filtrage** par type de livraison
- **Recherche** par ville
- **Affichage** des informations clés (adresse, horaires, restrictions)
- **Validation** en temps réel des conditions

### **Affichage dans le Panier**

- **Récapitulatif** des produits
- **Calcul automatique** des frais de livraison
- **Validation** des montants minimums

### **Checkout**

- **Sélection** du point de distribution
- **Saisie** des informations de livraison (si nécessaire)
- **Choix** de la date et du créneau
- **Paiement** sécurisé

## 🚨 Gestion des Erreurs

### **Erreurs Communes**

1. **Montant insuffisant**
   - Message : "Commande minimum de X€ requise"
   - Solution : Ajouter des produits au panier

2. **Point fermé**
   - Message : "Ce point est fermé aujourd'hui"
   - Solution : Choisir un autre point ou jour

3. **Délai dépassé**
   - Message : "Délai de commande dépassé"
   - Solution : Choisir un autre créneau

4. **Accès restreint**
   - Message : "Réservé au personnel uniquement"
   - Solution : Choisir un point public

## 📊 Statistiques et Monitoring

### **Métriques Importantes**

- Nombre de commandes par point
- Taux de conversion par type de livraison
- Satisfaction client par zone
- Temps de traitement des commandes

### **Rapports Disponibles**

- Commandes par jour de la semaine
- Répartition géographique des livraisons
- Analyse des points les plus utilisés
- Suivi des frais de livraison

## 🔄 Maintenance et Mises à Jour

### **Ajout d'un Nouveau Point**

1. Mettre à jour `distributionPoints.ts`
2. Ajouter les informations complètes
3. Tester la sélection dans l'interface
4. Vérifier les calculs de frais

### **Modification des Horaires**

1. Mettre à jour les `schedule` et `orderCutoff`
2. Informer les clients des changements
3. Ajuster les créneaux disponibles

### **Changement de Tarifs**

1. Modifier les `deliveryCost` et `minOrderAmount`
2. Tester les calculs automatiques
3. Mettre à jour la documentation

## 📞 Support Client

### **Questions Fréquentes**

**Q : Puis-je changer mon point de livraison après commande ?**
R : Non, contactez-nous au plus tard 2h avant la livraison.

**Q : Que se passe-t-il si je rate mon créneau ?**
R : Contactez-nous pour reprogrammer, des frais peuvent s'appliquer.

**Q : Puis-je commander pour quelqu'un d'autre ?**
R : Oui, indiquez ses coordonnées dans les commentaires.

**Q : Les frais de livraison sont-ils remboursables ?**
R : Non, sauf en cas d'annulation de notre part.

### **Contact**

- **Email** : contact@panierdesproducteurs.fr
- **Téléphone** : 04 XX XX XX XX
- **Horaires** : 9h-18h, du lundi au vendredi

---

_Dernière mise à jour : Décembre 2024_
_Version du système : 1.0_
