Ce starter inclut :

- création site Gatsby avec starter Hello World de base ;
- installation SASS ;
- création components SEO, Layout ;
- installation de quelques polices depuis [fontsource](https://github.com/fontsource/fontsource/tree/master/packages) (`npm uninstall @fontsource/$NOMPOLICE` pour les désinstaller) ;
- quelques variables SASS et un peu de contenu.

Pour un démarrage rapide, clôner ce repo, `npm install` **puis changer l'adresse remote** :

```
git remote set-url origin https://github.com/pierre-phil/$URLDUNOUVEAUPROJET.git
git remote -v
git push
```

Le starter est utilisé pour le nouveau projet, on peut commencer à bosser.

Ou bien reproduire step by step dans un nouveau repo :

### config

- Créer un nouveau site Gatsby en utilisant le starter Hello World :

  `gatsby new $NOMDUSITE https://github.com/gatsbyjs/gatsby-starter-hello-world`

  [doc](https://www.gatsbyjs.com/docs/tutorial/part-zero/)

- Installer SASS :

  `npm install sass gatsby-plugin-sass`

  [doc](https://www.gatsbyjs.com/docs/how-to/styling/sass/)

- Installer les polices au choix :

  `npm install @fontsource/$NOMDELAFONT`

  [doc](https://github.com/fontsource/fontsource/tree/master/packages)

Puis configurer `gatsby-config` comme dans ce repo, les fonts, les variables etc.
