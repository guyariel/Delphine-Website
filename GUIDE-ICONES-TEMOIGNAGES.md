# Guide des icônes pour les témoignages

## Icônes actuelles (Emojis)

Les témoignages utilisent actuellement des emojis comme icônes. Voici comment les personnaliser :

### Dans le fichier `index.html`

Recherchez les lignes contenant `<div class="testimonial-avatar">` et modifiez l'emoji :

```html
<!-- Icône par défaut -->
<div class="testimonial-avatar">👤</div>

<!-- Icône vidéo -->
<div class="testimonial-avatar">🎥</div>
```

## Options d'icônes disponibles

### 1. Emojis (solution actuelle - la plus simple)

**Profils homme/femme :**
- 👤 Silhouette générique
- 👨 Homme
- 👩 Femme
- 🧑 Personne
- 👨‍💼 Homme d'affaires
- 👩‍💼 Femme d'affaires
- 👨‍🎓 Étudiant
- 👩‍🎓 Étudiante

**Professions :**
- 💼 Professionnel
- 🎓 Étudiant
- 🏢 Entreprise
- 👔 Business
- 📊 Analyste

**Autres :**
- ⭐ Étoile (témoignage remarquable)
- 💬 Bulle de discussion
- ✨ Étincelles (témoignage excellent)
- 🎯 Cible (objectif atteint)

### 2. Images de profil (recommandé pour plus de professionnalisme)

Si vous avez les photos des personnes qui témoignent :

```html
<div class="testimonial-avatar" style="background-image: url('profil-jean.jpg'); background-size: cover; background-position: center;">
    <!-- Pas besoin d'emoji ici -->
</div>
```

Ajoutez ensuite ce CSS dans `styles.css` :

```css
.testimonial-avatar[style*="background-image"] {
    background: none; /* Retire le dégradé */
    border: 3px solid var(--accent-color);
}
```

### 3. Initiales (élégant et professionnel)

```html
<div class="testimonial-avatar" style="font-size: 1.5rem; font-weight: bold; background: linear-gradient(135deg, #1a4d6d 0%, #2d7a9f 100%);">
    JD
</div>
```

Exemples :
- JD pour Jean Dupont
- ML pour Marie Leblanc
- etc.

## Ajouter un témoignage vidéo

### YouTube

```html
<div class="testimonial">
    <div class="testimonial-avatar">🎥</div>
    <div class="testimonial-video">
        <iframe src="https://www.youtube.com/embed/VOTRE_VIDEO_ID" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
        </iframe>
    </div>
    <p><em>— Nom de la personne</em></p>
</div>
```

Pour trouver l'ID de votre vidéo YouTube :
- URL complète : `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- ID à utiliser : `dQw4w9WgXcQ`

### Vimeo

```html
<div class="testimonial-video">
    <iframe src="https://player.vimeo.com/video/VOTRE_VIDEO_ID" 
            frameborder="0" 
            allow="autoplay; fullscreen; picture-in-picture" 
            allowfullscreen>
    </iframe>
</div>
```

### Vidéo locale (MP4)

```html
<div class="testimonial-video">
    <video controls>
        <source src="temoignage-jean.mp4" type="video/mp4">
        Votre navigateur ne supporte pas la lecture de vidéos.
    </video>
</div>
```

## Afficher/masquer les témoignages

Par défaut, le carrousel affiche :
- **Desktop** : 3 témoignages à la fois
- **Tablette** : 2 témoignages à la fois
- **Mobile** : 1 témoignage à la fois

Les flèches permettent de naviguer entre les témoignages.

## Ordre d'affichage

Les témoignages s'affichent dans l'ordre où ils apparaissent dans le HTML. Pour changer l'ordre, déplacez simplement les blocs `<div class="testimonial">` dans `index.html`.

## Conseils

✅ **Bonnes pratiques** :
- Utilisez des icônes cohérentes (tous emojis OU toutes photos)
- Limitez-vous à 6-9 témoignages pour ne pas surcharger
- Variez les types (texte + 1-2 vidéos maximum)
- Gardez les témoignages concis (2-3 phrases)

❌ **À éviter** :
- Mélanger trop de styles d'icônes différents
- Ajouter trop de témoignages (> 12)
- Des vidéos trop longues (max 2 minutes)
- Des témoignages trop longs qui déséquilibrent la mise en page
