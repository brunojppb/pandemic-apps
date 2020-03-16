import React from "react"

const Content = ({ children }) => (
  <div
    style={{
      padding: "1rem",
      textAlign: "center",
      maxWidth: 600,
      margin: "auto auto",
    }}
  >
    {children}
  </div>
)

export default Content
