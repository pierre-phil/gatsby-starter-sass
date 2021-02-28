import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default function SEO({ children, location, description, title, image }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
          description
        }
      }
    }
  `)

  return (
    <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
      <html lang="fr" />
      <title>{title}</title>
      {/* favicons */}
      {/*  
      TODO :
      bigger png icon goes here :
      <link rel="icon" type="image" href="/favicon.png" />
      */}
      {/* TODO : SETU UP A CORRECT ICON (96 * 96 ?) */}
      <link rel="icon" type="image" href="/favicon.ico" />
      {/* meta */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="description" content={site.siteMetadata.description} />
      {/* open graph */}
      {location && <meta property="og:url" content={location.href} />}
      {/* TODO : SETUP A CORRECT PNG (size should be 1200*627 < 5mb) */}
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:image" content={image || "/logo.svg"} />
      <meta
        property="og:site_name"
        content={site.siteMetadata.title}
        key="ogsitename"
      />
      <meta
        property="og:description"
        content={description}
        key="ogdescription"
      />
      {children}
    </Helmet>
  )
}

/*
Check comment ajouter des favicons de différentes tailles
pour les raccourcis de navigateur, l'ajout à l'écran d'accueil, etc.
+ besoin d'un manifest ?
*/

/* CHECK VIDEO 33 OF WES BOS */
