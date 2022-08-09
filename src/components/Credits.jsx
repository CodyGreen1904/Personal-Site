import React, { Component } from "react"
import { Collapse } from "react-bootstrap"
import "../styles/Credits.css"

class Credits extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collapseMenu: true,
    }

    this.showHide = this.showHide.bind(this)
  }

  showHide(e) {
    e.preventDefault()

    this.setState({
      collapseMenu: !this.state.collapseMenu,
    })
  }

  render() {
    return (
      <div className="container" id="collapseContainer">
        <p className="creditsP">
          <button
            onClick={this.showHide}
            className="btn btn-primary"
            type="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Credits
          </button>
        </p>
        <Collapse in={!this.state.collapseMenu}>
          <div className="card card-body">
            <a
              href="https://www.flaticon.com/free-icons/github"
              title="github icons"
            >
              Github icons created by riajulislam - Flaticon
            </a>
            <a
              href="https://www.flaticon.com/free-icons/linkedin"
              title="linkedin icons"
            >
              Linkedin icons created by riajulislam - Flaticon
            </a>
            <a
              href="https://www.flaticon.com/free-icons/correct"
              title="correct icons"
            >
              Correct icons created by kliwir art - Flaticon
            </a>
          </div>
        </Collapse>
      </div>
    )
  }
}

export default Credits
