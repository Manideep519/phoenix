import React from "react"

import Layout from "../components/Layout/layout"
import Packet from "../components/Packet/Packet"
import SEO from "../components/Seo/seo"

const PacketPage = () => (
  <Layout>
    <SEO title="Pakete" description="this is description of packet page" />
    <Packet></Packet>
  </Layout>
)

export default PacketPage
