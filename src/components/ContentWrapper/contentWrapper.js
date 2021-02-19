import React from "react"
import { Container } from "react-bootstrap"

import "./contentWrapper.scss"

const ContentWrapper = props => {
  return (
    <div className="content-wrapper" id={props.id}>
      <Container>
        <div className="row">{props.children}</div>
      </Container>
    </div>
  )
}

export default ContentWrapper
