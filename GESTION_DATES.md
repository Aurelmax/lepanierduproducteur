# 📅 Gestion des Dates - Cycle Hebdomadaire

## 🎯 Vue d'ensemble

Le système de gestion des dates est crucial pour comprendre comment fonctionne la transition d'une semaine à l'autre et comment les clients peuvent commander pour différentes périodes.

---

## 🔄 Cycle Hebdomadaire Détaillé

### **📅 Structure de la Semaine**

```
MERCREDI (Jour 0) → JEUDI → VENDREDI → SAMEDI → DIMANCHE → LUNDI → MARDI (Jour 6)
     ↑                                                                      ↑
Mise à jour                                                          Fin de disponibilité
Nouveaux paniers                                                      des paniers
```

### **⏰ Horaires de Mise à Jour**

- **Mercredi 00h00** : Nouveaux paniers disponibles
- **Mercredi 00h00 → Mardi 23h59** : Période de disponibilité
- **Mardi 23h59** : Fin de la période, transition vers la semaine suivante

---

## 🛒 Gestion des Commandes par Période

### **📦 Semaine en Cours (Mercredi → Mardi)**

#### **Période de Commande :**

- **Début** : Mercredi 00h00
- **Fin** : Selon le point de distribution (voir délais ci-dessous)
- **Paniers** : Composition fixée depuis le mercredi précédent

#### **Exemples de Délais :**

- **Production** : Commande jusqu'à 4h avant livraison
- **Entreprises** : Commande jusqu'à 1h avant livraison
- **Livraisons** : Commande jusqu'à 3h avant livraison

### **📦 Semaine Suivante (Mercredi suivant → Mardi d'après)**

#### **Période de Commande :**

- **Début** : Mercredi 00h00 (nouveaux paniers)
- **Fin** : Selon le point de distribution
- **Paniers** : Nouvelle composition disponible

---

## 🎯 Scénarios de Commande

### **Scénario 1 : Commande Lundi pour la Semaine en Cours**

```
Lundi 10h → Client commande → Livraison Mardi → Panier de la semaine en cours
```

**Détails :**

- **Période** : Semaine du mercredi précédent au mardi suivant
- **Composition** : Fixée depuis le mercredi précédent
- **Délai** : Respecte le délai du point de distribution

### **Scénario 2 : Commande Mardi Soir pour la Semaine Suivante**

```
Mardi 20h → Client commande → Livraison Mercredi → Panier de la semaine suivante
```

**Détails :**

- **Période** : Semaine du mercredi suivant au mardi d'après
- **Composition** : Nouveaux paniers disponibles
- **Transition** : Automatique vers la semaine suivante

### **Scénario 3 : Commande Mercredi Matin**

```
Mercredi 9h → Client commande → Livraison selon planning → Panier de la semaine en cours
```

**Détails :**

- **Période** : Semaine du mercredi au mardi suivant
- **Composition** : Nouveaux paniers du jour
- **Début** : Nouvelle semaine officielle

---

## 🔧 Fonctionnement Technique

### **Calcul Automatique des Périodes**

```typescript
// Exemple de logique de calcul
function getCurrentWeekPeriod(date: Date) {
  const dayOfWeek = date.getDay(); // 0 = Dimanche, 3 = Mercredi

  if (dayOfWeek >= 3) {
    // Mercredi ou après : semaine en cours
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - (dayOfWeek - 3));
    startOfWeek.setHours(0, 0, 0, 0);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);

    return { start: startOfWeek, end: endOfWeek };
  } else {
    // Dimanche, Lundi, Mardi : semaine précédente
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - (dayOfWeek + 4));
    startOfWeek.setHours(0, 0, 0, 0);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);

    return { start: startOfWeek, end: endOfWeek };
  }
}
```

### **Messages Informatifs**

#### **Pendant la Semaine en Cours :**

- **"Paniers disponibles du [date] au [date]"**
- **"Commande pour la semaine en cours"**

#### **Pendant la Transition :**

- **"Nouveaux paniers disponibles dès mercredi"**
- **"Commande pour la semaine suivante"**

#### **Après la Mise à Jour :**

- **"Nouveaux paniers de la semaine"**
- **"Composition mise à jour"**

---

## 📊 Tableau de Gestion des Périodes

| Jour         | Période Disponible | Statut              | Message Client                    |
| ------------ | ------------------ | ------------------- | --------------------------------- |
| **Mercredi** | Semaine en cours   | ✅ Nouveaux paniers | "Nouveaux paniers disponibles"    |
| **Jeudi**    | Semaine en cours   | ✅ Disponible       | "Paniers de la semaine"           |
| **Vendredi** | Semaine en cours   | ✅ Disponible       | "Paniers de la semaine"           |
| **Samedi**   | Semaine en cours   | ✅ Disponible       | "Paniers de la semaine"           |
| **Dimanche** | Semaine en cours   | ✅ Disponible       | "Paniers de la semaine"           |
| **Lundi**    | Semaine en cours   | ✅ Disponible       | "Paniers de la semaine"           |
| **Mardi**    | Semaine en cours   | ⚠️ Dernier jour     | "Dernière commande de la semaine" |

---

## 🎯 Cas Spéciaux

### **Abonnements Automatiques**

#### **Commande Automatique :**

- **Mercredi 00h00** : Système commande automatiquement
- **Période** : Semaine du mercredi au mardi suivant
- **Composition** : Nouveaux paniers du jour

#### **Gestion des Pauses :**

- **Pause** : Abonnement mis en pause, pas de commande automatique
- **Reprise** : Reprend à la prochaine période disponible

### **Commandes en Retard**

#### **Délai Dépassé :**

- **Message** : "Délai de commande dépassé pour ce créneau"
- **Suggestion** : "Commande pour la semaine suivante"
- **Redirection** : Vers la semaine suivante

#### **Point Fermé :**

- **Message** : "Ce point est fermé aujourd'hui"
- **Alternatives** : Suggestion d'autres points ou créneaux

---

## 🔄 Transition Automatique

### **Processus de Transition :**

1. **Mardi 23h59** : Fin de la période actuelle
2. **Mercredi 00h00** : Nouveaux paniers disponibles
3. **Mercredi 00h00** : Commandes automatiques des abonnements
4. **Mercredi 00h00** : Mise à jour de l'interface client

### **Messages de Transition :**

#### **Avant la Transition (Mardi) :**

- **"Dernière commande de la semaine"**
- **"Nouveaux paniers disponibles demain"**

#### **Pendant la Transition (Mercredi) :**

- **"Nouveaux paniers disponibles"**
- **"Composition mise à jour"**

#### **Après la Transition (Jeudi+) :**

- **"Paniers de la semaine"**
- **"Disponibles jusqu'à mardi"**

---

## 📱 Interface Utilisateur

### **Affichage des Dates :**

#### **Header de la Page :**

```
📅 Semaine du 15/01 au 21/01
🕐 Nouveaux paniers disponibles le mercredi
```

#### **Cartes de Produits :**

```
🥬 Panier Fraîcheur SOLO - 12€
📅 Disponible du 15/01 au 21/01
⏰ Commande jusqu'à mardi 15h
```

#### **Checkout :**

```
📦 Votre commande pour la semaine du 15/01 au 21/01
📍 Livraison prévue : Mardi 16h
```

---

## 🎯 Bonnes Pratiques

### **Pour les Clients :**

- ✅ **Commander tôt** dans la semaine pour plus de choix
- ✅ **Vérifier les délais** de son point de distribution
- ✅ **Planifier à l'avance** pour les abonnements

### **Pour l'Administration :**

- ✅ **Mettre à jour** les compositions le mercredi
- ✅ **Vérifier** les commandes automatiques
- ✅ **Informer** les clients des changements

---

## 📞 Support

### **Questions Fréquentes :**

**Q : Puis-je commander pour la semaine suivante ?**
R : Oui, dès le mercredi, vous pouvez commander pour la semaine suivante.

**Q : Que se passe-t-il si je commande en retard ?**
R : Votre commande sera reportée à la semaine suivante.

**Q : Mes abonnements sont-ils affectés par les transitions ?**
R : Non, ils se mettent à jour automatiquement chaque mercredi.

---

_Document mis à jour : Décembre 2024_
_Version : 1.0_
