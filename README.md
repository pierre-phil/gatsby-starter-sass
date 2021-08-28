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

⚠️ N'oubliez pas de modifier `package.json` également (les commentaires TODO ne peuvent pas être insérés dans ce fichier).

# Polices avec `fontsource`

`Fontsource` fournit des polices `Google Fonts` comme packages `npm`. Choisissez la police sur [Google Fonts](https://fonts.google.com/), vérifiez qu'elle est [bien présente sur fontsource](https://github.com/fontsource/fontsource/tree/master/packages) puis installez-la :

`npm install @fontsource/open-sans`

Pour l'utiliser, importer la font dans `gatsby-brower.js`. Elle peut ensuite être utilisée dans tout fichier `CSS`, `SCSS`, etc.

```
-- gatsby-browser.js

import "@fontsource/open-sans" // Defaults to weight 400 with all styles included.
```

```
-- layout.scss

body {
  font-family: "Open Sans";
}
```

Pour désinstaller la font utilisée dans ce repo :

`npm uninstall @fontsource/open-sans`

[Using web fonts - Gatsby](https://www.gatsbyjs.com/docs/how-to/styling/using-web-fonts/#self-host-google-fonts-with-fontsource) |
[Fontsource docs](https://github.com/fontsource/fontsource#installation) | [Fontsource packages list](https://github.com/fontsource/fontsource/tree/master/packages)

# Indexation des pages

Ne pas oublier, pour chaque page du site, les props `index` et `follow` à passer au composant SEO.

## Ex. pour une page indexée

`--- Index.js`

```
<Seo
    title="Accueil"
    description="Ceci semble être une page d'accueil."
    index
    follow
/>
```

## Ex. pour une page non indexée

`--- MentionsLegales.js`

```
<Seo
    title="Mentions légales"
    description="Page contenant les mentions légales."
    index={false}
    follow={false}
/>
```

Attention, toute page non indexée doit également être retirée du `sitemap` (en utilisant le plugin `gatsby-plugin-sitemap`) :

`--- gatsby-config.js`

```
module.exports = {
    ...
        plugins: [
            ...
            {
                resolve: `gatsby-plugin-sitemap`,
                options: { excludes: [`/mentions-legales/`] },
            },
            ...
         ]
    ...
}
```
Enfin, tout lien pointant vers une page non-indexée devrait comporter l'attribut `rel="no-follow"` :

```
<Link to="/mentions-legales/" rel="no-follow">
    Mentions légales
</Link>
```
