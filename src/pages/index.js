import React from "react"

import Layout from "../components/Layout/Layout"
import Titles from "../components/Titles/Titles"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <>
      <SEO title="Accueil" />
      <Layout>
        <Titles></Titles>
      </Layout>
    </>
  )
}
