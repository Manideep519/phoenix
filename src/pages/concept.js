import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/Seo/seo"
import Concept from "../components/Concept/concept"

const ConceptPage = () => (
  <Layout>
    <SEO title="Konzept" description="this is description of concept page" />
    <Concept></Concept>
  </Layout>
)

export default ConceptPage
