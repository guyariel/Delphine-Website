# Site Web - Delphine Bousquet Hazoumé

Site web professionnel et moderne pour coaching en prise de parole, pitch et média-training.

## ✨ Caractéristiques

- ✅ Design moderne et épuré inspiré des meilleurs sites de coaching
- ✅ Header transparent qui change au scroll
- ✅ Hero section plein écran avec support d'image de fond
- ✅ Système de dégradé bleu commenté (facile à alterner)
- ✅ Carrousel de témoignages avec navigation par flèches
- ✅ Icônes personnalisables pour chaque témoignage
- ✅ Support des témoignages vidéo (YouTube, Vimeo, MP4)
- ✅ Sections parfaitement alignées (full-width)
- ✅ Animations fluides et transitions professionnelles
- ✅ Navigation sticky responsive
- ✅ Formulaire de contact stylisé
- ✅ Design 100% responsive (mobile, tablette, desktop)
- ✅ Optimisé pour tous les navigateurs modernes

## 📁 Structure des fichiers

- `index.html` - Page d'accueil avec hero moderne et carrousel
- `prise-de-parole.html` - Page Prise de Parole en Public
- `pitch.html` - Page Formation Pitch
- `media-training.html` - Page Média-Training
- `format.html` - Page Formats de formation
- `parcours.html` - Page Parcours professionnel
- `styles.css` - Feuille de style CSS moderne
- `script.js` - Fonctionnalités JavaScript (carrousel, navigation)
- `README.md` - Ce fichier
- `INSTRUCTIONS-IMAGE-HERO.md` - Guide pour ajouter l'image de fond
- `GUIDE-ICONES-TEMOIGNAGES.md` - Guide pour personnaliser les témoignages

## 🚀 Installation

1. Extrayez tous les fichiers dans un même dossier
2. Ouvrez `index.html` dans votre navigateur web
3. Tous les liens de navigation fonctionneront automatiquement

## 🎯 Quick Start - Personnalisations principales

### 1. Ajouter votre image de fond au Hero
📖 **Consultez le fichier `INSTRUCTIONS-IMAGE-HERO.md` pour le guide complet**

Résumé rapide :
- Placez votre image (ex: `hero-image.jpg`) dans le dossier du site
- L'image s'affichera automatiquement avec un overlay bleu
- Pour revenir au dégradé : décommentez la ligne dans `styles.css`

### 2. Personnaliser les témoignages
📖 **Consultez le fichier `GUIDE-ICONES-TEMOIGNAGES.md` pour le guide complet**

Résumé rapide :
- Modifiez les emojis dans les `<div class="testimonial-avatar">`
- Ajoutez des témoignages vidéo (YouTube, Vimeo, MP4)
- Utilisez les flèches pour naviguer entre les témoignages

### 3. Alterner entre dégradé et image de fond
Dans `styles.css`, section `.hero` :
- Commentez/décommentez les lignes pour changer le fond
- Ajustez l'opacité de l'overlay (0.6 = léger, 0.9 = foncé)

## 🎨 Personnalisation

### Changer les couleurs

Dans `styles.css`, modifiez les variables CSS (lignes 8-16) :
```css
:root {
    --primary-color: #1a4d6d;      /* Bleu principal */
    --secondary-color: #2d7a9f;     /* Bleu secondaire */
    --accent-color: #e8b44d;        /* Doré accent */
    --dark-text: #2c3e50;           /* Texte foncé */
    --light-text: #5a6c7d;          /* Texte clair */
}
```

### Ajouter une image au hero

Dans `index.html`, vous pouvez ajouter une image de fond au hero en modifiant la section :
```css
.hero {
    background: linear-gradient(135deg, rgba(26, 77, 109, 0.9) 0%, rgba(45, 122, 159, 0.9) 100%), 
                url('votre-image.jpg');
    background-size: cover;
    background-position: center;
}
```

### Ajouter l'image du livre

Dans `parcours.html`, remplacez le placeholder par :
```html
<img src="livre-benin.jpg" alt="Bénin envoûtement africain" style="max-width: 300px; border-radius: 10px; box-shadow: 0 5px 20px rgba(0,0,0,0.1);">
```

## 📱 Responsive

Le site s'adapte automatiquement à toutes les tailles d'écran :
- **Desktop** : Navigation horizontale, sections larges
- **Tablette** : Adaptation fluide des espacements
- **Mobile** : Menu hamburger, sections empilées

## 🌐 Mise en ligne

### Option 1 : Netlify (Recommandé - Gratuit)
1. Allez sur [netlify.com](https://netlify.com)
2. Glissez-déposez le dossier du site
3. Votre site est en ligne en quelques secondes !

### Option 2 : GitHub Pages (Gratuit)
1. Créez un repository sur GitHub
2. Uploadez tous les fichiers
3. Activez GitHub Pages dans Settings

### Option 3 : Hébergement classique
1. Connectez-vous via FTP à votre hébergeur
2. Uploadez tous les fichiers dans le dossier public_html
3. Le site est accessible immédiatement

## 🎨 Palette de couleurs

- **Bleu Principal** : #1a4d6d
- **Bleu Secondaire** : #2d7a9f
- **Doré Accent** : #e8b44d
- **Texte Foncé** : #2c3e50
- **Texte Clair** : #5a6c7d
- **Arrière-plan** : #f5f8fa

## 💡 Fonctionnalités JavaScript

- Header transparent qui devient opaque au scroll
- Menu mobile avec animation
- Mise en évidence de la page active
- Formulaire de contact fonctionnel
- Fermeture du menu mobile au clic extérieur
- Animations au scroll pour les sections

## 📞 Contact

Pour toute question ou personnalisation :
- Téléphone : +229 01 97 28 25 49
- Email : delphbousquet@gmail.com

## 📄 Licence

© 2025 Delphine Bousquet Hazoumé. Tous droits réservés.

## 📄 Licence

© 2025 Delphine Bousquet Hazoumé. Tous droits réservés.
