import React from "react"

import Layout from "./layout"
import SEO from "./seo"
import Hero from "./hero"
import Content from "./content"
import CallToAction from "./cta"
import "../styles/main.css"

const IndexPage = ({ pageContext: { html } }) => {
  return (
    <Layout>
      <SEO />
      <Hero />
      <Content>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Content>
      <CallToAction />
    </Layout>
  )
}

export default IndexPage
