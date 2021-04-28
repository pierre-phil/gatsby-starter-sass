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

# Installer des polices au choix :

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
