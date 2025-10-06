# 📊 Diagrammes de Gestion des Livraisons

## 🛒 Flux de Commande

```mermaid
graph TD
    A[Client visite le site] --> B[Parcourt les produits]
    B --> C[Clique "Ajouter au panier"]
    C --> D[Produit ajouté au panier]
    D --> E[Clique "Commander maintenant"]
    E --> F[Ouverture du checkout]
    F --> G[Sélection du point de distribution]
    G --> H[Vérification du cycle hebdomadaire]
    H --> I{Type de livraison?}

    I -->|Retrait| J[Point de retrait]
    I -->|Livraison gratuite| K[Vérification montant ≥ 15€]
    I -->|Livraison payante| L[Vérification montant ≥ 20€]

    J --> M[Saisie informations personnelles]
    K --> N{Montant OK?}
    L --> O{Montant OK?}

    M -->|Oui| L
    M -->|Non| O[Erreur: Montant insuffisant]
    N -->|Oui| P[Calcul frais de livraison]
    N -->|Non| O

    P --> L
    L --> Q[Sélection date et créneau]
    Q --> R[Choix mode de paiement]
    R --> S[Confirmation commande]
    S --> T[Email de confirmation]
    T --> U[Préparation commande]
    U --> V[Livraison/Retrait]
```

## 🏢 Architecture des Points de Distribution

```mermaid
graph LR
    A[Points de Distribution] --> B[Points Publics]
    A --> C[Points Entreprise]
    A --> D[Sophia Antipolis]
    A --> E[Production]

    B --> B1[Gare Nice Riquier]
    B --> B2[Cannes Palm Beach]
    B --> B3[Cagnes Hippodrome]
    B --> B4[Saint Laurent Centre]

    C --> C1[Centre Lacassagne]
    C --> C2[Fac Valrose]
    C --> C3[Stade Allianz]
    C --> C4[AzurVet]

    D --> D1[Nautipolis]
    D --> D2[Thales]
    D --> D3[ARM]
    D --> D4[STMicroelectronics]

    E --> E1[Ferme Antibes]
```

## 💰 Calcul des Frais

```mermaid
flowchart TD
    A[Commande] --> B{Montant de la commande}
    B --> C{Type de livraison}

    C -->|Retrait| D[Frais = 0€]
    C -->|Livraison gratuite| E{Montant ≥ 15€?}
    C -->|Livraison payante| F{Montant ≥ 20€?}

    E -->|Oui| G[Frais = 0€]
    E -->|Non| H[❌ Commande bloquée]

    F -->|Oui| I[Frais = 3-5€ selon zone]
    F -->|Non| H

    D --> J[Total final]
    G --> J
    I --> J
```

## ⏰ Planning Hebdomadaire

```mermaid
gantt
    title Planning des Distributions
    dateFormat  HH:mm
    axisFormat %H:%M

    section Lundi
    Cannes Palm Beach    :done, lundi1, 11:00, 14:00
    Mouans Sartoux      :done, lundi2, 11:00, 12:00
    Livraison Antibes   :done, lundi3, 14:00, 19:00

    section Mardi
    Nice Riquier        :done, mardi1, 16:00, 19:00
    Cagnes Hippodrome   :done, mardi2, 10:20, 10:30
    Saint Laurent       :done, mardi3, 10:40, 11:20
    Livraison Antibes   :done, mardi4, 14:00, 19:00

    section Mercredi
    Livraison Antibes   :done, mercredi1, 14:00, 19:00

    section Jeudi
    Nice Riquier        :done, jeudi1, 16:00, 19:00

    section Vendredi
    Sophia Antipolis    :done, vendredi1, 10:30, 16:30
    Livraison Antibes   :done, vendredi2, 14:00, 19:00

    section Samedi
    Livraison Antibes   :done, samedi1, 09:00, 14:00
```

## 🔄 Processus de Validation

```mermaid
stateDiagram-v2
    [*] --> SelectionProduit
    SelectionProduit --> AjoutPanier
    AjoutPanier --> SelectionLivraison
    SelectionLivraison --> ValidationMontant

    ValidationMontant --> MontantOK : Montant suffisant
    ValidationMontant --> MontantInsuffisant : Montant insuffisant

    MontantInsuffisant --> SelectionLivraison
    MontantOK --> SaisieInfos
    SaisieInfos --> SelectionCreneau
    SelectionCreneau --> Paiement
    Paiement --> Confirmation
    Confirmation --> [*]

    state MontantInsuffisant {
        [*] --> AffichageErreur
        AffichageErreur --> [*]
    }
```

## 📱 Interface Utilisateur

```mermaid
graph TB
    A[Page d'accueil] --> B[Section Produits Phares]
    B --> C[Cartes Produits]
    C --> D[Bouton "Ajouter au panier"]
    D --> E[Panier Sidebar]
    E --> F[Bouton "Commander maintenant"]
    F --> G[Modal Checkout]

    G --> H[Sélecteur de Points]
    H --> I[Liste des Points]
    I --> J[Filtres par Type]
    J --> K[Recherche par Ville]
    K --> L[Sélection du Point]
    L --> M[Validation]
    M --> N[Formulaire Client]
    N --> O[Paiement]
    O --> P[Confirmation]
```

## 🚨 Gestion des Erreurs

```mermaid
flowchart TD
    A[Erreur détectée] --> B{Type d'erreur?}

    B -->|Montant insuffisant| C[Afficher message d'erreur]
    B -->|Point fermé| D[Proposer alternatives]
    B -->|Délai dépassé| E[Suggérer autres créneaux]
    B -->|Accès restreint| F[Rediriger vers points publics]

    C --> G[Retour à la sélection]
    D --> H[Liste des points ouverts]
    E --> I[Calendrier des créneaux]
    F --> J[Filtrage automatique]

    G --> K[Client modifie sa commande]
    H --> L[Client choisit un autre point]
    I --> M[Client sélectionne un créneau]
    J --> N[Client voit les options disponibles]
```

## 📊 Métriques et Suivi

```mermaid
graph LR
    A[Données de Commande] --> B[Analytics]
    B --> C[Commandes par Point]
    B --> D[Commandes par Type]
    B --> E[Commandes par Jour]
    B --> F[Revenus par Zone]

    C --> G[Dashboard Admin]
    D --> G
    E --> G
    F --> G

    G --> H[Rapports Hebdomadaires]
    G --> I[Rapports Mensuels]
    G --> J[Alertes Temps Réel]
```

---

_Ces diagrammes peuvent être visualisés avec un outil supportant Mermaid comme GitHub, GitLab, ou des éditeurs comme VS Code avec l'extension Mermaid._
