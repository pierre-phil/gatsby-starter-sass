# Utilisation

Clôner ce repo :

`git clone git@github.com:pierre-phil/gatsby-starter-sass.git`

Installer les dépendances :

`npm install`

Changer l'adresse url remote :

`git remote set-url origin $url`

Mettre à jour les dépendances (voir section suivante)

# Mise à jour des packages

Installer le package [`npm-check-updates`](https://www.npmjs.com/package/npm-check-updates) :

`npm install -g npm-check-updates`

Vérifier si des mises à jour sont disponibles :

`ncu`

Installer les mises à jour :

```
ncu -u
npm install
```

# TODO

Certaines modifications sont à apporter afin de configurer ce starter (SEO, gatsby-config ...). Celles-ci sont marquées au sein même du code source par un commentaire `// TODO`.

Vous pouvez localiser ces modifications en recherchant le mot-clé `TODO` grâce à une recherche globale (`ctrl maj F`) ou en utilisant une extension comme `Todo Tree` qui les répertorie automatiquement pour vous.

# Installer des polices au choix

Trouvez-la sur [Google Fonts](https://fonts.google.com/), installez-la puis importez-la dans le fichier d'entrée de l'app (ici `layout.js`) :

`npm install @fontsource/open-sans`

```
-- layout.js

import "@fontsource/open-sans" // Defaults to weight 400 with normal variant.
import "@fontsource/open-sans/500.css" // Weight 500.
import "@fontsource/open-sans/900-italic.css" // Italic variant.
```

Les fonts peuvent aussi être importées dans un fichier SCSS :

```
-- variable.scss

@import "~@fontsource/open-sans/index.css";
@import "~@fontsource/open-sans/300-italic.css";
```

[Fontsource docs](https://github.com/fontsource/fontsource#installation) | [Fontsource packages list](https://github.com/fontsource/fontsource/tree/master/packages)
