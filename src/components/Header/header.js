import React from "react"
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./header.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      navLogo: file(relativePath: { eq: "phoenix_lion_nav_logo.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <header>
      <Navbar
        bg="dark"
        expand="lg"
        variant="dark navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
      >
        <Container className="container-wd">
          <Link to="/">
            <Img
              fixed={data.navLogo.childImageSharp.fixed}
              alt="Phoenix Lion logo"
            />
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" as="ul">
              <Nav.Item as="li">
                <Link to="/" className="nav-link">
                  Startseite
                </Link>
              </Nav.Item>
              <NavDropdown title="Über uns" id="basic-nav-dropdown">
                <Link to="/origin" className="dropdown-item">
                  Entstehung
                </Link>
                <Link to="/founder" className="dropdown-item">
                  Gründers
                </Link>
                <Link to="/success" className="dropdown-item">
                  Erfolg
                </Link>
                <Link to="/concept" className="dropdown-item">
                  Konzept
                </Link>
              </NavDropdown>
              <Nav.Item as="li">
                <Link to="/packet" className="nav-link">
                  Pakete
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link to="/career" className="nav-link">
                  Karriere
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link to="/contact" className="nav-link">
                  Kontakt
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
