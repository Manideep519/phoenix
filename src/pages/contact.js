import React from "react"
import Contact from "../components/Contact/contact"

import Layout from "../components/Layout/layout"
import SEO from "../components/Seo/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Kontakt" description="this is description of contact page" />
    <Contact></Contact>
  </Layout>
)

export default ContactPage
