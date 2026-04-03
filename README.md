# Alpine Devs Summit Romandie 🏔️

**[Français](#french)** | **[English](#english)**

---

## <a id="english"></a>English Version

Official website of the Alpine Devs Summit Romandie - A conference dedicated to the developer community of Romandie.

### About the Project

Alpine Devs Summit Romandie is a modern web platform built with **Vue 3**, **Vite**, and **Vuetify**. This website presents the event, its values, speakers, and allows participants to subscribe to the newsletter.

### Key Features

- 🎨 **Modern Design** with Vuetify and a unique visual identity based on the Swiss Alps
- 🌐 **Multilingual** (FR/EN) with vue-i18n
- 📱 **Responsive** - Accessible on all devices
- ⚡ **Optimal Performance** thanks to Vite
- 🎯 **Newsletter Integration** with Infomaniak
- ♿ **Accessibility** - Complies with modern web standards

## Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** : v20.19.0 or >=22.12.0
- **npm** : v10.0.0 or higher (included with Node.js)
- **Git** : For cloning the repository

## Setting up the Development Environment

### 1. Clone the Repository

```bash
git clone https://github.com/Alpine-Devs-Summit-Romandie/alpine-devs-summit-romandie.ch.git
cd alpine-devs-summit-romandie
```

### 2. Install Dependencies

```bash
npm install
```

This command installs all project dependencies:
- **Vue 3** : Progressive framework for user interfaces
- **Vite** : Ultra-fast bundler for development
- **Vuetify** : Material Design components
- **Vue Router** : Client-side routing
- **Pinia** : State management
- **Vue i18n** : Internationalization
- **TypeScript** : Static typing support

### 3. Start the Development Server

```bash
npm run dev
```

The site will be accessible at `http://localhost:5173` (or the port indicated in case of conflict).

**Hot Module Replacement (HMR)** is enabled - your direct modifications are instantly reflected in the browser.

## Available Scripts

### Development

```bash
# Start the development server with hot reload
npm run dev
```

### Production

```bash
# Type-check, compile and minify for production
npm run build

# Local preview of the production build
npm run preview
```

### Code Quality

```bash
# Run all linters (oxlint + eslint)
npm run lint

# Fix linting issues automatically
npm run lint:oxlint
npm run lint:eslint

# Format code with Prettier
npm run format
```

## Project Structure

```
src/
├── assets/           # Images, fonts and static resources
│   └── fonts/        # Montserrat Variable Font
├── components/       # Reusable Vue components
│   ├── NewsletterIk.vue
│   ├── Topbar.vue
│   ├── Values.vue
│   └── Welcome.vue
├── layout/          # Layout components
│   ├── Header.vue
│   └── Footer.vue
├── locale/          # Translation files (i18n)
│   ├── en.ts
│   ├── fr.ts
│   └── locale.ts
├── plugins/         # Vue plugin configuration
│   ├── pinia.ts
│   ├── vue-i18n.ts
│   ├── vue-router.ts
│   └── vuetify.ts
├── stores/          # Global state Pinia
│   └── counter.ts
├── styles/          # Global SCSS styles and Vuetify theme
│   ├── settings.scss
│   └── variables.scss
├── views/           # Application pages
│   └── HomeView.vue
├── App.vue          # Root component
└── main.ts          # Application entry point
```

## Technical Points

### TypeScript Support

TypeScript is configured to work with `.vue` files. We use `vue-tsc` for type checking.

### Import Aliases

The `@` alias points to the `src/` folder:

```typescript
// Instead of:
import Component from '../../../components/MyComponent.vue'

// Use:
import Component from '@/components/MyComponent.vue'
```

### Internationalization

Translation files are located in `src/locale/`:
- `fr.ts` - French
- `en.ts` - English

To add a new translation key:

```typescript
// src/locale/fr.ts
export const fr = {
  welcome: 'Bienvenue',
  // ...
}
```

Use it in your components:

```vue
<template>
  <h1>{{ $t('welcome') }}</h1>
</template>
```

### Vuetify Theme

The theme is configured in `src/plugins/vuetify.ts`. Primary colors are based on the Alpine visual identity:

- **Glacier Blue** (#0077C0) - Primary color
- **Alpine Green** (#00A36C) - Secondary color
- **Rock Gray** (#333333) - Accents/Text

For more details, see `IDENTITE-VISUELLE.MD`

## Deployment

### Production Build

```bash
npm run build
```

This command generates a `dist/` folder ready for deployment.

## Contributing

Contributions are welcome! Here's how to participate:

### Contribution Workflow

1. **Fork the Repository**

```bash
# On GitHub, click "Fork"
```

2. **Clone Your Fork**

```bash
git clone https://github.com/your-username/alpine-devs-summit-romandie.git
cd alpine-devs-summit-romandie
```

3. **Create a Branch for Your Feature**

```bash
# For a feature
git checkout -b feature/my-new-feature

# For a bug fix
git checkout -b fix/bug-fix
```

4. **Make Your Changes**

- Write clean, well-documented code
- Respect existing project standards
- Test your changes locally

5. **Test and Lint Your Code**

```bash
npm run lint
npm run format
npm run type-check
```

6. **Commit Your Changes**

```bash
git add .
git commit -m "feat: clear description of your modification"
```

**Commit Convention** (follow Conventional Commits format):
- `feat:` for a new feature
- `fix:` for a bug fix
- `docs:` for documentation
- `style:` for formatting/style changes
- `refactor:` for code refactoring
- `test:` for adding/modifying tests
- `chore:` for project maintenance

7. **Push to Your Fork**

```bash
git push origin feature/my-new-feature
```

8. **Create a Pull Request**

- Go to the original repository
- Click "New Pull Request"
- Select your branch
- Clearly describe your changes
- Wait for review

### Contribution Guidelines

- 📝 Respect the existing code style
- 🧪 Test your changes before submitting
- 📚 Update documentation if necessary
- 🌐 Ensure the site works in both French AND English
- ♿ Respect web accessibility (WCAG 2.1)
- 🎨 Respect the project's visual identity

### Accepted Contribution Types

- 🐛 Bug fixes
- ✨ New features
- 📖 Documentation improvements
- 🎨 Design/UI improvements
- 🌍 Translations or language corrections
- ⚡ Performance optimizations
- ♿ Accessibility improvements

### Need Help?

- Open an **Issue** to report a bug or suggest a feature
- Consult the [Vite documentation](https://vite.dev/)
- Consult the [Vue 3 documentation](https://vuejs.org/)
- Consult the [Vuetify documentation](https://vuetifyjs.com/)

## License

This project is licensed under the [MIT](LICENSE.md) License.

## Contacts and Links

- 🌐 Website : [alpine-devs-summit-romandie.ch](https://alpine-devs-summit-romandie.ch)
- 📧 Email : info@alpine-devs-summit-romandie.ch
- 🐙 GitHub : [alpine-devs-summit-romandie](https://github.com/Alpine-Devs-Summit-Romandie)

---

**Made with ❤️ for the developers of the Romandie**

---

## <a id="french"></a>Version Française

Site web officiel de l'Alpine Devs Summit Romandie - Une conférence dédiée à la communauté des développeur·e·s Romand·e·s.

### À propos du projet

L'Alpine Devs Summit Romandie est une plateforme web moderne construite avec **Vue 3**, **Vite** et **Vuetify**. Ce site présente l'événement, ses valeurs, les orateurs et permet aux participants de s'inscrire à la newsletter.

### Caractéristiques principales

- 🎨 **Design moderne** avec Vuetify et une identité visuelle unique basée sur les Alpes romandes
- 🌐 **Multilingue** (FR/EN) avec vue-i18n
- 📱 **Responsive** - Accessible sur tous les appareils
- ⚡ **Performance optimale** grâce à Vite
- 🎯 **Intégration newsletter** avec Infomaniak
- ♿ **Accessibilité** - Respecte les standards web modernes

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés :

- **Node.js** : v20.19.0 ou >=22.12.0
- **npm** : v10.0.0 ou supérieur (inclus avec Node.js)
- **Git** : Pour cloner le repository

## Configuration de l'environnement de développement

### 1. Cloner le repository

```bash
git clone https://github.com/Alpine-Devs-Summit-Romandie/alpine-devs-summit-romandie.ch.git
cd alpine-devs-summit-romandie
```

### 2. Installation des dépendances

```bash
npm install
```

Cette commande installe toutes les dépendances du projet :
- **Vue 3** : Framework progressif pour les interfaces utilisateur
- **Vite** : Bundler ultra-rapide pour le développement
- **Vuetify** : Composants Material Design
- **Vue Router** : Routage côté client
- **Pinia** : Gestion d'état
- **Vue i18n** : Internationalisation
- **TypeScript** : Support du typage statique

### 3. Lancer le serveur de développement

```bash
npm run dev
```

Le site sera accessible à `http://localhost:5173` (ou le port indiqué en cas de conflit).

**Hot Module Replacement (HMR)** est activé - vos modifications en direct se reflètent immédiatement dans le navigateur.

## Scripts disponibles

### Développement

```bash
# Lancer le serveur de développement avec rechargement à chaud
npm run dev
```

### Production

```bash
# Type-check, compiler et minifier pour la production
npm run build

# Aperçu local du build de production
npm run preview
```

### Qualité du code

```bash
# Lancer tous les linters (oxlint + eslint)
npm run lint

# Fixer les problèmes de linting automatiquement
npm run lint:oxlint
npm run lint:eslint

# Formater le code avec Prettier
npm run format
```

## Structure du projet

```
src/
├── assets/           # Images, fonts et ressources statiques
│   └── fonts/        # Police Montserrat Variable
├── components/       # Composants réutilisables Vue
│   ├── NewsletterIk.vue
│   ├── Topbar.vue
│   ├── Values.vue
│   └── Welcome.vue
├── layout/          # Composants de mise en page
│   ├── Header.vue
│   └── Footer.vue
├── locale/          # Fichiers de traduction (i18n)
│   ├── en.ts
│   ├── fr.ts
│   └── locale.ts
├── plugins/         # Configuration des plugins Vue
│   ├── pinia.ts
│   ├── vue-i18n.ts
│   ├── vue-router.ts
│   └── vuetify.ts
├── stores/          # État global Pinia
│   └── counter.ts
├── styles/          # Styles SCSS globaux et thème Vuetify
│   ├── settings.scss
│   └── variables.scss
├── views/           # Pages de l'application
│   └── HomeView.vue
├── App.vue          # Composant racine
└── main.ts          # Point d'entrée de l'application
```

## Points techniques

### Support TypeScript

TypeScript est configuré pour fonctionner avec les fichiers `.vue`. Nous utilisons `vue-tsc` pour la vérification des types.

### Alias d'import

L'alias `@` pointe vers le dossier `src/` :

```typescript
// Au lieu de :
import Component from '../../../components/MyComponent.vue'

// Utilisez :
import Component from '@/components/MyComponent.vue'
```

### Internationalisation

Les fichiers de traduction sont situés dans `src/locale/` :
- `fr.ts` - Français
- `en.ts` - English

Pour ajouter une nouvelle clé de traduction :

```typescript
// src/locale/fr.ts
export const fr = {
  welcome: 'Bienvenue',
  // ...
}
```

Utilisez-la dans vos composants :

```vue
<template>
  <h1>{{ $t('welcome') }}</h1>
</template>
```

### Thème Vuetify

Le thème est configuré dans `src/plugins/vuetify.ts`. Les couleurs principales sont basées sur l'identité visuelle Alpine :

- **Bleu Glacier** (#0077C0) - Couleur primaire
- **Vert Alpin** (#00A36C) - Couleur secondaire
- **Gris Roche** (#333333) - Accents/Texte

Pour plus de détails, consultez `IDENTITE-VISUELLE.MD`

## Déploiement

### Build de production

```bash
npm run build
```

Cette commande génère un dossier `dist/` prêt pour le déploiement.

### Variables d'environnement

(Aucune pour le moment.)

## Contribution

Les contributions sont les bienvenues ! Voici comment participer :

### Workflow de contribution

1. **Fork le repository**

```bash
# Sur GitHub, cliquez sur "Fork"
```

2. **Cloner votre fork**

```bash
git clone https://github.com/votre-username/alpine-devs-summit-romandie.git
cd alpine-devs-summit-romandie
```

3. **Créer une branche pour votre fonctionnalité**

```bash
# Pour une feature
git checkout -b feature/ma-nouvelle-fonctionnalité

# Pour un bug fix
git checkout -b fix/correction-bug
```

4. **Effectuer vos modifications**

- Écrivez du code propre et bien documenté
- Respectez les normes existantes du projet
- Testez vos modifications localement

5. **Tester et linter votre code**

```bash
npm run lint
npm run format
npm run type-check
```

6. **Committer vos changements**

```bash
git add .
git commit -m "feat: description claire de votre modification"
```

**Convention de commit** (suivre le format Conventional Commits) :
- `feat:` pour une nouvelle fonctionnalité
- `fix:` pour une correction de bug
- `docs:` pour la documentation
- `style:` pour les changements de formatage/style
- `refactor:` pour un refactoring du code
- `test:` pour ajouter/modifier des tests
- `chore:` pour la maintenance du projet

7. **Pousser vers votre fork**

```bash
git push origin feature/ma-nouvelle-fonctionnalité
```

8. **Créer une Pull Request**

- Allez sur le repository original
- Cliquez sur "New Pull Request"
- Sélectionnez votre branche
- Décrivez clairement vos modifications
- Attendez la review

### Lignes directrices de contribution

- 📝 Respectez le style de code existant
- 🧪 Testez vos modifications avant de soumettre
- 📚 Mettez à jour la documentation si nécessaire
- 🌐 Assurez-vous que le site fonctionne en français ET en anglais
- ♿ Respectez l'accessibilité web (WCAG 2.1)
- 🎨 Respectez l'identité visuelle du projet

### Types de contributions acceptées

- 🐛 Corrections de bugs
- ✨ Nouvelles fonctionnalités
- 📖 Améliorations de la documentation
- 🎨 Améliorations du design/UI
- 🌍 Traductions ou corrections linguistiques
- ⚡ Optimisations de performance
- ♿ Améliorations d'accessibilité

### Besoin d'aide ?

- Ouvrez une **Issue** pour signaler un bug ou suggérer une fonctionnalité
- Consultez la [documentation Vite](https://vite.dev/)
- Consultez la [documentation Vue 3](https://vuejs.org/)
- Consultez la [documentation Vuetify](https://vuetifyjs.com/)

## Licence

Ce projet est sous licence [MIT](LICENSE.md).

## Contacts et liens

- 🌐 Site web : [alpine-devs-summit-romandie.ch](https://alpine-devs-summit-romandie.ch)
- 📧 Email : info@alpine-devs-summit-romandie.ch
- 🐙 GitHub : [alpine-devs-summit-romandie](https://github.com/Alpine-Devs-Summit-Romandie)

---

**Fait avec ❤️ pour les développeur·e·s des Romand·e·s**

