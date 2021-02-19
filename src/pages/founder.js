import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/Seo/seo"
import Founder from "../components/Founder/founder"

const FounderPage = () => (
  <Layout>
    <SEO title="Gründers" description="this is description of founder page" />
    <Founder></Founder>
  </Layout>
)

export default FounderPage
