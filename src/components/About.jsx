import React from "react"
import Navigation from "./Navigation"
import Footer from "./Footer"
import title from "../img/Headshot.jpg"
import "../styles/About.css"
import { Row, Col, Container } from "react-bootstrap"

function About() {
  return (
    <div id="aboutWrapper">
      <Navigation />
      <div className="container" id="aboutContainer">
        <Container fluid="sm" className="container2">
          <img src={title} alt="Cody" width="300" height="300" id="codyPic" />
          <h1 className="mainHeader">CODY MICHAEL GREEN</h1>
          <h2 className="subHeader">SOFTWARE ENGINEER</h2>
          <Row>
            <Col className="aboutColumn" sm={5}>
              <h2 className="subHeader">PERSONALLY</h2>
              <p className="codyParagraph">
                Hello, my name is Cody Green and I'm a graduate of Portland
                State University. I enjoy spending time with my family, getting
                outside with my friends, playing music, and playing video games
                in my spare time.
              </p>
            </Col>
            <Col sm={2}></Col>
            <Col className="aboutColumn" sm={5}>
              <h2 className="subHeader">PROFFESIONALLY</h2>
              <p className="codyParagraph">
                I am currently a Development Analyst with Multnomah county doing
                application development. I work mostly with C# and the .NET
                framework.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default About
