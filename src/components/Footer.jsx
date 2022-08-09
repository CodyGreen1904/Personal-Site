import React from "react"
import { Row, Col } from "react-bootstrap"
import "../styles/Footer.css"
import Credits from "./Credits"
import github from "../img/github.png"
import linked from "../img/linkedin.png"

const Footer = () => (
  <div className="footer">
    <Row>
      <Col className="icons" sm={8}>
        <a
          href="https://github.com/CodyGreen1904"
          title="Cody Green Github"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="github icon" className="footerIcon" />
        </a>
        <a
          href="https://www.linkedin.com/in/cody-green-0b4269206/"
          title="Cody Green Linked In"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linked} alt="linked in icon" className="footerIcon" />
        </a>
      </Col>
      <Col id="credCol">
        <Credits />
      </Col>
    </Row>
  </div>
)

export default Footer
