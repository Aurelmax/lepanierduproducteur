# 📊 Diagramme des Usages - MVP Panier des Producteurs

## 🎯 Parcours Utilisateur Principal

```mermaid
graph TD
    A[Client visite le site] --> B{Type de besoin?}

    B -->|Test/Ponctuel| C[Commande Ponctuelle]
    B -->|Régulier/Économie| D[Abonnement]

    C --> C1[Page d'accueil]
    C1 --> C2[Ajouter produit au panier]
    C2 --> C3[Sidebar panier]
    C3 --> C4[Commander maintenant]
    C4 --> C5[Checkout - Sélection livraison]
    C5 --> C6[Paiement]
    C6 --> C7[Confirmation]
    C7 --> C8[Reçoit panier]
    C8 --> C9{Repasse commande?}
    C9 -->|Oui| C1
    C9 -->|Non| END1[Fin]

    D --> D1[Page Abonnements]
    D1 --> D2[Compare les plans]
    D2 --> D3[Choisit son plan]
    D3 --> D4[Configure abonnement]
    D4 --> D5[Active abonnement]
    D5 --> D6[Reçoit automatiquement]
    D6 --> D7[Gère son abonnement]
    D7 --> D8{Pause/Annulation?}
    D8 -->|Non| D6
    D8 -->|Oui| END2[Fin]
```

## 🏗️ Architecture Fonctionnelle

```mermaid
graph LR
    subgraph "Pages Principales"
        A[🏠 Accueil]
        B[📦 Paniers]
        C[🔄 Abonnements]
        D[📍 Distribution]
        E[🛒 Checkout]
    end

    subgraph "Fonctionnalités"
        F[Panier Context]
        G[Système Livraison]
        H[Cycle Hebdomadaire]
        I[Paiement]
    end

    subgraph "Données"
        J[36 Points Distribution]
        K[Produits/Paniers]
        L[Abonnements]
    end

    A --> F
    B --> F
    C --> L
    D --> J
    E --> G
    E --> I

    F --> G
    G --> H
    H --> J
```

## 🎭 Personas et Usages

```mermaid
graph TD
    subgraph "Personas"
        P1[👨‍👩‍👧‍👦 Famille]
        P2[👤 Célibataire]
        P3[🏢 Entreprise]
    end

    subgraph "Usages"
        U1[Abonnement Familial]
        U2[Commandes Ponctuelles]
        U3[Abonnement Solo]
        U4[Commandes Groupées]
    end

    subgraph "Bénéfices"
        B1[Économies 10%]
        B2[Gain de temps]
        B3[Flexibilité]
        B4[Régularité]
    end

    P1 --> U1
    P1 --> U2
    P2 --> U2
    P2 --> U3
    P3 --> U1
    P3 --> U4

    U1 --> B1
    U1 --> B4
    U2 --> B3
    U3 --> B1
    U3 --> B2
    U4 --> B1
    U4 --> B4
```

## 🔄 Cycle de Vie des Commandes

```mermaid
graph LR
    subgraph "Cycle Hebdomadaire"
        A[Mercredi<br/>Mise à jour]
        B[Mercredi-Mardi<br/>Disponibilité]
        C[Commandes<br/>selon délais]
        D[Livraisons<br/>selon planning]
    end

    subgraph "Types de Commande"
        E[Ponctuelle]
        F[Abonnement]
    end

    subgraph "Points de Distribution"
        G[36 Points]
        H[Retrait]
        I[Livraison Gratuite]
        J[Livraison Payante]
    end

    A --> B
    B --> C
    C --> D

    E --> C
    F --> C

    C --> G
    G --> H
    G --> I
    G --> J
```

## 💰 Modèle Économique

```mermaid
graph TD
    subgraph "Revenus"
        R1[Commandes Ponctuelles<br/>Prix normal]
        R2[Abonnements<br/>Prix -10%]
        R3[Frais de Livraison<br/>3-5€]
    end

    subgraph "Coûts"
        C1[Production]
        C2[Livraison]
        C3[Marketing]
        C4[Support]
    end

    subgraph "Avantages"
        A1[Fidélisation]
        A2[Prévisibilité]
        A3[Réduction Marketing]
        A4[Expansion]
    end

    R1 --> A1
    R2 --> A2
    R2 --> A3
    R3 --> A4

    A1 --> C3
    A2 --> C1
    A3 --> C3
    A4 --> C2
```

## 📱 Interface Utilisateur

```mermaid
graph TD
    subgraph "Navigation"
        N1[Header avec Logo]
        N2[Menu Principal]
        N3[Panier Sidebar]
        N4[Footer]
    end

    subgraph "Pages"
        P1[Accueil]
        P2[Paniers]
        P3[Abonnements]
        P4[Distribution]
        P5[Checkout]
    end

    subgraph "Composants"
        C1[ProductCard]
        C2[BasketCard]
        C3[SubscriptionCard]
        C4[DistributionSelector]
        C5[CheckoutForm]
    end

    N1 --> P1
    N2 --> P2
    N2 --> P3
    N2 --> P4
    N3 --> P5

    P1 --> C1
    P2 --> C2
    P3 --> C3
    P4 --> C4
    P5 --> C5
```

## 🎯 Objectifs et Métriques

```mermaid
graph LR
    subgraph "Objectifs Business"
        O1[Conversion<br/>Visiteurs → Clients]
        O2[Rétention<br/>Clients récurrents]
        O3[Abonnements<br/>% d'abonnés]
        O4[CA<br/>Chiffre d'affaires]
    end

    subgraph "Objectifs Utilisateur"
        O5[Temps Commande<br/>< 5 min]
        O6[Taux Erreur<br/>< 2%]
        O7[Satisfaction<br/>> 4.5/5]
        O8[Support<br/>< 24h]
    end

    subgraph "Métriques"
        M1[Analytics]
        M2[Feedback]
        M3[Support]
        M4[Performance]
    end

    O1 --> M1
    O2 --> M1
    O3 --> M1
    O4 --> M1

    O5 --> M4
    O6 --> M4
    O7 --> M2
    O8 --> M3
```

---

_Diagrammes créés avec Mermaid - Octobre 2025_
