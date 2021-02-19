import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/Seo/seo"
import Origin from "../components/Origin/origin"

const OriginPage = () => (
  <Layout>
    <SEO title="Entstehung" description="this is description of origin page" />
    <Origin></Origin>
  </Layout>
)

export default OriginPage
