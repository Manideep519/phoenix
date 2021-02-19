import React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"

import "./home.scss"
import intro from "../../images/intro_stage.png"
import logoGif from "../../images/PL_logo_gif.gif"
import introTitle from "../../images/phoenix_lion_intro_3d_logo_title.png"

const Home = () => {
  return (
    <div className="home__bg">
      <Container className="home__flex-wrapper">
        <img className="home__intro-stage" src={intro} alt="Intro stage" />
        <img className="home__logo-gif" src={logoGif} alt="Phoenix Lion logo" />
        <img
          className="home__title"
          src={introTitle}
          alt="Phoenix Lion a new kind of cooperation"
        />
        <Link to="#about" className="intro-link">
          eingeben
        </Link>
      </Container>
    </div>
  )
}

export default Home
