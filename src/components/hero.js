import React from "react"
import PropTypes from "prop-types"

import headerImage from "../images/header.png"
import virusImage from "../images/virus.svg"

const Header = ({ siteTitle }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "4rem 1rem",
    }}
  >
    <div
      style={{
        backgroundImage: `url(${headerImage})`,
        position: "absolute",
        top: 0,
        zIndex: -5,
        height: "100vh",
        width: "100vw",
        opacity: 0.5,
      }}
    />
    <h1 style={{ textAlign: "center" }}>
      <a href="/" style={{ color: "#222" }}>
        Pandemic Apps
      </a>
    </h1>
    <div>
      <img src={virusImage} alt="virus" className="virus-img" />
    </div>
    <p style={{ textAlign: "center", maxWidth: 750 }}>
      A collection of free apps and resources to help you with{" "}
      <strong>Remote Work</strong>
      <br /> during the <strong>Coronavirus Pandemic Crisis</strong>
    </p>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
