Ce starter inclut :

- création site Gatsby avec starter Hello World de base ;
- Gatsby plugin SASS ;
- Gatsby plugin image ;
- création components SEO, Layout, Titles, fichier variables SCSS ....

Pour un démarrage rapide :

- clôner ce repo ;
- `npm install`
- `npm outdated`, si des paquets sont oudated, faire `npm install $nomPaquet@latest --legacy-peer-deps`
- puis changer l'adresse remote :

```
git remote set-url origin https://github.com/pierre-phil/$URLDUNOUVEAUPROJET.git
git remote -v
git push
```

Ou bien reproduire step by step dans un nouveau repo :

- Créer un nouveau site Gatsby en utilisant le starter Hello World :

  `gatsby new $NOMDUSITE https://github.com/gatsbyjs/gatsby-starter-hello-world`

  [doc](https://www.gatsbyjs.com/docs/tutorial/part-zero/)

- Installer SASS :

  `npm install sass gatsby-plugin-sass`

  [doc](https://www.gatsbyjs.com/docs/how-to/styling/sass/)

- Installer le plugin Gatsby image :

  `npm install gatsby-plugin-image gatsby-plugin-sharp gatsby-source-filesystem gatsby-transformer-sharp`

  [doc](https://www.gatsbyjs.com/docs/how-to/images-and-media/using-gatsby-plugin-image/)

- Installer les polices au choix :

  `npm install @fontsource/$NOMDELAFONT`

  [doc](https://github.com/fontsource/fontsource/tree/master/packages)

Puis configurer `gatsby-config` comme dans ce repo, les fonts, les variables etc.
