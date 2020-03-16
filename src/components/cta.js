import React from "react"

import Button from "../components/button"
import SectionHeader from "./section-header"

const CallToAction = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Help to enrich this list"
      description="If you know an app that can help with Remote Work and is not on this list, open a pull-request"
    />
    <Button href="https://github.com/brunojppb/pandemic-apps">
      Contribute on Github
    </Button>
  </div>
)

export default CallToAction
