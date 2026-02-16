# Guide - Ajouter votre photo sur la page Parcours

## Emplacement de la photo

La photo apparaît à **droite des deux premiers paragraphes** sur la page Parcours, créant une mise en page élégante et professionnelle.

## Comment ajouter votre photo

### 1. Préparez votre image

**Caractéristiques recommandées :**
- **Format** : JPG ou PNG
- **Orientation** : Portrait (verticale) de préférence
- **Dimensions** : 800x1000 pixels minimum (ratio 4:5)
- **Poids** : < 300 KB pour une bonne performance
- **Nom suggéré** : `delphine-conference.jpg`

**Type de photo recommandé :**
- Photo professionnelle en situation de conférence/présentation
- Photo de vous en action (microphone, public, scène)
- Photo portrait professionnel
- Arrière-plan sobre ou flou

### 2. Placez l'image

1. Renommez votre photo en `delphine-conference.jpg`
2. Placez-la dans le même dossier que vos fichiers HTML
3. L'image s'affichera automatiquement !

### 3. Si vous utilisez un nom différent

Si vous préférez un autre nom de fichier, modifiez la ligne dans `parcours.html` :

```html
<!-- Ligne actuelle -->
<img src="delphine-conference.jpg" alt="Delphine Bousquet Hazoumé en conférence">

<!-- Changez "delphine-conference.jpg" par votre nom de fichier -->
<img src="VOTRE-PHOTO.jpg" alt="Delphine Bousquet Hazoumé en conférence">
```

## Comportement de l'image

### Desktop
- L'image est positionnée à droite du texte
- Elle reste visible lors du scroll (sticky)
- Taille : 400px de large maximum
- Effet hover : léger zoom et ombre renforcée

### Tablette et Mobile
- L'image passe en dessous du texte
- Prend toute la largeur disponible
- Centrée automatiquement

## Personnalisation avancée

### Changer la taille de l'image

Dans `styles.css`, cherchez `.parcours-image` et modifiez :

```css
.parcours-intro {
    grid-template-columns: 1fr 400px; /* Changez 400px */
}

.parcours-image {
    max-width: 400px; /* Changez 400px */
}
```

**Suggestions :**
- `350px` : Plus petite, plus de place pour le texte
- `400px` : Équilibrée (valeur actuelle)
- `450px` : Plus grande, plus d'impact visuel

### Désactiver l'effet sticky

Si vous ne voulez pas que l'image reste visible au scroll, dans `styles.css` :

```css
.parcours-image {
    position: relative; /* Au lieu de sticky */
    top: 0;            /* Au lieu de 120px */
}
```

### Ajouter un cadre ou bordure

Dans `styles.css`, ajoutez dans `.parcours-image img` :

```css
.parcours-image img {
    /* ... styles existants ... */
    border: 5px solid var(--accent-color);
    /* ou */
    border: 2px solid var(--primary-color);
}
```

## Si vous n'avez pas encore de photo

Le site affiche un placeholder élégant avec le texte :
`[Photo de Delphine Bousquet Hazoumé]`

Cela vous permet de :
- Voir la mise en page finale avant d'avoir la photo
- Mettre le site en ligne progressivement
- Ajouter la photo plus tard sans toucher au code

## Résolution des problèmes

### L'image ne s'affiche pas
1. Vérifiez que le nom du fichier est exactement `delphine-conference.jpg`
2. Vérifiez que l'image est dans le même dossier que `parcours.html`
3. Vérifiez l'extension (.jpg, .jpeg ou .png)
4. Essayez de rafraîchir la page (Ctrl+F5 ou Cmd+Shift+R)

### L'image est déformée
- Utilisez une image avec un ratio proche de 4:5 (portrait)
- Évitez les images trop larges (paysage)

### L'image est floue
- Utilisez une image d'au moins 800x1000 pixels
- Exportez en qualité maximale depuis votre éditeur photo

### L'image est trop lourde (lent à charger)
- Compressez avec un outil comme TinyPNG.com
- Visez < 300 KB
- Format JPG avec qualité 80-85% est optimal

## Exemple de structure de fichiers

```
votre-site/
├── index.html
├── parcours.html
├── delphine-conference.jpg  ← Votre photo ici
├── styles.css
└── script.js
```

## Conseils photo professionnelle

✅ **Bonnes pratiques** :
- Photo nette et bien éclairée
- Regard vers la caméra ou vers le texte (à gauche)
- Expression engageante et professionnelle
- Vêtements professionnels
- Arrière-plan sobre

❌ **À éviter** :
- Photos de vacances ou trop décontractées
- Selfies
- Photos floues ou mal cadrées
- Arrière-plan chargé ou distrayant
- Images trop sombres
