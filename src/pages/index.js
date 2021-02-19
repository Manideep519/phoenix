import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/Seo/seo"
import Home from "../components/Home/home"
import About from "../components/About/about"

const IndexPage = () => (
  <Layout>
    <SEO title="Startseite" description="this is description of index page" />
    <Home></Home>
    <About></About>
  </Layout>
)

export default IndexPage
