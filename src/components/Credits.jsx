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
            <a target="_blank" href="https://icons8.com/icon/54601/cg">
              CG
            </a>{" "}
            <p className="linkSentence">
              icon by{" "}
              <a target="_blank" href="https://icons8.com">
                Icons8
              </a>
            </p>
            <p className="linkSentence">
              Photo by{" "}
              <a href="https://unsplash.com/@filipz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Filip Zrnzević
              </a>{" "}
              on{" "}
              <a href="https://unsplash.com/s/photos/forest?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Unsplash
              </a>
            </p>
          </div>
        </Collapse>
      </div>
    )
  }
}

export default Credits

//Used this site for reference:https://codesandbox.io/s/l3pxzo35v7
