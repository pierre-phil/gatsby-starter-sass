import React from "react"

import "@fontsource/oswald" // Defaults to weight 400.
import "@fontsource/roboto" // Defaults to weight 400.

import "./layout.scss"

export default function Layout({ children }) {
  return <div>{children}</div>
}
