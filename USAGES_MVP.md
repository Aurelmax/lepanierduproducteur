# 🎯 Usages du MVP - Panier des Producteurs

## 📋 Vue d'ensemble

Notre MVP (Minimum Viable Product) permet aux clients de commander des paniers de légumes et fruits frais directement du producteur, avec deux modes de commande : **ponctuel** et **abonnement**.

---

## 🎭 Personas et Cas d'usage

### 👨‍👩‍👧‍👦 **Famille avec enfants**

- **Besoin** : Légumes frais réguliers pour toute la famille
- **Usage** : Abonnement familial pour économiser et avoir de la régularité
- **Fréquence** : Hebdomadaire, livraison fixe

### 👤 **Célibataire/Jeune actif**

- **Besoin** : Petites quantités, flexibilité
- **Usage** : Commandes ponctuelles ou abonnement solo
- **Fréquence** : Variable selon les besoins

### 🏢 **Entreprise/Collectivité**

- **Besoin** : Grandes quantités, livraison sur site
- **Usage** : Abonnement familial ou commandes groupées
- **Fréquence** : Régulière, livraison au bureau

---

## 🛒 Parcours Utilisateur Principaux

### **1. 📦 Commande Ponctuelle (Sans abonnement)**

#### **Parcours :**

```
Accueil → Produits → Ajouter au panier → Checkout → Paiement → Confirmation
```

#### **Étapes détaillées :**

1. **Découverte** : Client visite le site
2. **Sélection** : Parcourt les produits sur la page d'accueil ou `/paniers`
3. **Ajout** : Clique "Ajouter au panier" sur un produit
4. **Panier** : Vérifie son panier dans le sidebar
5. **Commande** : Clique "Commander maintenant"
6. **Livraison** : Choisit son point de distribution/livraison
7. **Paiement** : Saisit ses informations et paie
8. **Confirmation** : Reçoit confirmation de commande

#### **Avantages :**

- ✅ Flexibilité totale
- ✅ Pas d'engagement
- ✅ Test du service

#### **Inconvénients :**

- ❌ Prix normal (pas de réduction)
- ❌ Doit recommander chaque semaine
- ❌ Risque d'oublier

---

### **2. 🔄 Abonnement (Commande automatique)**

#### **Parcours :**

```
Accueil → Abonnements → Choisir plan → Créer abonnement → Gestion → Pause/Annulation
```

#### **Étapes détaillées :**

1. **Découverte** : Client découvre les abonnements
2. **Comparaison** : Compare les plans et économies
3. **Sélection** : Choisit son plan d'abonnement
4. **Configuration** : Configure livraison et préférences
5. **Activation** : Active son abonnement
6. **Réception** : Reçoit automatiquement chaque semaine
7. **Gestion** : Peut modifier, mettre en pause ou annuler

#### **Avantages :**

- ✅ **10% de réduction** permanente
- ✅ **Livraison automatique** (gain de temps)
- ✅ **Régularité** garantie
- ✅ **Flexibilité** (pause/annulation possible)

#### **Inconvénients :**

- ❌ Engagement initial
- ❌ Doit gérer l'abonnement

---

## 🏗️ Architecture Fonctionnelle

### **Pages Principales :**

#### **🏠 Page d'accueil (`/`)**

- **Usage** : Découverte et première impression
- **Fonctionnalités** :
  - Hero section avec message principal
  - Produits phares avec ajout direct au panier
  - Avantages du service
  - Témoignages et certifications
  - Newsletter

#### **📦 Page Paniers (`/paniers`)**

- **Usage** : Commande ponctuelle de paniers
- **Fonctionnalités** :
  - Affichage des paniers disponibles
  - Composition de la semaine
  - Options de livraison
  - Ajout au panier
  - Newsletter compacte

#### **🔄 Page Abonnements (`/abonnements`)**

- **Usage** : Création et gestion d'abonnements
- **Fonctionnalités** :
  - Comparaison des plans
  - Calcul des économies
  - Création d'abonnement
  - Gestion des abonnements existants
  - FAQ

#### **📍 Page Distribution (`/distribution`)**

- **Usage** : Information sur les points de livraison
- **Fonctionnalités** :
  - Liste des 36 points de distribution
  - Filtrage par type (retrait/livraison)
  - Détails de chaque point
  - Horaires et restrictions

#### **🛒 Checkout (`/checkout`)**

- **Usage** : Finalisation des commandes
- **Fonctionnalités** :
  - Sélection du point de distribution
  - Calcul des frais de livraison
  - Saisie des informations client
  - Paiement (PayPal/Stripe)
  - Confirmation

---

## 🔧 Fonctionnalités Techniques

### **Gestion du Panier :**

- **Ajout/Suppression** de produits
- **Modification** des quantités
- **Persistance** (localStorage)
- **Calcul automatique** des totaux
- **Sidebar** pour consultation rapide

### **Système de Livraison :**

- **36 points** de distribution
- **3 types** : Retrait, Livraison gratuite, Livraison payante
- **Calcul automatique** des frais
- **Validation** des montants minimums
- **Gestion des horaires** et restrictions

### **Cycle Hebdomadaire :**

- **Mise à jour** : Mercredi 00h00
- **Disponibilité** : Mercredi au mardi 23h59
- **Gestion automatique** des périodes
- **Messages informatifs** sur le cycle
- **Transition automatique** d'une semaine à l'autre
- **Gestion des commandes en retard** (reportées à la semaine suivante)

### **Gestion des Dates :**

- **Cycle hebdomadaire** : Mercredi 00h00 → Mardi 23h59
- **Mise à jour automatique** des compositions chaque mercredi
- **Transition automatique** d'une semaine à l'autre
- **Gestion des commandes en retard** (reportées à la semaine suivante)
- **Messages informatifs** selon la période de commande
- **Calcul automatique** des périodes disponibles

### **Paiement :**

- **Intégration** PayPal/Stripe
- **Validation** des informations
- **Confirmation** de commande
- **Gestion des erreurs**

---

## 📅 Gestion des Dates - Scénarios Détaillés

### **🔄 Transition d'une Semaine à l'Autre**

#### **Mardi 23h59 → Mercredi 00h00 :**

- **Fin** de la période actuelle
- **Début** de la nouvelle période
- **Mise à jour** des compositions de paniers
- **Commandes automatiques** des abonnements
- **Interface** mise à jour

#### **Messages Clients :**

- **Mardi** : "Dernière commande de la semaine"
- **Mercredi** : "Nouveaux paniers disponibles"
- **Jeudi+** : "Paniers de la semaine"

### **📦 Scénarios de Commande**

#### **Commande Lundi (Semaine en Cours) :**

```
Lundi 10h → Commande → Livraison Mardi → Panier semaine en cours
```

#### **Commande Mardi Soir (Transition) :**

```
Mardi 20h → Commande → Livraison Mercredi → Panier semaine suivante
```

#### **Commande Mercredi Matin (Nouveaux Paniers) :**

```
Mercredi 9h → Commande → Livraison selon planning → Nouveaux paniers
```

### **⚠️ Gestion des Retards**

#### **Délai Dépassé :**

- **Message** : "Délai de commande dépassé"
- **Action** : Commande reportée à la semaine suivante
- **Alternative** : Suggestion d'autres créneaux

#### **Point Fermé :**

- **Message** : "Point fermé aujourd'hui"
- **Alternative** : Suggestion d'autres points

---

## 📊 Métriques de Succès

### **Objectifs Business :**

- **Conversion** : % de visiteurs qui commandent
- **Rétention** : % de clients qui repassent commande
- **Abonnements** : % de clients qui s'abonnent
- **Chiffre d'affaires** : Évolution mensuelle

### **Objectifs Utilisateur :**

- **Temps de commande** : < 5 minutes
- **Taux d'erreur** : < 2%
- **Satisfaction** : > 4.5/5
- **Support** : < 24h de réponse

---

## 🚀 Roadmap Évolutive

### **Phase 1 (MVP actuel) :**

- ✅ Commandes ponctuelles
- ✅ Abonnements
- ✅ 36 points de distribution
- ✅ Paiement intégré
- ✅ Cycle hebdomadaire

### **Phase 2 (Évolutions) :**

- 🔄 Comptes utilisateur
- 🔄 Historique des commandes
- 🔄 Personnalisation des paniers
- 🔄 Programme de fidélité
- 🔄 Application mobile

### **Phase 3 (Avancé) :**

- 🔄 IA pour recommandations
- 🔄 Livraison en temps réel
- 🔄 Marketplace multi-producteurs
- 🔄 API pour partenaires

---

## 🎯 Messages Clés

### **Pour les clients :**

- **"Légumes frais du producteur, livrés chez vous"**
- **"Économisez 10% avec nos abonnements"**
- **"36 points de distribution dans la région"**
- **"Récoltés le matin, livrés le jour même"**

### **Pour l'entreprise :**

- **"Fidélisation par les abonnements"**
- **"Prévisibilité des revenus"**
- **"Réduction des coûts marketing"**
- **"Expansion géographique progressive"**

---

## 📞 Support et Contact

### **Points de contact :**

- **Email** : contact@panierdesproducteurs.fr
- **Téléphone** : 06.16.69.70.97
- **Adresse** : 145, chemin de la Constance, Antibes

### **Horaires :**

- **Production** : 15h-18h
- **Support** : 9h-18h (lundi-vendredi)

---

_Document mis à jour : Décembre 2024_
_Version MVP : 1.0_
