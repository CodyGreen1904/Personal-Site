import React, { useRef } from "react"
import Navigation from "./Navigation"
import Footer from "./Footer"
import { Row, Col, Container } from "react-bootstrap"
import "../styles/Contact.css"

import emailjs from "@emailjs/browser"

function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_jkaxkhn",
        "template_pnf8nbt",
        form.current,
        "IuBV6VFKnLaYZe91K"
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div id="aboutWrapper">
      <Navigation />
      <div className="container" id="projContainer">
        <Container fluid="sm" className="container2">
          <form className="form" ref={form} onSubmit={sendEmail}>
            <h1 className="contactHeader">Contact Me</h1>
            <h5 className="contactSubHeader">
              Once you hit submit I should recieve the email immediately, and I
              will respond as soon as I am able
            </h5>
            <Row className="form-group">
              <Col sm={3}>
                <label className="control-label" htmlFor="from_name">
                  Name
                </label>
              </Col>
              <Col sm={9}>
                <input
                  placeholder="Your Name Here"
                  type="text"
                  id="from_name"
                  name="from_name"
                  className="formInput form-control"
                />
              </Col>
            </Row>
            <Row>
              <Col sm={3}>
                <label className="control-label" htmlFor="reply_to">
                  Email
                </label>
              </Col>
              <Col sm={9}>
                <input
                  placeholder="you@email.com"
                  type="email"
                  id="reply_to"
                  name="reply_to"
                  className="formInput form-control"
                />
              </Col>
            </Row>
            <Row>
              <Col sm={3}>
                <label className="control-label" htmlFor="message">
                  Message
                </label>
              </Col>
              <Col sm={9}>
                <textarea
                  placeholder="What's up?"
                  id="message"
                  name="message"
                  className="formInput from-control"
                />
              </Col>
            </Row>
            <Row id="submitRow">
              <input type="submit" value="Submit" id="submitBtn" />
            </Row>
          </form>
        </Container>
      </div>
      <Footer />
    </div>
  )
}
export default Contact

//Used this site to help with Emailjs: https://www.emailjs.com/docs/examples/reactjs/
