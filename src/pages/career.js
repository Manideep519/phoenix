import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/Seo/seo"
import Career from "../components/Career/concept"

const CareerPage = () => (
  <Layout>
    <SEO title="Karriere" description="this is description of career page" />
    <Career></Career>
  </Layout>
)

export default CareerPage
