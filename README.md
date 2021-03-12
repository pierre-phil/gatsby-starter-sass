Ce starter inclut :

- création site Gatsby avec starter Hello World de base ;
- Gatsby plugin SASS ;
- Gatsby plugin image ;
- création components SEO, Layout, Titles, fichier $variables SCSS ....

Pour un démarrage rapide :

- clôner ce repo ;
- `npm install` ;
- `npm outdated`, si des paquets sont outdated, faire `npm install $nomPaquet@latest --legacy-peer-deps` (seulement si vous utilisez `npm 7`, sinon juste `npm install $nomPaquet@latest`) ;
- puis changer l'adresse remote :

```
git remote set-url origin https://github.com/pierre-phil/$URLDUNOUVEAUPROJET.git
git remote -v
git push
```

Étapes exécutées dans ce repo :

- Créer un nouveau site Gatsby en utilisant le starter Hello World :

  `gatsby new $NOMDUSITE https://github.com/gatsbyjs/gatsby-starter-hello-world`

  [doc](https://www.gatsbyjs.com/docs/tutorial/part-zero/)

- Installer SASS :

  `npm install sass gatsby-plugin-sass`

  [doc](https://www.gatsbyjs.com/docs/how-to/styling/sass/)

- Installer le plugin Gatsby image :

  `npm install gatsby-plugin-image gatsby-plugin-sharp gatsby-source-filesystem gatsby-transformer-sharp`

  [doc](https://www.gatsbyjs.com/docs/how-to/images-and-media/using-gatsby-plugin-image/)

- À ce stade votre `gatsby-config.js` devrait ressembler à :

```
 plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
```

- (non fait) Installer les polices au choix :

  `npm install @fontsource/$NOMDELAFONT`

  [doc](https://github.com/fontsource/fontsource/tree/master/packages)

