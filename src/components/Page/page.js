import React, { useEffect, useState } from "react"

function Page(props) {
  useEffect(() => window.scrollTo(0, 0), [])

  return props.children
}

export default Page
