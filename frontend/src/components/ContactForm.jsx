import React, { Component } from "react"

// TODO rewrite this

export default class ContactForm extends Component {
  render() {
    return (
      <form
        name="sentMessage"
        id="contactForm"
        noValidate="novalidate"
        action={`https://formspree.io/f/${this.props.formId}`}
        method="POST"
      >
        <div className="control-group">
          <div className="form-group floating-label-form-group controls mb-0 pb-2">
            <label htmlFor="name">Имя</label>
            <input
              className="form-control"
              id="name"
              name="name"
              type="text"
              placeholder="Имя"
              required="required"
              data-validation-required-message="Пожалуйста введите ваше имя."
            />
            <p className="help-block text-danger" />
          </div>
        </div>
        <div className="control-group">
          <div className="form-group floating-label-form-group controls mb-0 pb-2">
            <label htmlFor="email">Email адрес</label>
            <input
              className="form-control"
              id="email"
              name="email"
              type="email"
              placeholder="Email адрес"
              required="required"
              data-validation-required-message="Пожалуйста введите Ваш email адрес."
            />
            <p className="help-block text-danger" />
          </div>
        </div>
        <div className="control-group">
          <div className="form-group floating-label-form-group controls mb-0 pb-2">
            <label htmlFor="phone">Контактный номер</label>
            <input
              className="form-control"
              id="phone"
              name="phone"
              type="tel"
              placeholder="Контактный номер"
              required="required"
              data-validation-required-message="Пожалуйста введите контактный номер."
            />
            <p className="help-block text-danger" />
          </div>
        </div>
        <div className="control-group">
          <div className="form-group floating-label-form-group controls mb-0 pb-2">
            <label htmlFor="message">Сообщение</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="5"
              placeholder="Сообщение"
              required="required"
              data-validation-required-message="Пожалуйста введите сообщение."
            />
            <p className="help-block text-danger" />
          </div>
        </div>
        <br />
        <div id="success" />
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-primary btn-xl btn-block"
            id="sendMessageButton"
          >
            Отправить
          </button>
        </div>
      </form>
    )
  }
}
