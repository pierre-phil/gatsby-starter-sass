import React from "react"

import Layout from "../components/Layout/Layout"
import Titles from "../components/Titles/Titles"
import Seo from "../components/Seo"

export default function Home() {
  return (
    <>
      <Seo title="Accueil" />
      <Layout>
        <Titles></Titles>
      </Layout>
    </>
  )
}
