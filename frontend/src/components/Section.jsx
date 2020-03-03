import React, { Component } from "react"

export default class Section extends Component {
  render() {
    let { dark, id, name, custom_class, before_name } = this.props

    let star = dark ? "star-light" : "star-dark"
    let bg = dark ? "bg-primary" : "bg-white"
    let text = dark ? "text-white" : "text-secondary"

    return (
      <section className={`${bg} ${text} mb-0 ${custom_class}`} id={id}>
        <div className="container">
          {before_name}
          <h1 className={`${text} text-center text-uppercase mb-0`}>{name}</h1>
          <hr className={`${star} mb-5`} />
          {this.props.children}
        </div>
      </section>
    )
  }
}
