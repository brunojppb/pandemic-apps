import React from "react"

import { COLORS, BORDER_RADIUS, GRADIENT } from "../styles/constants"

const Button = ({ children, ...props }) => (
  <a
    style={{
      padding: ".5rem 2.5rem",
      color: COLORS.lightWhite,
      fontWeight: 700,
      background: GRADIENT,
      borderRadius: BORDER_RADIUS,
      borderWidth: 0,
      cursor: "pointer",
      textDecoration: "none",
    }}
    className="btn"
    {...props}
  >
    {children}
  </a>
)

export default Button
