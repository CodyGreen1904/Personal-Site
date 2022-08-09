import React from "react"
import Navigation from "./Navigation"
import Footer from "./Footer"
import { Row, Col, Container } from "react-bootstrap"
import "../styles/Projects.css"

function Projects() {
  return (
    <div id="aboutWrapper">
      <Navigation />
      <div className="container" id="projContainer">
        <Container fluid="sm" className="container2">
          <h1 className="mainHeader">PROJECTS</h1>
          <Row>
            <Col sm={5} className="projCol">
              <h2 className="subHeader">Villager's Handbook</h2>
              <ul className="projectList">
                <li className="projectListItem">
                  Front End project that gives information for the game Animal
                  Crossing New Horizons
                </li>
                <li className="projectListItem">
                  <a
                    className="projectLink"
                    href="https://villagers-handbook.web.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Deployed Site
                  </a>
                </li>
                <li className="projectListItem">
                  <a
                    className="projectLink"
                    href="https://github.com/CodyGreen1904/villagers-handbook"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Repo
                  </a>
                </li>
              </ul>
            </Col>
            <Col sm={2} />
            <Col sm={5} className="projCol">
              <h2 className="subHeader" id="peerlifeHeader">
                Peerlife
              </h2>
              <ul className="projectList">
                <li className="projectListItem">
                  Capstone project for the Mental Health and Addiction
                  Association of Oregon
                </li>
                <li className="projectListItem">
                  <a
                    className="projectLink"
                    href="https://cs-psu-peerlife.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Deployed Site
                  </a>
                </li>
                <li className="projectListItem">
                  <a
                    className="projectLink"
                    href="https://github.com/Salem24-pdx/CS-PSU-Peerlife"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Repo
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default Projects
