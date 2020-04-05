import React, { Component } from "react"
import "../utils/fontawesome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CryptoJS from "crypto-js"
import { OverlayTrigger, Tooltip } from "react-bootstrap"
import config from "../../config"

export default class ShortLinkButton extends Component {
  copyToClipboard = (e, text) => {
    e.preventDefault()
    const textField = document.createElement("textarea")
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand("copy")
    textField.remove()
  }

  render() {
    const uid = `${CryptoJS.MD5(this.props.uid)}`.slice(0, 6)

    return (
      <>
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={
            <Tooltip id="button-tooltip">
              ЛКМ - скопировать короткую ссылку. ПКМ - скопировать ссылку на IV.
            </Tooltip>
          }
        >
          <FontAwesomeIcon
            icon={["fas", "share-alt"]}
            onClick={e => this.copyToClipboard(e, `${config.url}/${uid}`)}
            onContextMenu={e =>
              this.copyToClipboard(e, `${config.url}/${uid}/iv`)
            }
          />
        </OverlayTrigger>
      </>
    )
  }
}
