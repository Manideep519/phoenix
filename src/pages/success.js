import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/Seo/seo"
import Success from "../components/Success/success"

const SuccessPage = () => (
  <Layout>
    <SEO title="Erfolg" description="this is description of Success page" />
    <Success></Success>
  </Layout>
)

export default SuccessPage
