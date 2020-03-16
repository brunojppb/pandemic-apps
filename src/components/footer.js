import React from "react"
import PropTypes from "prop-types"

import { COLORS } from "../styles/constants"

const Footer = ({ siteTitle }) => (
  <footer
    style={{
      padding: "1rem",
      backgroundColor: COLORS.lightGray,
    }}
  >
    <div
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "space-between",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 240px))",
        padding: "1rem 2rem",
        fontSize: ".85rem",
      }}
    >
      <div style={{ color: COLORS.mediumGray, fontWeight: 700 }}>
        <a
          style={{ textDecoration: "none", color: COLORS.gray }}
          href="https://twitter.com/bpaulino0"
        >
          Created By Bruno Paulino
        </a>
      </div>
      <div style={{ color: COLORS.gray }}>
        © {new Date().getFullYear()}
        {` `}
        {siteTitle}
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
