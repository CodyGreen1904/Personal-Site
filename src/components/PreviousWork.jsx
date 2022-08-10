import React from "react"
import Navigation from "./Navigation"
import Footer from "./Footer"
import { Container } from "react-bootstrap"
import resume from "../img/CodyGreenResume.png"
import "../styles/PreviousWork.css"

function PreviousWork() {
  return (
    <div id="previousWrapper">
      <Navigation />
      <div className="container" id="prevContainer">
        <Container fluid="sm" className="container2">
          <embed src={resume} id="resume" />
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default PreviousWork
