import React from "react"

import { COLORS } from "../styles/constants"

const SectionHeader = ({ title, description }) => (
  <>
    <h2 style={{ color: "#666" }}>{title}</h2>
    <p style={{ color: "#666" }}>{description}</p>
  </>
)

export default SectionHeader
