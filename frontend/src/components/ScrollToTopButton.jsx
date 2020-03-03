import React, {Component} from "react"

export default class ScrollToTopButton extends Component {
  render() {
    return (
      <div className="scroll-to-top d-lg-none position-fixed">
        <a
          className="js-scroll-trigger d-block text-center text-white rounded"
          href="#page-top"
        >
          <i>TODO icon to top</i>
        </a>
      </div>
    )
  }
}
