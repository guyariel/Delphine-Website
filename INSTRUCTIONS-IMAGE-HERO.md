# Instructions pour ajouter l'image de fond du Hero

## Comment ajouter votre image de fond

1. **Préparez votre image** :
   - Format recommandé : JPG ou PNG
   - Dimensions recommandées : 1920x1080 pixels minimum
   - Poids : < 500 KB pour une bonne performance
   - Nom suggéré : `hero-image.jpg`

2. **Placez l'image** :
   - Mettez votre image dans le même dossier que vos fichiers HTML
   - Assurez-vous que le nom correspond à celui dans le CSS : `hero-image.jpg`

3. **Le CSS est déjà configuré** :
   - L'image est référencée dans `styles.css` ligne ~149
   - Un overlay bleu semi-transparent est appliqué automatiquement
   - Cela assure que le texte blanc reste lisible

## Pour alterner entre le dégradé et l'image

### Option 1 : Dégradé uniquement (fond bleu uni)
Dans `styles.css`, modifiez la section `.hero` ainsi :

```css
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
    /* Option 1: Dégradé uniquement */
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
    
    /* Option 2: Image avec overlay */
    /* background: linear-gradient(135deg, rgba(26, 77, 109, 0.85) 0%, rgba(45, 122, 159, 0.85) 100%), 
                url('hero-image.jpg') center/cover no-repeat; */
    
    position: relative;
    padding: 0 3rem;
    text-align: center;
}
```

### Option 2 : Image avec overlay (configuration actuelle)
```css
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
    /* Option 1: Dégradé uniquement */
    /* background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%); */
    
    /* Option 2: Image avec overlay */
    background: linear-gradient(135deg, rgba(26, 77, 109, 0.85) 0%, rgba(45, 122, 159, 0.85) 100%), 
                url('hero-image.jpg') center/cover no-repeat;
    
    position: relative;
    padding: 0 3rem;
    text-align: center;
}
```

## Ajuster l'intensité de l'overlay

Pour rendre l'image plus ou moins visible, modifiez les valeurs `rgba` :
- `rgba(26, 77, 109, 0.85)` → le dernier chiffre (0.85) contrôle l'opacité
- `0.5` = image très visible, overlay léger
- `0.85` = bon équilibre (valeur actuelle)
- `0.95` = image à peine visible, overlay très foncé

Exemple pour une image plus visible :
```css
background: linear-gradient(135deg, rgba(26, 77, 109, 0.6) 0%, rgba(45, 122, 159, 0.6) 100%), 
            url('hero-image.jpg') center/cover no-repeat;
```

## Conseils pour le choix de l'image

✅ **Bonnes images** :
- Photos de conférence, salle de réunion
- Personnes en situation de présentation
- Microphone, scène, public
- Images avec espace pour le texte au centre
- Couleurs qui s'harmonisent avec le bleu

❌ **À éviter** :
- Images trop chargées ou avec beaucoup de détails
- Texte déjà présent dans l'image
- Couleurs trop vives qui entrent en conflit avec le texte blanc
- Images de mauvaise qualité ou pixelisées
