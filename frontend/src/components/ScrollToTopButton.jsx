import React, { Component } from "react"
import "../utils/fontawesome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default class ScrollToTopButton extends Component {
  render() {
    return (
      <div className="scroll-to-top d-lg-none position-fixed">
        <a
          className="js-scroll-trigger d-block text-center text-white rounded"
          href="#page-top"
        >
          <FontAwesomeIcon icon={["fa", "chevron-up"]} />
        </a>
      </div>
    )
  }
}
